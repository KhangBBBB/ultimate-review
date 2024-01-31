import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Lecture 2",
        flashcards: [
            // What is an Operating System?
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
                answer: "hardware, operating system, application programs, and users."
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
            // Process Managemnet.
            {
                question: "What is a process in the context of computer systems?",
                answer: "A process is a program in execution. It is a unit of work within the system. Unlike a program, which is a passive entity, a process is an active entity."
            },
            {
                question: "What resources does a process need to accomplish its task?",
                answer: "CPU (Central Processing Unit), memory, I/O (Input/Output), files, and initialization data."
            },
            {
                question: "What is a multi-threaded process, and how is it different?",
                answer: "A multi-threaded process has one program counter per thread. Threads within a process can execute independently. This allows for more efficient parallel execution of tasks within the same process."
            },
            {
                question: "How do processes run concurrently in a computer system?",
                answer: "In a computer system, there are typically many processes, some user-related, and some related to the operating system, running concurrently on one or more CPUs. Concurrency is achieved by multiplexing the CPUs among the processes/threads."
            },
            // Process Management.
            {
                question: "What activities is the operating system responsible for in connection with process management?",
                answer: "The operating system is responsible for the following activities in connection with process management:\n1. Creating and deleting both user and system processes\n2. Suspending and resuming processes\n3. Providing mechanisms for process synchronization\n4. Providing mechanisms for process communication\n5. Providing mechanisms for deadlock handling"
            },
            // Memory Management.
            {
                question: "What role does memory management play in computer systems?",
                answer: "Memory management is responsible for determining what data and instructions are in memory, optimizing CPU utilization, and ensuring efficient computer response to users."
            },
            {
                question: "What are the key responsibilities of memory management?",
                answer: "1. Keeping track of which parts of memory are currently being used and by whom\n2. Deciding which processes (or parts thereof) and data to move into and out of memory\n3. Allocating and deallocating memory space as needed"
            },
            {
                question: "All instructions must be in ____ in order to be executed.",
                answer: "memory"
            },
            // Storage Management.
            {
                question: "In storage management, what is the logical storage unit?",
                answer: "file",
            },
            {
                question: "What is the role of each storage medium in storage management?",
                answer: "Each storage medium, such as a disk drive or tape drive, is controlled by a device. Varying properties include access speed, capacity, data-transfer rate, and access method (sequential or random)."
            },
            {
                question: "What are the key activities of file-system management?",
                answer: "File-system management involves organizing files into directories and implementing access control. OS activities related to file-system management include creating and deleting files and directories, primitives to manipulate files and directories, mapping files onto secondary storage, and backing up files onto stable (non-volatile) storage media."
            },
            {
                question: "How does the operating system handle access control in storage management?",
                answer: "Access control on most systems is used to determine who can access what. The operating system is responsible for managing access to files and directories."
            },
            {
                question: "What are the OS activities related to file creation and deletion?",
                answer: "OS activities related to file creation and deletion include creating and deleting files and directories, which are fundamental operations in file-system management."
            },
            {
                question: "What does the term 'primitives' refer to in the context of file-system management?",
                answer: "Primitives in file-system management are basic operations or functions provided by the operating system to manipulate files and directories. These include actions like reading, writing, and deleting files."
            },
            {
                question: "Why is backing up files onto stable storage media important in storage management?",
                answer: "Backing up files onto stable (non-volatile) storage media is crucial for data preservation and recovery. It ensures that important data is stored redundantly and can be retrieved in case of system failures or data loss."
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