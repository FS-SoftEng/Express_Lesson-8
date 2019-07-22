

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("../models/index");

module.exports = {
    signUser: function (user) {
        const token = jwt.sign({
                Username: user.Username,
                UserId: user.UserId,
                Admin: user.Admin
            },
            "secret", {
                expiresIn: "1h"
            }
        );
        return token;
    },
}

