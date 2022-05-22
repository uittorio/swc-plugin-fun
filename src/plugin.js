import { Visitor } from "@swc/core/Visitor.js";

export class MyVisitor extends Visitor {
    visitIdentifier(node) {
        console.log("called")
        return node;
    }

    visitTsType(node) {

        return node;
    }
}
