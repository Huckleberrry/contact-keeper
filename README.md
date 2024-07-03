

# Contact Keeper

Contact Keeper is a web application for managing personal and business contacts. It allows users to add, edit, and delete contacts, as well as categorize them.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication with JWT
- Add, edit, and delete contacts
- Categorize contacts as personal or business
- Search and filter contacts
- Responsive design

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Huckleberrry/contact-keeper.git
    ```

2. Navigate to the project directory:

    ```bash
    cd contact-keeper
    ```

3. Install server dependencies:

    ```bash
    npm install
    ```

4. Navigate to the client directory and install client dependencies:

    ```bash
    cd client
    npm install
    ```

5. Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

6. Run the application:

    ```bash
    npm run dev
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:5000`.
2. Register for an account or log in if you already have one.
3. Start adding and managing your contacts.

## Contributing

We welcome contributions to improve Contact Keeper! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Add your feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Open a pull request.

