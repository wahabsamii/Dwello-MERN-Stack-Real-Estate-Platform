import mongoose from 'mongoose';

const dbConnect = async() => {
    try {
        const DBSTRING = 'mongodb+srv://aftabkhan48491:aftabkhan945@cluster0.qdqvxeg.mongodb.net/Dwello_Properties?retryWrites=true&w=majority&appName=Cluster0';
        const connection = mongoose.connect(DBSTRING);
        if (connection) {
            console.log('Database connected Successfull');
        }
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;