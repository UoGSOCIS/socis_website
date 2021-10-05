# How to Run

This document will outline how to download and run this application for development.

## Prerequisites

- Web development
- Javascript
- React.js
- Node.js
- HTML
- CSS
- Docker [optional]

## Resources

- [React.js documentation](https://reactjs.org/)
- [Node.js download](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

## Cloning the repo

Clone the repository to your local computer:

```bash
git clone https://github.com/UoGSOCIS/socis_website.git
``` 

## Run the app

Download the required dependencies

```bash
yarn install
```

Run the application locally

```bash
yarn start
``` 

This will start the application on `http://localhost:3000/`. Use this mode for development.

## Build and run using Docker

Build

```bash
docker build -t socis-web .
```

Run the application

```bash
docker run -p 8080:80 socis-web:latest
```

This will start the application on `http://localhost:8080/`. Use this mode for testing and deployment. This mode does not have hot reloading.
