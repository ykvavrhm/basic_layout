/*** Required External Modules מודלים שנצטרך לייבא*/
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const { get } = require('browser-sync');

/*** App Variables משתנים*/
const app = express();
const port = process.env.port | 3000;

/***  App Configuration וההגדרות APP יצירת ה*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*** Routes Definitions יצירת הראוטניג*/
app.get('/',(req,res)=>{
    res.render("index");
})
app.post('/user',(req,res)=>{
    res.render("user",{user:{name:req.body.name}})
})

app.route('/newForm')
    .post((req,res) => {
        res.render("newForm",{
            form:
            {
                full_name:req.body.full_name,
                subject: req.body.subject,
                message: req.body.message
            }
        })
    })


/*** Server Activation הרצת השרת*/
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})