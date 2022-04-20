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
<br>

//create the db file directory
<br>
0. md db
<br>

//Starts the DB server on port 3000
1. start.toDoSample.cmd

//populate the DB server with sample data
<br>
2. startdbClient.toDoSample2.cmd
<br>
* use admin;
* db.createUser( {user: "dbAdmin", pwd: "test", roles: [ "readWriteAnyDatabase", "dbAdminAnyDatabase", "clusterAdmin"] });
* load ('createTransportation.mongo2.js');
* exit
<br>

//Starts Node/Express server on port 8080
<br>

3. node Server.js or node AppServer.js 
<br>

To test server #3, try the following URL on the browser, while the server is running:
* http://localhost:8080/all
* http://localhost:8080/vehicle/ferrari
* http://localhost:8080/search?var1=120mph