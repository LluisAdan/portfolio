# ---- build frontend ----
FROM node:20-alpine AS web-build
WORKDIR /app

COPY web/package*.json ./web/
RUN cd web && npm ci
COPY web ./web
RUN cd web && npm run build

# ---- build backend ----
FROM node:20-alpine AS api
WORKDIR /app

COPY api/package*.json ./api/
RUN cd api && npm ci --omit=dev

COPY api ./api
COPY --from=web-build /app/web/dist ./web/dist

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["node", "api/app.js"]