const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try { 
    const repoToken = core.getInput('repo-token', { required: true });

    console.log(JSON.stringify(github.context, null, "  "));
    console.log(Object.keys(github));

    const client = new github.GitHub(repoToken);
    // await client.pulls.get({
    //   owner: github.context.repository.owner.login,
    //   repo: github.context.repository.name,
    //   state: "open",
    //   base: github.context.ref
    // });
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
