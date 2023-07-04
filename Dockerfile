FROM node
COPY . /var/www
WORKDIR /var/www
EXPOSE 5000
CMD ["npm","run","start"]