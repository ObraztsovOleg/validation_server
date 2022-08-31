const { Router } = require('express');
const Router_validation = require('./router/router').default;
const express = require('express');

export default (bodyParser: any, cors: any) => {
    const app = express();
    const router = new (Router as any);

    app
        .use(cors())
        .use(express.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use('/api/', Router_validation(router))
  
    return app;
}