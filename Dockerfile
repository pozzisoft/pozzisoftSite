# Use Node.js 25.8.1 as the base image
FROM node:25.8.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./


# Install dependencies and serve
RUN npm install && npm install serve

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the port Vite will use (change if needed)
EXPOSE 5000

# Start the app with serve for production
CMD ["npx", "serve", "-s", "dist", "-l", "5000"]
