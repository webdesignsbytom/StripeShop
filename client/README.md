# Client

Live Link [ByteToast-Studio](https://bytetoast-studio.co.uk)

## Table of Contents

- [Client](#client)
  - [Table of Contents](#table-of-contents)
  - [General Info](#general-info)
  - [Technologies](#technologies)
  - [Completing project](#completing-project)
  - [Chatbot](#chatbot)
  - [Analytics](#analytics)
  - [Launch](#launch)
    - [Checklist](#checklist)
    - [Build](#build)
  - [Installs](#installs)

## General Info

**Client** is....

## Technologies

1. React - Frontend framework
2. Tailwind - Style sheets
3. Axios - API management
4. Google OAuth - creating a login and sign up through google account.
5. Googe G4 Analytics

## Completing project

Make a file structure
`find . -path './node_modules' -prune -o -path './logs' -prune -o -path './.git' -prune -o -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g' > file_structure.txt`

## Chatbot

The chatbot component is available with premade conversation structures.

Features:

- Easy to edit chat text in flow sheet.
- HTML components inserted into chat from the bot
- Browser tab notifications of new messages
- Can lead you to specific pages or forms.

## Analytics

The dummy comes with a set up for using google analytics.
Using the GA4 library `npm install react-ga4`

We create the useAnalytics hook to import a tracking helper into any page or component.

Login to google tags and create one for each site and get the DNS code.

## Launch

### Checklist

1. Remove unused pages and components
2. Update the site map
3. Edit the index.html names and meta data
4. Edit constants
5. Change favicon
6. Connect to google analytics and any test servers
7. Uninstall from npm unused packages
8. Convert images to modern WebP formats
9. Update env
10. Edit license
11. Edit htaccess
12. Check privacy of github
13. Delete unused media icons

### Build

1. `npm run build` to create build directory

## Installs

`npm i react-helmet`
`npm i react-ga4`