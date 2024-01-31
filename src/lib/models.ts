export namespace models {
    export type Flashcard = {
        question: string;
        answer: string;
    };

    export type Topic = {
        title: string
        subtitle: string
        flashcards: Flashcard[]
    };
}