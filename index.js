const express = require("express");
const mongoose =  require("mongoose");
const port = 8080;
const app = express();

mongoose.connect("mongodb://localhost/projectDG", {
    userNewUrlParser: true, 
    useUnifiedTopology: true,
});
let db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*",
    });
    return res.redirect("index.html");
});

app.post("/formFillIp", (req, res) => {
    const name = req.body.name;
    const reason = req.body.reason;
    const email = req.body.email;
    const phone = req.body.phone;
    const city = req.body.city;
    const state = req.body.state;
    const addressLine = req.body.addressLine;

    const data = {
        name: name,
        reason: reason,
        email: email,
        phone: phone,
        city: city,
        state: state,
        addressLine: addressLine,
    };

    db.collection("users").insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Data inserted successfully.");
    });

    return res.redirect("formSubmitted.html");
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
