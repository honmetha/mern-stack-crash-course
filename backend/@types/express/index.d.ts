import { IUserSchema } from "../index";

declare global {
  namespace Express {
    interface Request {
      user: IUserSchema | null;
    }
  }
}
