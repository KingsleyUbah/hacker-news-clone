![HarperDB Movie Generator](images/hackernewsclone.png)
***
## Hacker News

[Hacker News](https://news.ycombinator.com/) is a social news website focusing on computer science and entrepreneurship. The platform is run by Paul Graham's investment fund and startup incubator, Y Combinator.


## Cloning Hacker News' HomePage
This project is a clone of the Hacker News homepage. The Front-end is built using React JS. As for the list of posts, we set up a [HarperDB Cloud](https://studio.harperdb.io/) instance to store and manage the data.

The `use-harperdb` [React hook](https://www.npmjs.com/package/use-harperdb) is used to fetch data (posts) which is displayed on the page.


>
If you like this project, I will really appreciate it if you can give this repository a star. Thank you!


## How to begin
- Using Git, clone this project to your local machine with the `git clone` command
- Run `npm install` to install all dependencies

You are free to fork this project.

## View Demo
This app is currently live [here](https://kingsleyubah.github.io/hacker-news-clone/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
