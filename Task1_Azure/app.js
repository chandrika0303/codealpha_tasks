const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
app.get('/',(req,res)=>res.send('<h1>CodeAlpha CI/CD Pipeline using Azure</h1><p>Application deployed successfully.</p>'));
app.listen(PORT,()=>console.log(`Server running on ${PORT}`));
