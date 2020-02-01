FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD src /opt/app/src
ADD build /opt/app/build
ADD .jsdromerc /opt/app/.jsdromerc
ADD .babelrc.js /opt/app/.babelrc.js
ADD package.json /opt/app/package.json
ADD package-lock.json /opt/app/package-lock.json

RUN npm i --no-optional
RUN npm run build:client:prod
RUN npm run build:server:prod

RUN rm -r src build
RUN rm package.json package-lock.json .babelrc.js

EXPOSE 5000

CMD [ "node", "_dist" ]