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


## INSTALLING

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
# API Methods (NodePop)
## Methods
You can find the following methods and filters. The **/products** endpoint in our API allows us to fields, filter and paginate all products registered in the MongoDB database of our `Nodepop` application.

## [GET] Products List
You can see all the products of the api by: 
- http://localhost:3000/api/products 

Example: 
- ![image](https://user-images.githubusercontent.com/112883658/211195967-94c2d642-e2c4-4350-b6dd-e8ed4db6299e.png)

## [GET] Using fields, filters and paginations 

### Example 1. Using tags 
- http://localhost:3000/api/products?tags=gaming&lifestyle

### Example 2. Field selection 
- http://localhost:3000/api/products?start=0&limit=3&fields=name price

### Example 3. Filtered by price 
- http://localhost:3000/api/products?price=15-500

### Example 4. Getting the picture 
- http://localhost:3000/images/cluedo.jpg

### Example 5. Sorted by price, sale and tag 
- http://localhost:3000/api/products?tag=lifestyle&forSale=true&price=10-500&start=0&limit=2&sort=price

### Example 6. Filtered by name 
- http://localhost:3000/api/products?name=cluedo

### Example 6. Pagination 
- http://localhost:3000/api/products?skip=1&limit=2
