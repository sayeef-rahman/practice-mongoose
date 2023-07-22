import User from "./user.model";

export const createUserToDb = async () => {
  const user = new User({
    id: "00018",
    role: "student",
    password: "password00001",
    name: {
      firstName: "John",
      middleName: "John",
      lastName: "John",
    },
    dateOfBirth: "23-11-1998",
    gender: "male",
    email: "abul@gmial.com",
    contactNo: "01780540576",
    emergencyContactNo: "01942026272",
    presentAddress: "dhaka",
    permanentAddress: "chuadanga",
  });
  await user.save();
};
