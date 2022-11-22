import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  type: {type: String, required: false}
})


export default mongoose.model('Post', Post)