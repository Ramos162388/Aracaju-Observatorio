# ============================================================
# SCRIPT DE DEPLOY - Observatório de Aracaju
# Execute este script no seu computador local
# ============================================================

$ServerIP = "192.168.0.114"
$ServerUser = "root"
$ServerPath = "/var/www/html/observatorio"
$LocalDistPath = "C:\Users\ytalo\Downloads\Observatório Aracaju\dist"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOY - Observatório de Aracaju" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se a pasta dist existe
if (-not (Test-Path $LocalDistPath)) {
    Write-Host "ERRO: Pasta 'dist' não encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro." -ForegroundColor Yellow
    exit 1
}

Write-Host "[1/4] Verificando pasta de build..." -ForegroundColor Yellow
$arquivos = Get-ChildItem -Path $LocalDistPath -Recurse
Write-Host "  -> $($arquivos.Count) arquivos encontrados" -ForegroundColor Green

Write-Host ""
Write-Host "[2/4] Conectando ao servidor $ServerIP..." -ForegroundColor Yellow
Write-Host "  -> IMPORTANTE: Você precisará inserir a senha SSH quando solicitado" -ForegroundColor Magenta

# Criar diretório remoto
ssh $ServerUser@$ServerIP "mkdir -p $ServerPath"

Write-Host ""
Write-Host "[3/4] Copiando arquivos para o servidor..." -ForegroundColor Yellow

# Copiar arquivos via SCP
scp -r "$LocalDistPath\*" "${ServerUser}@${ServerIP}:${ServerPath}/"

if ($LASTEXITCODE -eq 0) {
    Write-Host "  -> Arquivos copiados com sucesso!" -ForegroundColor Green
} else {
    Write-Host "  -> Erro ao copiar arquivos. Verifique a conexão." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[4/4] Configurando permissões..." -ForegroundColor Yellow

# Ajustar permissões no servidor
ssh $ServerUser@$ServerIP "chmod -R 755 $ServerPath && chown -R www-data:www-data $ServerPath"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  DEPLOY CONCLUÍDO COM SUCESSO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Acesse: https://observatorio.aracaju.se.gov.br/" -ForegroundColor Cyan
Write-Host ""