[![](https://travis-ci.org/robin-drexler/JimFlowPrint-pdf-generator.svg?branch=master)](https://travis-ci.org/robin-drexler/JimFlowPrint-pdf-generator)
# Purpose
Generates a ticket template as pdf, embedding provided ticket data (type, text etc).

PDFs will be used for further processing (printing).


## Set up
Clone repo.
Install needed packages: ```npm install``` and `bundle install`. Boot up the app: ```gulp dev```

Go to: [http://localhost:3000/](http://localhost:3000)

## Example views *(WIP)*

[bug](http://localhost:3000/A6_template?title=I+love+chocolate+ice+cream*+chupa+chups+I+love.+Gummi+bears+I+love+wafer+marzipan+jujubes+sweet+tootsie+roll+bear+claw.+Dessert+gingerbread+drag%C3%A9e+sweet+roll+liquorice+fruitcake+marzipan+donut.+I+love+I+love+sugar+plum+marshmallow+jujubes.+Cotton+candy+jujubes+oat+cake+chocolate+cake+chocolate+cake+marshmallow+bear+claw+chocolate+cake.+Jelly+cupcake+gingerbread+I+love+cupcake+sesame+snaps+apple+pie+oat+cake.&id=713&type=bug&reporter=filtercake&repo=JimFlowPrint_pdf_generator&engine=github&style=swiss), [feature](http://localhost:3000/A6_template?title=I+love+chocolate+ice+cream*+chupa+chups+I+love.+Gummi+bears+I+love+wafer+marzipan+jujubes+sweet+tootsie+roll+bear+claw.+Dessert+gingerbread+drag%C3%A9e+sweet+roll+liquorice+fruitcake+marzipan+donut.+I+love+I+love+sugar+plum+marshmallow+jujubes.+Cotton+candy+jujubes+oat+cake+chocolate+cake+chocolate+cake+marshmallow+bear+claw+chocolate+cake.+Jelly+cupcake+gingerbread+I+love+cupcake+sesame+snaps+apple+pie+oat+cake.&id=713&type=feature&reporter=filtercake&repo=JimFlowPrint_pdf_generator&engine=github&style=swiss)

![image](https://cloud.githubusercontent.com/assets/170145/4176598/556b4a72-360c-11e4-8f17-07fcecd7ef1e.png)

## Current state
Can render a view with template data included. (no pdf, just html).
visit ```/template?text=lalala``` to see it in action.


## Tests
```gulp test``` or ```npm test```. Currently the app MUST NOT be launched prior to executing tests, since the tests will start the app on same port. 

## XXX
Fix test port colliding with dev port. App should also be able to run on :80 in prod.
 
