const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

app.get('/api/ver', (req, res) => {

    res.send("hola gente");

});


app.post('/api/pedido', (req, res) => {
  const pedido = req.body; 

  const pedidoRecibido = req.body; 


  res.status(200).json({ pedidoRecibido });

  res.status(200).json({ message: 'Pedido recibido con éxito' });
});


const port = 3000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
