FROM node:10
RUN mkdir -p /opt/app
WORKDIR /opt/app

ARG config_login__linkedin__clientId
ARG config_login__linkedin__clientSecret
ARG config_login__github__clientId
ARG config_login__github__clientSecret

ARG config_login__linkedin__clientId=$config_login__linkedin__clientId
ARG config_login__linkedin__clientSecret=$config_login__linkedin__clientSecret
ARG config_login__github__clientId=$config_login__github__clientId
ARG config_login__github__clientSecret=$config_login__github__clientSecret

ADD assets /opt/app/assets
ADD build /opt/app/build
ADD src /opt/app/src
ADD .configrc /opt/app/.configrc
ADD package.json /opt/app/package.json
ADD package-lock.json /opt/app/package-lock.json

RUN npm i
RUN npm run build:client:prod
RUN npm run build:server:prod

RUN rm -r src build
RUN rm package-lock.json

CMD [ "npm", "start" ]
