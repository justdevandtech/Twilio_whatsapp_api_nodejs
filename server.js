const express = require("express");
const app = express();
const sendRoute = require ("./route/sendroute.js");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/send", sendRoute);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);
