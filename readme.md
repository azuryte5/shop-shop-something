# shop-shop-something
22. State Challenge: Redux Store

# Table of Contents
1. [Links](#links)
1. [Usage](#usage)
1. [Tech used](#tech-used)
1. [Assignment Details](#assignment-details)
    1. [User Story](#user-story)
    1. [Acceptance Criteria](#acceptance-criteria)
1. [Credits](#credits)

## Links
The URL of the GitHub repository: https://github.com/azuryte5/shop-shop-something

The link to the deployed App: https://shop-shop-something.herokuapp.com/

-----
## Usage
This app was intial set up with a global store and then switched over to redux.

![shop-store](https://user-images.githubusercontent.com/85147307/150153638-91fc7f8f-129a-4b98-80f2-080d17360f26.png)
![redux example](https://user-images.githubusercontent.com/85147307/151736739-f270e70a-e6fa-4f61-a0af-373f37dd6a3a.png)

-----
## Tech Used 
- Mongo DB
- Express js
- React
- React Router, Redux
- Node js
- Apollo Server
- GraphQL API
- Heroku
- Stripe
- Jest
- Concurrently
- JsonWebtoken
- Redux 
## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria
```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
[✅]THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
[✅]THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
[✅]THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
[✅]THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
[✅ ]THEN I find that the app uses Redux instead of the Context API
```

----
## Credits
Made by Andrew Lefebvre 🛍️
-----

