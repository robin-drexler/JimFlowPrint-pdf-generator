# Purpose
Generates a ticket template as pdf, embedding provided ticket data (type, text etc).

PDFs will be used for further processing (printing).


## Set up
Clone repo.
Install needed packages: ```npm install```. Boot up the app: ```gulp dev```

Go to: [http://localhost:3000/](http://localhost:3000)

## Current state
Can render a view with template data included. (no pdf, just html)
visit ```/template?text=lalala``` to see it in action.


## Tests
```gulp test``` or ```npm test```. Currently the app MUST NOT be launched prior to executing tests, since the tests will start the app on same port. 

## XXX
Fix test port colliing with dev port. App should also be able to run on :80 in prod.
 
