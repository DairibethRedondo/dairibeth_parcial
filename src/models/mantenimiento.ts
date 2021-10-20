import sequelize,{Model, DataTypes} from 'sequelize';
import { database } from "../database/db";

export class Mantenimiento extends Model{
    public fecha!: Date;
    public descripcion!: string;
    public resultados!: string;
}

export interface MantenimientoI{
    fecha: Date;
    descripcion: string;
    resultados: string;
}

Mantenimiento.init(
    {
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },

        descripcion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        resultados:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "mantenimientos",
        sequelize: database,
        timestamps: true
    }
);