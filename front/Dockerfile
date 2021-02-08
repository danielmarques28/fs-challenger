FROM node:14-alpine

EXPOSE 8000

RUN mkdir /code

WORKDIR /code

ADD . /code

RUN apk add yarn

RUN yarn

CMD ["yarn", "start"]
