const express = require("express");
const port = process.env.PORT || 3000;


const app = express ();
app.use(express.json());

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});

app.get("/heartbeat", (request, response) =>{
    const respBody = {
        "status": "running"
    };

    response.send(respBody);
});
