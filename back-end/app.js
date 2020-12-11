const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./model/User");

const config = require("./config/key");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDb Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Hahahaha");
});

app.post("/register", (req, res) => {
  // 회원가입 시 필요한 정보를 client에서 가져오면
  // 해당 데이터를 DB에 넣어준다.

  const user = new User(req.body);

  // mongodb methon를 사용해 user 정보 저장
  user.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.status(200).json({
        success: true,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
