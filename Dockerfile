FROM mhart/alpine-node

WORKDIR /usr/app

COPY package.json .

COPY . .

RUN yarn install

# RUN ["chmod", "+x", "./scripts/start.sh"]