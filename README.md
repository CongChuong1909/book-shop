# BOOKSHOPS

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [DevelopmentOrientation](#DevelopmentOrientation)
- [Page](#page)


## Introduction

A virtual ecommerce website using Node js, Express js, and Mongoose.

NOTE: Please read the RUN section before opening an issue.

## Demo

![screenshot](screenshot.png)

The application is deployed to Reder.com and app.netify.com and can be accessed through the following link:

Bookshop customer pages on netify:[ https://main--charming-halva-9b966f.netlify.app/](https://main--charming-halva-9b966f.netlify.app/)
Bookshop Dashboard Admin on netify:[ https://main--brilliant-crostata-1e2c87.netlify.app/](https://main--brilliant-crostata-1e2c87.netlify.app/)
Bookshop api on render:[ https://book-shop-api-b7tb.onrender.com](https://book-shop-api-b7tb.onrender.com)

The website resembles a real store and you can add products to your cart and pay for them. If you want to try the checkout process, Before the customer clicks to confirm receipt of the goods, you must confirm the delivery status of the [Dashboard Admin](https://main--brilliant-crostata-1e2c87.netlify.app/)
Since this is dev environment i will give you admin login account
In order to access the admin panel on "/admin" you need to provide the admin username and password.
username: chuong
password: 123

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI: this is the connection string of your MongoDB Atlas database.
-

Now you can move to folder book_store_api, book_store_admin, book_store_customer and run "npm install" in the terminal to install node_modules and run "npm start" this application should work.

## Technology

The application is built with:

- Node.js version 16.13.0
- MongoDB version 6.8.0
- Express version 4.18.2
- React Version 18.2.0
- React Bootstrap Version 2.7.2
- React Router Dom Version 6.4.2
- Localstorage : used for login information in the checkout page
- Fetch API: used to CRUD data interact with API
- AdminBro: used and customized to implement the admin panel
- Express Validator: used for form validation

## Features

The application displays a virtual Book store that contains virtual products and contact information.
Users can do the following:

Create an account, login or logout
Browse available products added by the admin
Add products to the shopping cart
Delete products from the shopping cart
Add voucher to your invoice
Display the shopping cart
Display the invoice and status invoice
To checkout, a user must be logged in
Checkout information is send to the admin
The profile contains all the orders a user has made

Admins can do the following:

- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, books, authors, categories, publisher, invoice. The cart model cannot be modified by an admin because a cart is either modified by the logged in user before the purchase or deleted after the purchase.
Order status is confirmed through 5 states that are:
+ Admin approves orders
+ On delivery
+ Customer confirms receipt of goods
+ Order is canceled
+ Complete

## DevelopmentOrientation
- Create an account, login or logout with social login(google, facebook, github...).
- Payment via e-wallet and banking.
- Replace fetch api to react-query and.
- Using JWT to authentication.
- The profile contains all the orders a user has made.
- Fix some minor bugs in the website.

## Page

