const Express=require('express');
const BodyParser=require('body-parser');
const Routes=require('./Routes');
const app=Express();
var path = require('path');

app.use(BodyParser.json());
//app.use('/Routes',Routes);
app.get('/', function(request, response){
    response.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(8000,'0.0.0.0',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server listening to port 8000");
})