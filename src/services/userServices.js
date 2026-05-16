import prisma from "../modals/prisma.js";
import bycrypt from 'bcrypt'
export const createUserService = async (data) => {
    const hashedpassword =  await bycrypt.hash(data.password,10)
       return await prisma.user.create({
    data:{...data,
    password:hashedpassword}
  });


   
}



