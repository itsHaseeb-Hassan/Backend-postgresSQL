import { Sequelize } from "sequelize";


const connectDB= async()=>{
    try {
        const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,  {
            host: 'localhost',
            dialect: 'postgres'
        });
        db.authenticate();
        console.log('Connection has been established successfully.');
        return db
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
}

export default connectDB