var express = require('express')
var app = express()
const mongoose = require('mongoose');
const mongoose_connect = require('./db/mongoose');
const {firms} = require('./model/firm');
const {customers} = require('./model/customer');

app.use(express.static('public'));
app.set('view engine','ejs')
 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.render('home');
});
// insert data firms
app.post('/', (req, res)=> {
    var new_firms= new firms({
      name:req.body.name,
      mobile:req.body.mobile,
      place:req.body.place
    })
    new_firms.save().then(()=>{
      res.render('home');
    })
  });

//   get all user data
  app.get('/firms', (req, res)=> {
    firms.find().then((userdata)=>{
      res.render('register',{
        firm:userdata
      });
    });
  });
  //get edit 1 user data
app.get('/firms/:id', (req, res)=> {
    firms.findById(req.params.id).then((userdata)=>{
      res.render('edit',{
       user:userdata 
      });
    })
  });
  
  //update 1 user data( this s for knowing purpose only)
app.post('/firms/:id', (req, res)=> {
    firms.findByIdAndUpdate(req.params.id,{
      $set:{
        name:req.body.name,
        mobile:req.body.mobile,
        place:req.body.place
      }
    }).then((userdata)=>{
     res.redirect('/firms');
    })
  });

//delete 1 user data
app.delete('/firms/:id', (req, res)=> {
    firms.findByIdAndRemove(req.params.id).then((userdata)=>{
      res.redirect('../firms');
    })
  });

// customers insert edit delete list..

// insert data firms
app.get('/customers',(req, res) => {
    res.render('about');
  });

app.post('/customers', (req, res)=> {
    var new_customers= new customers({
      name:req.body.name,
      mobile:req.body.mobile,
      place:req.body.place
    })
    new_customers.save().then(()=>{
      res.redirect('/customers');
    })
  });

//   get all user data
  app.get('/customers1', (req, res)=> {
    customers.find().then((userdata)=>{
      res.render('register_customer',{
        customer:userdata
      });
    });
  });
  //get edit 1 user data
app.get('/customers/:id', (req, res)=> {
    customers.findById(req.params.id).then((userdata)=>{
      res.render('edit_customer',{
       user:userdata 
      });
    })
  });
  
  //update 1 user data( this s for knowing purpose only)
app.post('/customers/:id', (req, res)=> {
    customers.findByIdAndUpdate(req.params.id,{
      $set:{
        name:req.body.name,
        mobile:req.body.mobile,
        place:req.body.place
      }
    }).then((userdata)=>{
     res.redirect('/customers');
    })
  });

//delete 1 user data
app.delete('/customers/:id', (req, res)=> {
    customers.findByIdAndRemove(req.params.id).then((userdata)=>{
      res.redirect('../customers');
    })
  });

  app.get('/entry', (req, res)=> {

    customers.find().then((userdata)=>{
        firms.find().then((firmdata)=>{
            res.render('entry',{
                 customer:userdata,
                 firm:firmdata
            });
        });
    });
  });

app.listen(3000)