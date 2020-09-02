const bcrypt = require('bcrypt');
const saltRounds = 10;

// Models
const User = require('../../models/User.model');

module.exports.postCreate = async (req, res) => {
    let { name, email, password } = req.body;
    let result = { success: true };

    try {
        if(!name || !email || !password) {
            throw new Error();
        }   

        password = await bcrypt.hash(password, saltRounds);

        let user = new User({ email, name, password });
        await user.save();
    } catch (error) {
        result.success = false;
        res.json(result);
        return;
    }

    res.json(result);
}

module.exports.postLogin = async (req, res) => {
    let { email, password } = req.body;
    let result = { success: true };

    try {
        if(!email || !password) {
            throw new Error();
        }

        let user = await User.findOne({ email });
        if(!user) {
            throw new Error();
        }

        let currentResult = await bcrypt.compare(password, user.password);
        if(!currentResult) {
            throw new Error();
        }
        result.user = user;
    } catch (error) {
        result.success = false;
        res.json(result);
        return;
    }

    res.json(result);
}