- https://github.com/bsato212/local-express-dev
- http://expressjs.com/en/api.html#req
- http://127.0.0.1:8080?name=Test

# Assignment 1
- The local Express development setup currently returns a fixed Hello World string
- Update it to read a name parameter from the query string (GET) and use it in the returned string.
- If no value is found it should default to World.

# Assignment 2
- Using the local Web development setup, build an HTML form that uses the Express server as its target action.
- Add an input field to the form with name and id attributes set to name.
- After the submit button is clicked, the form should send the contents of the input field to the Express server.

# Assignment 3
- Rework both ends of the previous assignment to work with a POST request.
- This will require a new POST handler in Express as well as form updates.

# Assignment 4
- Read on MDN about XHR (AJAX) requests: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.
- Using local web dev create page that triggers a XHR GET request to the Random Cat API (https://aws.random.cat/meow).
- Read the received body and parse it as JSON.
- Log the parsed body in the console.
- Retrieve the image URL from the body and create a new image element in the page, passing the received image ULR as its source attribute.

# Assignment 5
- Rework the code from the previous assignment to consume data from the Lorem Picsum API (https://picsum.photos/v2/list?limit=3).
- This API call will return 3 images, make sure to create three different image tags and display all images.

# Assignment 6
- Rework the code from the previous assignment to make three different requests to the Random Cat API instead of single request that returns 3 images.

# Assignment 7
- Read on MDN about the Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Rework the code from the previous assignment to use Fetch instead of XHR.

# Assignment 8
- Access the shared videos folder and download arrows.zip
- Watch videos on var/let/const and arrow functions
- Rework the previous assignment to use let and const

# Assignment 9
- Access the shared videos folder and download promises.zip
- Watch videos on promises
- Create a promise that returns a random number after 2 seconds
- To demonstrate this promise in action, add a button to a page and have it fire the promise on its event handler
- When the promise resolves, append an item to an unordered list element in the page containing the returned random number

# Assignment 10
- Rework the code from assignment #6 to use an XHR request wrapped in a Promise.
- XHR Promise should resolve on status code 200
- XHR Promise should reject on non-200 status code, errors or timeouts
- Chain the Promises to make requests serially

# Assignment 11
- Rework the code from the previous assignment to make all three requests in parallel
