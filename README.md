[![Generic badge](https://img.shields.io/badge/version-1.0.0-blue)](http://client-portal-staging.brrmedia.co.uk/auth/) [![Generic badge](https://img.shields.io/badge/author-Samuele-green)](http://client-portal-staging.brrmedia.co.uk/auth/)

### Title

HD FE CA

### Description

Based on the principle of K.I.S.S. this application allows you to view some information about the Github username entered in the search field.

The application consists of a multistep form where at the end of the process a card is shown with the details of the Github user profile.

> The application makes use of some packages such as: `axios` to make the call to the Github API, `react-material-ui-form-validator` for the validation of the text fields in the form, `react-router-dom` for the navigation between the screen, `framer-motion` for screen animation and elements from `material-ui`.

React context is used to keep the data entered in the form and make the API call, this allows the user to navigate the multistep form and find the data previously entered if these have already been subscribed. The "next" button is disabled if one or more fields have not been filled in.

If the Github username that has been entered is not found, an error message is shown. Still on the subject of error, if the user enters a url that does not exist, a 404 page is shown.

To use the application on your machine you must first clone it or download it and then execute the commands below. If you want to save some time you can go to [this](https://loquacious-youtiao-a06cda.netlify.app/) url.

### Quick start

```
npm install
```

```
npm start
```

Even though everything should work as expected, something is missing. What is missing are unit tests. This is something I’m working on but I don’t have in my pocket right now.
