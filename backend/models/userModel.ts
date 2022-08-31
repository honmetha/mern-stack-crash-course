import { Schema, model } from "mongoose";
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

const userSchema = new Schema<IUserSchema>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

// static signup method
userSchema.statics.signup = async (email, password) => {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
};

export default model("User", userSchema);
