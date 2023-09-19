# PROMPTOPIA ( [Link to Website](https://promptopia-5oaq5en0i-aditya-singhal03.vercel.app/) )
## Promptopia is a Full Stack web application created using _Next.js_ Framework.

<img width="1728" alt="Promptopia Home Page" src="https://github.com/Aditya-singhal03/Promptopia/assets/76598520/ec8d3c79-6f9d-4e7f-aca6-0a28606990c6">

Its an open-source AI prompting tool for modern world to discover, create, and share creative prompts

## Technical Specifications

Next.js is a very popular framework which works on the top of react. It has so many powerful features which allows developers to create amazing full stack applications. Every framework created with some set of rules that we need to follow while creating applications.

In Next.js routing is very simple and easier as compared to react. Because we just need to create some route folders according to our application requirements.

Promptopia allows us to share ideas and create AI Powered prompts which anyone can share and use in AI Platforms to get their work done.

## FUNCTIONALITIES

- [Google Authentication] - By using Google Auth as a client anyone can sign in using their Google account. If the account was not found then It will automatically create the user account and save the details in the DB.

- [Prompts Creation] - On Clicking Create Prompt users can create their prompts and it will save them to the db. we have models created related to prompts which represent the prompt inputs and validation into the database. on create prompt we make a POST request in our API which we have created in the api folder. The path for API is /api/prompt/new which makes a secure connection to the database for performing create operation and saving the prompt details.

- [Home Dashboard] - The first page which the user can see is the Home page of Promptopia where the user can see different posts or prompts which are created by users of our application. There are varieties of prompts available to copy and use as your wish. All are AI-powered prompts that help you find and get the task done using AI Tools.

- [Search for prompts] - We have implemented a search functionality where users can type the search keywords like tag names or usernames or any specific word related to a particular prompt or its usage. They will get the required prompts in the form of results.

- [Edit & Delete Prompt] - Any user with a Promptopia account can edit and delete their prompts. By clicking on their profile image they will navigate to a profile page, where the user can see their personalized profile with the prompts created by that user, there we provided edit and delete options to edit and delete particular prompts using the specific promptId.

- [Click on tag] - Prompts have a specific tag associated with them. Which shows the topics or keywords related to the specific prompt. Clicking on a tag will populate the search bar and search related to a specific tag.

- [profile navigation] - By using this functionality anyone can navigate and view different profiles easily. when the user clicks on the profile image associated with a particular prompt then it will navigate to that user's profile.

- [Signout user] - We implemented a signout facility for users to securely sign out from Promptopia.

- [View other's profile] - We have implemented the View Profiles option where any user can see other users' profiles on a specific page based on user-id and user search.

  ## Instructions to run the project locally -

 Follow the step - 
 - Clone the GitHub repo or download a zip file of the project. 
 - Now open the terminal and navigate to the project directory. 
 - Make sure you have a node.js environment setup to run npm(Node Package Manager). 
 - After setting up the environment run the command in the root directory of your project. cmd - npm install It will install all the necessary dependencies and packages required to run the project. You can check the listed dependencies in package.json file. 
 - Now to start your project locally, simply run the 'npm start' command in your terminal. Then, it will open browser window, in google chrome or any other browser havingURLl 'localhost:3000'.
