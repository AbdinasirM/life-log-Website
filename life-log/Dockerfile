# Stage 1: Build the Angular app
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

# Install the Angular CLI globally
RUN npm install -g @angular/cli

RUN npm install

COPY . .

# Build the Angular app for production
RUN ng build --configuration=production --output-path=/app/dist

# Stage 2: Use NGINX to serve the app
FROM nginx:latest

# Copy the build output from the previous stage into the NGINX HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (the default port for HTTP)
EXPOSE 80

# NGINX is automatically started by the base image, so no need for a CMD or ENTRYPOINT
