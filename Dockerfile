FROM node:16-alpine
COPY package.json package-lock.json /app/
WORKDIR /app/
RUN npm install
CMD npx next dev -p 80