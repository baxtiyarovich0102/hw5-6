const User = require("../models/user.model")

let postRegister = async (req, res, next) => {
    let data = JSON.parse(req.body.body)
    data.image = "/uploads/users/" + req.file.filename;

    let user = await User.create(data)
    res.status(201).json({name: "user", user})
}

let postLogin = async (req, res, next) => {
    let body = req.body
    
    let data = await User.findOne({name: body.name}).exec()
    if(!data) return res.send("Ism xato!")

    if(data.password != body.password) return res.send("Parol xato!")

    res.status(202).json({message: "Porfilga kirdingiz", data})
}

let getProfile = async (req, res, next) => {
    let id = req.params.id;
    let user = await User.findById(id);
    res.status(200).json({ name: "user", user });
}



module.exports = {postRegister, postLogin, getProfile}