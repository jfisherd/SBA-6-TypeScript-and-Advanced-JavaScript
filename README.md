# SBA 6, TypeScript and Advanced JavaScript

## Description
In this SBA, api requests are made using async and await to demonstrate appropriate use of TypeScript and Advanced JavaScript concepts.
<br>


## Running the program
To view this SBA, run dist/main.js. View the console log to see a list of 30 products. 
<br>

<br>

## Reflection Questions
> How you implemented TypeScript features and OOP principles.

TypeScript was used to type guards to specify the expected data types for fetched data. This allowed for better troubleshooting, and the IDE can identify a type error immediately.
<br>
Responses from the api are treated as objects, and must be converted into a custom class with unique methods to fit the project. Error objects can also be customized, allowing for conditional error responses.
<br>
The files are modular, exporting and importing the necessary components from other files.
<br>

<br>

> The challenges you encountered and how you overcame them.

Returning tax or discount calculation to 2 decimals. By using TypeScript, I specified the return must be a number. The .toFixed(2) method returns a string, and required a parseFloat() or Number() wrapper to return the expected data type. This led to floating point being displayed with rounding errors. Math.round(value*100)/100 is used instead, however if the least significate digit = 0 then it is cut off.
<br>

Accessing the object data from the API. Tried accessing using res.json(), switched to using .then (data=>{...}). Refactored to async/await to assure data would be accessible when needed. 
<br>

Product.ts constructor had improper syntax, leading to api data not reaching main.ts. Explicitly set the key values to equal the constructor's parameters, allowing for values to be passed.
<br>

Product.ts methods did not return a type. All methods in Product.ts now have return types and return values when called.
<br>

> How you handled asynchronous operations and error management.

In order for main.js to function, a promise must be returned from apiServices.js. This prevents main.js from running code on an object which has not been defined yet.
<br>
apiServices.ts also uses await, waiting to extract the needed product data until the Response object has been retrieved.
<br>
Two custom error classes were defined, NetworkError (failed api response) and DataError (retrieved data value is invalid). In the event a different error occurs, a generic error response is given in the catch block. Random errors thrown to simulate the an error about 50% of the time
<br>

