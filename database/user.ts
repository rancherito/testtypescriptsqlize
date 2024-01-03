import { Model, DataTypes } from 'sequelize';
import sequelize from './index'; // Importa la configuración de Sequelize

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: 'users',
    sequelize: sequelize, // Esto es importante
});

export default User;
