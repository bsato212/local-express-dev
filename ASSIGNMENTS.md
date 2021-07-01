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
