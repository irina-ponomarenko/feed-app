import mongoose from "../db.js";

const UserSchema = new mongoose.Schema({
    name: String,
    password: {type: String, required: true},
    login: {type: String, unique: true, required: true},
    isActivated: {type: Boolean,  default: false},
    activationLink: {type: String},
});

const Users = mongoose.model("users", UserSchema, "users");

export default Users;