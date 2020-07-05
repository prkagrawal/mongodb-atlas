const mongoose = require('mongoose');
const assert = require('assert');
const uri = process.env.MONGO_URI;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  function (error, link) {
    // check error
    assert.equal(error, null, "DB Connect Fail...");

    // Ok
    console.log(`DB Connect Success...`);
    // console.log(link);
  }
);