FROM node:alpine
# Create app directory
RUN mkdir -p /usr/src/vbreddy-dev
WORKDIR /usr/src/vbreddy-dev
# Install app dependencies
COPY package.json /usr/src/vbreddy-dev/
RUN npm install
# Bundle app source
COPY . /usr/src/vbreddy-dev
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]