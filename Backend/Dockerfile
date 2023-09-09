# Use an official Node.js runtime as the base image (choose an appropriate Node.js version)
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install application dependencies (avoid using "RUN npm install" separately)
# This step is combined with the copying of package files to make use of Docker's layer caching
RUN npm install --production

# Change the working directory to the "src" folder where app.js is located
WORKDIR /app/src

# Copy the rest of the application source code to the "src" folder inside the container
COPY . .

# Expose the port that your application will listen on (if needed)
EXPOSE 5000

# Define the command to run when the container starts (use "node" directly)
CMD ["node", "src/app.js"]
