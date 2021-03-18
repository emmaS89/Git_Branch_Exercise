// Git Branching Exercise

// Part I
// Answer the following questions:

// What git command creates a branch?
// What is the difference between a fast-forward and recursive merge?
// What git command changes to another branch?
// What git command deletes a branch?
// How do merge conflicts happen?

// Part II
// Practice with fast forward and recursive merges! Make a branch and add and commit onto it and merge it back into master.

// Try to create your own merge conflict by modifying the same file on two separate commits on two separate branches.

// ****************************************************************************************

// What git command creates a branch? 
// git checkout -b branch_name

// What is the difference between a fast-forward and recursive merge? 
// Fast forwards can only happen if there is no commits on the original branch while the new branch is being worked on

// What git command changes to another branch?
//  git checkout

// What git command deletes a branch? 
// git branch -d branch_name BUT, before merge the branch thi code cannot work. Instead use => git branch -D branch_name

// How do merge conflicts happen? 
// If files and changes same at master and branches there are merge conflicts.