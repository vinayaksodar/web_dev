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

Monorepos exist because build tools like TypeScript and Vite don’t copy files outside `frontend/` or `backend/` into their `dist/` folders which are used for deployment. They expect dependencies to be in `node_modules` or within the same project folder. npm workspaces is a monorepo framework that solves this issue

If you are not using a build tool let us say you are working with a pure python project you would have to copy over the common folder to both your frontend deployment and your backend deployment(you will have to do this again if you change something in common) or use it as a pip package.

Turborepo simplifies build orchestration by creating a dependency graph. It detects changes in shared packages (e.g., `common/`), ensuring they are built first before dependent projects (`frontend/` and `backend/`). Since `frontend/` and `backend/` are independent, Turborepo builds them concurrently.

You have to use a bundler like esbuild for the backend also if you use turborepo as when you deploy the simlinked dependencies also have to be bundled along.

use increment in database for financial transaction instead of using using balance + newAmount to prevent race conditions if two simultaneous requests come.

in bank related applications don't store decimals as float due to decimal to binary conversion instead store something like 3025 decimal 2 which will translate to 30.25

You should also lock the rows which are being read as lets say a user requests transfer of 1000rs from his account which has a balance of 1001rs the request checks the balance and awaits a databbase call to update balance or something else. the same user fires another request in the meantime which again sees that he still has 1001rs in his account as it has not been updated so he can transfer money again

This can happen because multiple workers are handling processes in parallel like uvicorn in python or pm2 in nodejs or if your server itself is async server like fastapi or express

You can also put the requests in a queue for the above but databases provide the locking functionality which is easier

Vercel is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to Vercel, the following happens by default:

Pages that use Static Generation and assets (JS, CSS, images, fonts, etc) will automatically be served from the Vercel CDN, which is blazingly fast.

Pages that use Server-Side Rendering and API routes will automatically become isolated Serverless Functions. This allows page rendering and API requests to scale infinitely. This is also problamatic
