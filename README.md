# Simple MERN_Stack_CRUD_Application

## Part - 01

1.Project Folder Creation.

2.Express Server Configuration.

3.MongoDb Configuration.

4.REST API Creation (GET,POST,PUT,DELETE).

5.Testing the APIs using Postman.

<hr/>

1.Project Folder Creation.

npm init -y make the package with default values

<hr/>

2.Express Server Configuration.

install the packages

npm i express nodemon cors mongoose body-parser

1. express
2. nodemon - server is automatically restart when the changes are detected
   use the nodemon - change the script in package.json file
   "start": "nodemon server.js"

3. cors
4. mongoose - communicate to the mongoDB Atlas
5. body-parser

**run the server - npm start**

<hr/>

3.MongoDb Configuration.

1. Create a project
2. Create a cluster
3. Configure Database Access
4. Configure Network Access - readWriteAnyDatabase
   - Add current IP address - Production level
   - Allow access from anywhere - Recommend for this app

<hr/>

4.REST API Creation (GET,POST,PUT,DELETE).

- Create a Model
-
