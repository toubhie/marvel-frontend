

# Marvel Characters (Frontend)
 
## Features

**1) Auto-suggest Input Field:** Users can type the first two letters of a Marvel character's name and available characters are displayed in a list below the input field.

**2) Marvel API Integration:** It utilizes the Marvel API to retrieve real-time data for Marvel characters.

**3) Character Selection:** It enables character selection by clicking on their name, clears the input field when a character is selected and displays an alert with the selected character's name.


## Pre-requisites

- Make sure Node and NPM are installed and their PATHs defined. You can download NodeJS from [here](https://nodejs.org/en/).


## Contributing

Contributions are always welcome! Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

To fork this Project
- Create your Feature Branch (git checkout -b feature/NewFeature)
- Commit your Changes (git commit -m 'Added some new feature')
- Push to the Branch (git push origin feature/NewFeature)
- Open a Pull Request

## Technologies Used
- NodeJS (v 16.13.0)
- React
- Typescript


## Areas for Improvement

**1) Error Handling:** Implement more error handling for scenarios like failed API requests or invalid responses. Also provide user-friendly error messages to enhance the user experience.

**2) Loading Indicators:** Add loading indicators to inform users when data is being fetched from the Marvel API. This to enhance the perceived performance by providing visual feedback during data retrieval.

**3) Performance Optimization:** Optimize the performance of the application, especially when dealing with a large number of characters.

**4) User Feedback:** Provide feedback to users when no characters match the entered criteria. Consider adding tooltips or additional information for a better understanding of features.
## Run Locally

Clone the project

```bash
  git clone https://github.com/toubhie/marvel-frontend.git
```

Go to the project directory

```bash
  cd marvel-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_MARVEL_PUBLIC_KEY`

`REACT_APP_MARVEL_PRIVATE_KEY`


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Screenshots

![App Screenshot](https://i.ibb.co/TYpn1xj/Screenshot-2023-11-21-at-19-17-29.png)


## Authors

- [Tobiloba Williams](https://github.com/toubhie)

