import IObtainPoems from "src/Persistence/IObtainPoems";
import PoemService from "src/Domain/Poems/Poem.service";
import IReactCommands from "src/Application/IReactCommands";
import PoemController from "src/Application/PoemController";
import PoemRepositoryAdapter from "src/Persistence/PoemRepositoryAdapter";
import MailAdapter from "src/Persistence/MailAdapter";

class Main{
    constructor(
    ) {
        console.log("all OK");

    }
}
const dbObtain = new PoemRepositoryAdapter();
const dbWrite = new MailAdapter();
const poemService = new PoemService(dbObtain, dbWrite);
const poemController = new PoemController(poemService);

poemController.read();
poemController.write();