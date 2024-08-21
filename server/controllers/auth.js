import User from '../models/User.js';
import md5 from 'md5';

const postSignup = async (req, res) => {
    const { name, mobile, address, email, password, gender, age } = req.body;

    const isMobileValid = mobile.length === 10;
    if(!isMobileValid) {
        return res.status(400).json({
            message : "Invalid mobile number"
        })
    }

    const isEmailValid = email.length > 0;
    if(!isEmailValid) {
        return res.status(400).json({
            message : "Invalid email"
        })
    }

    const isPasswordValid = password.length >= 8;
    if(!isPasswordValid) {
        return res.status(400).json({
            message : "Password must be at least 8 characters long"
        })
    }

    if(!name || !address || !gender || !age) {
        return res.status(400).json({
            message : "name, address, gender, age are required"
        })
    }

    const user = new User({ name, mobile, address, email, password : md5(password), gender, age });

    try {
        const savedUser = await user.save();
        return res.status(201).json({
            success : true,
            message : "User created successfully",
            data : savedUser
        })
    } catch(error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

const postLogin = async (req, res) => {
    const { mobile, password } = req.body;

    const user = await User.findOne({ mobile, password : md5(password) });
    if(!user) {
        return res.status(400).json({
            message : "Invalid credentials"
        })
    }else {
        return res.status(200).json({
            success : true,
            message : "User logged in successfully",
            data : user
        })
    }

}
export { postSignup , postLogin }


