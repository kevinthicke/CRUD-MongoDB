import bcrypt from 'bcrypt';
import express from 'express';
import User from './../models/user';

const router = express.Router();

router.get('/', (request, resolve) => {
    resolve.send('get users!')
})

router.post('/', (request, resolve) => {
    const { name, email, password, role } = request.body;

    const user = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role
    });

    user.save((err, response) => {
        if(err) {
            return resolve.status(400).json({
                ok: false,
                err
            });
        }

        resolve.json({
            ok: true,
            user: response
        })
    })

})

router.delete('/', (request, resolve) => {
    resolve.send('delete users!')
})

router.put('/', (request, resolve) => {
    resolve.send('get users!')
})

export {
    router
}