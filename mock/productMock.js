// Create a mock data for the product based on product.js model:

const Product = require('../model/product');

const MOCKPRODUCTS = [
    new Product("1", "Gundam", 100, "Gundam is a type of anime"),
    new Product("2", "Dragon Ball", 200, "Dragon Ball is a type of anime"),
    new Product("3", "Naruto", 300, "Naruto is a type of anime"),
    new Product("4", "One Piece", 400, "One Piece is a type of anime"),
    new Product("5", "Bleach", 500, "Bleach is a type of anime"),
    new Product("6", "Fairy Tail", 600, "Fairy Tail is a type of anime"),
    new Product("7", "Attack on Titan", 700, "Attack on Titan is a type of anime"),
    new Product("8", "Death Note", 800, "Death Note is a type of anime"),
    new Product("9", "Fullmetal Alchemist", 900, "Fullmetal Alchemist is a type of anime"),
    new Product("10", "Sword Art Online", 1000, "Sword Art Online is a type of anime")
];

module.exports = MOCKPRODUCTS;