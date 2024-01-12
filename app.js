const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userRouter=require("./routes/userRouter");
// const detail=require('./models/userdetails');
app.set("view engine","ejs");
const dbURI='mongodb://root:root@ac-9qdlxc6-shard-00-00.lpqrnsf.mongodb.net:27017,ac-9qdlxc6-shard-00-01.lpqrnsf.mongodb.net:27017,ac-9qdlxc6-shard-00-02.lpqrnsf.mongodb.net:27017/rahul?ssl=true&replicaSet=atlas-oxac5a-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
console.log(err);

})
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})) 

// this middle ware that is urlencoded  is used for understanding of the 
// app.listen(6000,()=>{
//     console.log("server is ready for responding");
// });
// app.get("/registration",(req,res)=>{
//     res.render("registration",{title:"registration page"})
//     const values=new detail({
//         username:"rahul",
//         password:"Rahul@88990",
//         email:req."rahulsamalla123@gmail.com"
        
//     }
    
//     )
//     values.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    
// })

  

app.listen(8000,()=>{
    console.log("server is ready for responding");
});
app.use(userRouter);
app.get('/',(req,res)=>{
    // res.send("<h1>This is from home page</h1>")
    // res.sendFile("./Files/views/index.html",{root: __dirname});
    // res.render("index");
    res.render("index",{title:"home"});
})
app.get('/about',(req,res)=>{
    // res.send("<h1>This is from about us  page</h1>")
    // res.sendFile("./Files/views/about.html",{root: __dirname});
    // res.render("about");
    res.render("about",{title:"about"});
})

// redirects
app.get('/aboutus',(req,res)=>{
    res.redirect("about");
})


//using router 

// 404 page
app.use((req,res)=>{
    res.status(404).sendFile("./Files/views/404.html",{root: __dirname})
    // res.status(404).render("404");
    res.status(404).render("404",{title:"error"});

})
// adding of dynamic functionality to html is impossible so that can be replaced used ejs engine by using render 
// method 
module.exports=userRouter;