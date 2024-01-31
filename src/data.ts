import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Lecture 2",
        flashcards: [
            {
                question: "What is an Operating System?",
                answer: "An operating system is a program that acts as an intermediary between a user of a computer and the computer hardware."
            },
            {
                question: "What are the goals of an Operating System?",
                answer: "1. Execute user programs and make solving user problems easier.\n2. Make the computer system convenient to use.\n3. Use the computer hardware in an efficient manner."
            },
            {
                question: "What are the four components of a computer system?",
                answer: "The four components of a computer system are hardware, operating system, application programs, and users."
            },
            {
                question: "What does the hardware component of a computer system provide?",
                answer: "The hardware component provides basic computing resources, including the CPU (Central Processing Unit), memory, and I/O (Input/Output) devices."
            },
            {
                question: "What is the role of the operating system in a computer system?",
                answer: "The operating system controls and coordinates the use of hardware among various applications and users."
            },
            {
                question: "How do application programs contribute to a computer system?",
                answer: "Application programs define the ways in which the system resources are used to solve the computing problems of the users. Examples include word processors, compilers, web browsers, database systems, and video games."
            },
            {
                question: "Who constitutes the 'Users' component in a computer system?",
                answer: "Users can include people, machines, and other computers."
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