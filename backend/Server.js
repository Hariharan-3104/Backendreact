const express = require('express');
const app = express();
const userRouter = require('./Routes/User');
app.use('/user',userRouter);



app.set('view engine', 'ejs');
app.set('views', './view');

app.get('/',(req,res)=>{
    //console.log('Hello World');
    //res.status(400).send('Error occured 404')
    //res.json(({express:"hariharan"}))
    //res.send('Hello World');
    res.render('index',{name:'Hariharan'});
});
app.get('/user',(req,res)=>{
    res.send('user information');
}   );


app.listen(3000)
