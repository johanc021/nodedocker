import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./conexion.js";

const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {});

(async () => {
    try {
        await User.sync();
        console.log("Modelo sincronizado correctamente con la base de datos.");
    } catch (error) {
        console.error("Error al sincronizar el modelo:", error);
    }
})();

export default User;
