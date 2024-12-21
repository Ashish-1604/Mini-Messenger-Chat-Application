# Mini Messenger Application

## Overview
The **Mini Messenger Application** is a simple, full-stack chat system built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to send, receive, and manage messages in a RESTful way, with CRUD (Create, Read, Update, Delete) operations to interact with the message data. MongoDB is used for storage, while Express.js handles the backend logic and API routing.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete messages.
- **Message Management**: Tracks sender, receiver, and timestamps for each message.
- **REST API**: Allows for seamless communication between the front-end and back-end.
- **Dynamic UI**: Uses **EJS** to dynamically render message data.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for building the REST API.
- **MongoDB**: NoSQL database for storing message data.
- **EJS**: Templating engine for rendering dynamic HTML views.
- **RESTful API**: Standardized API architecture for easy integration.

## Installation

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your local machine.

### Steps to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Ashish-1604/mini-messenger.git

2. Navigate to the project directory:
    ```bash
   cd mini-messenger

3.Install dependencies:
    ```bash
   npm init -y
   npm i nodemon
   npm i ejs
   npm i express
   npm i mongodb
   npm i method-override

4. Set up your MongoDB connection.

5. Start the application:
    ```bash
   nodemon index.js

6. Open your browser and visit http://localhost:3000/chats to access the application


## Usage
- Send and receive messages in real-time.
- Manage messages with the ability to edit or delete them.
- Track sender, receiver, and timestamps for all interactions.

## Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License.

## Acknowledgments
- Thanks to the developers of the Node.js, Express.js, MongoDB, and EJS libraries.
- Inspired by various full-stack messaging applications.

