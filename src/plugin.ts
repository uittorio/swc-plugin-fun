import { Visitor } from "@swc/core/Visitor.js";
import { CallExpression, Expression } from '@swc/core';

export class MyVisitor extends Visitor {
    visitIdentifier(node) {
        console.log("called")
        return node;
    }
}

export class ConsoleStripper extends Visitor {
    visitCallExpression(expression: CallExpression): Expression {
        if (expression.callee.type !== "MemberExpression") {
            return expression;
        }

        if (
            expression.callee.object.type === "Identifier" &&
            expression.callee.object.value === "console"
        ) {
            if (expression.callee.property.type === "Identifier") {
                return {
                    type: "UnaryExpression",
                    span: expression.span,
                    operator: "void",
                    argument: {
                        type: "NumericLiteral",
                        span: expression.span,
                        value: 0,
                    },
                };
            }
        }

        return expression;
    }
}
