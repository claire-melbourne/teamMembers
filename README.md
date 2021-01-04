# team-members
 
Displays info on team-members and allows new team members to add their information to the team-member database
The front end is powered by React and allows the user to click a join button to load a form page where they can submit their own data. Upon successful submission, their data will save to an sqlite database through and API controller defined in the backend/app.js

# to run
This application requires node to be installed on the local machine.
From the root directory:
 -- Install dependencies --> npm install
 -- Run both front and back end --> npm start
 
 # RESTful API Routes
 
 On componentDidMount, an API call is made to the data base with end point /team. 
 This makes a GET request for all team member data and is required to render the TeamMember component.
 
 After clicking the 'Join the team!' button on the initial page, the new team member form displays. From here, clicking submit makes an API call to the database with end point /newMember.
 This makes a POST request to add form submission data as a new record in the database and on successful save, will follow up with the /team GET request to set the team state with the new member's data
 Note: a successful save requires that firstName, lastName, title, and story be submitted. The front end validation will not allow a submit without these inputs containing something.
