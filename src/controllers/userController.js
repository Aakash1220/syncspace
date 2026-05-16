import {createUserService} from '../services/userServices.js'

export const createUserControllerr = async (req,res) =>{
    try {
        const user = await createUserService(req.body);
         res.status(201).json({
            user:user,
            success:true
         })
    } catch (error) {
         if (error.code === "P2002") {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
         res.status(500).json({
            error:error.message,
            success:true
         })
    }
}