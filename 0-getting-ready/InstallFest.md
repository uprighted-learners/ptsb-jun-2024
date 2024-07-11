# Install Fest Instructions

Welcome to your software program!

We will use several tools during class, please see the instructions for installing the specific tools you will need based on your operating system.

Please note that we can support students using the following operating systems:

-   Windows 10+
-   Apple MacOS Mojave 10.14+

## Online User Accounts (Applicable to all Operating Systems)

### Github User Account

1. Visit the Github Signup page at <https://github.com/join>
2. Create a user account and select a unique user name. Keep in mind that potential employers will be looking at your user name. You can keep it fun but make sure that it is professional.
3. **Optional**: Read about [Getting started with Github](https://docs.github.com/en/github/getting-started-with-github)

### Loom

1. Visit the Loom Signup page [Signup for Loom](https://www.loom.com/signup)
2. Signup with your preferred method of login
3. For the question "What do you plan to use Loom for?" you can just say "For education" or "For personal use". This won't affect your experience and is only for Loom's own data.
4. Next you'll be able to name your workspace. Name this whatever you want but keep it professional.
5. On the "Who do you collaborate with?" you can click "not now". You don't need to add any team members to your workspace.
6. Finally, you'll be prompted to either install the Loom Chrome Extension or download the Loom Desktop App. Either method of recording a Loom is fine and it's your choice which method you want to use.

Please take some time before class on Monday to try recording a Loom to test that everything is working correctly. You can talk about anything you want in it (a fun fact about you, a topic you're passionate about, WHATEVER). Once you've recorded something send the link to an Instructor through Discord.

---

## Windows Installation

The instructions below will walk you through installing the following tools:
**NOTE** These instructions are for Windows users specifically. Mac users will follow the instructions further down the page.

1. Node.js JavaScript Engine
2. Git Version Control System
3. Git Bash Terminal Emulator
4. Visual Studio Code Text Editor
5. MongoDB and Mongo Compass GUI

### Node.js JavaScript Engine

1. Visit the Node.js homepage at <https://nodejs.org/en/>
2. Click and download the installer for the **Current** version
3. Run the managed installer from your Downloads folder
4. Select the default options for installation location and packages

[Video Installation Guide for Node.js on Windows](https://www.loom.com/share/57f2b35af8a74a3e98f4c8d2f4a63e6d)

### Git Version Control System

#### Git Command Line Tool Installation

1. Visit the Git downloads page at <https://git-scm.com/downloads>
2. Click on the link for Windows
3. Run the installer from your downloads folder
4. Select the default options
5. Check to see if Git Bash was installed correctly by searching for the program and running it

[Video Installation Guide for Git on Windows](https://www.loom.com/share/4203d924c7f64a838fa6bdbf04cbb6b2)

[How to Change Git Bash's Startup Directory](https://www.loom.com/share/6db91910958c4f69b8eb6422cb828cb6)

### Visual Studio Code Text Editor - Windows

**NOTE**: The tool we are going to use is `Visual Studio Code` which is a free open-source editor with a strong developer community, made by Microsoft.

This is a different tool than `Microsoft Visual Studio` which is a non-free proprietary tool for enterprise software teams.

**Please make sure to download and install the correct tool, [Visual Studio Code](https://code.visualstudio.com/)**

1. Download the Installer <https://code.visualstudio.com/download>
2. Run the installer, accepting the default options
3. Run the VS Code Application from the start menu or shortcut.
4. **Optional**: Read the [Node.js in VS Code Tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)

[Video Installation Guide for VS Code on Windows](https://www.loom.com/share/fe504d064a0946b48ab8607017f84e36)

#### Helpful VS Code Extensions

The following extensions for VS Code are helpful, but optional. You can learn how to install extensions [from the official documentation](https://code.visualstudio.com/docs/editor/extension-marketplace).

-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### MongoDB and Mongo Compass

#### MongoDB Service

1. Download the MongoDB Community Server at: <https://www.mongodb.com/try/download/community>
2. Run the installer from your Downloads folder
3. Choose the "Complete" setup type from the installation wizard
4. On the "Service Configuration" pane, select "Run Service as Network Service User"

[Video Installation Guide for MongoDB on Windows](https://www.loom.com/share/23f358e7221048748b433e4f5fd8c83a)

#### MongoDB Compass

**NOTE**: MongoDB Compass is usually installed automatically when MongoDB Community Edition is installed via the official installer. Only follow the instructions below if something goes wrong during the Community Edition installer and Compass failed to install.

1. Download MongoDB Compass from <https://www.mongodb.com/try/download/compass>
2. Run the installer from your Downloads folder
3. Accept the default values for installation location and options

---

## Apple MacOS Installation

The instructions below will walk you through installing the following tools:

1. Visual Studio Code
2. Apple Command Line Tools
3. Homebrew package manager
4. Node.js JavaScript Engine
5. MongoDB and Mongo Compass GUI

You will also be shown how to sign up for a user account on the following services:

1. GitHub

### Visual Studio Code Text Editor - MacOS

**NOTE**: The tool we are going to use is `Visual Studio Code` which is a free open-source editor with a strong developer community, made by Microsoft.

This is a different tool than `Microsoft Visual Studio` which is a non-free proprietary tool for enterprise software teams.

**Please make sure to download and install the correct tool, [Visual Studio Code](https://code.visualstudio.com/)**

1. Download the Installer <https://code.visualstudio.com/download>
2. Expand the Application within your `Downloads` folder.
3. Move the `Visual Studio Code.app` package to your `/Applications` directory
4. Run the VS Code Application from the `/Applications` directory, **do not run it from within your `Downloads` folder** as you will not be able to use all the features
5. Add VS Code to your Dock by right-clicking on the icon to bring up the context menu and choosing Options, Keep in Dock
6. Install the `code` command-line tool by performing the following
    - Open VS Code if you have not yet done so.
    - Open the `Command Palette` by typing the following <kbd>CMD</kbd>-<kbd>SHIFT</kbd>-<kbd>P</kbd>
    - Type `install code command` and then typing <kbd>RETURN</kbd>
    - You may be asked to confirm you want to install the `code` command
    - See the [official documentation for additional help](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
7. **Optional**: Read the [Node.js in VS Code Tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)

#### Helpful VS Code Extensions - MacOS

The following extensions for VS Code are helpful, but optional. You can learn how to install extensions [from the official documentation](https://code.visualstudio.com/docs/editor/extension-marketplace).

-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### Apple Xcode Command-Line Tools

You will be using the default Terminal.app program to access command-line tools and execute programs throughout the course. If you have never opened the Terminal.app program before, visit [this documentation page from Apple to learn how to do so.](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/2.11/mac/11.0)

Some of the command-line tools which used to be installed by default on MacOS are not installed optionally by using the `xcode-select --install` command within the Terminal.app.

Follow the instructions below to install the tools required to be able to use additional developer tools, including MacOS Homebrew.

1.  Open the MacOS **Terminal** and type

        xcode-select --install

2.  In the dialog box, click the **Install** button
3.  You may be asked to enter your user login password
4.  Wait several minutes for the download and installation to complete

### MacOS Homebrew

Homebrew is a package manager for MacOS that lets you install tools directly from the Terminal. Once it's installed, it's generally easier to use Homebrew than to use a web browser and graphical installer app.

These instructions are for recent versions of MacOS (MacOS v10.14 Mojave or newer). If these do not work for you, don't worry we can assist you in installing the tools another way.

#### Install Homebrew

1.  Visit <https://brew.sh>
2.  Find the section labeled "Install Homebrew"
3.  Copy the **entire line** beneath "Install Homebrew"
4.  Open a **Terminal.app** window and paste the copied text
5.  The text will look like this, please refer to the text from the <https://brew.sh> homepage

        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

6.  Enter your password and hit <kbd>Return</kbd> as prompted, **you will not see the characters as you type your password**, this is default behavior in command-line applications.

### Node.js (JavaScript)

We prefer to use the `brew` command to install Node.js. If you have not yet installed Homebrew in the instructions above, please do so.

#### Install Node.js using Homebrew

1.  Open a Terminal.app window and type the following, followed by <kbd>Return</kbd>

        brew install node

2.  Confirm that Node.js is installed by typing the command below, followed by <kbd>Return</kbd>

        node --version

3.  You should see a version string such as v16.1.0 or similar

        v16.1.0

#### Alternative Install of Node.js

If you cannot install Homebrew or have a problem installing Node.js using Homebrew, you can instead use the Node.js foundation installation steps.

1.  Visit the Node.js homepage at <https://nodejs.org/en/>
2.  Version v16.1.x **Current** is preferred (the button on the right side)
3.  Check that a version of Node.js is installed
4.  Open a Terminal.app window and type the command below followed by <kbd>Return</kbd>

        node --version

5.  You should see a version string such as v16.1.0 or similar

        v16.1.0

### Git Version Control System - MacOS

#### Git Command Line Tool

The version control tool Git is installed when you completed the command `xcode-select --install`. If for some reason you were unable to install the Xcode command-line tools, then you can install Git manually by following the instructions below.

1.  Visit the Git Downloads page at <https://git-scm.com/downloads>
2.  Download the installer for MacOS
3.  Run the installer from the Downloads folder, you may be asked for your password
4.  Confirm that Git is installed by running the command below followed by <kbd>Return</kbd>

          git --version

5.  You should see something like the following, any version above v2.0 is fine

          git version 2.30.0

### MongoDB and Compass

MongoDB and it's GUI App Compass will be used later in the course when we dive in to databases.

Check the documentation on [this page](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) for Mac install instructions.

### MongoDB Service - MacOS

1.  Run the following commands one after the other in your terminal to install mongoDB

          brew tap mongodb/brew
          brew install mongodb-community

2.  Then run the following command to test it:

          brew services start mongodb/brew/mongodb-community

3.  If you run into any issues please let one of our instructors know

### MongoDB Compass Graphical Interface

**Note:** Only do this if it was not installed along with MongoDB in the previous step.

1. Visit the MongoDB Compass installation instructions <https://docs.mongodb.com/compass/master/install/>
2. Download MongoDB Compass from <https://www.mongodb.com/try/download/compass>
3. Run the installer from your Downloads folder
4. Accept the default values for installation location and options

## Github SSH Setup

In order to push/pull code to/from Github we need to setup what are called SSH Keys. There's nobody better suited to walk you through this than Github itself...

### Generating an SSH Key

Click the link below and follow the steps to generate an SSH key. Be mindful of what Operating System the steps pertain to. To change which steps you are following you can select your OS at the top of the page. The first step on Mac should be "Open Terminal" and the first Windows step should be "Open Git Bash".

[Generating a New SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Adding a new SSH Key

After we've generated a new SSH Key we can then add it to our Github account. We'll make us of Github's instructions here as well. Make sure you select the correct OS and follow the "Web Browser" instructions.

[Adding a New SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### Testing the SSH Key

Lastly we'll check to make sure everything is working properly by following Github's protocol.

[Testing Your SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

[Generating and Adding a New SSH Key on Windows](https://www.loom.com/share/92149b64a4c84081b698f18ad963874b)
