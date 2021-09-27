# nodejs-course

nodejs basic course to startup a project

## Env Variables

- ```PORT``` port number of the app

## CURL

- Create a message with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:5000/messages -d '{"text":"We need a new plague."}'`
- Delete a message with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:5000/messages/1`

## Postman

- Create a message with:
  - URL: <http://localhost:5000/messages>
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hello there!" }`
- Delete a message with:
  - URL: <http://localhost:5000/messages/1>
  - Method: DELETE
