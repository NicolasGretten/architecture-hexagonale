import IWriteLines from "src/Persistence/IWriteLines";

export default class MailAdapter implements IWriteLines{
    write() {
        console.log("READ FROM ADAPTER")
    }
}