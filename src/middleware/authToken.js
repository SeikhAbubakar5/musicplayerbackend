const jwt =require("jsonwebtoken")

const authToken=(req,res,next)=>{

    const authHeader= req.headers["authorization"]
    const token= authHeader && authHeader.split(" ")[1];

    if(token == null) res.sendStatus(401)

    jwt.verify(token ,process.env.JWT_SECRET,(error,user)=>{
        if(error) return res.sendStatus(403)

        req.user=user

        next();
    })
}

module.exports=authToken;

