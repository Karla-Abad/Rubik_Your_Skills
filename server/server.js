require("dotenv").config();
const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// // Configuring the server to accept and update cookies. Helps decode cookie's information.
app.use(cookieParser());

require("./config/mongoose.config")
require("./routes/user.routes")(app);

app.listen(port, ()=> {console.log(`Express server running on port ${port}`)});