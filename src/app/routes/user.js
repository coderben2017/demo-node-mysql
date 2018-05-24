import * as createConn from '../../config/conn';

export default (app) => {
  const conn = createConn();

  app.get('/api/users', (req, res) => {
    conn.query('SELECT * FROM user', (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });

  app.post('/api/add', (req, res) => {
    const {username, password} = req.body;
    conn.query('INSERT INTO user SET ?', {
      username,
      password
    }, (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
};