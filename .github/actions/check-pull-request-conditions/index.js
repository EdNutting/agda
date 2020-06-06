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
    log(github.context);

    const payload = github.context.payload;
    const pr = payload.pull_request;
    const head = pr.head;
    const base = pr.base;

    const headRepo = head.repo;
    const baseRepo = base.repo;

    const headRepoId = headRepo.id;
    const baseRepoId = baseRepo.id;

    shouldContinue = headRepoId !== baseRepoId;
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
