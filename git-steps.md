# Git steps for completing an assignment

## 1. clone your assignment

Make sure your working directory is your `upright/` folder

1. `cd`
1. `cd upright`

Clone the repository using HTTPS

1. Copy the HTTPS url from the big green CODE button on the repo home page
1. `git clone <url>`

Open the repository

1. `cd <name-of-repo>`
1. if you're not already in VSCode, run `code .` to open VSCode

## 2. make changes to your files

Make whatever changes you want to commit.

## 3. double check your changes

You can use a `git status` to make sure you have only changed the files you intended to change

and then use `git diff` to see your changes line by line and make sure they look right.

> Use the space bar to scroll in the diff window, use q to quit the diff window.

## 4. stage changes using git add

Use **ONLY ONE** of these:

-   `git add .` adds all files in the working directory

-   `git add -A` adds all tracked and untracked files

-   `git add {path}` adds files at the specified path (it could be a path to a directory or just a single file)

## 5. check your staged changes

Do another `git status` to make sure that all of your changes are staged (in green) and that you haven't staged anything you didn't mean to.

## 6. commit changes

> Files have to be added by this point (green in the git status) or your commit will be empty.

`git commit -m "commit message goes here"`

## 7. repeat!

Repeat steps 2-6 until you finish the assignment.

## 8. push commits

You don't have to do this every time you commit, but you do have to push before the commits exist on GitHub (so, before you can make a pull request.)

The first time you push to a brand new branch: `git push -u origin this-branch-name`

After that:
`git push`
