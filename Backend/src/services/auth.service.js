import e from 'express';
import prisma from '../prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signupService = async (data) => {
    const { name, email, password, role, roleData } = data;
    
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if(existingUser) {
        const error = new Error('User already exists with this email');
        error.code = 'EMAIL_EXISTS';
        throw error;
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
                await tx.owner.create({
                    data: {
                        userId: newUser.id,
                        gymName: roleData.gymName,
                        address: roleData.address,
                        city: roleData.city,
                        phone: roleData.phone,
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
                    },
                })
                break;

            default:
                const error = new Error('Invalid role specified');
                error.code = 'INVALID_ROLE';
                throw error;
        }

        return {
            userId: newUser.id,
            role: newUser.role,
        };
    });

    return result;
}

export const loginService = async (data) => {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
        where: { email },
    });
    if(!user) {
        const error = new Error('Invalid credentials');
        error.code = 'INVALID_CREDENTIALS';
        throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        const error = new Error('Invalid credentials');
        error.code = 'INVALID_CREDENTIALS';
        throw error;
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

    return {
        token, 
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
}