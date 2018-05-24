import app from 'config/server';
import * as addUserARoutes from 'app/routes/user';

addUserARoutes(app);

app.listen(3000, 'localhost', () => {
  console.log('server start on the localhost:3000');
});