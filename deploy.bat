@echo off
REM ============================================
REM DEPLOY - Observatório de Aracaju
REM Execute este arquivo no seu computador
REM ============================================

echo.
echo ========================================
echo   DEPLOY - Observatório de Aracaju
echo ========================================
echo.

REM Verificar se a pasta dist existe
if not exist "dist\" (
    echo ERRO: Pasta 'dist' nao encontrada!
    echo Execute 'npm run build' primeiro.
    pause
    exit /b 1
)

echo [1/3] Preparando deploy...
echo.

echo [2/3] Copiando arquivos para o servidor...
echo.
echo IMPORTANTE: Voce precisara digitar a senha quando solicitado
echo.

scp -r dist\* root@192.168.0.114:/var/www/html/observatorio/

if %errorlevel% neq 0 (
    echo.
    echo ERRO ao copiar arquivos!
    pause
    exit /b 1
)

echo.
echo [3/3] Configurando permissoes...
echo.

ssh root@192.168.0.114 "chmod -R 755 /var/www/html/observatorio && chown -R www-data:www-data /var/www/html/observatorio"

echo.
echo ========================================
echo   DEPLOY CONCLUIDO!
echo ========================================
echo.
echo Acesse: https://observatorio.aracaju.se.gov.br/
echo.
pause