# ============================================================
# SCRIPT DE DEPLOY - Observatorio de Aracaju
# ============================================================

$envFile = "C:\Users\macru\Downloads\Aracaju-Observatorio-main\env\.env"
$localDistPath = "C:\Users\macru\Downloads\Aracaju-Observatorio-main\dist"

Get-Content $envFile | ForEach-Object {
    if ($_ -match "^\s*([^#].+?)\s*=\s*(.+?)\s*$") {
        $key = $matches[1]
        $value = $matches[2]
        if ($key -eq "SSH_HOST") { $script:serverIP = $value }
        if ($key -eq "SSH_USER") { $script:serverUser = $value }
    }
}

$serverPath = "/var/www/html/observatorio"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOY - Observatorio de Aracaju" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path $localDistPath)) {
    Write-Host "ERRO: Pasta 'dist' nao encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro." -ForegroundColor Yellow
    exit 1
}

Write-Host "[1/4] Build encontrada..." -ForegroundColor Yellow
$arquivos = Get-ChildItem -Path $localDistPath -Recurse
Write-Host "  -> $($arquivos.Count) arquivos" -ForegroundColor Green

Write-Host ""
Write-Host "[2/4] Conectando ao servidor $serverIP..." -ForegroundColor Yellow
ssh ${serverUser}@${serverIP} "mkdir -p $serverPath"
if ($LASTEXITCODE -ne 0) {
    Write-Host "  -> Erro ao conectar. Verifique senha/chave SSH." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[3/4] Copiando arquivos..." -ForegroundColor Yellow
scp -r "$localDistPath\*" "${serverUser}@${serverIP}:${serverPath}/"

if ($LASTEXITCODE -eq 0) {
    Write-Host "  -> Arquivos copiados com sucesso!" -ForegroundColor Green
} else {
    Write-Host "  -> Erro ao copiar arquivos." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[4/4] Configurando permissoes..." -ForegroundColor Yellow
ssh ${serverUser}@${serverIP} "chmod -R 755 $serverPath"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  DEPLOY CONCLUIDO COM SUCESSO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Acesse: https://observatorio.aracaju.se.gov.br/" -ForegroundColor Cyan
Write-Host ""
