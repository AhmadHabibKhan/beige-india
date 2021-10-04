const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { url } = require('inspector');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    
    res.render("home");
});

app.get('/about', (req, res) => {
   
    res.render("about");
});


app.listen(process.env.PORT || 3000, () => {
    console.log('server started at port 3000');
});