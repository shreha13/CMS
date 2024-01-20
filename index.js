const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.routes");
const showsRouter = require("./routes/showsDetails.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/users', userRouter);
app.use('/shows', showsRouter);

app.use((error, req, res, next) => {
  return res.status(500).render("500", {
    title: "Error",
    path: "/500",
    isLoggedIn: req.session.isLoggedIn,
  });
});

app.listen(8000, () => console.log("connected"))