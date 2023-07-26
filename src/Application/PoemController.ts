import IReactCommands from "src/Application/IReactCommands";
import PoemService from "src/Domain/Poems/Poem.service";

export default class PoemController implements IReactCommands{
    constructor(
        protected service: PoemService,
    ) {
    }

    read() {
        console.log("read from Controller", this.service.read())
        return this.service.read();
    }

    write() {
        console.log("write from Controller")
        this.service.write();
    }
}