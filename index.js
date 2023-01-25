const express = require("express");

const jwt = require("jsonwebtoken")

const app = express();

const user ={
    name: "sandeep",
    age: "23"
}



app.post("/post",function(res , req){
    console.log("");
} )