# This application was developed for Web Application module, as coursework portfolio project @ WIUT by student ID: 00015662
# The topic is a simple blog because when you divide 00015662 by 20, the remainder is 2. The matching topic for this number is simple blog.
# Prerequisites
## Before starting the project, ensure you have the following versions installed:
- Angular: Version 19
- ASP.NET Core: Version 6.0


# Setup Instructions
1. Install Dependencies for the Client App (Angular)
Navigate to the client application directory and run:
```
npm install
```
This will install all the necessary dependencies for the frontend application.

2. Run the Backend Application (ASP.NET Core)
Make sure the backend application is running before starting the frontend, as the frontend relies on the backend API.

3. "Unexpected End of File" Error (Angular)
If you encounter the "unexpected end of file" error in the Angular project, it may be due to a package.json file in a parent directory. To resolve this:

- Delete any package.json files found in the parent directories.
- For further details, refer to this GitHub Issue[https://github.com/vitejs/vite/issues/2404#issuecomment-793166114].
# Troubleshooting
Ensure that the backend is up and running before attempting to launch the frontend.
If you face issues with missing or incorrect dependencies, running npm install in the client app directory should resolve them.


