
<h1 align="center">CODEFRY - A Programming Community Application</h1>

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

<h2 align="center" id="content"> 🗂 CONTENT:</h2>

```diff
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
```
> `📌` [OpenSource](#OpenSource)<br>
>> `📌` [Inspiration](#Inspiration)<br>
>>> `📌` [Tech Stack](#TechStack)<br>
>>>> `📌` [Features](#Features)<br>
>>>>> `📌` [How to get started](#Howtogetstarted?)<br>
>>>>>> `📌` [Steps to follow ](#Stepstofollow)<br>
>>>>>>> `📌` [Developed By](#DevelopedBy)<br>
>>>>>>>> `📌` [ScreenShots](#ScreenShots)<br>
>>>>>>>>> `📌` [Features We Demand](#FeaturesWeDemand)<br>
```diff
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
```
<br><br>

<h2 align="center" id="Inspiration"> :label: Inspiration</h2>
Considering the present condition due to Covid-19, distant and remote learning has been of everyone's life. We wanted to give it a try from our end to address the issues faced by programmers in a simpler way.

Using the most powerful weapon with humanity - technology, we decided to solve the issue by introducing Codefry Application. It is a MernStack Web Application, based upon the user’s Codeforces profile handles, helps programmers to code together and eases their tasks in the online schedule.

<i><p align="center"><a href="#content">⬆️ BACK TO CONTENT</a></p></i><br>

<br><br>

<!-- - Frontend- HTML, CSS, Bootstarp, Flexbox, Javascript
- Backend- ejs, Express.js, Node.js
- Frameworks- React
- Database- MongoDB, Atlas
- Socket.io
- Peer.js Library and WebRTC -->

<h2 align="center" id="TechStack"> :label: Tech Stack

```diff
+ HTML, CSS, Bootstarp, Javascript +
+ ejs, Express.js, Node.js +
+ React +
+ MongoDB, Atlas +
+ Socket.io +
+ Peer.js Library and WebRTC + 
```
</h2>

<h2 align="center" id="Features"> :label: Features</h2>

  #### Main Features
  :point_right: Codefry helps users to improve their coding skills by practising Codeforces problems by their tags. <br>
  :point_right: The user can also look at their solved problems by logging into their account.<br>
  :point_right: A personalised Todo list is available for the users to note down the deadlines of the coding contests and their favourite problems.<br>
  :point_right: Users can create personalised room with other coders, run & debug codes and have video and audio calling feature.<br>
  :point_right: A code editor is also present for the user to run the code in four languages - C, C++, Python and Java.<br>
  

## Setup (APIs used)
Following APIs are required to run this web app:

- [Codeforces Problem Set API](https://codeforces.com/api/problemset.problems?tags=implementation)
- [Codeforces User Status API](https://codeforces.com/api/user.status?handle=Fefer_Ivan&from=1&count=10)
- [Rapid Judge API](https://judge0-ce.p.rapidapi.com/submissions)

## Instructions

#### Environment Variables
- Place the API keys in `.env` with your own

## How to run?
Install dependencies
- Inside both codefry and server directories
```` 
npm install
```` 
Run local Database server
```` 
mongod
```` 
Inside server
```` 
node index.js
````
Inside codefry
```` 
npm start
````

## File Structure
```
.
├── codefry
│   ├── build
│   │   ├── asset-manifest.json
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── static
│   │       ├── css
│   │       │   ├── 2.79f7406e.chunk.css
│   │       │   ├── 2.79f7406e.chunk.css.map
│   │       │   ├── main.59b704f4.chunk.css
│   │       │   └── main.59b704f4.chunk.css.map
│   │       ├── js
│   │       │   ├── 2.a504d56f.chunk.js
│   │       │   ├── 2.a504d56f.chunk.js.LICENSE.txt
│   │       │   ├── 2.a504d56f.chunk.js.map
│   │       │   ├── main.3b598c39.chunk.js
│   │       │   ├── main.3b598c39.chunk.js.map
│   │       │   ├── runtime-main.20b21ed7.js
│   │       │   └── runtime-main.20b21ed7.js.map
│   │       └── media
│   │           ├── codefry.7d01d87b.png
│   │           ├── login-image.bb90099f.png
│   │           └── register-image.1ccd3674.png
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── components
│       │   ├── About
│       │   │   ├── about.css
│       │   │   └── about.jsx
│       │   ├── Auth
│       │   │   ├── login.css
│       │   │   ├── login.jsx
│       │   │   ├── logout.jsx
│       │   │   ├── register.css
│       │   │   └── register.jsx
│       │   ├── CodeForceProblem
│       │   │   ├── Cards
│       │   │   │   └── headerCards.jsx
│       │   │   └── MainPage.jsx
│       │   ├── common
│       │   │   ├── 404.jsx
│       │   │   ├── footer.css
│       │   │   ├── Footer.jsx
│       │   │   ├── form.jsx
│       │   │   ├── input.jsx
│       │   │   ├── navbar.css
│       │   │   ├── Navbar.jsx
│       │   │   └── protectedRoute.jsx
│       │   ├── CSS
│       │   │   └── TagComponent.css
│       │   ├── Editor
│       │   │   ├── editor.css
│       │   │   └── editor.jsx
│       │   ├── Home
│       │   │   ├── home.css
│       │   │   └── home.jsx
│       │   ├── ProblemRow.jsx
│       │   ├── ProblemSets
│       │   │   ├── APIs_Data.jsx
│       │   │   └── showProblems.css
│       │   ├── tagsData.js
│       │   ├── TodoList
│       │   │   ├── create-todo.component.js
│       │   │   ├── edit-todo.component.js
│       │   │   └── todos-list.component.js
│       │   └── UserStatus
│       │       └── usersolvedproblems.jsx
│       ├── config.json
│       ├── images
│       │   ├── codefry.png
│       │   ├── login-image.png
│       │   └── register-image.png
│       ├── index.css
│       ├── index.js
│       └── services
│           ├── authService.js
│           ├── httpService.js
│           └── userService.js
├── codefrymeet
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Procfile
│   ├── public
│   │   ├── script.js
│   │   └── style.css
│   └── views
│       └── room.ejs
├── LICENSE
├── README.md
├── screenshots
│   ├── About.png
│   ├── CodeEditor.png
│   ├── createTodo.png
│   ├── login.png
│   ├── problems.png
│   ├── register.png
│   ├── solved-problems.png
│   └── todoList.png
├── server
│   ├── config
│   │   └── config.env
│   ├── index.js
│   ├── middleware
│   │   └── isAuth.js
│   ├── models
│   │   ├── todo.model.js
│   │   └── user.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Procfile
│   └── routes
│       ├── todos.js
│       └── user.js
└── tree.text

31 directories, 99 files
```

<!-- ## Features
- Codefry helps users to improve their coding skills by practising Codeforces problems by their tags. 
- The user can also look at their solved problems by logging into their account.
- A personalised Todo list is available for the users to note down the deadlines of the coding contests and their favourite problems.
- Users can create personalised room with other coders, run & debug codes and have video and audio calling feature.
- A code editor is also present for the user to run the code in four languages - C, C++, Python and Java. -->



## Snapshots
- ### Problems by their tags:
<p align="center"><img src="screenshots/problems.png" width = 80%></p><br>

- ### Register:
<p align="center"><img src="screenshots/register.png" width = 80%></p><br>

- ### Login:
<p align="center"><img src="screenshots/login.png" width = 80%></p><br>

- ### Solved Problems:
<p align="center"><img src="screenshots/solved-problems.png" width = 80%></p><br>

- ### About:
<p align="center"><img src="screenshots/About.png" width = 80%></p><br>

- ### Create your Tasks:
<p align="center"><img src="screenshots/createTodo.png" width = 80%></p><br>

- ### Task list:
<p align="center"><img src="screenshots/todoList.png" width = 80%></p><br>

- ### Code Editor:
<p align="center"><img src="screenshots/CodeEditor.png" width = 80%></p><br>

## Future aspects
- Displaying graphs to user to show the progress and notify user about upcoming contests.
- Adding collaborative live code editor
- Adding other programming languages in the code editor
- AI and advanced mathematics enabled user's progress detection and suggesting learning paths.
- Gamification of the Application and planned learning roadmap for the users.

## Hope you like it ❤️
