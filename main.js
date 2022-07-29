import express from 'express';
import cors from 'cors';
import mainRoute from './router.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', mainRoute);

app.use((req, res, next) => {
    res.sendStatus(404); // 경로를 찾을 수 없을 때 404 response를 보냄
})

app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500) // 에러가 발생했을 때 500 response를 보냄
})
app.listen(process.env.PORT || 8080); // 8080포트로 출력