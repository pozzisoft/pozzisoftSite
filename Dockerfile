# Use Node.js 25.8.1 as the base image
FROM node:25.8.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the port Vite will use (change if needed)
EXPOSE 5000

# Start the app (use preview for Vite production preview)
CMD ["npm", "run", "preview", "--", "--port", "5000", "--host"]
