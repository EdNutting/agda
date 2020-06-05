const core = require('@actions/core');
const github = require('@actions/github');

function log(data) {
  console.log(JSON.stringify(data, null, "  "));
}

function logError(error) {
  core.setFailed(error.message);
  console.error("Something went wrong...", error);
}

async function run() {
  try { 
    const repoToken = core.getInput('repo-token', { required: true });

    log(github.context);
    
    const repo = github.context.payload.repository;
    const ref = github.context.ref;

    let client = {};
    try {
      client = new github.getOctokit(repoToken);
    }
    catch (error) {
      logError(error);
    }

    try {
      const pullRequests = await client.pulls.get({
        owner: repo.owner.login,
        repo: repo.name,
        state: "open",
        base: ref
      });

      log(pullRequests);
    }
    catch (error) {
      logError(error);
    }
  }
  catch (error) {
    logError(error);
  }
}

run()
