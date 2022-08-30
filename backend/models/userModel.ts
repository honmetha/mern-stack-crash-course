import { Schema, model } from "mongoose";

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

export default model("User", userSchema);
