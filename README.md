This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone repo

```bash
git clone https://github.com/wordpree/nextjs-login.git
run npm install # install all the dependencies
```

Then, run the development server:

```bash
npm run dev
    # or
    yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

More details about the app

- It only supports a login feature leveraging a faking API handle auth for the login info.
- There is no database so the state only saves in the frontend.
- Support upload files from local computer. Save to server only transfer files to the public folder.
- Support comments on a specific file.
- To walk through all the provided functionalities, please don't refresh the page.
- Login successful will re-direct user to a page which user can upload files.
- There is no logout functionality.
