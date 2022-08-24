const simpleGit = require("simple-git");

const MAIN_BRANCH = "master";

async function rebase() {
  const git = simpleGit();

  const taskBranch = await git.revparse(["--abbrev-ref", "HEAD"]);
  console.log("currentBranch: ", taskBranch);

  await git
    .checkout(MAIN_BRANCH)
    .then(() => console.log("checked out to: ", MAIN_BRANCH));

  await git
    .pull()
    .then((response) => console.log("pull result:\n ", response))
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

rebase();

module.exports = rebase;
