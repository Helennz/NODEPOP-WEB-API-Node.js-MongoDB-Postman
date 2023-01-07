const readline = require('readline');

//modules 
const Products = require('./models/Products'); 

async function main() {
    // Ask the user if they are sure 
    const carryOn = await QuestionYesNO('Are you sure, really sure, extremly sure that you want to delete all content from the database? [yes] [no] ')
    if (!carryOn) {
      process.exit();
    }
    // connection to database 
    const connection = require('./lib/connectMongoose')
    // init Prodcuts 
    await initProducts(); 
    // disconnection of database 
    connection.close();
  }

main().catch(err => console.log('Oh no! An erorr!', err));

async function initProducts() {
    // erase all the documents of the product
    const result = await Products.deleteMany();
    console.log(`Deleted ${result.deletedCount} products.`);
  
    // create initial products 
    const inserted = await Products.insertMany([
      {name : "Harley", 
      forSale: true,
      price: 12000,
      picture: "harley.jpg",
      tags: [ "lifestyle", "motor"]}, 
       
      {name : "PS5",  
      forSale: true,
      price: 453,
      picture: "ps5.jpg",
      tags: [ "gaming", "lifestyle"]}, 
      
      {name : "Cacti", 
      forSale: true,
      price: 25.3,
      picture: "cacti.jpg",
      tags: [ "lifestyle", "plants"]}, 

      {name : "Cluedo", 
      forSale: true,
      price: 12,
      picture: "cluedo.jpg",
      tags: ["gaming"]}, 

    ]);
    console.log(`Created ${inserted.length} new products.`)
  }

  function QuestionYesNO(text) {
    return new Promise((resolve, reject) => {
      const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      interface.question(text, answer => {
        interface.close();
        if (answer.toLowerCase() === 'yes') {
          resolve(true);
          return;
        }
        resolve(false);
      })
    })
  }  