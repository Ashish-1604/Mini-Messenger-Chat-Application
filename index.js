const express = require("express")
const path = require("path")

const mongoose = require("mongoose")
const Chat = require("./models/chat")

const methodOverride = require("method-override")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use(methodOverride("_method"))

let port = 3000

main().then(()=>{
    console.log('connection successful');
    
}).catch((err)=>{
    console.log(err);
    
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})

app.get("/", (req, res)=>{
    res.send("request working");
})

app.get("/chats", async(req, res)=>{
    let chats = await Chat.find()
    console.log(chats);
    
    // res.send('working')

    res.render('index.ejs', {chats})
    
})

// New Route
app.get("/chats/new" ,(req, res)=>{
    res.render("new.ejs")
})

// Create Route
app.post("/chats", (req, res)=>{
    let {from, to, msg} = req.body

    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })

    newChat.save().then((data)=>{
        console.log('chat was saved');
    }).catch((err)=>{
        console.log(err);
    })

    res.redirect('/chats')
})

// Edit Route
app.get("/chats/:id/edit", (req, res)=>{
    let {id} = req.params

    Chat.findById(id).then((data)=>{
        let chat = data
        res.render("edit.ejs", {chat})
    }).catch((err)=>{
        console.log(err);
    })
       
})



// Update Route
app.put("/chats/:id", async(req, res)=>{
    let {id} = req.params

    let {msg: newMsg} = req.body

    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true})

    console.log(updatedChat);

    res.redirect("/chats")
    
})


// Destroy Route
app.delete("/chats/:id", (req, res)=>{
    let {id} = req.params

    Chat.findByIdAndDelete(id).then((data)=>{
        console.log(data);
        res.redirect("/chats")
    }).catch((err)=>{
        console.log(err);
    })
})