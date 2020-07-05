require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// const mongoose = require('mongoose');
const dotenv = require('dotenv');

const db = require('./db')

const port = 5000;


// middleware setup
app.use(morgan("dev"))
app.use(cors())

// default routes
app.all("/", function(req,res){
	return res.json({
		status: true,
		message: "Working..."
	});
});

app.listen(port, function () {
  console.log("Server running on port : " + port);
});
