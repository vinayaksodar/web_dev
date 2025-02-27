Write backend as if you have not written the frontend do all the checks etc again, don't expect well formed output  
Do not send any stacktrace to frontend catch everyting log it in backend and send a simple 404,500 etc to client frontned.

Use cors MIDDLEWARE in backend if the error comes

Database is deployed on a different server than backend as you can have multiple backend servers in multiple locations and multiple instances of them. Use managed databases if you don't want to deploy your own.

Use connection pooling if you are using serverless so that each of them don't ccreate their own database connection objects which can be expensive to create and teardown

For types in backend using middleware like zod same types should be used in frontend so make a common folder where you store this. you can deloy the common folder as npm package if you are not using monorepo
See cohort 2 week 13.3 last 10 min you should probably use npm private package if zod types shouldn't be public but you have to pay for that

Store backend url in frontend env file

While environment variables store sensitive or dynamic settings, the config file aggregates these values along with other static configuration options.

Webhook for payment services integration

you can store tokens in database to revoke when user logs in from multiple devices

state management you can do using observer/ pub-sub pattern. To keep the children from rerendering you will have to call memo even in state management libraries

Nextjs solves waterfall problem in spa ie one js file is downloaded fully executed then only next file is downloaded and fully executed etc
Graphql was also invented to solve this same problem in backend getting multiple data in single query

Pages in Nextjs can have a mix of client side and server side rendered components

You can both create a route for a backend api or just use a function to get the required data before component is sent to user if it is a server component instead of doing a http request back to itself
If there is a route that has to be called by both client side component and a server side rendered component use server side actions

### Why are cookies used

When you make the first call to a website say facebook.com(i.e you type in your browser address bar and press enter), the default get call can't send token from local storage as you have no control over this.

You have to show some loading page and then send the previous token that was set in local storage using the fetch api and then load the specific page for that user like the feed or redirect user to sign in page if no jwt is found.

Cookies are sent by default in every request.

#### CSRF Attacks

Suppose you logged into your bank.com and a cookie is set in your browser

If you visit a malicious site and the site sends a post request to bank.com then your cookie will also be sent and the bank will approve the malicious request.

To prevent this we have Samesite in set-cookie

but what if your frontend and backend are deployed on differnet servers

- Backend has to first allow cookies via cors which is checked by the browser in the preflight
- Frontend has to explicitly say include cookies that were set by the backend(we can't use same site here in cookie as we are sending a cookie from one frontend domain to a different backend domain)
- Use a csrf token to block csrf attacks
