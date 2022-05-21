FROM nginx:alpine
COPY /dist/practica-docker-cliente /usr/share/nginx/html
EXPOSE 80