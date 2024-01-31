import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Lecture 2",
        flashcards: [
            {
                question: "What is an operating system?",
                answer: "Operating system is a program that acts as an intermediary between a user of a computer and the computer hardware.",
            },
            {
                question: "What are operating system goals?",
                answer: `* Execute user programs and make solving user problems easier.
* Make the computer system convenient to use.
* Use the computer hardware in an efficient manner.`
            },
        ],
    },
    {
        title: "Lecture 3",
        flashcards: [
            {
                question: "What are the different user interfaces in operating systems?",
                answer: "Command-Line (CLI), Graphical User Interface (GUI), Batch",
            },
        ],
    },
];