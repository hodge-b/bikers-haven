const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


if(process.env.NODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname, 'build','index.html'));
    })
}


app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log(`Server running on PORT:${PORT}`);
})