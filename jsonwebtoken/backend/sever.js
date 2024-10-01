const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/api/login',(req,res)=>{
   
    console.log( req);
    console.log("Response Received")
    // console.log(email);
    // console.log(password)

    res.json({"message":"response received"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})