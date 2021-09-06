---
title: "Using pre-commit hook in package.json"
date: "2021-09-02"
categories: 
  - "javascript"
tags: 
  - "javascript"
  - "nodejs"
  - "pre-commit"
---

One of the _traits_ of someone who follows or moving towards a good coding practice environment is making sure that you are not pushing the code which may have linting issues and/or failing unit tests.

Adding a pre-commit hook forces to check the lint and run unit tests (or any other script) to be sure that everything is good before committing changes.

```javascript
npm i --save-dev pre-commit
```

Next step is to update the package.json file to included pre-commit hook.

```javascript
"pre-commit": \[
    "test",
    "lint"
  \]
```

Now whenever you try to commit any changes, the "test" script will run first and then the "lint" script. It will show an error in case unit tests are not passing or there is a linting issue.

#### **Skip running the pre-commit**

```javascript
add --no-verify to the git command
```
