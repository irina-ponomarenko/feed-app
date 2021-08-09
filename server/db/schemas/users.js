import mongoose from "../db.js";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    login: String,
});

const Users = mongoose.model("users", UserSchema, "users");

export default Users;