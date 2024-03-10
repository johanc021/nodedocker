import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_docker', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


const testConetion = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion ok")
    } catch (error) {
        console.error("Error de conexion", error)
    }
}

testConetion()

export default sequelize