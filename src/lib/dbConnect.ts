import mongoose from "mongoose";

type ConnectionObject = {
    isConneted?: number
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if(connection.isConneted) {
        console.log("Already connected to database");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGDB_URI || '', {});
        connection.isConneted = db.connections[0].readyState;
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit();
    }

}

export default dbConnect;