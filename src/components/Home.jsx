import React from 'react';

const Home = () => (
  <div>
    <h1>Pre-requisites:</h1>
    <ul>
      <li>Bringin your <b>own laptop</b> and necessary <b>display cables</b> to connect to schools display is recommended, cause having 2 displays to work duting this course is going to be helpful to you</li>
      <li>Lectures will be held at least <b>mostly in finnish</b>, course <b>content</b> will be in <b>english</b></li>
      <li><b>GIT</b> <a href="https://git-scm.com/downloads">https://git-scm.com/downloads</a></li>
      <li><b>Node</b> <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>
      </li>
      <li>IDE. Most preferably <b>Webstorm </b><a
        href="https://www.jetbrains.com/webstorm/"
      >https://www.jetbrains.com/webstorm/</a>
      </li>
      <li><b>Chrome</b> <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a>
      </li>
      <li><a
        href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
      >Chrome
        React Development Tools </a></li>
      <li><a
        href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"
      >Redux
        DevTools for Chrome</a></li>
    </ul>
    <h1>To get started</h1>
    <ul>
      <li>Clone the course project <b>'git clone https://github.com/jEnbuska/react_course'</b></li>
      <li>cd into react_course and create a new branch <b>git checkout -b 'your_full_name'</b></li>
      <li>Type <b>npm install</b> to download all app dependency modules</li>
      <li>From then on you can <b>npm start</b> to run the project in dev
        server
      </li>
      <li>Open browser at <b>localhost:8000</b> to see the app running</li>
      <li>When you change the code and save (ctrl + s) the browser will refresh automatically and you do not need to restart the server</li>
      <li><b>Control + C</b> at terminal to stop dev server</li>
    </ul>
    <h1>Workflow</h1>
    <ul>
      <li>Well be looking at <b>short examples</b>, and between there is a <b>short assignment</b> based on the previous topic</li>
      <li>When you are done when the topics assigment
        <ol>
          <li>First make sure you are not in master branch <b>git branch</b></li>
          <li>If you need help let me know</li>
          <li><b>git add 'path/assigmentFile'  /*could be multiple files*/</b></li>
          <li><b>git commit -m 'assigment topic as message'</b></li>
          <li><b>git push</b></li>
        </ol>
      </li>
    </ul>
    <h1>Development tips</h1>
    <ul>
      <li>Enable <b>eslint</b> codequality tool in Webstorm
        <ol>
          <li>
            Open Preferences...
          </li>
          <li>
            Language and framework
          </li>
          <li>
            JavaScript
          </li>
          <li>
            Code quality tools
          </li>
          <li>
            set <b>enabled</b> true
          </li>
        </ol>
      </li>
      <li>Other
        <ol>
          <li>
            From preferences...
          </li>
          <li>
            Language and framework
          </li>
          <li>
            JavaScript
          </li>
          <li>
            Set 'use string' to false and Javascript language version to React JSX
          </li>
          <li>
            set <b>enabled</b> true
          </li>
        </ol>
      </li>
      <li>Debugging in Chrome
        <ul>
          <li>Using Chrome developer tools you can for example: see console log:s, set breakpoints, and see and change application state using react devtools and redux devtools</li>
          <li>
            <ul>
              <li>Windows: <b>F12, Ctrl + Shift + I</b></li>
              <li>Mac: <b>Cmd + Opt + I</b></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Home;

