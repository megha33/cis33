'use strict';
const csv = require('csv');
const fs = require('fs');
var xlsx = require('xlsx');
const excel = require('exceljs');

var Books = ['TEST']; // array to hold the books from the csv

// used https://stackoverflow.com/questions/47035889/javascript-node-read-from-csv-file-and-store-data-into-object

function Book(title, author, desc, type, date, audience,price, isbn, quantity) {
    this.title = title;
    this.author = author;
    this.desc = desc;
    this.date = date;
    this.audience = audience;
    this.price = price;
    this.isbn = isbn;
    this.quantity = quantity;
} // end func

const XLSX = require('xlsx');
const workbook = XLSX.readFile('./books.xlsx');
Books = workbook.SheetNames;
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[Books[0]])) // this prints out all the books in the list in cmd

console.log('Hello world');
console.log('test bro');