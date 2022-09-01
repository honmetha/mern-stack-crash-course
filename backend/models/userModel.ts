import mongoose, { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";

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

interface UserModelInterface extends Model<IUserSchema> {
  signup: any;
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
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

const User: UserModelInterface = mongoose.model<
  IUserSchema,
  UserModelInterface
>("User", userSchema);
export default User;
