import { signupService, loginService } from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        const result = await signupService(req.body);

        return res.status(201).json({
            success: true,
            data: result,
            message: 'User signed up successfully',
        });
    } catch(err) {
        console.log("Signup error : ", err);

        if(err.code === 'EMAIL_EXISTS') {
            return res.status(409).json({
                success: false,
                message: "Email already exists",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

export const login = async (req, res) => {
    try {
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
    } catch(err) {
        console.log("Login Error: ", err);

        if(err.code === 'INVALID_CREDENTIALS') {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

export const logout = (req, res) => {
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