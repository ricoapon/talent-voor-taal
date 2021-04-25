[![Deployment](https://img.shields.io/badge/deployment-Heroku-brightgreen)](https://talent-voor-taal.herokuapp.com/)

# Talent voor Taal
This file describes everything you need to know if you want to develop the website for Talent voor Taal.

## Technical architecture
### Framework and tools
This website uses:
* Node.js
* npm
* Angular 11
* Bootstrap 4

It is a very simple website without any fancy functionality. Uses the basic templating and routing functionality.

### Heroku
The website can be tested on a Heroku server. Heroku doesn't natively support Angular apps on the Node.js servers,
so we need to add the Express framework. So we added a server.js file to run it.

The `npm run start` command is overwritten for Heroku and must start the server.js instead. This should not be used locally.

## Local development
To be able to use this project locally, follow the manual of running Angular apps (see https://angular.io/guide/setup-local).

To run the app locally, use the command `npm run start:dev`.

## Testing
The changes need to be tested by the owner, so we use Heroku as the app to display the versions.

## Versioning
The version that is stated in `package.json` is used inside the app.
This version number is displayed in the application, but inside a hidden input tag with name "version".

When deploying a new version, follow these steps:
1. Increment the version in package.json (using the major-minor-patch standard)
2. Commit change to master
3. Create an annotated tag with the new version (git tag -a X.Y.Z)
4. Push the branch and tag 

## Deploying to the real website
Publish a new release to automatically deploy to the website! See the Github Action publish-to-website.yml for the technical working.
