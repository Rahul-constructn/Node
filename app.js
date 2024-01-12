const express=require('express');
const app=express();
const mongoose=require('mongoose');
const detail=require('./models/userdetails');
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
app.get('/getdetails',(req,res)=>{
    detail.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.post('/register', (req, res) => {
    // console.log(req.body);
    
  
    // Create a new user instance
    const newUser = new detail(req.body);
  
    // Save the user to the database
    newUser.save()
    .then(()=>{
          res.send("new user created");
    })
    .catch((err)=>{
        res.send("error occured")
    })
  });
  app.get('/users', async (req, res) => {
    try {
      const users = await detail.find();
      res.render('users', { users: users });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(8000,()=>{
    console.log("server is ready for responding");
});
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
app.get('/registration',(req,res)=>{
    
    res.render("registration",{title:"registration"});
})
// redirects
app.get('/aboutus',(req,res)=>{
    res.redirect("about");
})
// 404 page
app.use((req,res)=>{
    res.status(404).sendFile("./Files/views/404.html",{root: __dirname})
    // res.status(404).render("404");
    res.status(404).render("404",{title:"error"});

})
// adding of dynamic functionality to html is impossible so that can be replaced used ejs engine by using render 
// method 
