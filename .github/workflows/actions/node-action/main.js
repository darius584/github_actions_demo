const core = require('@actions/core')
const exec = require('@actions/exec')
function fun() {
    const msg = core.getInput('msg')
    exec.exec('echo echoing')
    core.notice(msg)    
}
fun();
