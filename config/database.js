const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

async function connectionDB() {
  try {
    await mongoose.connect(URI);
    console.log('🟢 SUCCESSFUL! MongoDB Connected');
  } catch (error) {
    console.log('🔴 FAILED! MongoDB Disconnected');
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectionDB;
