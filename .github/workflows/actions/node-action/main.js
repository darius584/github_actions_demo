const core = require('@actions/core')
function fun() {
    const msg = core.getInput('msg')
    core.notice(msg)    
}
fun();
