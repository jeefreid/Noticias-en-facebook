const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
