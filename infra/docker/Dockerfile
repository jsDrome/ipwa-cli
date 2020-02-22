FROM node:10
RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD src /opt/app/src
ADD build /opt/app/build
ADD .configrc /opt/app/.configrc
ADD app.json /opt/app/app.json
ADD babel.config.js /opt/app/babel.config.js
ADD package.json /opt/app/package.json
ADD package-lock.json /opt/app/package-lock.json

RUN npm i
RUN npm run build:client:prod
RUN npm run build:server:prod

RUN rm -r src build
RUN rm package-lock.json

CMD [ "npm", "start" ]
