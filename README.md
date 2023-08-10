# Function: pipe-fn

The pipe function is a utility function that allows you to compose a series of functions together, where the output of one function becomes the input of the next function. It takes in an array of functions and returns a new function that can be invoked with an argument. The functions can be synchronous or asynchronous, and the output can be a value or a promise.

#### Installation

To use the pipe function, you need to have Node.js installed on your machine. You can then install it as a dependency in your project using npm or yarn.

##### Using npm:

```bash
npm install --save pipe-fn
```

##### Using yarn:

```bash
yarn add pipe-fn
```

## Usage

To use the pipe function, you need to import it into your code.

```javascript
import pipe from "pipe-fn";
```

#### **Example 1**: Composing synchronous functions

```javascript
const add = (x) => (y) => x + y;
const multiply = (x) => (y) => x * y;
const subtract = (x) => (y) => x - y;

const calculate = pipe(add(5), multiply(2), subtract(10));

const result = calculate(3);
console.log(result); // Output: 6
```

In this example, we define three synchronous functions: add, multiply, and subtract. We then use the pipe function to compose these functions together. The calculate function is the result of the composition, and we can invoke it with an argument (3 in this case) to get the final result.

#### **Example 2**: Composing asynchronous functions

```javascript
const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const processData = (data) => {
  // Process the data
  return processedData;
};

const displayData = (data) => {
  // Display the data
};

const fetchAndProcessData = pipe(fetchData, processData, displayData);

fetchAndProcessData("https://api.example.com/data");
```

In this example, we have three functions: fetchData, processData, and displayData. The fetchData function is asynchronous and fetches data from a given URL. The processData function processes the fetched data, and the displayData function displays the processed data. We use the pipe function to compose these functions together, creating the fetchAndProcessData function. We can then invoke fetchAndProcessData with a URL to fetch, process, and display the data.

Note: Make sure to handle any errors that may occur during the execution of asynchronous functions.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
