const app = require('./app');
const config = require('./config');

async function startServer() {
  app.listen(process.env.PORT || config.app.port, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Server Up: port ${config.app.port}`);
  });
}

startServer();