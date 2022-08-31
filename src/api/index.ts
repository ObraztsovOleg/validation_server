const http = require('http');
const Validation_app = require('./app').default;
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = Validation_app(bodyParser, cors);
const HTTP_PORT = config.get('validation_service_data.port') || 3500;

try {
  http.createServer(app).listen(HTTP_PORT);
} catch(e) {
  console.log(e);
}