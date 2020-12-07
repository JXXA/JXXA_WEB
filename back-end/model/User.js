const mongooes = require("mongoose");

const userSchema = mongooes.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true /* 공백 제거 옵션 */,
    unique: 1 /* 중복 없는 유니크 */,
  },
  password: {
    type: String,
    maxlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  /* 계정 권한 */
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongooes.model("User", userSchema);

module.exports = { User };
