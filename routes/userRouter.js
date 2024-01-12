const detail=require('../models/userdetails');
const express = require('express');
const router=express.Router();
router.get('/getdetails',(req,res)=>{
    detail.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.post('/register', (req, res) => {
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
  router.get('/users', async (req, res) => {
    try {
      const users = await detail.find();
      res.render('users', { users: users });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  router.get('/registration',(req,res)=>{
    
    res.render("registration",{title:"registration"});
})

module.exports=router;