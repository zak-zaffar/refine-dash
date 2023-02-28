import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(() => console.log('Connected to;'))
    .catch((error) => console.error(error));
}

export default connectDB