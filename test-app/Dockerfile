FROM node:14

WORKDIR /test-app

ENV PATH /test-app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /test-app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /test-app

CMD ng serve --host 0.0.0.0