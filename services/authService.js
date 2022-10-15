const bcrypt = require('bcrypt');
const User = require('../models/User');

async function register(username, password) {
    const existing = await User.findOne({ username });
    
    if (existing) {
        throw new Error('Username is taken');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        username,
        hashedPassword
    });
    
    return {
        username,
        roles: user.roles
    };
}

async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return {
        _id: user._id,
        username: user.username,
        roles: user.roles
    };
}

function createSession({ _id, email, username}) {
    const payload = {
        _id,
        email,
        username
    };
    
    return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}


module.exports = {
    register,
    login,
    verifyToken
}