const core = require('@actions/core');
const github = require('@actions/github');

function log(data) {
  console.log(JSON.stringify(data, null, "  "));
}

async function run() {
  try { 
    const repoToken = core.getInput('repo-token', { required: true });

    // log (github.context);

    const client = new github.getOctokit(repoToken);
    let pullRequests = await client.pulls.get({
      owner: github.context.repository.owner.login,
      repo: github.context.repository.name,
      state: "open",
      base: github.context.ref
    });

    log(pullRequests);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
