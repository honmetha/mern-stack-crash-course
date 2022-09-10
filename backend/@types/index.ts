export interface IUserSchema {
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
