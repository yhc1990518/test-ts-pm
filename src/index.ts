import * as express from 'express';
import { AdResponse } from './domain/AdResponse';
import { ResponseBase } from './domain/ResponseBase';
import { Ad } from './models/Ad';



const app = express(); // 用于声明服务器端所能提供的http服务

app.get('/', (req, res) => {
    res.send(__dirname);
});

app.get('/test', (req, res) => {
    res.send('这是test页面');
});

app.post('/test', (req, res) => {
    let adResponse = new AdResponse();
    adResponse.desc = '这是test的描述';
    adResponse.images = ['http://image1.com', 'httpL://image2.com'];
    adResponse.title = '这是test的标题';

    let responseBase = new ResponseBase(adResponse, 200);

    res.send(responseBase);
});

/**
 * 测试数据访问
 */
app.get('/data', async (req, res) => {
    let datas = await Ad.findAll();
    res.send(datas);
});

const server = app.listen(8888, "localhost", () => {
    console.log("服务器已启动, 地址是：http://localhost:8888");
});