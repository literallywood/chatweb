const express = require('express');
const dotenv = require("dotenv");
const {chats} = require("./data/data");

const app = express()
dotenv.config();
app.get('/', (req,res) => {
    res.send('API is running');
})
app.get('/api/chat', (req,res) =>{
    res.send(chats);
})

app.get('/api/chat/:id', (req,res) =>{
    const singleChat = chats.find(c=>c.id === req.params.id)
    res.send(singleChat)
    //console.log(req.params.id);

})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server started on port ${PORT}`))




