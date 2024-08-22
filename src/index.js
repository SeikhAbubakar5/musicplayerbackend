require('dotenv').config({path:'src/.env'})
const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const userRoutes=require("./routes/userRouter")
const songRoutes = require('./routes/songRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const app= express();

app.use(cors())
app.use(express.json())
app.use("/api/user",userRoutes )
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);

const PORT=process.env.PORT || 8000;


mongoose.connect(process.env.MONGODB_URI,{
}).then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT ,()=>{
    console.log(`server listening at Port ${PORT}`)
})
