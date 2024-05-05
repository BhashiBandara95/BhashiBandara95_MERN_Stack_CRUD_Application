// create a server(make the express application) to run the MERN  application

// import express

const express = require("express");

// import mongoose

const mongoose = require("mongoose");

// invoke the express - to run the app

const app = express();

// create a port to run the app

const PORT = 8000;

// create db connection

const DB_URL =
	"mongodb+srv://abk:abk321@mernapp.hsb2sbe.mongodb.net/?retryWrites=true&w=majority&appName=MernApp";

// listen the app about port where the run the app

// use call back function

app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});

// db connection functionality

// use promises
mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => console.log("DB connection error", err));
