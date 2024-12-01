const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
    })
    .then(() => console.log('Connected to the database successfully'))
    .catch((error) => console.error('Database connection failed:', error));
}

module.exports = connectToDb;
