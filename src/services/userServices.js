import prisma from "../modals/prisma.js";
import bycrypt from 'bcrypt'
export const createUserService = async (data) => {
  const hashedpassword = await bycrypt.hash(data.password, 10)
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedpassword
    }
  });





}

export const signInUserService = async (data) => {
  const users = await prisma.user.findUnique({ where: { email: data.email } });
  if (!users) {
    return false
  }
  const password = bycrypt.compare(data.password, users.password);

  if (!password) {
    return false
  }

  return users;
}



