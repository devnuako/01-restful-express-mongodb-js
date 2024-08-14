const express = require('express');
const router = express.Router();

const { getHomepage, getABC, getXYZ, postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, 
    postDeleteUser, postHandleRemoveUser
} = require('../controllers/homeController');




// router.Method('/route', handler)
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/xyz', getXYZ);

router.get('/create', getCreatePage);
router.get('/update', getUpdatePage);
router.get('/update/:id', getUpdatePage);


router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);


module.exports = router; //export default
