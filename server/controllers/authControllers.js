import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import {v2 as cloudinary} from 'cloudinary';

export const register = async (req,res) => {
    const {name, email, password} = req.body;
    
    try {
        const existUser = await User.findOne({email :email});
        if (existUser) {
            return res.json({success: false, message: 'Account Already Created login please'})
        }
        const hashedPassword = await bcrypt.hashSync(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();

        return res.json({success: true, message: 'Account Created'});
    } catch (error) {
        return res.json({success:true, message: error.message});
    }
}

export const login = async(req,res) => {
    const {name, password} = req.body;
    try {
        const findUser = await User.findOne({name:name});
        if (!findUser) {
            return res.json({success: false, message:"Data not match with our records"})
        }
        const checkPassword = await bcrypt.compare(password, findUser.password);
        if (!checkPassword) {
            return res.json({success: false, message:'Invalid Credinatails'})
        }

        return res.json({success: true, user: findUser, message:"Login Success"});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export const AllUsers = async(req, res) => {
    try {
        const users = await User.find();
        //   { isAgent: false, isAdmin: false }
        return res.json({ success: true, users });
        } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
        }
}


export const UpdateProfile = async (req, res) => {
  const { userId, name, email } = req.body;
  const photo = req.file;

  try {
    let updateData = { name, email };

    if (photo) {
      const upload = await cloudinary.uploader.upload(photo.path, {
        resource_type: 'image',
      });
      updateData.photo = upload.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};