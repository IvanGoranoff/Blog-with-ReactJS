HACKSOFT-TASK:
Overview
My App is a social media-like application built with React.js that allows users to create, view, and interact with posts. Users can comment, react to posts, and update their profile information. The app includes a feed of posts, a profile card, and functionality for adding and sorting posts.

Features
User Authentication: Users can update their profile information such as name and title.
Post Creation: Users can create new posts.
Post Interaction: Users can react to posts with likes, loves, laughs, and surprises. They can also comment on posts.
Sorting Posts: Posts can be sorted by newest, oldest, and alphabetically by user name.
Responsive Design: The app is designed to be responsive and works on various devices.

Installation
Install dependencies:

npm install
Start the JSON server:
npx json-server --watch db.json --port 5000

Start the React development server:

npm start
Open your browser and navigate to:

http://localhost:3000

File Structure
src/
components/
Header.js: The header component displaying the app title and user info.
ProfileCard.js: The profile card component displaying user stats and info.
Feed.js: The feed component displaying the list of posts.
Post.js: The post component displaying individual posts.
CreatePost.js: The component for creating new posts.
EditProfileModal.js: The modal component for editing profile information.
LoadMoreButton.js: A button component to load more posts in the feed.
context/
UserContext.js: Context for managing user state.
PostContext.js: Context for managing posts state.
services/
api.js: API service for interacting with the JSON server.
styles/
Various CSS files for styling the components.
utils/
dateUtils.js: Utility functions for date formatting.
Main Components and Logic
App.js
The main application component that sets up the providers for UserContext and PostContext and renders the main components including Header, ProfileCard, Feed, and EditProfileModal.

Header.js
Displays the application title and user information. Clicking on the avatar or username opens the profile editing modal.

ProfileCard.js
Displays the user's profile information and statistics (number of posts and reactions). Clicking on the avatar or edit icon opens the profile editing modal.

Feed.js
Displays the list of posts and includes functionality to create new posts, load more posts, and sort posts by different criteria. It manages the state of visible posts and sorting options.

Post.js
Displays individual posts with options to react (like, love, laugh, surprise) and comment. It manages the state of reactions and comments for each post and ensures only one reaction per user.

CreatePost.js
A form component that allows users to create new posts. It handles the submission of new posts and updates the post feed accordingly.

EditProfileModal.js
A modal component that allows users to edit their profile information (name and title). It handles the state of the modal (open/close) and updates the user context with the new information.

UserContext.js
Provides the context for user state management, including user information and functions to update the user.

PostContext.js
Provides the context for post state management, including the list of posts and functions to update the posts.

api.js
Contains functions to interact with the JSON server API, including fetching posts, updating posts, and adding new posts.

dateUtils.js
Contains utility functions for formatting dates, such as converting timestamps to a "time ago" format.