// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.json());
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// })
// app.post('/login',(req,res)=>{
//     const { role, id, password, otp } = req.body;
//     console.log(req.body)
//     res.status(200).send( req.body );
// })
// app.listen(3000,()=>{
//     console.log("서버 실행중")
// })