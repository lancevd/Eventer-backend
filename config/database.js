import mongoose from "mongoose";

const connectDB = async () => {
  const uri =
    "mongodb+srv://eventer:BibURtS9yuW8uBQc@eventer.p0q1hgf.mongodb.net/?retryWrites=true&w=majority&appName=Eventer";
  try {
    await mongoose.connect(uri, {
      ssl: true,
    //   sslValidate: false,
    });
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
