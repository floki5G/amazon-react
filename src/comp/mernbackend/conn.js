const mongoose = require("mongoose")

mongoose.connect("mongoose://loalhost:27017/amazonlogin",{
    useNewUrlParser:true,
    useUnifieldTopology:true,
    useCreateIndex:True
}).then(()=>{
    console.log(`connn success`)
}).catch(()=>{
    console.log(`connn fail`)

})