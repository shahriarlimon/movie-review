const User = require('../models/user')

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const oldUser = await User.find({ email })
    if (oldUser) return res.status(401).send({ error: "This email is already in use!" })
    const newUser = new User({ name, email, password });
    await newUser.save()
    res.send({ user: newUser })

}