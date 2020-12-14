# jsp-thcc-2
 
 The second take-home coding challenge is another real-world example of a prompt being used in 2020 interviews. This prompt asks you to improve upon an existing app by extending its functionality. You'll be running a local database, and there is no time limit.
 
When installing dependencies, remember to resolve any vulnerabilities with `npm audit fix`. Any issues which remain should be briefly noted in your submission README.md. If they are not breaking vulnerabilities (in other words, if you are able to run your app without issue), you do not need to go further than that. However, a potential employer will want to know that you’ve taken note of these issues.


## Introduction

This full-stack exercise involves building a form component in React that also makes a request to the Node.js/Express.js backend. You should spend around four hours at minimum to implement this feature, but there is no specific deadline or ticking clock for the implementation. Feel free to break the work up over multiple days. The point of this exercise is simply to get a good sense of how you build software.

## Getting Set Up

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.

1. Start by cloning this repository.

1. In the repo root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm start` which should start both the server and the React client.

❗️ **Make sure you commit all changes to the main branch!**

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/team')` and it will automatically hit `localhost:3001/team`.

## Acceptance Criteria

Below is a list of user stories corresponding to our acceptance criteria.

1. I can click a button inside the empty "NEW TEAMMATE" card at the bottom that says 'Join the team!'.

2. Clicking the 'Join the team!' button displays a form allowing me to fill out all of my team member information as per the data model (see `backend/model.js`).

3. Filling out the form will create a new team member in the database that persists on reload.

4. I can see team member cards for all of the new team members I have created.

## Going Above and Beyond the Requirements

Given the time expectations of this exercise, we don't expect anyone to submit anything super fancy, but if you find yourself with extra time, feel free to add items to showcase your unique strengths.

## Submitting the Assignment

### Option 1 (Preferred)

Upload your repo (with README, including instructions on how to run your app) to your GitHub. Either make it public or share to the HRJSP2 team. Then use [this form](https://forms.gle/LQYm3ohiYc9Gtf7AA) to submit your repo.

### Option 2

Create a bundle of your work by running `npm run bundle` in the repo root.

This generates a bundle file called `take-home-exercise` based on your local main branch. Upload this file to your Google Drive using the same account that you use for JSP. Then, use [this form](https://forms.gle/LQYm3ohiYc9Gtf7AA) to submit the file.

Good luck!
