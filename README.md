# Sailsjs DemoApp
*Demo Appointments*

A small project to learn Sails.js from. Code is being written in Cloud9 online IDE, and other of my platforms for fun:

- Raspberry Pi v2
- Raspberry Zero
- Solus VM 

[Sails.js](https://sailsjs.org) is a very powerfull MVC javascript framework, making it easy to build custom, 
enterprise-grade [Node.js](http://nodejs.org) apps. Sails is built on Node.js, uses Express for handling HTTP requests, 
and wraps socket.io for managing WebSockets.

One of the cool features of Sails is the blueprints that enables automatic REST API builds, and also the database agnostic 
functionality with [Waterline](http://sailsjs.org/features#?database) ORM. 

## DemoApp

This is a single page applicaton, SPA, based on bootstrap frontend and Sails.js backend REST API and datastore, supporting 
a MVC one page web application. It supports creating demonstraion appointments at exhibitions and the like. For convenience 
it includes a file upload function, to easily import Demo Stations for the Vendor Booth, and appointments collected in CSV file 
from a coorporate scheduling tool. The Demo and Station model in the MVC, naturally assumes a number of predefined fields, 
suitable for this app. Feel free to alter to accomodate different syntax and data sources. 

The application will be depending on data population by CSV data upload of demo stations and scheduled demontrations. This 
makes it rather specific, but can serve as inspiration possibly. 
 

### Prerequisites

A standard setup with Node.js is first needed. I use Node 4.5.0 currently, with NPM 2.15.9, in Cloud9 development 
environment. On my Pi Box, I have Node 6.8.1 and NPM 3.10.8. 

After Node and NPM is setup, if not already, the following is needed:

- Sails.js
- A database, almost any would work. Check Sails.js for your preferred DB. I use MongoDB. Alternative is to use Sails.js 
disk-storage (built in and default untill you change it).
- [Pug.js](http://pugjs.org) - a template language for HTML (Sails.js comes with EJS, but I thought it could be fun to try Pug.js)
- [Bootstrap](http://getbootstrap.com)


### Installing MongoDB

The steps for installing MongoDB depends on your platform. Check the guides on [MongoDB](https://docs.mongodb.com/) website.

### Installing

In package.json, the relevant prerequisites are included. This includes:

- sails-mongo - the Sails Waterline adapter for MongoDB. 
- pug - the template engine for HTML
- bootstrap

First pull the code from GitHub. Then simply run `npm install` which will install all the Sails dependencies, including the 
project specific ones for this project. As mentioned, MongDB is assumed, so this README will describe how to get running with that. 


#### Configuring your datastore

Using a datastore different from the build-in Sails-disk, it is nescessary to check the config/connections.js. 

````javascript
     MongodbServer: {
     adapter: 'sails-mongo',
     host: 'localhost',
     port: 27017,
     //   user: 'username', //optional
     //   password: 'password', //optional
     database: 'RSNA2016'
     },
```
The basics is there, but if user authentication is enabled, this would have to be configured. 

#### Bootstrap configuration

Bootstrap files are included in the assets folder where Sails automatically includes the static files during lift. 
Nothing should be needed to do here. 

