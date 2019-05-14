const express = require('express');

const singUpHandler = require('./sign_up');
const loginHandler = require('./login');
const logoutHandler = require('./logout');
const { getUrl, cb } = require('./twitter_login');
const { tweetImgCb, tweetImgUrl, multerConfig } = require('./tweet_img');
const { auth, checkAuth } = require('./auth');

const router = express.Router();

router.post('/signup', singUpHandler);
router.post('/login', loginHandler);
router.get('/twitter-login', getUrl);
router.get('/twitter/cb', cb);
router.get('/check-auth', checkAuth);
router.get('/logout', auth, logoutHandler);
router.post('/tweet-img', auth, multerConfig.single('image'), tweetImgUrl);
router.get('/tweet-img/cb', auth, tweetImgCb);

module.exports = router;
