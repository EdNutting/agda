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

    let isPullRequestEvent = payload.pull_request !== undefined;
    let isPushEvent = payload.pusher !== undefined;

    let pullRequests = pullRequestsResult.data;

    // log(pullRequests);
    log({
      isPullRequestEvent,
      isPushEvent
    });

    if (pullRequests.length > 0) {
      if (isPullRequestEvent) {
        // Pull request event

        let allAreWIP = true;
        for (let request of pullRequests) {
          // Check whether the pull request is labelled 'wip'
          // 'Work in progress'
          let containsWipLabel = request.labels.some(labelData => labelData.name == "wip");
          allAreWIP = allAreWIP && containsWipLabel;
        }
        shouldContinue = shouldContinue && !allAreWIP;
      }
      else if (isPushEvent) {
        // Push event

        shouldContinue = false;
      }
      else {
        logError("This action should only be used for Push and Pull Request events.", payload);
      }
    }
    else {
      shouldContinue = true;
    }
  }
  catch (error) {
    logWarning(`An error occurred while running the checker script.
 The checker is not functioning so will fail-safe and allow the CI run to continue.`, error);

    // Fail safe: CI runs should continue even if this script starts failing
    shouldContinue = true;
  }

  log({ shouldContinue });
  core.setOutput("shouldContinue", shouldContinue);
}

run()
