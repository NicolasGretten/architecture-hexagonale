import PoemEntity from "src/Domain/Poems/Poem.entity";

export default class PoemRepository{
    data: PoemEntity[] = [
        {
            "id": "1",
            "style": "haïku",
            "content": "Un vieil étang, Une grenouille saute dans, le son de l’eau",
        },
        {
            "id": "2",
            "style": "pantoum ",
            "content": "L’éclair vibre sa flèche torse, À l’horizon mouvant des flots, Sur ta natte de fine écorce, Tu rêves, les yeux demi-clos.",
        },
    ];

    fetchAll(){
        return this.data;
    }

    fetchById(id: number){
        return this.data.find(e => e.id == id.toString());
    }

}