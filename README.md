# Nodepop API Documentation
Nodepop is an item buying/selling application developed with NodeJS.

## Description
Nodepop service maintains announcements of purchase or sale of articles and allows consultation and search filters by various criteria.
You can also visit a site with ads in the nodepop database after launching the app by entering:
- http://localhost:3000

## Getting Started

### Dependencies

* Node.js, Express, MongoDB, Mongoosh, and Postman. 
* Nodemon, Cross-env, Mongoose, ejs. 


### INSTALLING

### Executing program 
### Initialization of the dependencies
* To start the application don't forget to run (install all application dependencies):

```
npm install 
```
### Initialization of the database 
In this process, a collection of documents from the database necessary for the application will be created and loaded, for this we execute the installDB script inside the package.json
```
npm run init-db 
```
### Initialization of the Api
There are several ways to start Nodepop: 
- Start the application in production with: 
```
npm start 
```
- Start the application in development with: 
```
npm run dev
```



## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

