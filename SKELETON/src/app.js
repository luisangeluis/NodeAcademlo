const express =require('express');
const app =express();

//!para que el body de la peticion no salga undefined
app.use(express.json());

app.get('/',(req,res)=>{
  res.status(200).json({message:'status ok'})
})


app.listen(3000,()=>{
  console.log('server started at port:3000');
});