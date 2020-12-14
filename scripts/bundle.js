
let sh = require('child_process').execSync;
let author = sh('git config --get user.email').toString().trim();
let commits = sh(`git log --author=${ author }`).toString().trim();

if (!commits) {
  console.error('This repo has no commits from the current Git user. Did you commit your changes?');
  process.exit(1);
}

let result = sh('git bundle create take-home-exercise.bundle HEAD main');
console.log('Great! You created take-home-exercise.bundle.');
console.log('Please see instructions in README to submit your app.');

