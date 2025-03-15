# mudana-react-test

This is a simple React application built using **Create React App**. The app allows users to search for GitHub users and view a list of their repositories using the **Octokit** library.

## Features
- Search for GitHub users (displays up to 5 users).
- View the list of repositories for each user.
- Uses **Octokit** to interact with the GitHub API.
- Responsive UI built with **Mantine UI**.
- Loading indicators and error handling for better user experience.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/mudanakomang/mudana-react-test.git

2. **Navigate to the project folder:**
    ```sh
    cd mudana-react-test
3. **Install dependencies:**
    ```
    npm install or yarn install
4. **Create `.env` file Add GitHub personal token:**
    - [How To managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
    ```
    GITHUB_AUTH_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN

5. **Start the development server:**
    ```sh
    npm start

The application will be available at http://localhost:3000/.

## Usage
1. Enter a GitHub username in the search bar.
2. Click the Search button to find users.
3. Click on a user's name to load their repositories.
4. Repositories will be displayed in a list with names and star counts.

## Technologies Used
1. React.js (with Create React App)
2. TypeScript
3. Octokit (GitHub API client)
4. Mantine UI (for UI components)
5. FontAwesome (for icons)


## API Usage with Octokit
The app uses Octokit to interact with GitHub's REST API to fetch user data and repositories:

- Search Users:
    ```js
    const response = await octokit.request('GET /search/users', {
        q: username,
        per_page: 5,
    });
    ```

- Fetch Repositories:
    ```js
    const response = await octokit.request(`GET /users/${username}/repos`);
## Screenshots
![image](https://github.com/user-attachments/assets/03677c38-c0a5-4baf-83b7-83f64d505b22)
![image](https://github.com/user-attachments/assets/7d2c5a05-01a8-4a78-832a-70b82e0f04e0)
![image](https://github.com/user-attachments/assets/a9b5eb96-86e8-474c-b5e8-f660184cb48b)

## Recording
https://github.com/user-attachments/assets/a5c895b4-af39-4264-8064-76704c54bb56

## Live Demo 
https://mudana-react-test.vercel.app
## License
This project is open-source and available under the MIT License.



