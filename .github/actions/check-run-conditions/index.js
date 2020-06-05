const core = require('@actions/core');
const github = require('@actions/github');

function log(data) {
  console.log(JSON.stringify(data, null, "  "));
}

function logError(line, error) {
  core.setFailed(error.message);
  console.error(line, error);
}

async function run() {
  // Whether to allow the CI run to continue or not
  let shouldContinue = true;

  try { 
    const repoToken = core.getInput('repo-token', { required: true });

    // log(github.context);
    
    const repo = github.context.payload.repository;
    const ref = github.context.ref;
    const branch = ref.replace(/^refs\/heads\//, "");

    const client = new github.getOctokit(repoToken);

    const pullRequestsResult = await client.pulls.list({
      owner: repo.owner.login,
      repo: repo.name,
      state: "open",
      head: branch
    });

    let pullRequests = pullRequestsResult.data;

    log(pullRequests);

    if (pullRequests.length > 0) {
      let allAreWIP = true;
      for (let request of pullRequests) {
        // Check whether the pull request is labelled 'wip'
        // 'Work in progress'
        let containsWipLabel = request.labels.some(label => label == "wip");
        allAreWIP = allAreWIP && containsWipLabel;
      }
      shouldContinue = shouldContinue && !allAreWIP;
    }
    else {
      shouldContinue = true;
    }
  }
  catch (error) {
    logError("", error);

    // Fail safe: CI runs should continue even if this script starts failing
    shouldContinue = true;
  }

  core.setOutput("shouldContinue", shouldContinue);
}

run()
