# What is this?

This is an updated doc on Autocode's documentation on creating APIs on their platform.
Original doc: <https://docs.autocode.com/standard-library-of-apis/what-is-the-standard-library/>

# Creating a Connector API

There are 2 ways you can create a Connector API on autocode.
Method 1 will show you how to create your own API inside the [autocode website](https://autocode.com/dashboard).
Method 2 will show you how you can host your own API on your own PC.

## Method 1: Creating a Connector API inside autocode.com
(1) Create a new app by clicking the `New API` button on your [autocode dashboard](https://autocode.com/dashboard).
    Alternatively, [click here to start one directly](https://autocode.com/mp/?fork=autocode/new-connector-base).

   ![API Button](https://media.discordapp.net/attachments/890182081173405726/981565428830720010/Screenshot_2022-06-01_at_7.59.38_PM.png)
  
(2) After creating the app you will be taken to a `__main__.js` file which should look like this
```js
/**
 * An example typed API that generates a hello world message
 *   Read more about typing at: https://github.com/acode/functionscript
 * @param {string} name The name to say hello to
 * @param {integer} count The number of times to say hello
 * @returns {object} body
 * @ {array} messages A list of messages
 */
module.exports = async (name = 'world', count = 10) =&gt; {
  count = Math.min(Math.max(1, count), 100);
  return {
    messages: Array(count).fill(`Hello ${name}, welcome to Autocode ${count} times!`)
  };
};
```

## Method 2: Hosting an API on you own PC

**WORKING ON IT!**

-----------------------------------------------------------------------------
# Explanation
If you look at the top left corner of the screen there is a small text, `API`. On clicking the button you will be taken to a doc page for your API.

## @param

```js
 * @param {string} name The name to say hello to
 * @param {integer} count The number of times to say hello
```

The `@param` is used here to specify the parameters for your API.

The `{ }` brackets will specify the type of input the API should expect. Here is a list of the allowed parameters for the curly brackets.

```js
{string} 
{number}
{float} 
{integer} 
{boolean} 
{object} 
{array} 
{enum} 
{object.http} 
{object.keyql.query} 
{object.keyql.limit} 
{object.keyql.order} 
{buffer} 
{any}
```
## @returns

```js
 * @returns {object} body
 * @ {array} messages A list of messages
 ```

Here `@returns` is used to specify the **Response Schema**. The response schema is used to show how the API's response is supposed to look and what kind of response will it be.
For example whether it will be an `array` or `string` or `integer` or `number` and more.

# Allowed Types

|  Type  | Definition	| Example Input Values (JSON) |
|:-------|:-----------|:----------------------------|
|boolean | True or False|	`true` or `false`         |
|string	 | Basic text or character strings|	`"hello"`, `"GOODBYE!"`|
|number  | Any double-precision Floating Point value|	`2e+100`, `1.02`, `-5`|
|float	 | Alias for number|	`2e+100`, `1.02`, `-5`|
|integer | Subset of `number`, integers between `-2^53 + 1` and `+2^53 - 1` (inclusive)|	`0`, `-5`, `2000`|
|object  | Any JSON-serializable Object|	`{}`, `{"a":true}`, `{"hello":["world"]}`|
|object.http| An object representing an HTTP Response. Accepts headers, body and statusCode keys|	`{"body": "Hello World"}`, `{"statusCode": 404, "body": "not found"}`, `{"headers": {"Content-Type": "image/png"}`, `"body": new Buffer(...)}`|
|array   | Any JSON-serializable Array |	`[]`, `[1, 2, 3]`, `[{"a":true}, null, 5]`
|buffer  | Raw binary octet (byte) data representing a file |	`{"_bytes": [8, 255]}` or `{"_base64": "d2h5IGRpZCB5b3UgcGFyc2UgdGhpcz8/"}`|
|any	   | Any value mentioned above |	`5`, `"hello"`, `[]`
|enum | An enumeration that maps input strings to values of your choosing	| `"STRING_OF_YOUR_CHOICE"`


# API Page
The API page is basically a documentaion page for your APIs for others to see. This page contains a sample code and response of your API including an area to run the code without being in the IDE.
