import mongoose from "../db.js";
import {Schema} from "mongoose";

const TokenSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId,  ref: "Users"},
    refreshToken: {type: String, required: true},
});

const Token = mongoose.model("token", TokenSchema, "token");

export default Token;