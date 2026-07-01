const express = require('express');
const app = express();
const PORT = 3000;
const socialRouter = require('./routers/social');

// Middleware per leggere JSON
app.use(express.json());
app.use('/social', socialRouter);

// Rotta di test
app.get('/', (req, res) => {
  res.send('Server Express attivo!');
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
