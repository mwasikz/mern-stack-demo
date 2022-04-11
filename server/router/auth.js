const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello from the server router js`);
});

// Using Promises
/*

router.post('/register', (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: 'Email Already Exists' });
            }

            const user = new User({ name, email, phone, work, password, cpassword })

            user.save().then(() => {
                res.status(201).json({ message: "Registration Successful!" })
            }).catch((err) => res.status(500).json({ error: "Database Error" }))

        }).catch(err => { console.log(err); });


});

*/

// Using Async

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: 'Email Already Exists' });
        } else if (password != cpassword) {
            return res.status(422).json({ error: 'Passwords Did Not Match' });
        } else {

            const user = new User({ name, email, phone, work, password, cpassword })

            const userRegister = await user.save();

            if (userRegister) {
                res.status(201).json({ message: "Registration Successful!" })
            }


        }


    } catch (err) {
        console.log(err);
    }

});

// Login Route

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Please fill all the fields' })
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password)


            if (!isMatch) {
                res.status(400).json({ error: 'Invalid Credentials' })
            } else {
                res.json({ message: 'Sign In Succesful!' })
            }

        } else {
            res.status(400).json({ error: 'Invalid Credentials' })
        }




    } catch (err) {
        console.log(err);
    }
})


module.exports = router;