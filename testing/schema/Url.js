import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    // url:String,
    shortUrl: String,
    longUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Url = mongoose.model('Url', UrlSchema);
 
export default Url