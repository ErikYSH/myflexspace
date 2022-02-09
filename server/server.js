require('dotenv').config();
/** External Modules **/
const express = require('express');
const path = require('path');

/** Internal Modules **/

/** Instance Modules **/
const app = express();

/** Configuration **/
const config = require("@myflexspace/config");

/** Middleware **/
app.use(express.static(path.join("build")));

/** Routes & Controllers **/
app.all("/api/*", (req,res,next) => {
    res.send("Hold UP These are not the apis YOU are Looking For")
})


// MAGICAL FULL STACK MIDDLEWARE (lowest level)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
});

/** Server Lisneter **/
app.listen(config.PORT, () => {
    console.log (`myflexspace is live at localhost: ${config.PORT}`);
});