
# CODEFRY - A Programming Community Application

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

## Inspiration:
Considering the present condition due to Covid-19, distant and remote learning has been of everyone's life. We wanted to give it a try from our end to address the issues faced by programmers in a simpler way.

Using the most powerful weapon with humanity - technology, we decided to solve the issue by introducing Codefry Application. It is a MernStack Web Application, based upon the user’s Codeforces profile handles, helps programmers to code together and eases their tasks in the online schedule.


## Technology Stack:
- **Frontend** - React <br>
- **Backend** - ejs, Express.js, Node.js <br>
- **IDE** - VS Code <br>
- **API Testing** - Postman <br>
- **Version Control** - Git and Github <br>
- **Database** - MongoDB, Atlas <br>
- **Other tools & technologies** - Web APIs, Socket.io, Peer.js Library and WebRTC <br>


## Setup (APIs used)
Following APIs are required to run this web app:

- [Codeforces Problem Set API](https://codeforces.com/api/problemset.problems?tags=implementation)
- [Codeforces User Status API](https://codeforces.com/api/user.status?handle=Fefer_Ivan&from=1&count=10)
- [Rapid Judge API](https://judge0-ce.p.rapidapi.com/submissions)


## Instructions
#### Environment Variables
- Place the API keys in `.env` with your own

#### GitHub Repository Structure

| S.No. | Branch Name | Purpose |
| --------------- | --------------- | --------------- |
| 1. | master | contains the main code  |
| 2. | backend | contains all backend code |
| 3. | codefry | contains all frontend code |
| 4. | CodeFry-Video-Meet | contains code for Video-meet & drawing Board |

### Install dependencies
#### To setup backend and run server locally:
- `cd server` - to switch to codefry backend
- `npm install` - to install all the backend packages
- `node index.js` - to run the server

#### To setup frontend and run server locally:
- `cd codefry` - to switch to codefry frontend
- `npm install` - to install all the frontend packages
- `npm start` - to start the client

#### To run the Video Meet and Drawing board
- `cd CodeFry-Video-Meet` - to switch to codefry Video-meet & drawing Board
- `npm install` - to install all the socket.io, WebRTC packages

#### To run the local database
- `mongod` - to run local database 


## Features:
  #### Main Features
  - Codefry helps users to improve their coding skills by practising Codeforces problems by their tags. <br>
  - The user can also look at their solved problems by logging into their account.<br>
  - A personalised Todo list is available for the users to note down the deadlines of the coding contests and their favourite problems.<br>
  - Users can create personalised room with other coders, run & debug codes and have video and audio calling feature.<br>
  - A code editor is also present for the user to run the code in four languages - C, C++, Python and Java.<br>


## How to get started?

[![forthebadge](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)](https://forthebadge.com) <br>
You can refer to the following articles on the basics of Git and Github and also contact the Project Mentors, in case you are stuck:

- [Watch this video to get started, if you have no clue about open source](https://youtu.be/SL5KKdmvJ1U)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)


## Steps to follow:
### 1. Code of conduct

Please read our [Code of conduct](./CODE_OF_CONDUCT.md) which stipulates explicitly that everyone must be gracious, respectful, and professional. This also documents our conflict resolution policy.

### 2. Fork it
You can get your own fork/copy of [Codefry](https://github.com/lavishabhambri/CodeFry) by using the <kbd><b>Fork</b></kbd> button.
<br>

### 3. Clone it

You need to clone (download) it to a local machine using

```sh
$ git clone https://github.com/Your_Username/Codefry.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `Codefry` repository in Github, move to that folder first using the change directory command on Linux and Mac.

```sh
# This will change directory to a folder Codefry
$ cd Codefry
```

Move to this folder for all other commands.

<br>

### 4. Set it up

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/Codefry.git (fetch)
origin  https://github.com/Your_Username/Codefry.git (push)
```
Now, let’s add a reference to the original [Codefry](https://github.com/lavishabhambri/CodeFry) repository using

```sh
$ git remote add upstream https://github.com/lavishabhambri/CodeFry.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/CodeFry.git (fetch)
origin    https://github.com/Your_Username/CodeFry.git (push)
upstream  https://github.com/lavishabhambri/CodeFry.git (fetch)
upstream  https://github.com/lavishabhambri/CodeFry.git (push)
```

### 5. Sync it

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `master` branch
$ git checkout master

# Reset local `master` branch to match `upstream` repository's `master` branch
$ git reset --hard upstream/master

# Push changes to your forked `Codefry` repo
$ git push origin master
```


### 6. Ready Steady Go...

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/lavishabhambri/CodeFry/pulls).

<br>

### 7. Create a new branch

Whenever you are going to make a contribution. Please create a separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with the name Branch_Name and switch to branch Folder_Name
$ git checkout -b Folder_Name
```

Create a separate branch for contribution and try to use the same name of the branch as in the folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout Folder_Name
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

<br>


### 9. Share your work

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin Folder_Name
```

Then, go to your repository in the browser and click on `compare and pull requests.`
Then add a title and description to your pull request that explains your precious effort.


## Team:

> Team Members

| S.No. | Team Member Name | Role | GitHub Username |
| --------------- | --------------- | --------------- | --------------- |
| 1. | Lavisha Bhambri(Team Leader) | Mernstack Development | [@lavishabhambri](https://github.com/lavishabhambri) |
| 2. | Vaibhav Pathak | Backend Development | [@vaibhavpathak999](https://github.com/vaibhavpathak999) |
| 3. | Dev Krishna Sadana | Backend Development | [@devk232](https://github.com/devk232) |

<img src="https://avatars.githubusercontent.com/u/56781728?v=4" width=120px height=120px /></a>
<img src="https://avatars.githubusercontent.com/u/51280899?v=4" width=120px height=120px /></a>
<img src="https://avatars.githubusercontent.com/u/59441868?v=4" width=120px height=120px /></a>
 
<!-- # Note:
Look into [Contributing Guidelines](https://github.com/kavania2002/MobiMart/blob/main/.github/contributing.md) for contributing to this repository.
- Don't make PR directly, make issues first, once you are assigned, start working and then create a PR -->
<!-- -**Kindly join the Project Channel for discussions related to this project from** [here]() -->



<h2 align="left" id="ScreenShots"> :label: ScreenShots</h2>
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

## Features We Demand:

- Displaying graphs to user to show the progress and notify user about upcoming contests. </br>
- Adding collaborative live code editor.</br>
- Adding other programming languages in the code editor.</br>
- AI and advanced mathematics enabled user's progress detection and suggesting learning paths.</br>
- Gamification of the Application and planned learning roadmap for the users.</br>


## Contributors:
### Credit goes to these wonderful people:

<table>
	<tr>
		<td>
   <a href="https://github.com/lavishabhambri/CodeFry/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lavishabhambri/Codefry" />
</a>
		</td>
	</tr>
</table>



## Hope you like it ❤️
