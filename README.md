## Description

Web Application made to share and read jokes. It uses [Solid](https://solidjs.com) as the UI library and [Pocketbase](https://pocketbase.io) as the database.

It is a personal project that I wanted to give life to, and I hope you like it. It was inspired by some subreddits like [r/jokes](https://www.reddit.com/r/Jokes/) and [r/dadjokes](https://www.reddit.com/r/dadjokes/).

The design was made by me on [Figma](https://www.figma.com).

My wish is to make it free forever.

## Usage

In order to run the project locally you must use the pocketbase executable, and move it to the db folder. You can find the executable in the releases section of the pocketbase repository or the [Pocketbase Website](https://pocketbase.io/docs/)

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `pnpm run dev` or `pnpm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `pnpm run pocketbase`

Executes the pocketbase database locally with the information in the `db` folder.
Open [http://localhost:8090/\_](http://localhost:8090/_) to view it in the browser.

### `pnpm run typegen`

This executes via cli the type generator for the pocketbase database. It will generate the types for the database in the `src/types` folder.

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
