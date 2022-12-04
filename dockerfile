FROM node:18.12.1-slim
WORKDIR /app
COPY . /app
RUN npm i discord.js
RUN npm i @discordjs/rest
RUN npm i dotenv
RUN npm i fs
CMD ["node", "index"]