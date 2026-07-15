# Guia de Deploy - Observatório de Aracaju

## Pré-requisitos no Servidor

### 1. Instalar Apache (se não estiver instalado)
```bash
apt update
apt install apache2 -y
systemctl enable apache2
systemctl start apache2
```

### 2. Criar diretório do site
```bash
mkdir -p /var/www/html/observatorio
```

### 3. Configurar Apache
```bash
# Criar configuração do site
cat > /etc/apache2/sites-available/observatorio.conf << 'EOF'
<VirtualHost *:80>
    ServerName observatorio.aracaju.se.gov.br
    ServerAlias www.observatorio.aracaju.se.gov.br
    DocumentRoot /var/www/html/observatorio
    
    <Directory /var/www/html/observatorio>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # Habilitar compressão
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
    </IfModule>
    
    # Cache de arquivos estáticos
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType image/jpg "access plus 1 year"
        ExpiresByType image/jpeg "access plus 1 year"
        ExpiresByType image/gif "access plus 1 year"
        ExpiresByType image/png "access plus 1 year"
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
    </IfModule>
    
    ErrorLog ${APACHE_LOG_DIR}/observatorio_error.log
    CustomLog ${APACHE_LOG_DIR}/observatorio_access.log combined
</VirtualHost>
EOF
```

### 4. Ativar configuração
```bash
a2ensite observatorio.conf
a2enmod deflate
a2enmod expires
systemctl reload apache2
```

### 5. Configurar DNS
Aponte o domínio `observatorio.aracaju.se.gov.br` para o IP `192.168.0.114` ou `177.39.63.61`.

---

## Executar o Deploy

### Opção 1: Usando o script PowerShell
```powershell
cd "C:\Users\ytalo\Downloads\Observatório Aracaju"
.\deploy.ps1
```

### Opção 2: Usando o script Batch
```
Clique duas vezes em deploy.bat
```

### Opção 3: Comandos manuais
```bash
# No seu computador ( PowerShell ou CMD )
scp -r dist\* root@192.168.0.114:/var/www/html/observatorio/

# No servidor
ssh root@192.168.0.114
chmod -R 755 /var/www/html/observatorio
chown -R www-data:www-data /var/www/html/observatorio
```

---

## Verificar Deploy

1. Acesse: https://observatorio.aracaju.se.gov.br/
2. Verifique se todas as páginas funcionam
3. Teste a responsividade (mobile/desktop)

---

## Solução de Problemas

### Erro 403 Forbidden
```bash
chmod -R 755 /var/www/html/observatorio
chown -R www-data:www-data /var/www/html/observatorio
```

### Erro 404 Not Found
Verifique se o Apache está apontando para o diretório correto:
```bash
cat /etc/apache2/sites-available/observatorio.conf
```

### Página em branco
Verifique os logs:
```bash
tail -f /var/log/apache2/observatorio_error.log
```