const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First Name is required"],
        minlength:[3, "First Name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minlength:[3, "Last Name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    state: {
        type: String,
        enum: ["FL", "NY", "AL", "CA", "TX", "Select a state"],
        default: "Select a state",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength:[6, "Password must be at least 6 characters long"]
    }, 
    html: {
        type: Boolean,
        default: false
    },
    css:{
        type: Boolean,
        default: false
    },
    python:{
        type: Boolean,
        default: false
    },
    javascript:{
        type: Boolean,
        default: false
    },
    java:{
        type: Boolean,
        default: false
    },
    csharp:{
        type:Boolean,
        default: false
    },
    go:{
        type: Boolean,
        default: false
    },
    typescript:{
        type: Boolean,
        default: false
    },
    django:{
        type:Boolean,
        default: false
    },
    flask:{
        type:Boolean,
        default: false
    },
    rails:{
        type:Boolean,
        default: false
    },
    spring:{
        type:Boolean,
        default: false
    },
    react:{
        type:Boolean,
        default: false
    },
    ruby:{
        type:Boolean,
        default: false
    },
    angular:{
        type:Boolean,
        default: false
    },
    shortBio: {
        type: String,
    },
    },
    { timestamps: true });

    //Virtual field - information we dont need to store in the db.
    UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=> this._confirmPassword = value)

    //Mongoose middleware

    UserSchema.pre("validate", function(next){
        if(this.password !== this.confirmPassword){
            this.invalidate("confirmPassword", "Passwords must match!!")
            console.log("Passwords don't match.")
        }
        next()
    })

    UserSchema.pre("save", function(next){
        console.log("in pre save");
        //bcrypt is a library that will help us with the hashing of the user information.
        // salting rounds refers to how many times will the password be shuffled. In this case, 10 times.
        bcrypt.hash(this.password, 10)
            .then((hashedPassword)=> {
                this.password = hashedPassword;
                next()
            })
    } )

module.exports = mongoose.model('User', UserSchema);

