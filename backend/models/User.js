import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }
}, { timestamps: true });

//Middleware for hashing password
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//Method to compare password
userSchema.methods.comparePassword = async function(passwordToCompare) {
    return await bcrypt.compare(passwordToCompare, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;