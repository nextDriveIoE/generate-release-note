const generator = require('@nextdriveioe/release-note-generator');
const core = require('@actions/core');

const token = core.getInput('github_token');
const username = core.getInput('jira_user');
const password = core.getInput('jira_token');
const start = core.getInput('base_version');
const end = core.getInput('current_version');
const config = core.getInput('config_name');

const options = {
    token,
    username,
    password,
    start,
    end,
    config
}

console.log(options);

const generateCommand = new generator.GenerateCommand()
generateCommand.handler(options)
