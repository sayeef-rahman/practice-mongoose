import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();

  //custom instance methods
  // const fullName = user.fullName();
  // console.log(fullName);
  return user;
};

export const getUsersFromDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (
  payloadId: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payloadId });
  return user;
};

export const getAdminsFromDb = async (): Promise<IUser[] | null> => {
  const admins = await User.find({ role: "admin" });
  return admins;
};

export const getAdminsFromDbStatic = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
