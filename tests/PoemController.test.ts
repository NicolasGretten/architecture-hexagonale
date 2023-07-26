import PoemController from "src/Application/PoemController";
import PoemService from "src/Domain/Poems/Poem.service";

describe("PoemController", () => {
    it("should read poems from the service", () => {
        // Arrange
        const testData = [
            {
                id: "1",
                style: "haïku",
                content: "Un vieil étang, Une grenouille saute dans, le son de l’eau",
            },
            {
                id: "2",
                style: "pantoum",
                content:
                    "L’éclair vibre sa flèche torse, À l’horizon mouvant des flots, Sur ta natte de fine écorce, Tu rêves, les yeux demi-clos.",
            },
        ];
        const serviceMock = new PoemService(
            createObtainPoemsMock(testData),
            createWriteLinesMock()
        );
        const controller = new PoemController(serviceMock);

        // Act
        const result = controller.read();

        // Assert
        expect(result).toEqual(testData);
    });
});

// Helper functions to create mock objects for the service dependencies

function createObtainPoemsMock(data: any[] = []) {
    return {
        read: jest.fn().mockReturnValue(data),
    };
}

function createWriteLinesMock() {
    return {
        write: jest.fn(),
    };
}
