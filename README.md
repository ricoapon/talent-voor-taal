[![Test deployment](https://img.shields.io/badge/Test%20deployment-GITHUB%20PAGES-%3CCOLOR%3E?style=for-the-badge)](https://talentvoortaal.ricoapon.nl/)
[![Deployment](https://img.shields.io/badge/Production%20deployment-FTP%20DEPLOY%20ACTION-%3CCOLOR%3E?style=for-the-badge)](https://talentvoortaal.nl/)

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

## Local development
To be able to use this project locally, follow the manual of running Angular apps (see https://angular.io/guide/setup-local).

To run the app locally, use the command `npm run start`.

## Testing
The changes need to be tested by the owner, so we use GitHub Pages to display the site.

All changes to the master branch are automatically deployed to GitHub Pages using GitHub Actions (see publish-to-gh-pages.yml).

## Versioning
The version that is stated in `version.ts` is used inside the app.
This version number is displayed in the application, but inside a hidden input tag with name "version".

When deploying test or production branches, the Git tag or Git commit hash is written to `version.ts`.

Publishing to production is automatically done when creating a new GitHub release. A release must be based on a tag, so production should always have a tag.
Publishing to the test website may not always have a tag, instead it will contain the commit hash. This will make it identifiable which commit is deployed.

## Deploying to the real website
Publish a new release to automatically deploy to the website! See the Github Action publish-to-website.yml for the technical working.
