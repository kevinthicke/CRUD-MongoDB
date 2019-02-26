import express from 'express';

const router = express.Router();

router.get('/', (request, resolve) => {
    resolve.send('get users!')
})


router.post('/', (request, resolve) => {
    resolve.send('post users!')
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