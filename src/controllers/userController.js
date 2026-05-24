import { createUserService, signInUserService } from '../services/userServices.js'
import jwt from 'jsonwebtoken'
export const createUserControllerr = async (req, res) => {
   try {
      const user = await createUserService(req.body);
      res.status(201).json({
         user: user,
         success: true
      })
   } catch (error) {
      if (error.code === "P2002") {
         return res.status(409).json({
            message: "Email already exists",
         });
      }
      res.status(500).json({
         error: error.message,
         success: false
      })
   }
}

export const signInUserConroller = async (req, res) => {
   try {
      const isUserExists = await signInUserService(req.body);

      if (isUserExists) {
         let token = jwt.sign({
            id:isUserExists.id,
            email: req.body.email,
         },process.env.JWT_SECRET,{expiresIn:'1d'})

          const refreshToken = jwt.sign(
      {
         id: user.id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: '7d'
      }
   )
   res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict'
   })

         return res.status(200).json({
            email: req.body.email,
            message: "Login Successfull",
            created_at: isUserExists.createdAt,
            isSuccess: true,
            token
         })
      }
      else {
         return res.status(404).json({

            message: "Email or Password isincorrect",
            isSuccess: false

         })
      }

   } catch (error) {
      res.status(500).json({
         error: error.message,
         isSuccess: false
      })
   }
}