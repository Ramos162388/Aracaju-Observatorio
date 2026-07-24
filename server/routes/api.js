var express = require('express');
var router = express.Router();
var dataFetcher = require('../services/data-fetcher');
var tokenManager = require('../services/token-manager');

function normalizeEconomiaData(data) {
  if (!data) return data;
  if (data.pages) return data;
  var oldPages = [];
  var pageMap = {
    stats: { id: 1, title: 'Visão Geral', icon: 'chart', description: 'Principais indicadores macroeconômicos de Aracaju' },
    sectors: { id: 2, title: 'Crescimento Setorial', icon: 'trending', description: 'Variação percentual na abertura de novas empresas por setor' },
    indicators: { id: 3, title: 'Indicadores Econômicos', icon: 'bar', description: 'Taxas e valores referenciais da economia municipal' },
    quarterlyTrend: { id: 4, title: 'Tendência Trimestral', icon: 'line', description: 'Evolução trimestral do registro de novas empresas' },
    jobsBySector: { id: 5, title: 'Mercado de Trabalho', icon: 'users', description: 'Geração de empregos formais por setor' },
    publicFinances: { id: 6, title: 'Finanças Públicas', icon: 'dollar', description: 'Receita e despesa municipal' },
    creditData: { id: 7, title: 'Investimentos & Crédito', icon: 'bank', description: 'Microcrédito, financiamentos e investimentos privados' },
    yearlyComparison: { id: 8, title: 'Comparativo Anual', icon: 'calendar', description: 'Evolução ano a ano dos principais indicadores' }
  };
  Object.keys(pageMap).forEach(function(key) {
    if (data[key]) {
      var pageDef = pageMap[key];
      var entry = { id: pageDef.id, title: pageDef.title, icon: pageDef.icon, description: pageDef.description };
      entry[key] = data[key];
      if (key === 'stats' && data.insight) entry.insight = data.insight;
      if (key === 'jobsBySector' && data.totalSaldo) entry.totalSaldo = data.totalSaldo;
      if (key === 'creditData' && data.totalContratacoes) entry.totalContratacoes = data.totalContratacoes;
      oldPages.push(entry);
    }
  });
  if (oldPages.length === 0) return data;
  return { pages: oldPages, totalPages: oldPages.length, updatedAt: data.updatedAt, source: data.source || 'legacy' };
}

router.get('/economia/dashboard', function(req, res) {
  var data = dataFetcher.getEconomiaData();
  if (!data) {
    return res.status(500).json({ error: 'Dados indisponiveis' });
  }
  data = normalizeEconomiaData(data);
  var page = parseInt(req.query.page, 10) || null;
  if (page && data.pages) {
    var found = data.pages.find(function(p) { return p.id === page; });
    if (!found) {
      return res.status(404).json({ error: 'Pagina nao encontrada', totalPages: data.totalPages });
    }
    return res.json({
      page: found,
      totalPages: data.totalPages,
      currentPage: page,
      updatedAt: data.updatedAt,
      source: data.source
    });
  }
  res.json(data);
});

router.post('/economia/dashboard', function(req, res) {
  var apiToken = req.headers['x-api-token'];
  if (!apiToken || apiToken !== tokenManager.getToken('externo')) {
    return res.status(401).json({ error: 'Token invalido ou ausente' });
  }
  if (!req.body || !req.body.pages) {
    return res.status(400).json({ error: 'Corpo invalido. Envie { pages: [...] }' });
  }
  var result = dataFetcher.updateEconomiaData(req.body);
  res.json({ success: true, data: result });
});

router.post('/economia/refresh', function(req, res) {
  var data = dataFetcher.refreshEconomia();
  res.json({ success: true, data: data });
});

router.get('/token', function(req, res) {
  res.json({ servicos: tokenManager.listServicos() });
});

router.post('/token', function(req, res) {
  var { servico, token } = req.body;
  if (!servico || !token) {
    return res.status(400).json({ error: 'Envie { servico, token }' });
  }
  tokenManager.setToken(servico, token);
  res.json({ success: true, servico: servico });
});

router.get('/health', function(req, res) {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;
