import {
    commands
} from './commands/commands.js';

import {
    mycommands
} from './commands/my-commands.js';

import {
    callback
} from './call-back.js';

function start() {

    commands();
    mycommands();
    callback();

}

start();