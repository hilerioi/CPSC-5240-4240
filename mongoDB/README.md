This directory contains two express servers:
* AppServer.js - Combined Node/Express web server w/ Mongo Access
* Server.js - Encapsulated Node/Express web server w/ Mongo Access

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
>use admin
>db.createUser( {user: "dbAdmin", pwd: "test", roles: [ "readWriteAnyDatabase", "dbAdminAnyDatabase", "clusterAdmin"] });
>load ('createTransportation.mongo2.js');
>exit

//Starts Node/Express server on port 8080
3. node Server.js or node AppServer.js 

To test server #3, try the following URL on the browser, while the server is running:
* http://localhost:8080/all
* http://localhost:8080/vehicle/ferrari
* http://localhost:8080/search?var1=120mph