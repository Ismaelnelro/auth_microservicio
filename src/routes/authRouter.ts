import { Request, Response, Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import path from "path";

const authRouter = Router()
const basePath = '/api/v1'

//INFORMATIVE ROUTE
authRouter.get('/', (req: Request, res: Response) => {
  const filepath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(filepath);
})

/*Login*/
authRouter.get(`${basePath}/login`, loginUser);

/*Register*/
authRouter.get(`${basePath}/registro`, registerUser);


export default authRouter;