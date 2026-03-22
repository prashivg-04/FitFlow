import { use } from "react";
import prisma from "../prisma.js";
import jwt from 'jsonwebtoken';
import { signupService, loginService } from "../services/auth.service.js";

export const signup = async (req, res, next) => {
    const user = await signupService(req.body);

    const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false
    })

    return res.status(201).json({
        success: true,
        data: user,
        message: 'User signed up successfully',
    });
}

export const login = async (req, res, next) => {
    const { token, user } = await loginService(req.body);

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    let resData = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    }

    if(user.role === 'TRAINER') {
        const trainer = await prisma.trainer.findUnique({
            where: {
                userId: user.id
            },
            select: {
                gymStatus: true,
                ownerId: true,
            }
        });

        resData = {
            ...resData,
            gymStatus: trainer.gymStatus,
            ownerId: trainer.ownerId,
        }
    }

    if(user.role === 'MEMBER') {
        const member = await prisma.member.findUnique({
            where: { 
                userId: user.id 
            },
            select: {
                gymStatus: true,
                ownerId: true,
            }
        });

        resData = {
            ...resData,
            gymStatus: member.gymStatus,
            ownerId: member.ownerId,
        }
    }

    return res.status(200).json({
        success: true,
        data: resData,
        message: 'Login successfull',
    })
}

export const logout = (req, res, next) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
}

export const me = async (req, res, next) => {
    try {
        const { userId, role } = req.user;

        let resData = {
            userId,
            role,
        }

        if(role === 'TRAINER') {
            const trainer = await prisma.trainer.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    gymStatus: true,
                    ownerId: true,
                }
            });

            resData = {
                ...resData,
                gymStatus: trainer.gymStatus,
                ownerId: trainer.ownerId,
            }
        }

        if(role === 'MEMBER') {
            const member = await prisma.member.findUnique({
                where: { 
                    userId: userId 
                },
                select: {
                    gymStatus: true,
                    ownerId: true,
                }
            });

            resData = {
                ...resData,
                gymStatus: member.gymStatus,
                ownerId: member.ownerId,
            }
        }

        return res.status(200).json({
            success: true,
            data: resData,
        });
    } catch(err) {
        console.log("Me Error: ", err);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch user session",
        });
    }
};