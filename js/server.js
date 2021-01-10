let express = require('express');
let app = express();
app.get('/getList', function (req,res) {
    console.log(req.query);
});
let server = app.listen(3000,() => {
    console.log('Listening on port %d', server.address().port);
})