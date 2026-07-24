var fs = require('fs');
var path = require('path');
var tokensPath = path.join(__dirname, '..', 'data', 'tokens.json');

var defaultTokens = { externo: null };

function loadTokens() {
  try {
    if (fs.existsSync(tokensPath)) {
      return JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
    }
  } catch (e) {
    console.error('Erro ao ler tokens:', e.message);
  }
  return { ...defaultTokens };
}

function saveTokens(data) {
  try {
    fs.writeFileSync(tokensPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Erro ao salvar tokens:', e.message);
    return false;
  }
}

exports.getToken = function(servico) {
  var tokens = loadTokens();
  return tokens[servico] || null;
};

exports.setToken = function(servico, token) {
  var tokens = loadTokens();
  tokens[servico] = token;
  return saveTokens(tokens);
};

exports.listServicos = function() {
  return Object.keys(loadTokens());
};
