import jwt from 'jsonwebtoken';
import { signupService, loginService, getMeService } from "../services/auth.service.js";

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

    return res.status(200).json({
        success: true,
        data: user,
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
    const { userId, role } = req.user;

    const data = await getMeService({ userId, role });

    return res.status(200).json({
        success: true,
        data: data,
    });
};