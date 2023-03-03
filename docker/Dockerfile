FROM node:18.14

ENV WORK_DIR /usr/src/app
ENV APP_PORT 8880

WORKDIR $WORK_DIR

USER root

COPY ./package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE $APP_PORT

CMD ["npm", "run", "start:prod"]