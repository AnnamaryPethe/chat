import * as mongoose from 'mongoose'

const connect = async ({db}: {db: string}) => {
    try {
        await mongoose
            .connect(db,  { useNewUrlParser: true , useUnifiedTopology: true})
            .then(() => console.log(`Successfully connected to ${db}`))
    } catch (err) {
        console.log(`It is an error when trying to connect with ${db}`);
        throw err
    }
};

export default connect;