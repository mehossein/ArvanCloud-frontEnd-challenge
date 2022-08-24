const simpleGit = require("simple-git");

const MAIN_BRANCH = "master";

async function publish() {
  const git = simpleGit();

  const taskBranch = await git.revparse(["--abbrev-ref", "HEAD"]);
  console.log("currentBranch: ", taskBranch);

  await git
    .checkout(MAIN_BRANCH)
    .then(() => console.log("checked out to: ", MAIN_BRANCH));

  await git
    .mergeFromTo(MAIN_BRANCH, taskBranch)
    .then(() => console.log(taskBranch, " merged with ", MAIN_BRANCH))
    .catch((error) => console.log(error));

  await git
    .push(["-u"])
    .then(() => console.log(MAIN_BRANCH, " pushed"))
    .catch((error) => console.log(error));

  await git
    .checkout(taskBranch)
    .then(() => console.log("checked out BACK to: ", taskBranch));

  await git
    .rebase([MAIN_BRANCH])
    .then(() => console.log("rebased with: ", MAIN_BRANCH))
    .catch((error) => console.log(error));
  return taskBranch;
}

publish();

module.exports = rebase;
