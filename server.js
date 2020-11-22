const express = require('express')
const app = express()
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(80, () => console.log('Example app listening on port 3000!'))

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {

    const path = req.path;
    switch(path){
      case '/users':
      console.log('Name:' . req.body.name);
      res.status(200).send(validateUser(req,res));
      break;
      default: 
        res.status(200).send('Please User /users End Point');
    }
    
    };
    
    const validateUser = (req,res) => {
      if (req.method === 'GET')
      {
        console.log('you got it' . req.body.name);
        return 'You got it!' . req.body.name;
      }else if (req.method !== 'GET') {
        return 'use GET only';
      }
    }