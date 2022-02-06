const express = require('express');

/** Internal Modules **/

/** Instance Modules **/
const app = express();

const config = require("@myflexspace/config");

/** Routes & Controllers **/


/** Server Lisneter **/
app.listen(config.PORT, () => {
    console.log (`myflexspace is live at localhost: ${config.PORT}`);
});