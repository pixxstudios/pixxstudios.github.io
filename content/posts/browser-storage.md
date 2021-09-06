---
title: "Browser storage (overview)"
date: "2020-06-24"
categories: 
  - "javascript"
tags: 
  - "browser-storage"
  - "javascript"
---

- Storing data on the machine of the user
- Data is available to the user on that particular machine and hence cannot be shared with anyone else
- Example: Storing data such as items in my shopping cart or recently viewed products
- Different types of browser storage options available are:
  - Local storage / Session storage
  - Cookies
  - IndexedDB

* * *

#### Local Storage /Session Storage

- key-value pairs to store data
- data can read/write from/to local or session storage only via javascript or user
- better for storing simple values and not for storing complex values

* * *

#### Cookies

- simple key-value pairs with some configuration options
- can be cleared by using javascript or by the user
- data in the cookies is send to the server (they are attached to the headers of the http request)
- not good for complex data

* * *

#### IndexedDB

- client side database
- can be used with a query language
- good for storing complex data on client side
- can be cleared by user or javascript
