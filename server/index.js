var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var path = require('path');
var apiRouter = require('./routes/api');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('short'));

app.use('/api', apiRouter);

app.use(function(err, req, res, next) {
  console.error('Erro:', err.message);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(PORT, '127.0.0.1', function() {
  console.log('API do Observatorio rodando na porta ' + PORT);
});
