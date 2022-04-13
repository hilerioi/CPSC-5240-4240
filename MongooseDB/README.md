This directory contains one express servers:
* Server.js + App.js - Encapsulated Node/Express web server w/ Mongo Access

File content:
* Server.ts - based http server
* App.ts - express server
* DbClient.ts - mongo db client
* DB population files are stored on the createDB file

Make sure you install the node.js server and Mongo DB sofware from the side.  Ensure your path variable contains the execution path of the node.js and mongo binary.

To execute the server db and then the node server with the following commands:

//create the db file directory
0. md db

//Starts the DB server on port 3000
1. start.toDoSample.cmd

//populate the DB server with sample data
2. startdbClient.toDoSample2.cmd
>load ('createDB/createToDoSampleData.js');
>load ('createDB/createAdminUser.js');
>exit

//install npm packages
3. npm install

//Compile Node/Express Server.  You may need to go to all subdirectories and compile the ts files.
4. tsc AppServer.ts

//Execute Node/Express server on port 8080
5. node AppServer.js 

To test server #3, try the following URL on the browser, while the server is running:
* http://localhost:8080/
* http://localhost:8080/app/list
* http://localhost:8080/app/list/1
