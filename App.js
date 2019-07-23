var ex = require('express')
var app = ex()
const port = process.env.PORT || 3000;
app.get('/',(err,res)=>{
    res.send("Hey NodeCode here.")
})

app.listen(port,()=>console.log("Running... on "+port));