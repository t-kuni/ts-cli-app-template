#!/usr/bin/env node

import './bootstrap';
import {run, subcommands} from 'cmd-ts';
import Cmd1 from './Commands/Cmd1';
import Cmd2 from './Commands/Cmd2';

const app = subcommands({
    name: "app",
    cmds: {
        cmd1: Cmd1,
        cmd2: Cmd2
    },
})

run(app, process.argv.slice(2));