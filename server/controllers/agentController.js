import User from "../models/User.js"

export const getAll = async(req,res) => {
    try {
        const agents = await User.find({isAgent:true});
        return res.json({success:true, agents});
    } catch (error) {
        console.log(error.message);
    }
}