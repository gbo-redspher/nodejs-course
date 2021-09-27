# ---------- Base ----------
FROM node:lts-alpine AS base

ENV PORT=5000

# Create app directory
WORKDIR /app

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
FROM base AS builder

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .babelrc.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production instead

# Bundle app source
COPY . .

RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# ---------- Release ----------
FROM base AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER node

EXPOSE 5000
CMD [ "node", "./dist/index.js" ]