import { Request, Response, Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import path from "path";

const authRouter = Router()
const basePath = '/api/v1/auth'

//INFORMATIVE ROUTE
authRouter.get('/', (req: Request, res: Response) => {
  const filepath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(filepath);
})

/*Login*///Ruta: https://auth-server-myxa.onrender.com/api/v1/auth/login
authRouter.get(`${basePath}/login`, loginUser);

/*Register*///Ruta: https://auth-server-myxa.onrender.com/api/v1/auth/register
authRouter.get(`${basePath}/register`, registerUser);


export default authRouter;
