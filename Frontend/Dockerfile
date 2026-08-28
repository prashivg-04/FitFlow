# ---------- Stage 1 : Build React App ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_NODE_SERVER_URL
ENV VITE_NODE_SERVER_URL=$VITE_NODE_SERVER_URL

RUN npm run build


# ---------- Stage 2 : Serve with Nginx ----------
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]