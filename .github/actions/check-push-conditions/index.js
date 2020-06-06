const core = require('@actions/core');
const github = require('@actions/github');

function showForLog(data) {
  return JSON.stringify(data, null, "  ");
}

function log(data) {
  console.log(showForLog(data));
}

function logError(line, error) {
  console.warn(line, showForLog(error));
}

function logError(line, error) {
  core.setFailed(error.message);
  console.error(line, showForLog(error));
}

async function run() {
  // Whether to allow the CI run to continue or not
  let shouldContinue = true;

  try { 
    const repoToken = core.getInput('repo-token', { required: true });

    // log(github.context);
    
    const payload = github.context.payload;
    const repo = payload.repository;
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

    // log(pullRequests);

    if (pullRequests.length > 0) {
      let isLabelWIP = labelData => labelData.name == "wip";
      let isPrWIP = pr => pr.labels.some(isLabelWIP);
      let anyPrIsNotWIP = pullRequests.some(pr => !isPrWIP(pr));
      shouldContinue = shouldContinue && anyPrIsNotWIP;
    }
    else {
      shouldContinue = true;
    }
  }
  catch (error) {
    logWarning(`An error occurred while running the checker script.
 The checker is not functioning so will fail-safe and allow the CI run to continue.`, error);

    shouldContinue = true;
  }

  log({ shouldContinue });
  core.setOutput("shouldContinue", shouldContinue);
}

run()
