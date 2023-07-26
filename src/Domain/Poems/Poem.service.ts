import IObtainPoems from "src/Persistence/IObtainPoems";
import IWriteLines from "src/Persistence/IWriteLines";
import PoemEntity from "src/Domain/Poems/Poem.entity";

export default class PoemService{
    constructor(
        protected dbObtain: IObtainPoems,
        protected dbRead: IWriteLines
    ){

    }

    read(){
        const data = this.dbObtain.read();
        data.forEach((element: PoemEntity) => {
            element.content =  element.content.replaceAll(",", "\n")
        })
        return this.dbObtain.read()
    }

    write(){
        console.log("SERVICE TREATMENT DATA WRITE")
        this.dbRead.write()
    }

}