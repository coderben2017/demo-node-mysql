import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import connectHistoryApiFallback from "connect-history-api-fallback";

const app = express();

app.use('/', connectHistoryApiFallback());                          // 使用前端路由
app.use('/', express.static(path.join(__dirname, '..', 'client'))); // 使用静态前端资源
app.use(bodyParser.urlencoded({extended: false}));                  // 添加POST请求的body解析
app.use(bodyParser.json());

export default app;