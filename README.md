## Homework

* Extend out emails routes 
	* provide routes to get from and text fields
	* Provide routes to retreive email subject lines
* Extend the client to display email from/text fields
	* jquery to get.json and display
* Extend routes to: (just use curl if you want)
	* Add new emails
	* Delete old emails by _id. ex: DELETE /email/:id

```js
	// /blogs/posts/comments/
	//
	// CRUD   | mongoDB | REST
	// -------|---------|------
	// create | insert  | POST
	// read   |  find   | GET
	// update | update  | PUT
	// delete | remove  | DELETE

	// server.verb('path' function(req, res, next){})
	//
	// -----------Database Setup
	// wget http://jsonstudio.com/wp-content/uploads/2014/02/enron.zip
	// unzip enron.zip
	// mongoimport --db enron --collection emails --drop --file enron.json
```