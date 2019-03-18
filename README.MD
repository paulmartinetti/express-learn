-- Part 1 ---
npm init
npm i express --save
node -v
node index.js to run server

// so we don't have to keep rebooting
npm i nodemon -g
(cd to home dir to run nodemone)
nodemon (this command launches server)

// express generator sets up project structure
npm install -g express-generator
express project (command to launch)
--NOTE - this installed more files than the course was designed to do.
--this project was moved to gitignored template-exp-gen
--Zenva course is creating structure from scratch:

// 1. moved all routes code to routes/index.js

// 2 . installing hogan templating (jade was already here from express-generator)
npm install hjs --save

// 3 