# Sailsjs App

A small project to learn Sails.js from. Code is being written in Cloud9 online IDE, and other of my platforms for fun:

- Raspberry Pi v2
- Raspberry Zero
- Solus VM 

[Sails.js](https://sailsjs.org) is a very powerfull MVC javascript framework, making it very easy to build custom, 
enterprise-grade [Node.js](http://nodejs.org) apps. Sails is built on Node.js, uses Express for handling HTTP requests, 
and wraps socket.io for managing WebSockets.

One of the cool features of Sails is the blueprints that enables automatic REST API builds, and also the database agnostic 
functionality with [Waterline](http://sailsjs.org/features#?database) ORM. 

## demoRSNA

This is a single page applicaton, SPA, based on bootstrap frontend and Sails.js backend REST API and datastore, supporting 
an MVC one page web application. 

### Prerequisites

A standard setup with Node.js is first needed. I use Node 4.5.0 currently, with NPM 2.15.9, in Cloud9 development 
environment. On my Pi Box, I have Node 6.8.1 and NPM 3.10.8. 

After Node and NPM is setup, if not already, the following is needed:

- Sails.js
- A database, almost any would work. Check Sails.js for your preferred DB. I use MongoDB. Alternative is to use Sails.js 
disk-storage (built in and default untill you change it).
- [Pug.js](http://pugjs.org) - a template language for HTML (Sails.js comes with EJS, but I thought it could be fun to try Pug.js)