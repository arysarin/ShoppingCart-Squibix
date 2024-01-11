const mongoose = require('mongoose');

exports.dbConn = async () => {
    const dbURL = "mongodb+srv://admin:tLuUfVpNChj2RuvH@cluster0.lkelaoz.mongodb.net/?retryWrites=true&w=majority";
    const conn = await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected")
    return conn
}
