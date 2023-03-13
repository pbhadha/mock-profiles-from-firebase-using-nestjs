# syntax = docker/dockerfile:1.2
FROM node
ENV NODE_ENV=production
#WORKDIR /usr/src/app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
#RUN npm install --production --silent && mv node_modules ../
RUN npm install --production --silent
COPY . .

#RUN chown -R node /usr/src/app
#USER node

RUN ["npm", "run", "build"]
EXPOSE 3000
CMD ["npm", "run", "start:prod"]