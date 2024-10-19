const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const regCon = require('../controllers/regCon');
const loginCon = require('../controllers/loginCon');
const userCon = require('../controllers/userCon');
const logoutCon = require('../controllers/logoutCon');
const blogCon = require('../controllers/blogCon');
const blogAddCon = require('../controllers/blogAddCon');
const changePwdCon = require('../controllers/changePwdCon');
const upload = require('../middleware/multer');
const passport = require('../middleware/passportConf');
const isAuth = require('../middleware/isAuth');
const addTopic = require("../controllers/add_topic_con.js");
const addSubTopic = require("../controllers/subTopic_Controller.js");


router.get('/', isAuth, controller.index);

router.get('/register', regCon.register);
router.post('/register', upload.single('userImg'), regCon.registerData);

router.get('/login', loginCon.login);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), loginCon.loginData);

router.get('/user-listing', isAuth, userCon.userListing);
router.get('/profile', isAuth, userCon.profile);

router.get('/logout', logoutCon.logout);

router.get('/blog', isAuth, blogCon.blog);
router.get('/myblog', isAuth, blogCon.myblog);

router.get('/addblog', isAuth, blogAddCon.blogAdd);
router.post('/addBlogData', upload.single('blogImg'), blogAddCon.blogAddData);

router.get('/blog-edit/:id', blogAddCon.blogEdit);
router.post('/blog-update/:id', upload.single('blogImg'), blogAddCon.blogUpdate);

router.get('/blog-delete/:id', isAuth, blogAddCon.blogDelete);

router.get('/changepassword', isAuth, changePwdCon.changePassword);
router.post('/changePasswordData', changePwdCon.changePasswordData);

router.get('/forgotPassword', changePwdCon.forgotPassword);
router.post('/forgotPasswordData', changePwdCon.forgotPasswordData);

router.get('/otp/:id', changePwdCon.otp);
router.post('/otpCheck/:id', changePwdCon.otpCheck);

router.get('/newPass/:id', changePwdCon.newPass);
router.post('/newPassWord/:id', changePwdCon.newPassWord);

// add topice
router.get("/add_TopicForm", addTopic.addToPic);
router.post("/addTopiceCon", addTopic.addTopic_Con);

// //delete topice
router.get("/deleteTopicCon/:id", addTopic.deleteTopic_Con);

//addsubtipics
router.get("/addSubTopicForm", addSubTopic.addSubToPicForm);
router.post("/addSubTopicCon", addSubTopic.addSubTopic_Con);

// delete subtopic
router.get("/deleteSubTopicForm/:id", addSubTopic.deleteSubTopic_Con);

// show topic and topics
router.get("/show_TopicseForm", addSubTopic.showTopics);



router.get("/addComment", blogAddCon.addComment_con);
router.post("/addComments", blogAddCon.commentBlog);

// routes.post("/comments", blogAddCon.commentBlog);

module.exports = router;