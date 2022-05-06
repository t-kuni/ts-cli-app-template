import {command} from 'cmd-ts';

export default command({
    name: 'cmd2',
    args: {
    },
    handler: (args) => {
        console.log("command cmd2");
    },
});