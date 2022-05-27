const app = require('./app');

app.listen(4005, '127.0.0.1', err => {
    console.log('Listen on', 4005);
})