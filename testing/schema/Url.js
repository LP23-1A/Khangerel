import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    shortUrl: String,
    longUrl: String,
    userId: Number,
    gender: String,
    firstName: String, 
    lastName: String,
    email: String,
    phone: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

const Url = mongoose.model('Url', UrlSchema);
 
export default Url