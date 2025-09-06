<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# CHAT_APP_GRAPHQL_BACK

<em>Empowering Real-Time Connections with Seamless Communication</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/Lak-MedRida027/Chat_App_GraphQL_Back?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Lak-MedRida027/Chat_App_GraphQL_Back?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Lak-MedRida027/Chat_App_GraphQL_Back?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
<img src="https://img.shields.io/badge/GraphQL-E10098.svg?style=flat&logo=GraphQL&logoColor=white" alt="GraphQL">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)

---

## Overview

Chat_App_GraphQL_Back is a powerful backend framework tailored for building real-time chat applications with GraphQL. It seamlessly integrates HTTP and WebSocket protocols to support queries, mutations, and live subscriptions, enabling dynamic, real-time user interactions.

**Why Chat_App_GraphQL_Back?**

This project simplifies the development of scalable, real-time communication features. The core features include:

- 🧩 **🔗 WebSocket Support:** Enables real-time messaging and notifications for instant user updates.
- 🚀 **🔒 JWT Authentication:** Secures user data and interactions with robust token-based authentication.
- 🗃️ **🛠️ Prisma ORM Integration:** Facilitates structured database management for users and messages.
- 💡 **📜 Schema-Driven API:** Defines clear GraphQL schemas for flexible client-server interactions.
- ⚙️ **🛡️ Graceful Shutdown & Server Management:** Ensures reliable operation and maintenance.
- 🔄 **🔧 Resolvers & Schema Definitions:** Connects client requests to data handling with ease.

---

## Features

|      | Component       | Details                                                                                     |
| :--- | :-------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>GraphQL API server built with **Apollo Server**</li><li>Uses **schema.prisma** for ORM schema</li><li>Supports real-time features via **GraphQL subscriptions**</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Modular code with separate resolvers, schemas, and middleware</li><li>Consistent naming conventions</li><li>Uses **ES6+** features for cleaner syntax</li></ul> |
| 📄 | **Documentation** | <ul><li>Basic README with setup instructions</li><li>Schema documentation via comments</li><li>Potential for further API docs</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Database: **Prisma** ORM (likely PostgreSQL/MySQL)</li><li>Authentication: **jsonwebtoken**, **bcryptjs**</li><li>WebSocket: **graphql-ws**, **ws** for subscriptions</li><li>MongoDB support via **mongoose** (optional/legacy)</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Resolvers, schemas, and context separated</li><li>Uses **@graphql-tools/schema** for schema stitching</li><li>Middleware for auth and error handling</li></ul> |
| 🧪 | **Testing**       | <ul><li>Not explicitly detailed; likely includes unit tests for resolvers</li><li>Potential for integration tests with **Jest** or similar</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Uses **graphql-ws** for efficient WebSocket subscriptions</li><li>Database interactions via Prisma optimized for batch queries</li></ul> |
| 🛡️ | **Security**      | <ul><li>Password hashing with **bcryptjs**</li><li>JWT-based authentication with **jsonwebtoken**</li><li>Potential input validation and error handling</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Core: **apollo-server**, **graphql**, **@prisma/client**, **prisma**</li><li>Security: **bcryptjs**, **jsonwebtoken**</li><li>WebSocket: **graphql-ws**, **ws**</li><li>Database: **mongoose** (for MongoDB support)</li></ul> |

---

## Project Structure

```sh
└── Chat_App_GraphQL_Back/
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   └── schema.prisma
    ├── resolvers.js
    ├── server.js
    └── typeDefs.js
```

---

### Project Index

<details open>
	<summary><b><code>CHAT_APP_GRAPHQL_BACK/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Chat_App_GraphQL_Back/blob/master/server.js'>server.js</a></b></td>
					<td style='padding: 8px;'>- Sets up the core server infrastructure for a GraphQL API, integrating HTTP and WebSocket protocols to support queries, mutations, and real-time subscriptions<br>- Manages schema creation, authentication via JWT, and graceful shutdown procedures, enabling seamless client interactions and real-time data updates within the overall application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Chat_App_GraphQL_Back/blob/master/resolvers.js'>resolvers.js</a></b></td>
					<td style='padding: 8px;'>- Defines GraphQL resolvers for user management, authentication, messaging, and real-time updates within the application<br>- Facilitates user registration, login, retrieval of user lists, message exchange, and live message notifications, integrating Prisma ORM for database interactions and Apollo Server for GraphQL operations<br>- Serves as the core logic layer connecting client requests to data handling and real-time communication features.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Chat_App_GraphQL_Back/blob/master/typeDefs.js'>typeDefs.js</a></b></td>
					<td style='padding: 8px;'>- Defines the GraphQL schema for user management and messaging functionalities, enabling clients to perform user registration, authentication, message creation, and real-time message subscriptions<br>- Serves as the core contract outlining data types, queries, mutations, and subscriptions, facilitating seamless interaction between the client and server within the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Chat_App_GraphQL_Back/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the main entry point for the project, orchestrating server initialization and configuration<br>- It sets up the core application environment, integrating GraphQL schemas, authentication, and real-time communication capabilities, thereby enabling seamless interaction between clients and the backend services within the overall architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- prisma Submodule -->
	<details>
		<summary><b>prisma</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ prisma</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Lak-MedRida027/Chat_App_GraphQL_Back/blob/master/prisma/schema.prisma'>schema.prisma</a></b></td>
					<td style='padding: 8px;'>- Defines the database schema for user and messaging data, establishing core data models and relationships within the application<br>- Facilitates structured storage and retrieval of user profiles and message exchanges, supporting features like user management and real-time communication<br>- Serves as the foundational blueprint for data integrity and interaction in the overall system architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build Chat_App_GraphQL_Back from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Lak-MedRida027/Chat_App_GraphQL_Back
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Chat_App_GraphQL_Back
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Chat_app_graphql_back uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
