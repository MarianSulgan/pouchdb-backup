var PouchDB = require('pouchdb');
var express = require('express');
var app = express();

app.use('/db', require('express-pouchdb')(PouchDB));

var services = new PouchDB('services');
var items = new PouchDB('items');
var customers = new PouchDB('customers');
var rentals = new PouchDB('rentals');
var settings = new PouchDB('settings');

app.listen(5000);