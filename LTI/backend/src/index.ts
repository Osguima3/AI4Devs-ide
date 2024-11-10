import express from 'express';
import sequelize from './infrastructure/config/sequelize-config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err: unknown) => {
  console.error('Unable to connect to the database:', err);
});
