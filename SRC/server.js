const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.listen(PORT, () => { console.log(`Servidor escuchando en el puerto ${PORT}`); }); 