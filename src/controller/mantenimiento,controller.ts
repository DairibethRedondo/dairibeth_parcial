import { Request, Response} from "express";
import { Mantenimiento, MantenimientoI } from '../models/mantenimiento';

export class MantenimientoController {
    public async getMantenimientos(req: Request, res: Response) {
        try{
            const mantenimientos = await Mantenimiento.findAll()
            if(mantenimientos){
                res.status(400).json({msg: 'USUARIO INVALIDO'})
            }
            return res.status(200).json(mantenimientos)
        }catch (error){
            res.status(500).json(msg: 'ERROR DETECTADO POR FAVOR REGRESE')
        }        
    }
   
}