# Nginx Challenge with Node.js

Challenge presented in the Full Cycle course (Docker module).

The challenge consists of displaying a message on the screen using nginx with node.js.

When a request is made to the application, it should save a record in the database (MySQL).

Then, the page should display the message ```Full Cycle Rocks!```, followed below by a list with the records from the database.

Note: The page should be built in Node.js but will be accessed through nginx via a reverse proxy!

---

### To run the application, use docker-compose.

```
docker-compose up -d 
```

In a few moments, the application will be up and running.
---

### To access, enter the following address in your browser:

[http://localhost:8080/](http://localhost:8080/)

---
NOTE: If you get a 502 error, wait a few more seconds and refresh the page.
