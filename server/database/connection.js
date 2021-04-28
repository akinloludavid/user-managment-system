const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    //mongodb connection string
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    })
    console.log(`MongoDB connected : ${connect.connection.host}`)
  } catch (error) {
    process.exit(1)
  }
}

module.exports = connectDB;