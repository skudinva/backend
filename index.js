import express from 'express'
import Post from "./Post.js";
import router from "./router.js";

const PORT = 5000;
//const DB_URL = 'mongodb://localhost:27017/backend?retryWrites=true&w=majority'


const app = express()
app.use(express.json())
app.use('/api', router)

async function startApp(){
    try {
       // await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER RUN'))
        await Post.sync()
    } catch (e){
        console.log(e)
    }
}

startApp()
