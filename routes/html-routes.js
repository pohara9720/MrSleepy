var path = require("path");

module.exports = function(app) {
 app.get("/", function(req, res) {
        console.log("We made it home");
        // res.sendFile(path.join(__dirname + "/../public/home.html"));
        res.render("alarm", { layout: "alarmlay" });
    });



};