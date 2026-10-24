const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||3000;
app.use(express.static(__dirname,{extensions:['html']}));
app.get('/health',(_,res)=>res.json({ok:true,service:'AUSOM BLIND'}));
app.get('*',(_,res)=>res.sendFile(path.join(__dirname,'index.html')));
app.listen(port,()=>console.log('AUSOM BLIND on '+port));
