FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD src /opt/app/src
ADD build /opt/app/build
ADD templates /opt/app/templates
ADD .jsdromerc /opt/app/.jsdromerc
ADD babel.config.js /opt/app/babel.config.js
ADD package.json /opt/app/package.json
ADD package-lock.json /opt/app/package-lock.json
ADD webpack.config.js /opt/app/webpack.config.js

RUN npm i --no-optional
RUN npm run build:client:prod
RUN npm run build:server:prod

RUN rm -r src build templates
RUN rm package.json package-lock.json babel.config.js webpack.config.js

EXPOSE 5000

CMD [ "node", "_dist" ]