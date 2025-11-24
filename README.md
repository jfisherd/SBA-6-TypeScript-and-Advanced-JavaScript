


# SBA 6, TypeScript and Advanced JavaScript

## Description
In this SBA, 
<br>


## Running the program
To view this SBA, run dist/main.js
<br>

<br>

## Reflection Questions
> How you implemented TypeScript features and OOP principles.

T
<br>

<br>

> The challenges you encountered and how you overcame them.

Returning tax or discount calculation to 2 decimals. By using TypeScript, I specified the return must be a number. The .toFixed(2) method returns a string, and required a parseFloat() wrapper to return the expected data type. 
<br>

Accessing the object data from the API. Tried accessing using res.json(), switched to using .then (data=>{...})
<br>

Tax amount after discount. Changed taxCalculator.ts to handle discounted prices instead of full price.
<br>

> How you handled asynchronous operations and error management.

A
<br>

