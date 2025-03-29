FROM nginx:1.15.0-alpine

# deletando o arquivo de conf padrao
RUN rm /etc/nginx/conf.d/default.conf
# copiando meu arquivo de conf para dentro da pasta de conf do ngnix
COPY nginx.conf /etc/nginx/conf.d