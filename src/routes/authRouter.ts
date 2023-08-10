import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";

const authRouter = Router()

/*Login*/
authRouter.get('/login', loginUser);

/*Register*/
authRouter.get('/register', registerUser);


export default authRouter;