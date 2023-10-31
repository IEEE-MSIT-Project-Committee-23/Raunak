# Raunak'23

## Table of Contents

- [Installation](#installation)
  - [Setup](#setup)
  - [Frontend](#frontend)
  - [Server](#server)
- [Contributing](#contributing)
- [Commit Message Guidelines](#commit_message_guidelines)



# Installation


### Setup

1. Clone the repository:

```bash
git clone https://github.com/IEEE-MSIT-Project-Committee-23/Raunak.git
```

2. Navigate to the project directory:

```bash
cd Raunak
```
3. Branch:

```bash
git checkout -b <branch_name>
```

### Frontend

1. Navigate to the frontend directory:

```bash
cd client
```

2. Install Dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm run dev
```

### Server

1. Navigate to the frontend directory:

```bash
cd server
```

2. Install Dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp sample.env .env
```

4. Start the app:

```bash
npm run dev
```

# Contributing

It is recommended to keep your changes grouped logically within individual commits.

1. Add the current files:

```bash
git add <changed_files>
```

2. Commit the changes :

Before Committing the changes check [Commit Message Guidelines](#commit_message_guidelines)

```bash
git commit -m "<message>"
```


3. Push the changes to remote:

```bash
git push origin <branch_name>
```

4. Create a Pull Request



### Commit_Message_Guidelines

A good commit message should describe what changed and why.

Before a pull request can be merged, it must have a pull request title with a semantic prefix.

### Examples of commit messages with semantic prefixes:

- **fix:** A bug fix
- **feat:** A new feature
- **docs:** Documentation changes
- **test:** Adding missing tests or correcting existing tests
- **build:** Changes that affect the build system
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (linting)


This commit message convention helps maintain a clear and structured history for your project, making it easier to understand and manage changes.


