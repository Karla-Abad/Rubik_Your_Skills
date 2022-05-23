const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/Rubik_Your_Skills_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log(`Established a connection to the database called Rubik_Your_Skills_db.`))
    .catch(err => console.log("Something went wrong when connecting to the database.",err));