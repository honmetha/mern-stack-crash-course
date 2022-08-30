import { Request, Response } from "express";

import User from "../models/userModel";

// login user
export const loginUser = async (req: Request, res: Response) => {
  res.json({ mssg: "login user" });
};

// signup user
export const signupUser = async (req: Request, res: Response) => {
  res.json({ mssg: "signup user" });
};
