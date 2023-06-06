1. What is npm?
npm is used to install packages.
There is no full form for npm, initially people used to tell it as node package manager but it is not. It is a place where all the packages are hosted. Almost all the packages we need to develope an application are hosted on npm. We can get that package by simply writing the command npm install <packageName>

2. What is parcel/webpack ? why do we need it?
Parcel is a zero configuration bundler
Parcel/webpack is a bundler. A bundler is a tool which bundles all our code and reduces its size so that it can be deployed on production. Parcel does many things which are used to build a production ready app. Some of its features are
.Dev build
.Local server
.HMR Hot Module Replacement
.File watching algorithm
.caching
.Image optimization
.minification
.Bundling
.compress
.Tree shaking
.content hashing
code splitting
.Differential building
.Supports your app on older browsers
.Diagnostic
.Error handling
.Https

3. What is .parcel-cache?
It is a folder created when we execute parcel command i.e, npx parcel <filename>
This folder contains all the information of our project so that when we execute the command next time it executes in lesser time compared to the previous execution time,because it fetches the data from this folder instead of executing it again. When something is changed it gets updated in this.

4. what is npx?
npx is used to execute the packages that are installed already.
eg: npx parcel index.html
here parcel is the package we have installed so we are executing it.

5. What is the difference between dependencies and devDependencies?
dependencies are for production where as devDependencies are for development phase. There are more things to try in development phase hence we use devDependencies where as in production our application should be stable hence we use dependencies over there. devDependencies will get updates frequently where as dependencies donot.

6. what is treeshaking?
It is a feature of parcel where it analyses all the imports and exports of each module and removes everything that is not used.

7. what is hot module replacement?
It is a feature of parcel where parcel updates your changes instantly on the dev server after saving your code. For example if we have changed some text and saved it parcel updates it on the ui without reloading.

8. list down your favourite 5 superpowers of parcel and describe any 3 of them in your own words>
.Dev build
.Local server
.HMR Hot Module Replacement
.File watching algorithm
.caching

local server:
it creates a local server when we execute the command hence we can open that link everytime when the app is still running
hmr:
it updates on the ui instantly without reloading the page.
caching:
our app executes very faster because it fetches code from .parcel-cache folder

9. what is .gitignore? what should we add and not add  into it?
.gitignore is a file where we add all the folders which should be ignored by git.
we should add all the files which are used for our app.
we should not include folders like node modules , dist .. because those can be installed by simply running some commands.

10. what is the difference between package.json and package-lock.json ?
package.json is a configuration for npm. It will have all the dependencies our project needs. package.json does not have exact version because a package gets updated whenever there is minor or major update.
package-lock.json will have the exact version of the package that is installed.

11. why should i not modify package-lock.json?
we should not modify package-lock.json because it keeps track of exact version of the package that is being installed.

12. what is node modules? is it a good idea to push it on git?
node modules is a folder which contains all the dependencies mentioned in the package.json. It is not a good idea to push it on git because those can be easily generated again and the size of node modules are also very large.

13. what is dist folder?
dist folder contains the bundle of our project. It has all the files with minified version. Simply it contains the dev build / production build 

14. what is browserlist?
It is used to support our app in older versions of the browser.


