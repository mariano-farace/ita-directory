---
sidebar_position: 1
---

# 01. Project Dynamics

The dynamics described in the present document are intended for internal use of the Node.js and React.js students of IT Academy. Nevertheless, feel free to use this and give provide feedback if you consider it necessary. The goal is to provide a quick and easy to

```
ita-directory
├── .husky
├── .vscode
├── backend
├── documents
├── frontend
└── scripts

```

The purpose of each folder is:

- .husky: Husky allows to run code on git events (hooks). It runs ESLINT, PRETTIER and will run TESTS when available before each commit.
- .vscode: Settings for .vscode, mostly related with PRETTIER.
- backend: Folder containing the Node.js app. It provides an API to interact with a Postgres DB.
- documents: Folder containing the current documentation built with Docosaurus.
- frontend: Folder containing the React.js app. It consumes the Node.js API.
- scripts: Contains scripts to improve the development experience and students onboarding.

Apart from the folders you will notice many files that perhaps you aren't familiar with. The most relevant ones are:

- Docker & Docker Compose: Docker is the most used containers platform. An excellent tool for project development as it makes it more efficient and predictable.
- .env files to declare the environment variables used for development.
- Makefile to automate deployments.

# 03. Getting started

We use github issues and automation to manage our tasks.
