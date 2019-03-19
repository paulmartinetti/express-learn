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

// 2. installing hogan templating (jade was already here from express-generator)
npm install hjs --save

// 3. parse arrays in hjs

// 4. forms and comments via POST

// 5. parse data for display
 npm i body-parser --save
 
// 6. middleware - 19mar19
added a timestamp var to req, read it everywhere thanks to next()

// 7. login tool, passes success login to home page conditional renderer

// 8. handle failed login