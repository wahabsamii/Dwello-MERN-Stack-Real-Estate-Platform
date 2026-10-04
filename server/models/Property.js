import mongoose from 'mongoose';

const propertySchema = mongoose.Schema({
    name: String,
    about: String,
    slug: String,
    location:String,
    price: String,
    image: String,
    // gallery:[],
    rooms: String,
    size:String,
    author:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
});

const Property = mongoose.model("Property", propertySchema);
export default Property;