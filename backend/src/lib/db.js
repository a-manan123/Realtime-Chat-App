import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     // Add connection options for better reliability
//     const conn = await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB connected: ${conn.connection.host}`);
//     console.log(`Database: ${conn.connection.name}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//     process.exit(1); // Exit the process if DB connection fails
//   }
// };
