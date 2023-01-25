FROM node:latest
# Create app directory
WORKDIR /myapp
COPY . .
RUN npm install
RUN npm install concurrently
RUN npm install json-server
ENV PATH="./node_modules/.bin:$PATH"
EXPOSE 3000
EXPOSE 5000
CMD ["npm", "run", "dev"] 