import { ConsoleStripper, MyVisitor } from './src/plugin';

export default {
    testEnvironment: 'node',
    transform: {
        "^.+\\.ts$": ["@swc/jest", {
            jsc: {
                parser: {
                    syntax: 'typescript'
                },
                target: "es2021",
                "keepClassNames": false
            },
            plugin: (m: any) => {
                console.log(m, '???');
                return new ConsoleStripper().visitProgram(m);
            },
        }],
    },
};
