import expresss from 'express';

const app = expresss();
app.use(expresss.json());

app.get('/', (req, res) => {
  res.json({ status: 'Server is running 🚀'})
});

export default app;