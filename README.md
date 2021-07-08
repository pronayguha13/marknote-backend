# Marknote backend

> ## This is the backend for the **Marknote** web application

<hr/>

## 🚦 Steps to run the project locally on your machine

- ## Cloning the repo
  - Open the terminal
  - naviagate to the desired path: `cd PATH TO YOUR LOCATION`
  - To make local clone in your terminal: <br />
    `git clone PROJECT-URL(eg: https://github.com/PROJECT-NAME.git)`
- ## Installing dependencies
  - once the project is cloned cd into the directory
  - type `yarn set version berry`
  - Now just type `yarn install`
- ## Spinning server

  - just type `yarn develop`
    <br/>
    > ## Setup Authentication Provider(Google OAuth2.0)

- Requirements:
  - Google Client ID
  - Google Client Secret
  - Set the URI to point to `https://marknote.surge.sh`
  - please make sure that the redirect URL is pointed to `http://localhost:1337/connect/google/callback` <br />
    > ### Read the blog: [Get your google credentials](https://developers.google.com/adwords/api/docs/guides/authentication)🔗<br />
- Steps to enable google authentication:
  - once you have the credentials and your server is running go to [localhost:1337/admin](http://localhost:1337/admin)
  - Create your admin account.
  - Sign in and from the menu bar at the left click on **Settings**.
  - Under the **USERS & PERMISSIONS PLUGIN** tab click on **Providers**.
  - Click on **Google** from the list.
  - Enable the provider.
  - Paste your <i>**google client id**</i> and <i>**google Client Secret**</i> in the boxes provided.
  - In the box saying **The redirect URL to your front-end app** paste `https://marknote.surge.sh/auth/google/callback`
  - Click on save.

> ## We are good to go ✌🏻

<br />

## Refer to this blog : [Strapi authentication via Google Provider with React](https://www.devdelly.com/strapi-react-google-authentication-provider/)

<br/>
<hr/>
