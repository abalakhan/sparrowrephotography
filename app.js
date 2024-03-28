import express from "express";
import axios from 'axios';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/services", (req, res) => {
    res.render("services.ejs");
})

app.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs");
})

//Data parsing
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.post('/email', (req, res) => {
    console.log('Data: ', req.body);
    res.json({message:'Message recieved'})
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });