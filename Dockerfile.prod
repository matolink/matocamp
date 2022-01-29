FROM node:16-alpine
COPY package.json package-lock.json example.json /app/
WORKDIR /app/
RUN npm install
COPY src /app/src/
RUN npx next build
CMD npx next start