import { MyVisitor} from './src/plugin.js'

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
            plugin: (m) => {
                console.log(m, '???');
                return new MyVisitor().visitProgram(m);
            },
        }],
    },
};
