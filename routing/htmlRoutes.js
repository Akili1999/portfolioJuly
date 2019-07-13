// We require the extension "path"
var path = require("path");
// we are exporting these functions for our survey, and home page
module.exports = function(app){
    app.get ("/", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"));
    });
};