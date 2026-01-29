FROM alpine:latest

RUN apk add --no-cache dante-server

# Configuração ajustada para ambientes de container (Railway/Heroku)
RUN printf 'logoutput: stderr \n\
internal: 0.0.0.0 port = $PORT \n\
external: 0.0.0.0 \n\
socksmethod: none \n\
clientmethod: none \n\
user.privileged: root \n\
user.unprivileged: nobody \n\
client pass { from: 0.0.0.0/0 to: 0.0.0.0/0 log: error } \n\
socks pass { from: 0.0.0.0/0 to: 0.0.0.0/0 log: error } \n' > /etc/sockd.conf

# O sed garante que a variável $PORT da Railway seja escrita no config antes de iniciar
CMD sed -i "s/\$PORT/$PORT/" /etc/sockd.conf && sockd -f /etc/sockd.conf
