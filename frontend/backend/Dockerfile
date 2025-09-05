# -------- Stage 1: Build Stage --------
FROM node:23 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Optional: Run build step if you have one (e.g., TypeScript or bundlers)
# RUN npm run build

# -------- Stage 2: Production Stage --------
FROM node:23-slim AS production

# Set working directory
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

# Expose the port your app runs on
EXPOSE 5000

# Start the server
CMD ["node", "src/index.js"]
