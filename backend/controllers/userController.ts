import { Request, Response } from "express";
import jwt = require("jsonwebtoken");

import User from "../models/userModel";

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
export const loginUser = async (req: Request, res: Response) => {
  res.json({ mssg: "login user" });
};

// signup user
export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
