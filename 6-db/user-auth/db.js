const mongoose = require("mongoose")

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log(`database connected to: ${process.env.DB_URL}`)
  } catch (err) {
    console.warn(`database error: ${err}`)
  }
}

module.exports = { dbConnect, mongoose }
