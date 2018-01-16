# 
FROM node:6
# Go to app directory
WORKDIR /usr/src/app

# Copy source files
COPY . /usr/src/app

# COPY package-lock.json
COPY package-lock.json /usr/src/app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
