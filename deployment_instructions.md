# Fresh Install

1. Install Node.js on the server (my version during development is 10.13.0, but I don't see any issues if you go with the current 10.16.0)
   Download Node.js from here: https://nodejs.org/en/download/
2. Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
3. Run this command to clone the repo from cloud to local: `git clone https://houlay@bitbucket.org/fialaconsultinginc/fciwebsite.git`
4. At the root level of this project (where you can see server.js) run this NPM command to install all server dependencies: `npm install`
5. cd into the "client" folder and run this NPM command to install all client dependencies: `npm install`
6. after the installation is done, while still inside of client folder, run this command to compile production build: `npm run build`
7. cd out of the client folder, at root level run this command to start the server: `node server`
8. The server should now be up and listening on port 5000 (default port set in the server.js file)

# Updating

To avoid conflict, and for good practice, never edit directly in the master branch, create a local branch that mirrors the master first:

- at the root level of the project, run `git checkout -b FCI` as this will create a new branch in the repo called FCI
  Make sure to commit and push to a branch everytime you edit any files:
- `git status` to see which files are modified locally
- `git add .` and then `git commit -m "type your commit comment here"`
- finally `git push origin FCI` to push your changes to the branch on the repo

1. Make sure you are at the root level of the project, then run this command: `git checkout master` to switch to the master branch
2. Pull the latest code from the repo by `git pull origin master`
3. Switch to your own branch and do the same `git checkout FCI` `git pull origin master` note at this point there may be conflict that needs to be solved
4. At this point everything should be up to date. You can choose either to build & run the server in your own branch or under the master branch
