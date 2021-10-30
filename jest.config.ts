import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    globals: {
        "ts-jest": {
            "compiler": "ttypescript"
        }
    },
    setupFiles: [
        "<rootDir>config.ts",
    ],
};
export default config;