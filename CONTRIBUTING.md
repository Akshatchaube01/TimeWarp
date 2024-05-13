# **Contributing Guidelines** 📄

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project.
Thank you for helping out and remember, **no contribution is too small.**
<br>
Please note we have a [code of conduct](CODE_OF_CONDUCT.md)  please follow it in all your interactions with the project.



<br>

## **Need some help regarding the basics?🤔**


You can refer to the following articles on basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>


## **Issue Report Process 📌**

1. Go to the project's issues.
2. Give proper description for the issues.
3. Don't spam to get the assignment of the issue 😀.
4. Wait for till someone is looking into it !.
5. Start working on issue only after you got assigned that issue 🚀.

<br>

## How to Contribute
If you think that you can add a new feature or want to fix a bug, we invite you to contribute to Timewarp and make this project better. To contribute:

1. Create a folder at your desire location (usually at your desktop).

2. Open Git Bash Here

3. Create a Git repository.

   Run command `git init`

4. Fork the [repository](https://github.com/Akshatchaube01/TimeWarp.git).

5. Clone your forked repository of project.

```git clone
git clone https://github.com/<your_username>/TimeWarp.git
```

6. Navigate to the project directory.

```
cd TimeWarp
```

7. Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/Akshatchaube01/TimeWarp.git
```

8. Check the remotes for this repository.

```
git remote -v
```

9. Always take a pull from the upstream repository to your main branch to keep it updated as per the main project repository.

```
git pull upstream main
```

10. Create a new branch(prefer a branch name that relates to your assigned issue).

```
git checkout -b <YOUR_BRANCH_NAME>
```

11. Perform your desired changes to the code base.

12. Check your changes.

```
git status
```

```
git  diff
```

13. Stage your changes.

```
git add . <\files_that_you_made_changes>
```

14. Commit your changes.

```
git commit -m "relavant message"
```

15. Push the committed changes in your feature branch to your remote repository.

```
git push -u origin <your_branch_name>
```

16. To create a pull request, click on `compare and pull requests`.

17. Add an appropriate title and description to your PR explaining your changes.

18. Click on `Create pull request`.



## Alternative Way
Follow the below instructions you can use GitHub Desktop to manage this repository. Here's how:

1. **Download and Install GitHub Desktop**: 
   - Go to the [GitHub Desktop website](https://desktop.github.com/) and download the GitHub Desktop application.
   - Follow the installation instructions to install GitHub Desktop on your computer.

2. **Clone the Repository**:
   - Open GitHub Desktop and sign in to your GitHub account.
   - Click on the "File" menu, then select "Clone Repository..."
   - Choose the repository you want to clone from the list or enter its URL.
   - Choose the local path where you want to clone the repository and click "Clone".

3. **Make Changes**:
   - After cloning the repository, you can make changes to the files locally using your preferred code editor.

4. **Commit Changes**:
   - Once you've made changes, open GitHub Desktop.
   - You'll see a list of files with changes. Write a summary and description of your changes in the text fields.
   - Click "Commit to main" to commit your changes locally.

5. **Push Changes**:
   - To push your changes to the remote repository on GitHub.com, click "Push origin".

6. **Pull Changes**:
   - If there are changes on the remote repository that you don't have locally, you can pull them by clicking "Fetch origin" or "Pull origin".

7. **Sync Changes**:
   - To synchronize your local repository with the remote repository, click "Sync" to push and pull changes in one step.

That's it! You can now use GitHub Desktop to manage this repository efficiently.

## **Pull Request Process 🚀**

1. Ensure that you have self reviewed your code 😀
2. Make sure you have added the proper description for the functionality of the code
3. I have commented my code, particularly in hard-to-understand areas.
4. Add screenshot it help in review.
5. Submit your PR by giving the necesarry information in PR template and hang tight we will review it really soon 🚀

<br>

# **Thank you for contributing💗** 
