# Family-Memories
This application is a family historical archiving tool to share and manage videos, images, and documents.

## Description
This project creates a full-stack application that allows users to share videos, photos, and documents with their family for the purpose of historical archiving. The site contains login, sign up, home, file view, new file, and messaging pages. The homepage contains all your family's stored files in one location. File view allows you to view a single file, it's associated comments, as well as leave new comments. The new file page allows you to upload links from Google Drive, which is used as the site's remote file storage system. The messaging page allows you to view everyone else in your family that is on the chat and to send group messages.

### Deployed Link
[Family-Memories](https://lit-cliffs-32521.herokuapp.com/)

### Badges
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![HandlebarsJS](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black) ![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)


## Usage

Upon visiting the app, if the user is not logged in, the user is presented with a login screen. If the user already has a registered account, the user can enter their username and password to login. If the user does not have a registered account, the user can click the 'signup' button to be redirected to the signup page. 

After logging in the user is redirected to the home page, where the user is presented with cards containing the title, thumbnail,, and description of each file in the database. The user can click a thumbnail to play the video, or can click the title to be brought to the file page. Here, the user can view the title, watch the video, read the description of the video, and read and leave comments about the video.

If the user clicks the 'Add File' button in the navigation bar, the user is redirected to a form. The user can enter a file name, file description, and a Google Drive link to the file and submit the form. The user will then be brought back to the homepage where the new file can be seen at the end of the file cards.

If the user clicks the 'Messages' button in the navigation bar, the user is redirected to the chat page. THe user is prompted to enter their username and click 'Join Chat'. Once in the chat, the user can read old messages, see other online users, and send new messages.

When the user is ready to leave the site, the user can click the 'Logout' button in the navigation bar and will be returned to the login page.

![usageGIF](./public/assets/usage.gif)

## Features


## Tests
All routes are tested in Insomnia.

## Credits
All coding credit goes to Phil Besse, Chelsea Burnham, and Brice Veyna. Seed data was provided by Ellen Mitchell with permission from the Mitchell family.


## Questions
If you have any additional questions, feel free to reach out.
### Phil Besse
- [Github](https://github.com/pdbesse)
- [LinkedIn](https://www.linkedin.com/in/phillipbesse/)
- Email: phillip.besse@gmail.com

### Chelsea Burnham
- [Github](http://github.com/chelseaburnham)
- [LinkedIn](www.linkedin.com/in/chelsea-burnham-profile)
- Email: chelseaburnham0@gmail.com

### Brice Veyna
- [Github](https://github.com/BriceVeyna)
- [LinkedIn](https://www.linkedin.com/in/brice-veyna/)
- Email: briceveyna@gmail.com

## License
Phil Besse, Chelsea Burnham, and Brice Veyna's Family Memories is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright 2022 Phil Besse, Chelsea Burnham, and Brice Veyna

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
