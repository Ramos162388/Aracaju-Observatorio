var fs = require('fs');
var path = require('path');
var economiaPath = path.join(__dirname, '..', 'data', 'economia.json');

function readJSON(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    console.error('Erro ao ler', filePath, e.message);
  }
  return null;
}

exports.getEconomiaData = function() {
  return readJSON(economiaPath);
};

exports.refreshEconomia = function() {
  var data = readJSON(economiaPath);
  if (data) {
    data.updatedAt = new Date().toISOString();
    try {
      fs.writeFileSync(economiaPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
      console.error('Erro ao atualizar economia:', e.message);
    }
  }
  return data;
};

exports.updateEconomiaData = function(novoData) {
  try {
    novoData.updatedAt = new Date().toISOString();
    fs.writeFileSync(economiaPath, JSON.stringify(novoData, null, 2), 'utf8');
    return novoData;
  } catch (e) {
    console.error('Erro ao salvar economia:', e.message);
    return null;
  }
};
