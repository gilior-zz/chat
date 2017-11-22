// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {enableProdMode} from '@angular/core';
import  * as socketIo from 'socket.io'
import  * as http from 'http'

import * as express from 'express';
import {join} from 'path';

``
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();




// Express server
const app = express();
const server=http.createServer(app);
const io=socketIo(server);
io.on('connection', function(){

});

// var io = socketIo(httpServer);
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main.bundle');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {Message} from './src/store/Message';
import {debug} from 'util';


const msgs: Message[] = []
for (let i = 0; i < 10; i++) {
    msgs.push({
        content: 'content' + i,
        sender: {
            id: '110922676585645565031',
            familyName: 'gishry',
            givenName: 'lior',
            imageUrl: 'https://lh6.googleusercontent.com/-0VEgI9-ezvk/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf5jiDq4JeEO6xZnSfFejGg9BoH8nA/s96-c/photo.jpg',
            Email: 'hjk',
            fullName: 'lior gishry'
        },
        time: new Date()
    })
}

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/data', (req, res) => {

    res.status(200).send(msgs);
});
app.post('/api/data', (req, res) => {

    res.status(200).send({"msgs": msgs});
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), {req});
});

// Start up the Node server
server.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});