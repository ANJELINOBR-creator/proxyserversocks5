FROM alpine:latest

# Instala o servidor Dante
RUN apk add --no-cache dante-server

# Configuração básica do Dante
RUN printf 'logoutput: stderr \n\
internal: 0.0.0.0 port = $PORT \n\
external: eth0 \n\
socksmethod: none \n\
clientmethod: none \n\
user.privileged: root \n\
user.unprivileged: nobody \n\
client pass { from: 0.0.0.0/0 to: 0.0.0.0/0 log: error } \n\
socks pass { from: 0.0.0.0/0 to: 0.0.0.0/0 log: error } \n' > /etc/sockd.conf

# Comando para rodar substituindo a variável de porta da Railway
CMD sed -i "s/\$PORT/$PORT/" /etc/sockd.conf && sockd -f /etc/sockd.conf
