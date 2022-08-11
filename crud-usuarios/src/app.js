const express = require('express');

const app =express();

//Maneja las peticiones
app.use(express.json());

const userDB=[
  {
      id:1,
      nombre:'string',
      edad:20,
      email:'',
      country:'',
      phone:''
  }
];

// {
//   id=1,
//   nombre:'string',
//   edad:20,
//   email:'',
//   country:'',
//   phone:''
// }

app.use('/hola',(req,res)=>{

  res.json({message:'peticion con use',method:req.method})
})

// get all users
app.get('/users',(req,res)=>{
  res.status(200).json(userDB);
})

// get user by id
app.get('/users/:id',(req,res)=>{
  const id=Number(req.params.id);
  const user = userDB.filter(item=>item.id===id)

  if(user.length>0){
    res.status(200).json(user[0]);

  }else{
    res.status(400).json({message:'Este id no es valido'})
  }

})

//Create a user 
app.post('/users',(req,res)=>{
  const data =req.body;
  
  if(userDB.length===0){
    const newUser ={
      id:1,
      ...data
    }
    userDB.push(newUser);

  }else{
    const newUser ={
      id:userDB[userDB.length-1].id+1,
      ...data
    }
    userDB.push(newUser);

  }
  
  res.status(201).json(userDB);
})

app.delete('/users/:id',(req,res)=>{
  const id=Number(req.params.id);
  const index =userDB.findIndex(item=>item.id===id);

  if(index!==-1){
    userDB.splice(index,1)
    res.status(204).json();

  }    
  res.status(400).json({message:'Invalid Id'})

})

app.put('/users/:id',(req,res)=>{
  const id=Number(req.params.id);
  const data = req.body;
  const index =userDB.findIndex(item=>item.id===id);

  if(index===-1){
    res.status(400).json({message:'Missing data'});
  }

  if(data.nombre && data.edad &&data.email && data.country && data.phone){
    userDB[index] ={
      id,
      nombre:data.nombre,
      edad:data.edad,
      email:data.email,
      country:data.country,
      phone:data.phone
    }
    res.status(200).json(userDB);
  
  }else{
    res.status(400).json({message:'missing data'})
  }
  
})


app.listen(8000,()=>{
  console.log(`Serverd started at port 8000`);
  console.log('hola');
})