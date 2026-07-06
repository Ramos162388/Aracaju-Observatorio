# Script de Deploy - Observatório de Aracaju
# Execute este script para enviar os arquivos para o servidor

$ServerIP = "192.168.0.114"
$ServerUser = "root"
$ServerPath = "/var/www/html/observatorio"
$LocalDistPath = "C:\Users\ytalo\Downloads\Observatório Aracaju\dist"

Write-Host "=== Deploy do Observatório de Aracaju ===" -ForegroundColor Green
Write-Host ""

# Verificar se o dist existe
if (-not (Test-Path $LocalDistPath)) {
    Write-Host "ERRO: Pasta dist não encontrada. Execute 'npm run build' primeiro." -ForegroundColor Red
    exit 1
}

Write-Host "Preparando deploy..." -ForegroundColor Yellow

# Usar SCP para copiar os arquivos (requer SSH/SCP instalado)
# Alternativa: usar WinSCP ou FileZilla

Write-Host ""
Write-Host "Arquivos prontos para deploy em: $LocalDistPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para fazer o deploy manualmente:" -ForegroundColor Yellow
Write-Host "1. Conecte-se ao servidor via SSH: ssh $ServerUser@$ServerIP" -ForegroundColor White
Write-Host "2. Crie o diretório: mkdir -p $ServerPath" -ForegroundColor White
Write-Host "3. Copie os arquivos da pasta dist para $ServerPath" -ForegroundColor White
Write-Host "4. Configure o Apache para servir os arquivos" -ForegroundColor White
Write-Host ""
Write-Host "OU use o comando SCP:" -ForegroundColor Yellow
Write-Host "scp -r `"$LocalDistPath\*`" $ServerUser`@$ServerIP`:$ServerPath" -ForegroundColor White