const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const MONGO_URI=process.env.MONGO_URI;

mongoose.connect(`${MONGO_URI}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`Database Connected`);
}).catch((e) =>{
    console.log(e);
})