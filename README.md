# Observatório de Aracaju

Portal de transparência e dados públicos da Prefeitura de Aracaju.

## Estrutura do Projeto

```
ObservatorioAracaju/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React (Header, Footer, Cards)
│   ├── pages/           # Páginas (Saúde, Educação, Turismo, Economia)
│   ├── styles/          # CSS global
│   ├── App.tsx          # Componente principal
│   └── index.tsx        # Entry point
├── dist/                # Build de produção (pronto para deploy)
├── webpack.config.js    # Configuração do Webpack
└── package.json         # Dependências do projeto
```

## Setores Disponíveis

- **Saúde** - Dados de unidades de saúde, vacinação e atendimentos
- **Educação** - Escolas, matrículas e indicadores educacionais
- **Turismo** - Atrativos turísticos e visitantes
- **Economia** - PIB, empresas e empreendedorismo

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm start

# Build de produção
npm run build

# Deploy (após build)
# Execute o script deploy.ps1 ou copie manualmente a pasta dist
```

## Deploy no Servidor

1. Execute `npm run build`
2. Copie o conteúdo da pasta `dist/` para o servidor
3. Configure o Apache/Nginx para servir os arquivos

## Acesso

- **GitHub:** https://github.com/Ramos162388/Aracaju-Observatorio
- **Produção:** https://observatorio.aracaju.se.gov.br/

## Tecnologias

- React 18
- Webpack 5
- CSS personalizado (sem framework externo)
- Heroicons React