import IObtainPoems from "src/Persistence/IObtainPoems";
import PoemRepository from "src/Persistence/PoemRepository";

export default class PoemRepositoryAdapter implements IObtainPoems{
    protected db: PoemRepository
    constructor(
    ) {
        this.db = new PoemRepository();
    }
    read() {
        console.log("READ FROM ADAPTER")
        return this.db.fetchAll();
    }
}