const router = require('express').Router();

const {authController} = require('../controllers');
const {constants} = require('../config');
const {logInMiddleware} = require('../middlewares');

router.post(
    '/',
    logInMiddleware.isAuthValid,
    logInMiddleware.logInMiddleware,
    logInMiddleware.checkUserRole([
        constants.USER,
        constants.ADMIN
    ]),
    authController.logIn
);

router.get(
    '/activate/:token',
    logInMiddleware.checkActivateToken,
    authController.activate
);

router.post(
    '/logOut',
    logInMiddleware.checkAccessToken,
    authController.logOut
);

router.post(
    '/refresh',
    logInMiddleware.checkRefreshToken,
    authController.refreshToken,
);

module.exports = router;
