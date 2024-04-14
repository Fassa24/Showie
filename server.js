import app from './app';
import http from 'http';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
    console.log(`Server running on http://localhost:${port}`);
});
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    switch (error.code) {
        case 'EACCES':
            console.error(`${port} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});