
-src
    index.js
    models/
    controllers/
    middleware/
    services/
    utils/
    config/
    repository/
- tests/ [later]

#welcome to flight service

#project setup
-clone the project on your local 
-execute npm install on the same path as of your root directory

--Create a '.env' file in the root directory and add all thethe following enviromemnt varibale
        --PORT = '30000'
-Inside the 'src/config folder'create a new file config.json and the following piece of code 
--
{
  "development": {
    "username": "root",
    "password": "your db password",
    "database": "your db login name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}




