//Dependencies
const express =require('express');
//Configuraciones iniciales
const app =express();
//Archivos de rutas
const usersRouter = require('./users/users.routes').router
const authRouter = require('./auth/auth.routes').router

//para que el body de la peticion no salga undefined
app.use(express.json());

app.get('/',(req,res)=>{
  res.status(200).json({message:'status ok'})
})

app.use('/api/v1/users',usersRouter);
app.use('/api/v1/auth',authRouter);

app.listen(3000,()=>{
  console.log('server started at port:3000');
});