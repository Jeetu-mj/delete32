const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://medicaljagat:1234@cluster0.d6q2gma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Database is connected");
    } catch (error) {
        console.log("Error in connecting to database", error);
    }
}

module.exports = dbconnect;