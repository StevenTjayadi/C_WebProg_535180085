const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

//app.set('view engine','ejs');
//app.set('views', path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname,'./static')));

app.get('/' , (request, response) => {
    //response.send("Hello express and EJS");
    //response.send("Embedded Javascript");
    response.sendFile(path.join(__dirname,'./static/Calculator Basic.html'));
    //response.render('pages/index' , {pagetitle:'EJS'});
});

app.listen(port, () => {
    console.log(`Express Server berjalan di pada port ${port}`)
});