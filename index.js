const express = require('express');
// const app = express();
// const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

// For any other request, serve HTML in DIT environment (cloud env)
/**
 * 
 * @param {
 * } app 
 */
exports.build = function(app){
  if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(
      path.join(__dirname + '/../../build/index.html'),
      'utf8'
    );
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
  }
  // For serving built static js/css files
  app.use(
    '/static',
    express.static(path.join(__dirname, '/../../build/static'))
  );
}
