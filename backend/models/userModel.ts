import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

import { IUserSchema } from "../@types/index";

interface IUser {
  email: string;
  password: string;
  _id: string;
  _v: number;
}

interface IUserModel extends Model<IUserSchema> {
  signup: (email: string, password: string) => IUser;
  login: (email: string, password: string) => IUser;
}

const userSchema = new Schema<IUserSchema>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

// static signup method
userSchema.statics.signup = async function (email, password): Promise<IUser> {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password): Promise<IUser> {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect email or password");
  }

  return user;
};

const User: IUserModel = mongoose.model<IUserSchema, IUserModel>(
  "User",
  userSchema
);

export default User;
