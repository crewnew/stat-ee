# Fetching the minified node image on apline linux
FROM node:18.16.0-alpine3.17

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /stat-ee

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "npm", "start" ]

# Exposing server port
EXPOSE 8080