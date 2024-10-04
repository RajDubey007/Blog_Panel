const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const changePassword = (req, res) => {
    res.render('change-password');
}

const changePasswordData = (req, res) => {

    const { password } = req.user;

    const { current_pwd, new_pwd, con_new_pwd } = req.body;

    bcrypt.compare(current_pwd, password, (err, result) => {

        if (con_new_pwd === new_pwd) {
            console.log("paasword Match");

            bcrypt.hash(new_pwd, saltRounds, async (err, hash) => {

                const newPass = await userModel.updateOne({ _id: req.user._id }, { password: hash });

                console.log("newPass", newPass);

                res.redirect('/login');


            })

        } else {
            console.log("password not match");

            res.redirect('/change-password');

        }
    })



}

const forgotPassword = (req, res) => {
    res.render('forgot-password');
}

module.exports = { changePassword, changePasswordData, forgotPassword };