import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

interface IUserSchema {
  email: {
    type: string;
    required: boolean;
    unique: boolean;
  };
  password: {
    type: string;
    required: boolean;
  };
}

interface IUserModel extends Model<IUserSchema> {
  signup: (email: string, password: string) => IUserSchema;
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
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
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

const User: IUserModel = mongoose.model<IUserSchema, IUserModel>(
  "User",
  userSchema
);

export default User;
