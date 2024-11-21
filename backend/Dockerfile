FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY prisma ./prisma
RUN npx prisma generate --schema=prisma/schema1.prisma
RUN npx prisma generate --schema=prisma/schema2.prisma

COPY . .

ENV SERVER_ADDRESS="http://127.0.0.1:3006"
ENV PORT=3006
ENV SERVER="http://127.0.0.1/"
ENV DATABASE_URL_1="mysql://root:root@localhost:3306/video_generator"
ENV DATABASE_URL_2="mysql://root:root@localhost:3306/olybible"

EXPOSE $PORT

CMD ["node", "index.js"]
