FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && rm -f package-lock.json && npm install

COPY . .

RUN npm run build

EXPOSE 5173

RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]


# FROM node:16

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 3005

# CMD ["npm", "start"]
