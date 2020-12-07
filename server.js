const express = require('express');
const helmet = require("helmet");
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const login = require('./controllers/login');
const liked = require('./controllers/liked');
const userliked = require('./controllers/userliked');
const tracksupdate = require('./controllers/tracksupdate');
const likedcheck = require('./controllers/likedcheck');
const deleteliked = require('./controllers/deleteliked');
const gettracks = require('./controllers/gettracks');
const profile = require('./controllers/profile');
const auth = require('./controllers/authorization');
const dotenv = require('dotenv').config();

const db= knex({
    client: process.env.DB_CLIENT,
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DATABASE
    }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());


app.post('/register', (req, res)=>{register.handleRegister(req, res, db, bcrypt)})

app.post('/login', login.loginAuthentication(db, bcrypt))

app.post('/liked', auth.requireAuth, (req, res)=>{liked.handleLiked(req, res,db, bcrypt)})

app.post('/userliked', auth.requireAuth, (req, res)=>{userliked.handleUserLiked(req, res, db, bcrypt)})

app.post('/tracksupdate', auth.requireAuth, (req, res)=>{tracksupdate.handleTracksUpdate(req, res, db, bcrypt)})

app.post('/likedcheck', auth.requireAuth, (req, res)=>{likedcheck.handleLikedCheck(req, res, db, bcrypt)})

app.post('/deleteliked', auth.requireAuth, (req, res)=>{deleteliked.handleDeleteLiked(req, res, db, bcrypt)})

app.get('/', auth.requireAuth, (req, res)=>{gettracks.handleGetTracks(req, res, db, bcrypt)})

app.get('/profile/:id', auth.requireAuth, (req, res) => {profile.handleProfileGet(req, res, db, bcrypt)})

   
app.listen(3001);