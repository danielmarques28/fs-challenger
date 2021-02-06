FROM node:14-alpine

EXPOSE 8000

RUN mkdir /code

WORKDIR /code

ADD . /code

RUN apk update && apk add yarn && apk cache clean

RUN yarn

CMD ["yarn", "start"]
