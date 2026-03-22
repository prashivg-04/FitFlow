import e from 'express';
import prisma from '../prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import AppError from '../utils/AppError.js';

const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';

    for(let i = 0; i < 6; i++) {
        const randomIdx = crypto.randomInt(0, chars.length);
        code += chars[randomIdx];
    }

    return code;
}

export const signupService = async (data) => {
    const { name, email, password, role, roleData } = data;
    
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if(existingUser) {
        throw new AppError('Email already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.$transaction(async (tx) => {
        const newUser = await tx.user.create({
            data: {
                name, 
                email, 
                password: hashedPassword,
                role,
            },
        });

        switch(role) {
            case 'OWNER': 
                let gymCode;
                let existingOwner;

                do {    
                    gymCode = generateCode();
                    existingOwner = await tx.owner.findUnique({
                        where: {
                            gymCode: gymCode,
                        },
                    });
                } while(existingOwner);

                await tx.owner.create({
                    data: {
                        userId: newUser.id,
                        gymName: roleData.gymName,
                        address: roleData.address,
                        city: roleData.city,
                        phone: roleData.phone,
                        gymCode: gymCode,
                        openingTime: roleData.openingTime,
                        closingTime: roleData.closingTime,
                    },
                })
                break;
            
            case 'TRAINER':
                await tx.trainer.create({
                    data: {
                        specialization: roleData.specialization,
                        experienceYears: roleData.experienceYears,
                        preferredDays: roleData.preferredDays,
                        startTime: roleData.startTime,
                        endTime: roleData.endTime,
                        bio: roleData.bio,
                        gymStatus: "NONE",

                        user: {
                            connect: { id: newUser.id },
                        },
                    },
                })
                break;

            case 'MEMBER':
                await tx.member.create({
                    data: {
                        userId: newUser.id,
                        dateOfBirth: new Date(roleData.dateOfBirth),
                        gender: roleData.gender,
                        heightCm: roleData.heightCm,
                        weightKg: roleData.weightKg,
                        goal: roleData.goal,
                        experienceLevel: roleData.experienceLevel,
                        gymStatus: "NONE",
                    },
                })
                break;

            default:
                throw new AppError('Invalid role specified', 400);
        }

        const fullUser = await tx.user.findUnique({
            where: {
                id: newUser.id
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                trainer: {
                    select: {
                        gymStatus: true,
                        ownerId: true
                    }
                },
                member: {
                    select: {
                        gymStatus: true,
                        ownerId: true
                    }
                }
            }
        })

        let finalUser = {
            id: fullUser.id,
            name: fullUser.name,
            email: fullUser.email,
            role: fullUser.role
        }

        if(fullUser.trainer) {
            finalUser = { ...finalUser, ...fullUser.trainer };
        }

        if(fullUser.member) {
            finalUser = { ...finalUser, ...fullUser.member };
        }

        return finalUser;
    });

    return result;
}

export const loginService = async (data) => {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
        where: { email },
    });
    if(!user) {
        throw new AppError('Invalid credentials', 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        throw new AppError('Invalid credentials', 401);
    }

    const token = jwt.sign(
        {
            userId: user.id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { 
            expiresIn: '7d'
        }
    );

    let resData = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    if (user.role === 'TRAINER') {
        const trainer = await prisma.trainer.findUnique({
            where: { userId: user.id },
            select: {
                gymStatus: true,
                ownerId: true,
            },
        });

        resData = {
            ...resData,
            gymStatus: trainer?.gymStatus || null,
            ownerId: trainer?.ownerId || null,
        };
    }

    if (user.role === 'MEMBER') {
        const member = await prisma.member.findUnique({
            where: { userId: user.id },
            select: {
                gymStatus: true,
                ownerId: true,
            },
        });

        resData = {
            ...resData,
            gymStatus: member?.gymStatus || null,
            ownerId: member?.ownerId || null,
        };
    }

    return {
        token,
        user: resData,
    };
}

export const getMeService = async ({ userId, role }) => {

    let resData = {
        userId,
        role,
    };

    if (role === 'TRAINER') {
        const trainer = await prisma.trainer.findUnique({
            where: { userId },
            select: {
                gymStatus: true,
                ownerId: true,
            },
        });

        resData = {
            ...resData,
            gymStatus: trainer?.gymStatus || null,
            ownerId: trainer?.ownerId || null,
        };
    }

    if (role === 'MEMBER') {
        const member = await prisma.member.findUnique({
            where: { userId },
            select: {
                gymStatus: true,
                ownerId: true,
            },
        });

        resData = {
            ...resData,
            gymStatus: member?.gymStatus || null,
            ownerId: member?.ownerId || null,
        };
    }

    return resData;
};