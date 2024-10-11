# OAUTH USING GOOGLE (PoC)

This proof of concept (PoC) demonstrates authentication using Google, serving as a foundation for applications requiring user authentication and authorization. With this PoC, you can easily authenticate using your Google account, and your login session will be stored in session storage. This means that as long as you remain logged in, either until you manually log out or the session cookie is cleared, you will maintain access to the application. This implementation not only simplifies the authentication process but also enhances user experience by ensuring a seamless login experience.

## Installation and Usage

Follow these steps to install and set up the project:

1. Clone the repository:

   ```bash
            git clone https://github.com/chinmayck-etrillium/Google-OAuth-PoC.git

   ```

2. Enter to the project directory:

   - The project directory is the location containing the server.js file, serving as the core of the application.

3. Install the required dependencies:

   ```bash
       npm install
   ```

4. Create a .env file to add environment variables:

   ```bash
       touch .env
   ```

   - In the .env folder
     - GOOGLE_CLIENT_ID = < Your Client Id from cloud.google.com > #Create one if you don't have
     - GOOGLE_CLIENT_SECRET = < Your Client Id from cloud.google.com > #Create one if you don't have
     - SESSION_SECRET = Any string you preffer

5. As I have used nodemon to run the program I preffer using it, else you can use node.

   ```bash
       nodemon server.js
   ```

   or

   ```bash
       node server.js
   ```
