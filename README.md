This awesome project made as part of Zero-To-Mastery Academy course.
The app allows you to register and sign in, then you can add url link to the image and voi-la - it recognizes face there!

This is the frontend part of the project.

The project quick video demo is here: https://www.youtube.com/watch?v=n8vUdQlrNrI

Theproject backend part is here: https://github.com/shanizlo/faceSmartBrainApi

Frontend made with:
* React
* Clarifai API for face recognition
* Particles package for background animation

Backend made with:
* Nodejs
* express, cors for apis and endpoints
* bcrypt for password hashing
* postgresql for database
* knex for db queries

Running frontend:
Clone this repository
Run npm install
Run npm start

In order to have the backend of this project running, you need to have PostgreSQL installed. Steps involved are as follows:
Clone backend repository
Run npm install
Now download & install PostgreSQL (for example with brew)
First create a DB using the command createdb smart-brain;.
You will have to create two tables one for user & the other is login.
CREATE TABLE users (id serial PRIMARY KEY, name VARCHAR(100), email text UNIQUE NOT NULL, entries BIGINT DEFAULT 0, joined TIMESTAMP NOT NULL);
CREATE TABLE login (id serial PRIMARY KEY, hash VARCHAR(100) NOT NULL, email text UNIQUE NOT NULL);
Run npm start. This also assumes that your frontend, i.e., faceSmartBrain is running simultaneously.
