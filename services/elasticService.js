// create a function to index documents in elastic client
const { Client } = require('@elastic/elasticsearch');
const e = require('express');
const client = new Client({ node: 'http://localhost:9200' });

exports.initialIndex = async (products) => {
  try {
    products.forEach(async element => {
        await client.index({
            index: 'products',
            body: {
              title,
              element
            }
          });
    });
  } catch (error) {
    console.log(`Products failed to index! - ${error.message}`)   
  }
}

exports.elasticClient = client;
