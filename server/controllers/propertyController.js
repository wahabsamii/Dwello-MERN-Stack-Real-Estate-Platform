import Property from "../models/Property.js";
import {v2 as cloudinary} from 'cloudinary';
import slugify from 'slugify';
export const create = async (req, res) => {
const { name, location, price, rooms, size, author, about } = req.body
try {
const mainImg = req.file;
// const galleryImgs = req.files['gallery'] || []
// console.log(galleryImgs)

   const upimage = await cloudinary.uploader.upload(mainImg.path, {resource_type:"image"})
   const uploadedImg = upimage.secure_url;

// Upload gallery images
// const galleryUrls = await Promise.all(galleryImgs.map(file => {
// return new Promise((resolve, reject) => {
// cloudinary.uploader.upload_stream({ resource_type: 'image' }, (err, result) => {
// if (err) reject(err)
// else resolve(result.secure_url)
// }).end(file.buffer)
// })
// }))
const slug = slugify(name.toLowerCase(), {lower: true, strict: true});
const property = new Property({
name,
about,
slug,
location,
price,
rooms,
size,
image: uploadedImg,
author
// gallery: galleryUrls
})
 await property.save()

return res.json({ success: true, message: "Property Added" })
 } catch (error) {
 return res.status(500).json({ success: false, message: error.message })
}
}


export const getAll = async(req,res) => {
    try {
        const properties = await Property.find();
        return res.json({success: true, properties});
    } catch (error) {
        console.log(error);
    }
};
export const getById = async(req,res) => {
    // console.log(req.params)
    const {slug} = req.params;
    try {
        const property = await Property.findOne({slug: slug});
        return res.json({success:true, property});
    } catch (error) {
        console.log(error);
    }
};

export const userProperty = async(req,res) => {
    const {userId} = req.body;
    try {
        const userProperties = await Property.find({author: userId});
        return res.json({success: true, allproperties: userProperties});
    } catch (error) {
        console.log(error);
    }
};

export const DeleteProperty = async(req,res) => {
    const {id} = req.params;
    try {
        const deleteProperty = await Property.findByIdAndDelete(id);
        if (deleteProperty) {
            return res.json({success:true, message:"Property Deleted"});
        }
    } catch (error) {
        console.log(error.message);
    }
}