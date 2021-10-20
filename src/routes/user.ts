import { Request, Response, Application } from 'express';
import { UserController } from '../controller/userController';
 
export class UserRoutes{
 
    public userController:UserController = new UserController(); //constructor
    
    public routes(app: Application): void {
        app.route("./user").get(this.userController.index);
    }
 
}
