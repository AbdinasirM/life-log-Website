# Life-Log Docker Compose Setup 🐳🍃📖

This repository contains a Docker Compose configuration to run the Life-Log application with MongoDB, a backend, and a frontend. Follow these steps to get the application up and running on your machine.

## Prerequisites

Before you begin, ensure you have the following:

- Git installed on your machine (for cloning the repository).
- Docker installed on your machine.

## Clone the Repository

Use Git to clone this repository to your local machine:

```bash
git clone https://github.com/AbdinasirM/life-log-docker.git

Build and Run the Docker Compose Stack
Navigate to the repository directory:
bash
Copy code
cd life-log-docker
Start the Docker Compose stack by running the following command:
bash
Copy code
docker-compose up -d
This command will build and start the Docker containers defined in the docker-compose.yml file in detached mode.

Wait for the containers to start. This may take a moment, so be patient.

Once the containers are up and running, you can access the Life-Log application in your web browser:

Frontend: http://localhost
Backend: http://localhost:5000
Stopping and Cleaning Up
To stop and remove the containers, use the following command:

bash
Copy code
docker-compose down
This will stop the containers and remove them, but it won't delete any data stored in the MongoDB volume. If you want to remove all data and volumes, use docker-compose down -v.

Additional Information
The MongoDB instance is available on localhost:27017. You can access it with a MongoDB client.

If you need to modify any configurations or environment variables, you can do so in the docker-compose.yml file.

For more details about the Life-Log application, refer to the Life-Log GitHub repository.

Enjoy using Life-Log with Docker! 🚀