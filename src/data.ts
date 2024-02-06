import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "OS: Bash and Linux Commands",
        subtitle: "",
        flashcards: [
            // Bash.
            {
                question: "Write a Bash script that uses a for loop (range) to print numbers from 1 to 100.",
                answer: `#!/bin/bash
                
for i in {1..100}; do
    echo $i
done`,
            },
            {
                question: "Write a Bash script that uses a for loop (C-like) to print numbers from 1 to 100.",
                answer: `#!/bin/bash

for ((i = 1; i <= 100; i++)); do
  echo $i
done`,
            },
            {
                question: "What is the difference between single and double quotes when defining a variable in Bash?",
                answer: "Single quotes preserve the literal value of each character within the quotes, while double quotes allow variable substitution and interpret certain escape sequences.",
            },
            {
                question: "Declare a variable in Bash.",
                answer: `msg="Hello World"`,
            },
            {
                question: "How do you access the value of a variable in Bash?",
                answer: "Prefix the variable name with a dollar sign ($). For example, echo $variable_name will print the value.",
            },
            {
                question: "Declare an array of numbers in Bash.",
                answer: "numbers=(1 2 3 4 5)",
            },
            {
                question: "Declare an array of strings in Bash.",
                answer: `fruits=("apple" "banana" "orange" "grape" "kiwi")`,
            },
            {
                question: "How can one access individual elements in an array in Bash?",
                answer: `# Define an array of fruits.
fruits=("apple" "banana" "orange" "grape" "kiwi")
# Access the 2nd element.
echo $\{fruits[1]\}`,
            },
            {
                question: "How do you iterate over an array of fruits in Bash using a for loop?",
                answer: `#!/bin/bash

# Define an array of fruits
fruits=("apple" "banana" "orange" "grape" "kiwi")

# Iterate over the array using a for loop
for fruit in "\${fruits[@]}"; do
    echo "I like \$fruit"
done`,
            },
            {
                question: "What is variable substitution in Bash?",
                answer: "Variable substitution is a feature in Bash where the value of a variable is replaced with its contents. This can be done using '$' for normal variables and '${}' for array elements or complex expressions."
            },
            {
                question: "How do you execute a command in Bash and store its output in a variable?",
                answer: "variable_name=$(command)"
            },
            {
                question: "FRUIT=\"Apple\"\necho '$FRUIT'",
                answer: "$FRUIT",
            },
            {
                question: `get_full_name() {
  echo John Doe
}

echo "My full name is $(get_full_name)."`,
                answer: "My full name is John Doe.",
            },
            {
                question: `str1="Hello"
str+=" World"
echo $str`,
                answer: "Hello World"
            },
            // cp.
            {
                question: "What is the purpose of the 'cp' command in Linux?",
                answer: "To copy files or directories from one location to another."
            },
            {
                question: "How do you use the 'cp' command to copy a file in Linux?",
                answer: "The basic syntax for copying a file is: 'cp source_file destination_directory'. For example, 'cp file.txt /path/to/destination/'"
            },
            {
                question: "How can you copy multiple files using the 'cp' command?",
                answer: "Specify them as a list after the 'cp' command, followed by the destination directory. For example, 'cp file1.txt file2.txt /path/to/destination/'"
            },
            {
                question: "What option is used to preserve the original file attributes, such as timestamps, when copying with 'cp'?",
                answer: "Option '-p'. For example, 'cp -p file.txt /path/to/destination/'"
            },
            {
                question: "How do you recursively copy directories and their contents using the 'cp' command?",
                answer: "Use the '-r' or '-R' option. For example, 'cp -r source_directory /path/to/destination/'"
            },
            // ps.
            {
                question: "What is the purpose of the 'ps' command in Linux?",
                answer: "To display information about the currently running processes."
            },
            {
                question: "What is the basic syntax of the 'ps' command?",
                answer: "The basic syntax is simply 'ps'. This will display a snapshot of the currently running processes in the current terminal window."
            },
            {
                question: "How can you view information about all processes running on the system using 'ps'?",
                answer: "Use 'ps -e' or 'ps aux'."
            },
            {
                question: "What does the 'ps' option '-f' do?",
                answer: "It provides a full-format listing, displaying more detailed information about each process, including the process hierarchy."
            },
            {
                question: "How do you filter and display specific process information using 'ps'?",
                answer: "Use the 'ps' command with options like '-C' followed by the process name. For example, 'ps -C firefox' will display information about the Firefox process."
            },
            // ls.
            {
                question: "What is the purpose of the 'ls' command in Linux?",
                answer: "To list files and directories in a directory."
            },
            {
                question: "What is the basic syntax of the 'ls' command?",
                answer: "The basic syntax is 'ls [options] [file/directory]'. Without specifying a file or directory, it lists the contents of the current directory."
            },
            {
                question: "How do you display detailed information about files using 'ls'?",
                answer: "Use the '-l' option. For example, 'ls -l' shows details like file permissions, owner, size, and modification time."
            },
            {
                question: "How can you list all files, including hidden ones, using 'ls'?",
                answer: "Use the '-a' option. For example, 'ls -a' shows all files, including those whose names start with a dot."
            },
            {
                question: "What 'ls' option is used to sort files by modification time, with the newest first?",
                answer: "Option '-t'. For example, 'ls -lt' lists files in long format with the newest at the top."
            },
            // mv.
            {
                question: "What is the purpose of the 'mv' command in Linux?",
                answer: "To move or rename files and directories."
            },
            {
                question: "How do you use 'mv' to move a file or directory to a different location?",
                answer: "The basic syntax for moving a file is 'mv source_file destination'. For example, 'mv file.txt /path/to/destination/'"
            },
            {
                question: "What happens if you use 'mv' to move a file to an existing directory?",
                answer: "The 'mv' command will move the file into that directory."
            },
            {
                question: "How do you use 'mv' to rename a file?",
                answer: "Use 'mv' with the current filename as the source and the new filename as the destination. For example, 'mv old_name.txt new_name.txt'"
            },
            {
                question: "What is the purpose of the '-i' option with the 'mv' command?",
                answer: "To prompt for confirmation before overwriting an existing file. For example, 'mv -i file.txt /path/to/destination/'"
            },
            // rm.
            {
                question: "What is the purpose of the 'rm' command in Linux?",
                answer: "To remove or delete files and directories."
            },
            {
                question: "How do you use 'rm' to delete a file?",
                answer: "The basic syntax for deleting a file is 'rm file.txt'. This command removes the specified file."
            },
            {
                question: "What 'rm' option is used to remove a directory and its contents recursively?",
                answer: "The '-r' option with 'rm' is used to remove directories and their contents recursively. For example, 'rm -r directory/'"
            },
            {
                question: "How can you force the removal of files without prompting for confirmation?",
                answer: "Use the '-f' option. For example, 'rm -f file.txt'"
            },
            {
                question: "What is the purpose of the '-i' option with the 'rm' command?",
                answer: "To prompt for confirmation before removing each file. For example, 'rm -i file.txt'"
            },
            // mkdir.
            {
                question: "What is the purpose of the 'mkdir' command in Linux?",
                answer: "To create new directories (folders)."
            },
            {
                question: "How do you use 'mkdir' to create a new directory?",
                answer: "The basic syntax for creating a new directory is 'mkdir directory_name'. This command creates a directory with the specified name."
            },
            {
                question: "What 'mkdir' option is used to create parent directories if they do not exist?",
                answer: "Option '-p'. For example, 'mkdir -p path/to/new_directory/'"
            },
            {
                question: "How can you set the permissions of the new directory using 'mkdir'?",
                answer: "Use the '--mode' or '-m' option followed by the numeric mode. For example, 'mkdir -m 755 new_directory/'"
            },
            {
                question: "What happens if you try to create a directory that already exists with 'mkdir'?",
                answer: "It will display an error message unless the '-p' option is used."
            },
            // rmdir.
            {
                question: "What is the purpose of the 'rmdir' command in Linux?",
                answer: "To remove empty directories."
            },
            {
                question: "How do you use 'rmdir' to remove an empty directory?",
                answer: "rmdir directory_name"
            },
            {
                question: "What happens if you attempt to use 'rmdir' on a non-empty directory?",
                answer: "It will display an error message as 'rmdir' can only remove empty directories."
            },
            {
                question: "What is an alternative command for removing directories, including non-empty ones?",
                answer: "rm -r directory/"
            },
            {
                question: "Is there any option available for 'rmdir' to force the removal of a non-empty directory?",
                answer: "No. For that purpose, 'rm -r' is commonly used."
            },
            // echo.
            {
                question: "What is the purpose of the 'echo' command in Linux?",
                answer: "To display messages or values on the terminal."
            },
            {
                question: "How do you use 'echo' to print a message to the terminal?",
                answer: "echo Hello, World!"
            },
            {
                question: "What is the purpose of the '-e' option with the 'echo' command?",
                answer: "To enable the interpretation of backslash escapes, allowing you to include special characters in the output. For example, 'echo -e 'Line1\\nLine2'' will print two lines."
            },
            {
                question: "How can you redirect the output of 'echo' to a file?",
                answer: "Use the '>' operator. For example, 'echo 'Hello' > output.txt' will create a file named 'output.txt' with the text 'Hello'."
            },
            {
                question: "What is the purpose of the '-n' option with the 'echo' command?",
                answer: "To suppress the trailing newline, allowing you to print text without adding a newline character at the end."
            },
            // more.

            {
                question: "What is the purpose of the 'more' command in Linux?",
                answer: "To display the contents of a text file or command output in a paginated manner."
            },
            {
                question: "How do you use 'more' to view the contents of a text file page by page?",
                answer: "more file_name"
            },
            {
                question: "What key can you press to advance to the next page while using 'more'?",
                answer: "Space"
            },
            {
                question: "How can you quit or exit from the 'more' command?",
                answer: "Press the 'q' key."
            },
            {
                question: "What is an alternative command to 'more' that also allows backward navigation?",
                answer: "less",
            },
            // date.
            {
                question: "What is the purpose of the 'date' command in Linux?",
                answer: "To display or set the system date and time."
            },
            {
                question: "How do you use 'date' to display the current date and time?",
                answer: "The basic syntax for displaying the current date and time is simply 'date'. This command will output the current date and time in the default format."
            },
            {
                question: "What 'date' option is used to format the output according to a specific format string?",
                answer: "The '+FORMAT' option with 'date' is used to format the output according to a specific format string. For example, 'date '+%Y-%m-%d'' will display the date in the 'YYYY-MM-DD' format."
            },
            {
                question: "How do you set the system date and time using 'date'?",
                answer: "Use the 'date' command with the '-s' option followed by the desired date and time. For example, 'sudo date -s '2024-01-30 12:34:56''"
            },
            {
                question: "What is the purpose of the '-u' option with the 'date' command?",
                answer: "To display or set the Coordinated Universal Time (UTC) instead of the local time."
            },
            // time.
            {
                question: "What is the purpose of the 'time' command in Linux?",
                answer: "To measure the execution time of a command or script."
            },
            {
                question: "How do you use 'time' to measure the execution time of a command?",
                answer: "The basic syntax for measuring the execution time of a command is 'time command'. For example, 'time ls' will display the real, user, and system time taken by the 'ls' command."
            },
            {
                question: "What does the 'real', 'user', and 'sys' values represent in the output of 'time'?",
                answer: "'real' represents the elapsed or wall clock time, 'user' represents the CPU time spent in user mode, and 'sys' represents the CPU time spent in system mode."
            },
            {
                question: "How can you redirect only the timing information of 'time' to a file?",
                answer: "Use 'time command 2> timing.txt'. This will redirect the standard error (stderr) output to the specified file."
            },
            {
                question: "What is the purpose of the '-p' option with the 'time' command?",
                answer: "To change the output format to be more machine-readable, providing timing information in a format that is easier to parse."
            },
            // kill.
            {
                question: "What is the purpose of the 'kill' command in Linux?",
                answer: "To send signals to processes, allowing for termination or manipulation of their behavior."
            },
            {
                question: "How do you use 'kill' to terminate a process by its process ID (PID)?",
                answer: "The basic syntax for terminating a process by its PID is 'kill PID'. For example, 'kill 1234' will send the default signal (SIGTERM) to process with PID 1234, requesting termination."
            },
            {
                question: "What is the default signal sent by 'kill'?",
                answer: "SIGTERM (termination signal), which allows the process to perform cleanup operations before exiting."
            },
            {
                question: "How can you force the termination of a process using 'kill'?",
                answer: "Use 'kill -9 PID' or 'kill -SIGKILL PID'. This sends the SIGKILL signal, which immediately terminates the process without allowing it to perform cleanup."
            },
            {
                question: "What is an alternative command to 'kill' for sending signals to processes?",
                answer: "The 'pkill' command is an alternative to 'kill' that allows you to send signals to processes based on their names or other attributes."
            },
            // history.
            {
                question: "What is the purpose of the 'history' command in Linux?",
                answer: "To display the command history list, which shows the previously executed commands in the current session."
            },
            {
                question: "How do you use 'history' to display the command history list?",
                answer: "The basic syntax for displaying the command history is simply 'history'. This command will show a numbered list of previously executed commands in the current session."
            },
            {
                question: "What 'history' option is used to limit the number of commands displayed?",
                answer: "Option '-n'. For example, 'history -n 10' will show the last 10 commands."
            },
            {
                question: "How can you execute a command from the history by its number?",
                answer: "Use '!n', where 'n' is the command number. For example, '!5' will re-run the fifth command from the history."
            },
            {
                question: "What is the purpose of the 'history' command with the '-c' option?",
                answer: "To clear the entire command history, removing all previously executed commands from the history list."
            },
            // chmod.
            {
                question: "What is the purpose of the 'chmod' command in Linux?",
                answer: "To change the permissions (read, write, execute) of files and directories."
            },
            {
                question: "How do you use 'chmod' to add execute permission to a file?",
                answer: "chmod +x filename"
            },
            {
                question: "What is the numeric representation of read, write, and execute permissions in 'chmod'?",
                answer: "In the numeric representation of permissions, read is represented by 4, write by 2, and execute by 1. These values can be added to represent different combinations. For example, 'chmod 755 filename' grants read, write, and execute permission to the owner, and read and execute permission to others."
            },
            {
                question: "How can you recursively change permissions for all files and subdirectories within a directory?",
                answer: "Use 'chmod -R'. For example, 'chmod -R 644 directory/' sets read and write permissions for the owner and read-only permissions for others on all files and directories inside 'directory'."
            },
            {
                question: "What is the purpose of the 'chmod' option '-c'?",
                answer: "To display a message only if changes are made to the permissions."
            },
            // chown.
            {
                question: "What is the purpose of the 'chown' command in Linux?",
                answer: "To change the ownership of files and directories."
            },
            {
                question: "How do you use 'chown' to change the owner of a file or directory?",
                answer: "The basic syntax for changing the owner of a file or directory is 'chown new_owner: new_group filename'. This command sets the new owner and, optionally, the new group for the specified file or directory."
            },
            {
                question: "What is the purpose of the '-R' option with 'chown'?",
                answer: "To recursively change ownership. This means that the specified ownership changes are applied to all files and subdirectories within the target directory."
            },
            {
                question: "How can you change only the group ownership of a file using 'chown'?",
                answer: "Use 'chown :new_group filename'. Omitting 'new_owner' and specifying only the 'new_group' will change the group ownership."
            },
            {
                question: "What is the purpose of the '--reference' option with 'chown'?",
                answer: "To copy the ownership of one file or directory to another. For example, 'chown --reference=reference_file target_file' sets the ownership of 'target_file' to match 'reference_file'."
            },
            // Bonus: man.
            {
                question: "What is the purpose of the 'man' command in Linux?",
                answer: "To display the manual pages for other commands, providing detailed information, usage, options, and examples."
            },
            {
                question: "How do you use the 'man' command to view the manual page for a specific command?",
                answer: "Use the syntax 'man [command]'. For example, 'man ls' displays the manual page for the 'ls' command."
            },
            {
                question: "What are manual pages in Linux?",
                answer: "Manual pages are organized documentation providing information on commands, utilities, and functions in the Linux operating system."
            },
            {
                question: "How are manual pages organized?",
                answer: "Manual pages are organized into sections, denoted by numbers (e.g., Section 1 for user commands, Section 8 for system administration commands)."
            },
        ],
    },
    {
        title: "OS: Lecture 2",
        subtitle: "OS Overview, Virtual Machine Monitor",
        flashcards: [
            // 2.0.
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
                answer: "Hardware, operating system, application programs, and users."
            },
            {
                question: "What does the hardware component of a computer system provide?",
                answer: "CPU (Central Processing Unit), memory, and I/O (Input/Output) devices."
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
                answer: "People, machines, and other computers."
            },
            // Cont.
            {
                question: "How is the kernel defined in the context of an operating system?",
                answer: "The one program running at all times on the computer."
            },
            {
                question: "What are the two categories that encompass everything else besides kernel in an operating system?",
                answer: "System program (ships with the operating system) or an application program."
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
                question: "What is a multi-threaded process?",
                answer: "A multi-threaded process has one program counter per thread. Threads within a process can execute independently."
            },
            {
                question: "How do processes run concurrently in a computer system?",
                answer: "In a computer system, there are typically many processes, some user-related, and some related to the operating system, running concurrently on one or more CPUs. Concurrency is achieved by multiplexing the CPUs among the processes/threads."
            },
            // Process Management.
            {
                question: "What activities is the operating system responsible for in connection with process management?",
                answer: "1. Creating and deleting both user and system processes\n2. Suspending and resuming processes\n3. Providing mechanisms for process synchronization\n4. Providing mechanisms for process communication\n5. Providing mechanisms for deadlock handling"
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
            // I/O Subsystems.
            {
                question: "What is the responsibility of the I/O subsystem?",
                answer: "1. Memory management of I/O, including buffering (storing data temporarily during transfer), caching (storing parts of data in faster storage for performance), and spooling (overlapping output of one job with input of other jobs)\n2. Providing a general device-driver interface\n3. Managing drivers for specific hardware devices"
            },
            {
                question: "What is buffering in the context of I/O subsystem?",
                answer: "Buffering in the I/O subsystem involves temporarily storing data while it is being transferred. This helps in managing and optimizing the flow of data between the CPU and I/O devices."
            },
            {
                question: "What is caching?",
                answer: "Caching in the I/O subsystem involves storing parts of data in faster storage for performance."
            },
            {
                question: "How does caching contribute to the I/O subsystem performance?",
                answer: "It enhances speed by allowing frequently accessed data to be retrieved quickly from the cache rather than the slower main memory or external storage.",
            },
            {
                question: "What is spooling in the context of the I/O subsystem?",
                answer: "Spooling in the I/O subsystem refers to the overlapping of the output of one job with the input of other jobs. This helps in improving overall system efficiency and resource utilization."
            },
            {
                question: "What is the purpose of the general device-driver interface in the I/O subsystem?",
                answer: "The general device-driver interface in the I/O subsystem provides a standardized way for the operating system to interact with various hardware devices. It abstracts the details of specific device drivers, allowing the OS to support a variety of devices seamlessly."
            },
            {
                question: "What role do drivers play in the I/O subsystem?",
                answer: "Drivers in the I/O subsystem are responsible for specific hardware devices. They facilitate communication between the operating system and the hardware, ensuring proper functioning and interaction with the devices."
            },
            // Examples of Operating Systems.
            {
                question: "What is the major concern of realtime OS?",
                answer: "Meeting time constraints",
            },
            {
                question: "What are examples of realtime OS?",
                answer: "RT Linux, QNX, and Vxworks",
            },
            {
                question: "What is an example of embedded OS?",
                answer: "Contiki OS",
            },
            {
                question: "What are examples of mobile OS?",
                answer: "Android, iOS, and Windows Touch",
            },
            // 2.1
            // Overview.
            {
                question: "What is a Virtual Machine Monitor (VMM) also known as?",
                answer: "A hypervisor."
            },
            {
                question: "What is the purpose of a Virtual Machine Monitor?",
                answer: "To enable running multiple operating systems on a single physical machine."
            },
            {
                question: "Can you provide examples of Virtual Machine Monitors?",
                answer: "VMWare, Microsoft's VirtualPC/VirtualServer, Parallels (Macintosh), and Xen."
            },
            // System Models.
            {
                question: "What is a Type I Virtual Machine Monitor (VMM)?",
                answer: "A Type I VMM runs directly on the raw hardware of a computer."
            },
            {
                question: "What is a Type II Virtual Machine Monitor (VMM)?",
                answer: "A Type II VMM runs hosted on another operating system, rather than directly on the raw hardware."
            },
            {
                question: "When did virtualization first appear in IBM mainframes?",
                answer: "Virtualization first appeared in IBM mainframes in 1972."
            },
            {
                question: "What was the initial purpose of virtualization on IBM mainframes?",
                answer: "It allowed multiple users to share a batch-oriented system."
            },
            {
                question: "How did the formal definition of virtualization contribute to its expansion beyond IBM?",
                answer: "The formal definition of virtualization specified that a Virtual Machine Monitor (VMM) provides an environment for programs that is essentially identical to the original machine. It also ensured that programs running within that environment show only minor performance decreases, and the VMM is in complete control of system resources."
            },
            {
                question: "When did researchers start virtualizing on general-purpose PCs?",
                answer: "In the late 1990s, Intel CPUs became fast enough for researchers to try virtualizing on general-purpose PCs."
            },
            {
                question: "Which technologies, created in the late 1990s, are still used today for virtualization?",
                answer: "Xen and VMware created technologies in the late 1990s, which are still used today for virtualization."
            },
            {
                question: "How has virtualization expanded over time?",
                answer: "Virtualization has expanded to many operating systems, CPUs, and Virtual Machine Monitors (VMMs)."
            },
            // Benefits and Features.
            {
                question: "How does virtualization protect the host system and VMs?",
                answer: "The host system is protected from VMs, and VMs are protected from each other. This helps prevent the spread of viruses, and sharing is facilitated through shared file system volumes and network communication."
            },
            {
                question: "What are some actions that can be performed on a running VM?",
                answer: "Actions such as freeze, suspend, and running VM can be performed. VMs can be moved or copied to another location and then resumed. Snapshot functionality captures a given state, allowing restoration to that state. Some Virtual Machine Monitors (VMMs) enable multiple snapshots per VM. Cloning involves creating a copy and running both the original and the copy."
            },
            {
                question: "What is a practical use of running multiple, different OSes on a single machine?",
                answer: "Consolidation and application development"
            },
            // Internet Services.
            {
                question: "What approach is suggested to achieve a rent-a-server economy for Internet services?",
                answer: "The suggested approach is to use Virtual Machine Monitors (VMMs) to provide a rent-a-server economy, where users can rent virtual servers for hosting their services on the Internet."
            },
            // E2C.
            {
                question: "What does EC2 stand for?",
                answer: "Amazon's Elastic Compute Cloud",
            },
            {
                question: "What are benefits of EC2?",
                answer: "* Scalability: new machines can be created in minutes.\n* Security: virtual machines provide stronger isolation than OS processes.\n* Developer control: developers choose the OS, software, libraries, etc.\n* Low cost: developers pay only for what they use.",
            },
            // VMM Implementation Overview - I.
            {
                question: "What distinguishes the VMM type I?",
                answer: "In this implementation, the VMM is part of the firmware, and the operating system requires no special modifications. Each guest in this scenario has dedicated hardware, resulting in a smaller feature set compared to other types of virtualization."
            },
            {
                question: "What is a challenge in implementing I/O for VMM type I?",
                answer: "Implementing I/O is challenging because it's difficult to have enough devices and controllers to dedicate to each guest."
            },
            {
                question: "How is shared I/O handled in some cases in VMM type I?",
                answer: "In some instances, the VMM implements a control partition that runs daemons, and other guests communicate with this partition for shared I/O."
            },
            {
                question: "What unique capability can VMM type I provide in terms of virtualization?",
                answer: "This type of VMM can offer virtualization-within-virtualization, where a guest itself can act as a VMM with its own set of guests. Other types of VMMs may have difficulty achieving this."
            },
            // WM Implementaton Overview - II.
            {
                question: "Why is Type 2 VMM implementation considered less interesting from an OS perspective?",
                answer: "Type 2 VMM implementation is less interesting from an OS perspective because there is very little OS involvement in virtualization. The VMM is treated as another process, run, and managed by the host operating system."
            },
            {
                question: "How is the Type 2 VMM managed by the host in terms of OS involvement?",
                answer: "The Type 2 VMM is simply another process run and managed by the host operating system. Even the host is unaware that it is running a VMM and virtualizing guests."
            },
            {
                question: "What is a characteristic of Type 2 VMMs in terms of overall performance?",
                answer: "Type 2 VMMs tend to have poorer overall performance compared to other virtualization approaches because they can't take full advantage of some hardware features."
            },
            {
                question: "What is a benefit of Type 2 VMMs despite their potential performance limitations?",
                answer: "A benefit of Type 2 VMMs is that they require no changes to the host operating system. This means that the host OS remains unchanged, simplifying the implementation process."
            },
        ],
    },
    {
        title: "OS: Lecture 3",
        subtitle: "Structure",
        flashcards: [
            // 3.1.
            {
                question: "Operating systems provide an ____ for execution of programs and services to ____ and ____",
                answer: "environment\nprograms\nusers",
            },
            {
                question: "What are the different user interfaces in operating systems?",
                answer: "Command-Line (CLI), Graphical User Interface (GUI), Batch",
            },
            {
                question: "What are some of the operating-system services that provide functions helpful to the user?",
                answer: `1. User interface\n2. Program execution\n3. I/O operations\n4. File-system manipulation\n5. Communications\n6. Error detection\n7. Resources allocation\n8. Accounting\n9. Protection and security`,
            },
            {
                question: "What is accounting function in the operating system?",
                answer: "Keep track of which users use how much and what kinds of computer resources",
            },
            {
                question: "Why is protection and security important in multiuser or networked computer systems?",
                answer: "Ensure that concurrent processes do not interfere with each other. Protection involves controlling access to system resources, while security requires user authentication to safeguard the system from outsiders."
            },
            {
                question: "How do processes communicate in operating systems?",
                answer: "Processes in operating systems communicate either on the same computer or between computers over a network."
            },
            {
                question: "What are the two main methods for processes to communicate in an operating system?",
                answer: "Shared memory and message passing",
            },
            {
                question: "Define protection in the context of operating systems.",
                answer: "Protection controls access to system resources, preventing unauthorized use by enforcing user permission-based restrictions."
            },
            {
                question: "How does resource allocation work when multiple users or jobs are running concurrently?",
                answer: "Resource allocation involves distributing CPU cycles, main memory, file storage, and I/O devices among concurrent users or jobs. This ensures fair and efficient utilization of resources."
            },
            {
                question: "Explain the role of user authentication in ensuring security in multiuser or networked computer systems.",
                answer: "User authentication verifies and restricts access to authorized users, ensuring the security of sensitive information."
            },
            // User Operating System Interface - CLI.
            {
                question: "What does CLI stand for in the context of User Operating System Interface?",
                answer: "CLI stands for Command Line Interface."
            },
            {
                question: "Where is the CLI sometimes implemented?",
                answer: "CLI is sometimes implemented in the kernel and sometimes by systems programs."
            },
            {
                question: "____ are multiple flavors of CLI implemented to interpret commands.",
                answer: "Shells",
            },
            {
                question: "What is the primary function of a CLI?",
                answer: "The primary function of a CLI is to fetch a command from the user and execute it."
            },
            {
                question: "How are commands handled in CLI regarding built-in features and programs?",
                answer: "Commands in CLI can be either built-in or just names of programs. If the latter, adding new features doesn't require shell modification."
            },
            // User Operating System Interface - GUI.
            {
                question: "How are files, programs, and actions represented in a desktop metaphor interface?",
                answer: "Icons",
            },
            {
                question: "What kind of actions can be triggered by various mouse buttons over objects in a desktop metaphor interface?",
                answer: "Various mouse buttons over objects in the interface can cause actions such as providing information, displaying options, executing functions, or opening directories (known as folders).",
            },
            {
                question: "Where was the desktop metaphor interface invented?",
                answer: "Xerox PARC.",
            },
            {
                question: "Many systems now include both ____ and ____ interfaces",
                answer: "GUI\nCLI",
            },
            {
                question: "Describe the interface of Apple Mac OS X, including its underlying components.",
                answer: "Apple Mac OS X has an \"Aqua\" GUI interface with a UNIX kernel underneath and shells available.",
            },
            {
                question: "How do Unix and Linux systems typically provide interfaces?",
                answer: "Unix and Linux systems typically have a CLI with optional GUI interfaces.",
            },
            {
                question: "What are some examples of desktop environments (GUI interfaces) for Linux?",
                answer: "CDE, KDE, and GNOME",
            },
            {
                question: "How are actions and selections typically performed on touchscreen devices?",
                answer: "Actions and selections on touchscreen devices are based on gestures.",
            },
            {
                question: "What is used for text entry on touchscreen devices?",
                answer: "Text entry on touchscreen devices is facilitated using a virtual keyboard.",
            },
            {
                question: "Besides gestures and virtual keyboards, what is another method of interaction with touchscreen devices?",
                answer: "Voice commands",
            },
            // System Calls.
            {
                question: "What is the role of system calls in the context of an operating system?",
                answer: "System calls provide a programming interface to the services offered by the operating system.",
            },
            {
                question: "In what programming languages are system calls typically written?",
                answer: "High-level language, such as C or C++",
            },
            {
                question: "How are programs most commonly accessing system calls?",
                answer: "Via a high-level Application Programming Interface (API) rather than through direct system call use",
            },
            {
                question: "Name three of the most common APIs for accessing System Calls.",
                answer: "1. Win32 API for Windows\n2. POSIX API for POSIX-based systems (including UNIX, Linux, and Mac OS X)\n3. Java API for the Java virtual machine (JVM)",
            },
            // Example of Standard API.
            {
                question: "Give an example for a standard API in Linux operating system.",
                answer: "#include <unistd.h>\nssize_t read(int fd, void *buf, size_t count)\n\n* int fd - represents the file descriptor intended for reading\n* void *buf - refers to a buffer designated for storing the read data\n* size_t count - denotes the maximum number of bytes to be read into the buffer",
            },
            // System Call Implementation.
            {
                question: "How are system calls typically identified in the context of their implementation?",
                answer: "System calls are typically associated with a number, and the system-call interface maintains a table indexed according to these numbers."
            },
            {
                question: "What is the role of the system call interface?",
                answer: "The system-call interface invokes the intended system call in the OS kernel and returns the status of the system call along with any return values."
            },
            {
                question: "What knowledge does the caller need about the system call implementation?",
                answer: "The caller does not need to know anything about how the system call is implemented. They just need to obey the API and understand what the OS will do as a result of the call."
            },
            {
                question: "What does API stand for?",
                answer: "Application Programming Interface",
            },
            {
                question: "How are most details of the OS interface hidden from the programmer?",
                answer: "Most details of the OS interface are hidden from the programmer by the API. This abstraction is managed by a run-time support library, which is a set of functions built into libraries included with the compiler."
            },
            // System Call Parameter Passing.
            {
                question: "What are the three general methods used for passing parameters to the OS during a system call?",
                answer: "1. Passing parameters in registers\n2. Storing parameters in a block or table in memory, with the address of the block passed as a parameter in a register (used by Linux)\n3. Placing parameters onto the stack by the program and having the operating system pop them off the stack."
            },
            {
                question: "How does the simplest method of passing parameters work?",
                answer: "The simplest method involves passing the parameters directly in registers. However, in some cases, there may be more parameters than available registers."
            },
            {
                question: "Which approach is taken by Linux for passing parameters during a system call?",
                answer: "Linux uses the approach of storing parameters in a block or table in memory, with the address of the block passed as a parameter in a register."
            },
            {
                question: "What is common between the block and stack methods of passing parameters?",
                answer: "Both the block and stack methods do not limit the number or length of parameters being passed."
            },
            // Example: MS-DOS.
            {
                question: "What is a notable characteristic of MS-DOS in terms of multitasking?",
                answer: "MS-DOS is a single-tasking operating system, meaning it can only execute one task at a time."
            },
            {
                question: "When is the shell invoked in MS-DOS?",
                answer: "The shell in MS-DOS is invoked when the system is booted."
            },
            {
                question: "How does MS-DOS handle the running of programs?",
                answer: "Running a program involves a simple method with no process creation. The program is loaded into memory, overwriting all but the kernel, without creating a separate process."
            },
            {
                question: "What is the memory model used by MS-DOS?",
                answer: "MS-DOS operates with a single memory space."
            },
            {
                question: "What happens when a program exits in MS-DOS?",
                answer: "The shell is reloaded."
            },
            // Types of System Calls.
            {
                question: "What operations are covered by process control system calls?",
                answer: "Creating processes, terminating processes, ending processes, aborting processes, loading processes, executing processes, getting process attributes, setting process attributes, waiting for time, waiting for events, signaling events, memory allocation and deallocation, memory dumping in case of errors, using a debugger for bug determination, and single-step execution. Additionally, ."
            },
            {
                question: "____ are used for managing access to shared data between processes",
                answer: "Locks",
            },
            {
                question: "What operations are covered by file management system calls?",
                answer: "Creating files, deleting files, opening files, closing files, reading from files, writing to files, repositioning within files, and getting or setting file attributes."
            },
            {
                question: "What operations are covered by device management system calls?",
                answer: "Requesting devices, releasing devices, reading from devices, writing to devices, repositioning within devices, getting device attributes, setting device attributes, and logically attaching or detaching devices."
            },
            {
                question: "What functions do information maintenance system calls perform?",
                answer: "Information maintenance system calls include getting or setting time and date, getting system data, setting system data, and getting or setting process, file, or device attributes."
            },
            {
                question: "What are the communication-related system calls?",
                answer: "Communication system calls involve creating and deleting communication connections, sending and receiving messages (if following a message-passing model with host or process names, especially from client to server), using a shared-memory model to create and gain access to memory regions, transferring status information, and attaching or detaching remote devices."
            },
            // Examples for Windows and Unix System Calls.
            {
                question: "Give examples for Windows system calls for process controls",
                answer: "CreateProcess()\nExitProcess()\nWaitForSingleObject()",
            },
            {
                question: "Give examples for Unix system calls for process controls",
                answer: "fork()\nexit()\nwait()",
            },
            {
                question: "Give examples for Windows system calls for file manipulation.",
                answer: "CreateFile()\nReadFile()\nWriteFile()\nCloseHandle()",
            },
            {
                question: "Give examples for Unix system calls for file manipulation.",
                answer: "open()\nread()\nwrite()\nclose()",
            },
            // 3.2.
            // System Programs.
            {
                question: "System programs provide a ____ environment for program ____ and ____.",
                answer: "convenient\ndevelopment\nexecution"
            },
            {
                question: "Into what categories can system programs be divided?",
                answer: "File manipulation, status information, programming language support, program loading and execution, communications, background services, and application programs."
            },
            {
                question: "What is the role of system programs in defining a user's view of the operating system?",
                answer: "Most users' view of the operating system is defined by system programs, not the actual system calls."
            },
            //
            {
                question: "What functions does file management system programs perform?",
                answer: "Creating, deleting, copying, renaming, printing, dumping, listing, and generally manipulating files and directories."
            },
            {
                question: "What tasks are performed by status information system programs?",
                answer: "Status information system programs perform tasks such as querying the system for information like date, time, available memory, disk space, and the number of users. They may also provide detailed performance, logging, and debugging information. Typically, these programs format and print the output to the terminal or other output devices. Some systems implement a registry for storing and retrieving configuration information."
            },
            //
            {
                question: "What functions do file modification system programs perform?",
                answer: "File modification system programs include text editors for creating and modifying files. Additionally, they provide special commands to search the contents of files or perform transformations on the text."
            },
            {
                question: "What types of tools are included in programming-language support system programs?",
                answer: "Compilers, assemblers, debuggers, and interpreters."
            },
            {
                question: "What functions are associated with program loading and execution system programs?",
                answer: "Absolute loaders, relocatable loaders, linkage editors, overlay loaders, and debugging systems for both higher-level and machine language."
            },
            {
                question: "What is the role of communication system programs?",
                answer: "Communication system programs provide the mechanism for creating virtual connections among processes, users, and computer systems. They enable users to send messages to one another's screens, browse web pages, send electronic-mail messages, log in remotely, and transfer files from one machine to another."
            },
            {
                question: "What is the startup behavior of background services system programs?",
                answer: "Background services system programs launch at boot time, and some terminate after system startup, while others continue running from system boot to shutdown."
            },
            {
                question: "What facilities do background services system programs provide?",
                answer: "Disk checking, process scheduling, error logging, and printing to enhance the overall system functionality."
            },
            {
                question: "In which context do background services system programs run?",
                answer: "Background services system programs run in user context, not kernel context, contributing to system stability and security."
            },
            {
                question: "What are background services system programs commonly known as?",
                answer: "Background services system programs are commonly known as services, subsystems, or daemons."
            },
            {
                question: "What distinguishes application programs within system programs?",
                answer: "Application programs don't pertain to the system itself; instead, they are designed to serve users' specific needs and tasks."
            },
            {
                question: "Who runs application programs?",
                answer: "Application programs are run by users to perform various tasks and functions on the computer."
            },
            {
                question: "Is an application program typically considered part of the operating system?",
                answer: "No, application programs are not typically considered part of the operating system; they operate independently and serve user-specific purposes."
            },
            {
                question: "How are application programs launched?",
                answer: "Application programs can be launched by various means, such as command line inputs, mouse clicks, or finger pokes, depending on the user interface."
            },
            // Operating System Design and Implementation.
            {
                question: "Where should the design of an operating system start?",
                answer: "The design of an operating system should start by defining goals and specifications, which are influenced by factors such as hardware and the type of system."
            },
            {
                question: "What are the key considerations for operating system design in relation to user goals?",
                answer: "User goals for operating systems include being convenient to use, easy to learn, reliable, safe, and fast, ensuring a positive user experience."
            },
            {
                question: "What are the key considerations for operating system design in relation to system goals?",
                answer: "System goals for operating systems include being easy to design, implement, and maintain, as well as being flexible, reliable, error-free, and efficient."
            },
            // Operating System Design and Implementation.
            {
                question: "How are mechanisms and policies related in operating system design?",
                answer: "Mechanisms determine how to perform a task, while policies decide what specific actions will be taken in the operating system."
            },
            {
                question: "Why is the separation of policy from mechanism considered a crucial principle?",
                answer: "The separation of policy from mechanism is crucial because it allows maximum flexibility. If policy decisions need to be changed later, the system can adapt without significant modifications to the underlying mechanisms (e.g., timer)."
            },
            // Implementation.
            {
                question: "What is the typical language mix in operating system implementation?",
                answer: "Operating system implementation usually involves a mix of languages, with the lowest levels written in assembly, the main body in C, and system programs using languages like C, C++, and scripting languages such as PERL, Python, and shell scripts."
            },
            {
                question: "Why is using a high-level language advantageous for operating systems?",
                answer: "Implementing more of the operating system in a high-level language makes it easier to port the system to other hardware. However, this approach may lead to slower performance compared to lower-level languages."
            },
            {
                question: "How can emulation be beneficial for operating systems?",
                answer: "Emulation allows an operating system to run on non-native hardware, providing compatibility and flexibility in diverse computing environments."
            },
            // Operating System Structure.
            {
                question: "What are some approaches to structuring operating systems?",
                answer: "Operating systems can be structured in various ways, ranging from simple structures, such as MS-DOS, to more complex structures, like UNIX. Another approach is the microkernel structure, as seen in systems like Mach."
            },
            {
                question: "Can you provide an example of an operating system with a simple structure?",
                answer: "MS-DOS is an example of an operating system with a simple structure, which reflects a straightforward design to manage basic system functions."
            },
            {
                question: "What is an example of an operating system with a more complex structure?",
                answer: "UNIX is an example of an operating system with a more complex structure, designed to handle a wide range of functionalities and accommodate diverse user needs."
            },
            {
                question: "What is the microkernel structure in operating systems?",
                answer: "The microkernel structure, exemplified by systems like Mach, involves a small, core set of essential functions, while additional features are implemented as separate user-level processes or servers, promoting modularity and flexibility."
            },
            // Simple Structure -- MS-DOS. 
            {
                question: "What is a characteristic of the operating system MS-DOS in terms of its structure?",
                answer: "MS-DOS is an example of an operating system with a simple structure. It was designed to provide the most functionality in the least space and is not divided into modules. Although MS-DOS has some structure, its interfaces and levels of functionality are not well separated."
            },
            // Non Simple Structure -- UNIX.
            {
                question: "What are the two separable parts that UNIX consists of?",
                answer: "System programs and the kernel."
            },
            // Microkernel System Structure.
            {
                question: "What is a characteristic of the microkernel system structure?",
                answer: "In a microkernel system structure, as much functionality as possible is moved from the kernel into user space."
            },
            {
                question: "Can you provide an example of a microkernel system?",
                answer: "Mach is an example of a microkernel system. The Mac OS X kernel (Darwin) is partly based on Mach."
            },
            {
                question: "How does communication occur in a microkernel system?",
                answer: "Communication in a microkernel system takes place between user modules using message passing."
            },
            {
                question: "What are the benefits of a microkernel system?",
                answer: "Benefits of a microkernel system include easier extensibility, easier porting to new architectures, increased reliability (as less code is running in kernel mode), and improved security."
            },
            {
                question: "What is a detriment of a microkernel system?",
                answer: "A potential detriment of a microkernel system is the performance overhead of user space to kernel space communication."
            },
            // Debugging.
            {
                question: "What is the primary goal of debugging in the context of operating systems?",
                answer: "Debugging in operating systems involves finding and fixing errors, commonly known as bugs, to enhance system stability and performance."
            },
            {
                question: "How do operating systems handle error information?",
                answer: "Operating systems generate log files containing error information. Additionally, the failure of an application can lead to the creation of a core dump file, capturing the memory state of the process."
            },
            {
                question: "What does a crash dump file in operating systems contain?",
                answer: "In the case of an operating system failure, a crash dump file is generated, containing information about the kernel memory at the time of the crash."
            },
            {
                question: "Aside from fixing crashes, what is another aspect of operating-system debugging?",
                answer: "Beyond addressing crashes, operating-system debugging includes performance tuning to optimize system performance. This may involve using trace listings of activities recorded for analysis and profiling, which is a periodic sampling of the instruction pointer to identify statistical trends."
            },
            // Operating System Generation.
            {
                question: "What is the purpose of operating system generation?",
                answer: "Operating systems are designed to run on any of a class of machines, but they must be configured for each specific computer site. Operating system generation involves configuring the system for a particular hardware setup."
            },
            {
                question: "What is the role of the SYSGEN program in operating system generation?",
                answer: "The SYSGEN program obtains information about the specific configuration of the hardware system. It is used to build a system-specific compiled kernel or system-tuned configuration, potentially resulting in more efficient code than a one-size-fits-all general kernel."
            },
            {
                question: "What are the objectives of the SYSGEN program?",
                answer: "The SYSGEN program's objectives include obtaining hardware-specific information and building a system configuration that is optimized for the particular computer site. This can lead to the generation of more efficient and tailored operating system code."
            },
        ],
    },
    {
        title: "OS: Lecture 4",
        subtitle: "Process",
        flashcards: [
            // Lecture 4.1.
            // Definitions.
            {
                question: "What are the multiple parts of a process?",
                answer: "* Text section (program code)\n* Current activity (program counter, processor registers)\n* Stack (temporary data like function parameters, return addresses, local variables)\n* Data section (containing global variables)\n* Heap (containing dynamically allocated memory during runtime)"
            },
            {
                question: "Can one program result in several processes?",
                answer: "Yes, one program can be associated with several processes, especially when multiple users execute the same program."
            },
            {
                question: "When does a program become a process?",
                answer: "When its executable file is loaded into memory."
            },
            // Process State.
            {
                question: "What are the different states the process can be in?",
                answer: "New\nRunning\nWaiting\nReady\nTerminated",
            },
            {
                question: "What does 'New' represent in process states?",
                answer: "The process is being created."
            },
            {
                question: "What does 'Running' represent in process states?",
                answer: "Instructions are being executed. This running process holds the CPU."
            },
            {
                question: "What does 'Waiting' signify in process states?",
                answer: "Waiting for an event (hardware, human, or another process)."
            },
            {
                question: "What does 'Ready' indicate in process states?",
                answer: "The process has all needed resources and is waiting for CPU only."
            },
            {
                question: "What does 'Suspended' mean in process states?",
                answer: "Another process has explicitly told this process to sleep. It will be awakened when a process explicitly awakens it."
            },
            {
                question: "What does 'Terminated' signify in process states?",
                answer: "The process has finished execution and is being torn apart."
            },
            // Process State.
            {
                question: "What does PCB stand for?",
                answer: "Process Control Block",
            },
            {
                question: "What is a PCB?",
                answer: "PCB is a data structure used by the operating system to manage information about a process.",
            },
            {
                question: "What does PC stand for in the context of PCB?",
                answer: "Program Counter",
            },
            {
                question: "What information does a PCB contain?",
                answer: "*Process State\n* Program Counter\n* CPU registers\nCPU-scheduling information\n* Memory management information\n* Accounting information\n* I/O information",
            },
            // Scheduling Components.
            {
                question: "What does the act of scheduling a process involve?",
                answer: "Scheduling a process involves changing the active PCB pointed to by the CPU.",
            },
            {
                question: "What is the act of changing active PCB pointed to by the CPU known as?",
                answer: "Context switch",
            },
            {
                question: "Define a context switch in the context of process scheduling.",
                answer: "The kernel saves the context (state) of the old process in its PCB and loads the saved context of the new process scheduled to run.",
            },
            {
                question: "What does the system do during a context switch?",
                answer: "The system saves the state of the old process and loads the saved state for the new process. This ensures a smooth transition between processes.",
            },
            {
                question: "How is the context of a process represented in the PCB?",
                answer: "The context of a process is represented in the PCB. It contains information about the process's state, including CPU registers, program counter, and other relevant details.",
            },
            {
                question: "Why is context-switch time considered overhead?",
                answer: "Context-switch time is considered overhead because the system does not perform useful work during the switching process. It involves saving the state of one process and loading the state of another, introducing a time cost.",
            },
            {
                question: "How does the complexity of the OS and the PCB affect context switch time?",
                answer: "The more complex the operating system and the PCB, the longer the context switch time. A complex OS with detailed PCBs requires more time to save and load process states during context switches.",
            },
            {
                question: "What influences the context-switch time in terms of hardware?",
                answer: "The context-switch time is dependent on hardware support. Some hardware provides multiple sets of registers per CPU, allowing multiple contexts to be loaded at once, which can influence the time required for context switches.",
            },
            // Process Scheduling.
            {
                question: "What is the goal of process scheduling?",
                answer: "To maximize CPU utilization by quickly switching processes onto the CPU for time sharing.",
            },
            {
                question: "What role does the process scheduler play in CPU management?",
                answer: "The process scheduler selects among available processes for the next execution on the CPU. It plays a crucial role in efficiently utilizing the CPU resources.",
            },
            {
                question: "What are the main scheduling queues maintained by the process scheduler?",
                answer: "1. Job queue \n2. Ready queue\n3. Device queues",
            },
            {
                question: "What is job queue in process scheduling?",
                answer: "The job queue is a set of all processes in the system. It is part of the scheduling queues managed by the process scheduler, representing all processes in the system.",
            },
            {
                question: "What is ready queue in process scheduling?.",
                answer: "The ready queue is a set of all processes residing in main memory, ready and waiting to execute. It plays a crucial role in the efficient allocation of CPU resources by holding processes ready for execution.",
            },
            {
                question: "What is device queue in process scheduling?",
                answer: "Device queues are sets of processes waiting for an I/O device. They are managed by the process scheduler and represent processes waiting for input/output operations.",
            },
            {
                question: "How do processes migrate among the various scheduling queues?",
                answer: "Processes migrate among the various scheduling queues based on their status and the progress of their execution. For example, processes may move from the job queue to the ready queue as they become ready for execution.",
            },
            // Scheduling Components.
            {
                question: "What is the role of schedulers in process scheduling within operating systems?",
                answer: "Schedulers are responsible for deciding which processes run at any given time in process scheduling within operating systems. They make decisions based on the frequency of execution and the scope of their decisions.",
            },
            {
                question: "What is the primary function of a short-term scheduler?",
                answer: "The short-term scheduler selects which process should be executed next and allocates the CPU. It is often the only scheduler in a system and is invoked frequently (milliseconds) to ensure fast decision-making.",
            },
            {
                question: "What is shorted-term scheduler also known as?",
                answer: "CPU scheduler",
            },
            {
                question: "What is the main responsibility of a long-term scheduler?",
                answer: "The long-term scheduler selects which processes should be brought into the ready queue. It is invoked infrequently (seconds, minutes) and controls the degree of multiprogramming in the system.",
            },
            {
                question: "What is long-term scheduler also known as?",
                answer: "Job scheduler",
            },
            {
                question: "How can processes be categorized based on their behavior?",
                answer: "1. I/O-bound process - spends more time doing I/O than computations, characterized by many short CPU bursts.\n2. CPU-bound process - spends more time doing computations, characterized by few but very long CPU bursts.",
            },
            {
                question: "What is the goal of the long-term scheduler in terms of process mix?",
                answer: "The long-term scheduler strives for a good process mix, aiming to bring in processes that provide a balanced combination of I/O-bound and CPU-bound characteristics to ensure efficient system utilization.",
            },
            // Scheduling Components.
            {
                question: "What is the role of the medium-term scheduler in process scheduling?",
                answer: "The medium-term scheduler can be added if the degree of multiprogramming needs to decrease. It manages a mixture of CPU and memory resources, performs swap out/in operations to improve the process mix, and controls the change of priority.",
            },
            {
                question: "What are the responsibilities of the medium-term scheduler in terms of resource management?",
                answer: "The medium-term scheduler manages a mixture of CPU and memory resources. It performs swap out/in operations to improve the process mix and obtain memory. Additionally, it controls the change of priority for processes.",
            },
            {
                question: "How does the medium-term scheduler contribute to improving the process mix?",
                answer: "The medium-term scheduler contributes to improving the process mix by performing swap out/in operations. This involves moving jobs in and out of memory to achieve a more balanced combination of processes.",
            },
            {
                question: "What is the role of an interrupt handler in process scheduling?",
                answer: "An interrupt handler is not a scheduler but is a routine that takes control when an interrupt is received. In addition to handling device work, it readies processes, moving them from waiting to ready states, for example.",
            },
            {
                question: "What is the primary function of an interrupt handler in the context of process scheduling?",
                answer: "The primary function of an interrupt handler is to handle device work and, in addition, to ready processes. It is responsible for moving processes, such as transitioning them from waiting to ready states, when an interrupt is received.",
            },
            // Multitasking in Mobile Systems.
            {
                question: "What limitation did early versions of iOS have regarding multitasking in mobile systems?",
                answer: "Early versions of iOS allowed only one process to run at a time, with others being suspended. Due to screen real estate and user interface limits, iOS supported a single foreground process controlled via the user interface, and multiple background processes with certain limitations.",
            },
            {
                question: "How did early versions of iOS manage multitasking for a single foreground process?",
                answer: "In early iOS versions, a single foreground process was controlled via the user interface, serving as the active process displayed on the screen, and users interacted with it directly.",
            },
            {
                question: "What were the limitations imposed on background processes in early versions of iOS?",
                answer: "Background processes in early iOS versions, while in memory and running, were not on the display and had specific limits. These limits included performing a single short task, receiving notifications of events, and handling specific long-running tasks like audio playback.",
            },
            {
                question: "How does iOS manage multitasking on its platform?",
                answer: "iOS manages multitasking with a single foreground process controlled through the user interface and multiple background processes in memory, running but not on display. Background processes have limitations, including specific tasks and event notifications.",
            },
            {
                question: "How does Android handle multitasking in mobile systems?",
                answer: "Android supports both foreground and background processes with fewer limits compared to iOS. Background processes in Android use a service to perform tasks, and the service can continue running even if the background process is suspended. Services in Android have no user interface and use small amounts of memory.",
            },
            {
                question: "What is the role of a service in Android multitasking?",
                answer: "In Android, a service is used by background processes to perform tasks. A service can continue running even if the background process is suspended. Services have no user interface and typically use small amounts of memory.",
            },
            // Lecture 4.2.
            {
                question: "How are processes created in an operating system?",
                answer: "Processes are created in an operating system when a parent process creates children processes. This hierarchical structure results in a tree of processes.",
            },
            {
                question: "What does pid stand for?",
                answer: "Process identifier",
            },
            {
                question: "What is a pid and how is it used in process management?",
                answer: "A pid is a unique identifier assigned to each process in the system. It is used to identify and manage processes.",
            },
            {
                question: "What are the resource sharing options between parent and child processes?",
                answer: "Resource sharing options between parent and child processes include:\n1. Parent and children share all resources.\n2. Children share a subset of the parent's resources.\n3. Parent and child share no resources.",
            },
            {
                question: "What are the execution options for parent and child processes?",
                answer: "Execution options for parent and child processes include:\n1. Parent and children execute concurrently.\n2. Parent waits until children terminate.",
            },
            {
                question: "How is the address space managed between parent and child processes?",
                answer: "Address space management options between parent and child processes include:\n1. Child as a duplicate of the parent's address space.\n2. Child with a program loaded into its address space.",
            },
            {
                question: "What are examples of UNIX system calls related to process creation?",
                answer: "In UNIX, the fork() system call is used to create a new process, and the exec() system call is used after a fork() to replace the process's memory space with a new program.",
            },
            // C Program Forking Separate Process.
            {
                question: "Write a C program to fork a child process.",
                answer: `#include <sys/types.h> // Include necessary header for type pid_t.
#include <sys/wait.h> // Include necessary header for function wait.
#include <stdio.h> // Include necessary header for function printf.
#include <stdlib.h> // Include necessary header for NULL.
#include <unistd.h> // Include necessary header for function exit.

int main() {
    pid_t pid;

    // Create a new process by duplicating the existing process.
    pid = fork();

    if (pid < 0) {
        // Handle fork failure.
        perror("Fork child process failed");
    } else if (pid == 0) {
        // Code inside this block is executed by the child process.
        // Replacing the current process image with ls.
        execlp("/bin/ls", "ls", NULL);

        // execlp only returns if an error occurs.
        perror("Exec failed");
        // Exit with an error code.
        exit(1);
    } else {
        // Code inside this block is executed by the parent process.
        // Wait for the child process to complete.
        wait(NULL);
        printf("Child process completed.");
    }

    return 0;
}`
            },
            // Process Termination.
            {
                question: "How does a process initiate termination in an operating system?",
                answer: "A process initiates termination by executing its last statement and then requesting the operating system to delete it using the exit() system call.",
            },
            {
                question: "What is the role of the exit() system call in process termination?",
                answer: "The exit() system call is used by a process to request termination. It returns status data from the child to the parent, and the operating system deallocates the process's resources.",
            },
            {
                question: "How does the exit() system call facilitate communication between child and parent processes?",
                answer: "The exit() system call facilitates communication between child and parent processes by returning status data from the child to the parent. This information is typically retrieved by the parent using the wait() system call.",
            },
            {
                question: "What happens to a process's resources during termination?",
                answer: "During termination, a process's resources are deallocated by the operating system. This ensures efficient utilization of system resources.",
            },
            {
                question: "Under what circumstances may a parent terminate the execution of its children processes?",
                answer: "A parent may terminate the execution of its children processes using the abort() system call under certain circumstances. Some reasons for doing so include:\n1. Child has exceeded allocated resources.\n2. Task assigned to child is no longer required.\n3. The parent is exiting, and the operating system does not allow a child to continue if its parent terminates.",
            },
            // Process Termination.
            {
                question: "What is cascading termination in the context of process termination?",
                answer: "Cascading termination refers to the scenario where some operating systems do not allow a child process to exist if its parent has terminated. In such cases, if a process terminates, all its children must also be terminated. The termination is initiated by the operating system, leading to the termination of all descendants.",
            },
            {
                question: "How is cascading termination managed in an operating system?",
                answer: "Cascading termination is managed by the operating system, which initiates the termination of all children, grandchildren, and so on, if a parent process terminates. This ensures a clean and systematic termination of all related processes.",
            },
            {
                question: "What role does the wait() system call play in the termination of child processes?",
                answer: "The wait() system call allows the parent process to wait for the termination of a child process. It returns status information and the process identifier (pid) of the terminated process. This enables the parent to gather information about the terminated child process.",
            },
            {
                question: "How is the wait() system call used in obtaining information about terminated processes?",
                answer: "The parent process uses the wait() system call to wait for the termination of a child process. The call returns the process identifier (pid) and status information of the terminated process, which can be stored and analyzed by the parent.",
            },
            {
                question: "What is the purpose of the pid = wait(&status) statement in process termination?",
                answer: "The statement pid = wait(&status) is used in process termination to wait for the termination of a child process. It assigns the process identifier (pid) of the terminated process to the variable 'pid' and returns status information about the termination in the variable 'status'.",
            },
            // Multiprocess Architecture - Chrome Browser.
            {
                question: "What is the typical architecture of web browsers in terms of processes?",
                answer: "Many web browsers traditionally ran as a single process, but some still follow this model. However, modern browsers are moving towards a multiprocess architecture for improved stability and security.",
            },
            {
                question: "What are the drawbacks of a single-process web browser architecture?",
                answer: "In a single-process web browser architecture, if one website causes trouble, the entire browser can hang or crash. This lack of isolation can lead to a less stable user experience.",
            },
            {
                question: "How does the Google Chrome Browser differ in terms of its process architecture?",
                answer: "The Google Chrome Browser follows a multiprocess architecture with three different types of processes, providing enhanced stability and security:\n1. Browser process manages user interface, disk, and network I/O.\n2. Renderer process renders web pages and handles HTML, Javascript. A new renderer is created for each website opened, running in a sandbox to restrict disk and network I/O and minimize the impact of security exploits.\n3. Plug-in process is dedicated to each type of plug-in.",
            },
            {
                question: "What is the role of the browser process in the Chrome Browser's architecture?",
                answer: "The browser process in the Chrome Browser manages the user interface, disk, and network I/O. It serves as the central coordinator for various functions within the browser.",
            },
            {
                question: "What functions does the renderer process perform in the Chrome Browser?",
                answer: "The renderer process in the Chrome Browser is responsible for rendering web pages, handling HTML, and executing Javascript. A new renderer process is created for each website opened, running in a sandbox to restrict disk and network I/O and enhance security.",
            },
            {
                question: "Why is the use of a sandbox for renderer processes important in the Chrome Browser?",
                answer: "The sandbox for renderer processes in the Chrome Browser is crucial for security. It restricts disk and network I/O, minimizing the impact of potential security exploits, and provides an additional layer of protection for the overall system.",
            },
            {
                question: "What is the purpose of the plug-in process in the Chrome Browser's architecture?",
                answer: "The plug-in process in the Chrome Browser is dedicated to each type of plug-in. It ensures that plug-ins operate in isolated processes, preventing issues with one plug-in from affecting others or the overall browser functionality.",
            },
            // Interprocess Communication.
            {
                question: "What does IPC stand for in the context of operating system?",
                answer: "Inter-process Communication",
            },
            {
                question: "What is IPC in the context of operating systems?",
                answer: "IPC is the mechanism through which processes communicate with each other in an operating system.",
            },
            {
                question: "What are the two primary methods of IPC?",
                answer: "1. Shared memory (with a process 'kick'): Fast and involves no data transfer.\n2. Message Passing: Distributed and provides better isolation between processes.",
            },
            {
                question: "Describe the Shared memory method of IPC.",
                answer: "Shared memory in IPC involves processes sharing a common memory region. A 'process kick' is often used to signal the other process to access the shared memory. This method is fast and does not involve actual data transfer between processes.",
            },
            {
                question: "Explain the Message Passing method of IPC.",
                answer: "Message Passing in IPC involves processes communicating by exchanging messages. This method is distributed and provides better isolation between processes, as they do not share memory directly. Messages can be used to transfer data and synchronize processes.",
            },
            // Remote Procedure Call.
            {
                question: "What does RPC stand for?",
                answer: "Remote Procedure Call",
            },
            {
                question: "What is the purpose of RPC in networked systems?",
                answer: "To abstract procedure calls between processes on networked systems, allowing communication and execution of procedures across different machines.",
            },
            {
                question: "What is the role of Stubs in the context of RPC?",
                answer: "Stubs act as client-side proxies for the actual procedures on the server. They facilitate the communication between the client and server by abstracting the procedure calls.",
            },
            {
                question: "What tasks does the client-side stub perform in an RPC?",
                answer: "The client-side stub in an RPC locates the server and marshalls the parameters. It prepares the necessary information for the remote procedure call and initiates the communication with the server.",
            },
            {
                question: "What responsibilities does the server-side stub have in an RPC?",
                answer: "The server-side stub in an RPC receives the message from the client, unpacks the marshalled parameters, and performs the actual procedure on the server. It acts as an intermediary between the client and the server, handling the communication and execution process.",
            },
        ],
    },
    {
        title: "OS: Lecture 5",
        subtitle: "Thread",
        flashcards: [
            // Objectives.
            {
                question: "What is the notion of a thread?",
                answer: "A thread is a fundamental unit of CPU utilization and forms the basis of multithreaded computer systems."
            },
            // Motivations.
            {
                question: "Why are most modern applications multithreaded?",
                answer: "Most modern applications are multithreaded to run multiple tasks within the application concurrently. This allows for tasks such as updating the display, fetching data, spell checking, and handling network requests to be implemented by separate threads."
            },
            {
                question: "What is the advantage of using threads for tasks within an application?",
                answer: "Thread creation is light-weight compared to process creation, making it more efficient. Using threads can simplify code and increase overall application efficiency by allowing multiple tasks to run concurrently."
            },
            {
                question: "Are kernels generally multithreaded?",
                answer: "Yes, kernels are generally multithreaded, contributing to better system performance and resource utilization."
            },
            // Multithreading vs. Single threading.
            {
                question: "What is multithreading in the context of operating systems?",
                answer: "Multithreading is a concept where the operating system supports multiple threads of execution within a single process. Threads within a process can run concurrently, sharing the same resources but having their own execution paths.",
            },
            {
                question: "How does single threading differ from multithreading?",
                answer: "Single threading is a model where the operating system does not recognize the separate concept of threads. In a single-threaded environment, there is only one execution path at a time, and the OS does not support concurrent thread execution within a process.",
            },
            {
                question: "What is an example of an operating system that supports single threading?",
                answer: "MS-DOS is an example of an operating system that supports single threading. It allows a single user process and a single thread to execute at a time.",
            },
            {
                question: "How does traditional UNIX handle threading?",
                answer: "Traditional UNIX supports multiple user processes but only one thread per process. In this model, each process is single-threaded, and the operating system manages multiple user processes concurrently.",
            },
            {
                question: "Which operating systems support multithreading?",
                answer: "Operating systems like Solaris and Windows 2000 support multithreading. In these systems, multiple threads can exist within a single process, allowing for concurrent execution and improved resource utilization.",
            },
            // While Threads.

            {
                question: "What are some of the possible execution states that threads can have?",
                answer: "Threads can have different execution states, such as running, ready, and others, depending on their current activity within the program.",
            },
            {
                question: "Why is saving thread context important in a multithreading environment?",
                answer: "Saving thread context, including information like the program counter, is crucial when a thread is not actively running. This allows the system to switch between threads and resume their execution accurately.",
            },
            {
                question: "What is the significance of private storage for local variables and execution stack in threads?",
                answer: "Threads have private storage for local variables and execution stacks. This ensures that each thread operates with its own set of variables and stack, preventing interference and data conflicts between threads within the same process.",
            },
            {
                question: "How do threads share access to the address space and resources in their process?",
                answer: "Threads share access to the address space and resources (such as files) of their process. When one thread alters non-private data, all other threads of the same process can see these changes. Threads communicate via shared variables, and resources like files opened by one thread are available to others.",
            },
            {
                question: "What is the implication of threads communicating via shared variables?",
                answer: "Threads communicating via shared variables means that changes made by one thread to shared data are visible to all other threads within the same process. This inter-thread communication allows coordination and synchronization between threads.",
            },
            {
                question: "How does the sharing of resources like files work among threads in a process?",
                answer: "In a multithreading environment, resources like files opened by one thread are available to other threads within the same process. This shared access enables collaboration and data sharing among threads operating in the same process.",
            },
            // Thread Control Block.
            {
                question: "What does TCB stand for in the context of multithreading?",
                answer: "Thread Control Block",
            },
            {
                question: "What is TCB in the context of multithreading?",
                answer: "TCB is a data structure that contains information about a thread.",
            },
            {
                question: "What does TCB contain in the context of multithreading?",
                answer: "* Register image\n* Thread priority\n* Thread state information",
            },
            // Benefits of Threads vs Processes.
            {
                question: "What is a significant advantage of creating threads over processes in terms of time?",
                answer: "Creating a new thread takes far less time than creating a new process. Threads can be quickly initialized, making them a more efficient choice for certain scenarios.",
            },
            {
                question: "How does the time required to terminate a thread compare to terminating a process?",
                answer: "Terminating a thread takes less time than terminating a process. The cleanup and closure process for a thread is generally quicker and more straightforward than for a process.",
            },
            {
                question: "What advantage do threads have in terms of context switching within the same process?",
                answer: "Switching between two threads within the same process takes less time than switching between processes. Threads share the same address space, making the context switch more efficient compared to the more substantial overhead involved in switching between separate processes.",
            },
            {
                question: "How do threads facilitate communication compared to processes?",
                answer: "Threads can communicate via shared memory, allowing them to exchange information directly. In contrast, processes have to rely on kernel services for Inter-Process Communication (IPC), which introduces additional overhead and complexity.",
            },
            // Application benefits of threads.
            {
                question: "What are the application benefits of threads?",
                answer: "* Allows implementation of independent parts as threads\n* Enables non-sequential execution\n* Facilitates smooth switching between threads during I/O blockage",
            },
            // Thread States.
            {
                question: "What are the three key states of threads?",
                answer: "Running, Ready, Blocked",
            },
            {
                question: "Why is there no Suspend state for threads in the discussed context?",
                answer: "All threads within the same process share the same address space (same process image), and suspending implies swapping out the whole process, suspending all threads in the process.",
            },
            {
                question: "What happens when a process is terminated?",
                answer: "Termination of a process terminates all threads within the process because the process is the environment the thread runs in.",
            },
            // Thread Operations.
            {
                question: "What are the basic thread operations?",
                answer: "* Spawn\n* Block\n* Unblock\n* Finish",
            },
            {
                question: "What is the purpose of the spawn operation in thread management?",
                answer: "The spawn operation allows a process to start with one thread, and that thread can spawn another thread, placing the new thread on the Ready queue.",
            },
            {
                question: "Describe the block operation (yield, suspend) in thread management.",
                answer: "The block operation involves saving the Program Counter (PC), registers, etc., and allowing other thread(s) to run. It could 'block' the whole process if making a system call requiring kernel service, otherwise, it's a single thread being suspended.",
            },
            {
                question: "Explain the unblock operation (wake) in thread management.",
                answer: "The unblock operation occurs when IO finishes or another thread relinquishes control. It results in the thread moving to the Ready queue.",
            },
            {
                question: "What is the purpose of the finish operation (terminate) in thread management?",
                answer: "The finish operation involves deallocating the context, including stacks, etc., effectively terminating the thread.",
            },
            // Thread Libraries.
            {
                question: "What does a Thread library provide to programmers?",
                answer: "A Thread library provides programmers with an API for creating and managing threads.",
            },
            {
                question: "What are the two primary ways of implementing a Thread library?",
                answer: "1. Library entirely in user space.\n2. Kernel-level library supported by the operating system (OS).",
            },
            // Pthreads.
            {
                question: "What is Pthreads and how can it be provided?",
                answer: "Pthreads may be provided either as a user-level or kernel-level thread library.",
            },
            {
                question: "What does the term POSIX standard (IEEE 1003.1c) refer to in the context of Pthreads?",
                answer: "POSIX standard (IEEE 1003.1c) is an API specification for thread creation and synchronization in Pthreads. It defines the behavior of the thread library, leaving the implementation details to the development of the library.",
            },
            {
                question: "In which operating systems is Pthreads commonly used?",
                answer: "Pthreads is common in UNIX operating systems, including Solaris, Linux, and Mac OS X.",
            },
            // Java Threads.
            {
                question: "How are Java threads managed?",
                answer: "Java threads are managed by the Java Virtual Machine (JVM).",
            },
            {
                question: "What is the typical implementation approach for Java threads?",
                answer: "Java threads are typically implemented using the threads model provided by the underlying operating system.",
            },
            {
                question: "What are the two ways to create Java threads?",
                answer: "* Extending the Thread class\n* Implementing the Runnable interface",
            },
            // Lecture 5.2.
            // Multithreading Models.
            {
                question: "What are different multithreading models?",
                answer: "* One-to-one\n* Many-to-one\n*Many-to-many"
            },
            // Many-to-One.
            {
                question: "What characterizes the many-to-one threading model?",
                answer: "Mapping many user-level threads to a single kernel thread."
            },
            {
                question: "In the many-to-one model, what happens when a single thread blocks?",
                answer: "Blocking of one thread leads to the blocking of all threads."
            },
            {
                question: "Why may multiple threads not execute in parallel on a multicore system in the many-to-one model?",
                answer: "Because only one thread is allowed in the kernel at a time, hindering parallel execution."
            },
            {
                question: "Is the many-to-one threading model widely adopted in current systems?",
                answer: "No, this model is not extensively used in contemporary systems."
            },
            {
                question: "Can you provide examples of systems that employ the many-to-one model?",
                answer: "* Solaris Green Threads\n* GNU Portable Threads"
            },
            // User-Level Threads.
            {
                question: "What does ULT stand for in the context of multithreading?",
                answer: "User-Level Thread.",
            },
            {
                question: "Does the kernel aware of the ULT existence?",
                answer: "No"
            },
            {
                question: "What manages the ULTs??",
                answer: "User-space thread library."
            },
            {
                question: "Is there a transition involving the kernel in ULTs?",
                answer: "No, there is no kernel involvement or mode switch during thread management."
            },
            {
                question: "What potential challenge may arise in ULT when one thread engages in I/O operations?",
                answer: "I/O in one thread has the potential to block the entire process."
            },
            // Kernel Role for ULTs
            {
                question: "Thread states are independent of ____ states.",
                answer: "process",
            },
            // Advantages and Disadvantages of ULTs.
            {
                question: "What are the advantages of User-Level Threads (ULT)?",
                answer: "1. Thread switching does not involve the kernel, resulting in no mode switching and faster performance.\n2. Scheduling can be application-specific, allowing the selection of the best algorithm for the situation.\n3. ULTs can run on any operating system, requiring only a thread library."
            },
            {
                question: "What are the disadvantages of User-Level Threads (ULT)?",
                answer: "1. Most system calls are blocking for processes, leading to implicit blocking of all threads within a process.\n2. The kernel can only assign processors to processes, preventing two threads within the same process from running simultaneously on two processors."
            },
            // One-to-one.
            {
                question: "What characterizes the One-to-One threading model?",
                answer: "Each user-level thread corresponds to a kernel thread."
            },
            {
                question: "What happens when a user-level thread is created in the One-to-One model?",
                answer: "Creating a user-level thread simultaneously creates a kernel thread."
            },
            {
                question: "How does the level of concurrency in the one-to-one model compare to the many-to-one model?",
                answer: "The one-to-one model provides more concurrency than the many-to-one model."
            },
            {
                question: "Why might the number of threads per process be restricted in the one-to-one model?",
                answer: "The overhead involved may lead to restrictions on the number of threads per process."
            },
            {
                question: "Can you provide examples of systems that use the One-to-One model?",
                answer: "Windows and Linux."
            },
            // Kernel-Level Threads.
            {
                question: "What does KLT stand for in the context of multithreading?",
                answer: "Kernel-Level Thread.",
            },
            {
                question: "What is characteristic of KLTs",
                answer: "All thread management is handled by the kernel itself."
            },
            {
                question: "How is thread management implemented in KLT in contrast to ULT?",
                answer: "There is no thread library; instead, an API is provided to the kernel thread facility."
            },
            {
                question: "What information does the kernel maintain for processes and threads in KLT?",
                answer: "The kernel maintains context information for both the process and its threads."
            },
            {
                question: "In KLT, what is required for switching between threads?",
                answer: "Thread switching requires the involvement of the kernel."
            },
            {
                question: "How does the kernel perform scheduling in KLT?",
                answer: "The kernel performs scheduling on a thread basis."
            },
            // Advantages and Disvantages of KLT.
            {
                question: "Advantages of KLT",
                answer: "1. Kernel can schedule multiple threads on multiple processors.\n2. Blocking occurs at the thread level.\n3. CPU can be assigned to another thread if one blocks.\n4. Even kernel routines can be multithreaded."
            },
            {
                question: "Disadvantages of KLT",
                answer: "1. Thread switching involves the kernel, resulting in two mode switches.\n2. Slower compared to ULT, but faster than a full process switch."
            },
            // Many-to-Many.
            {
                question: "What characterizes the many-to-many threading model?",
                answer: "It allows many user-level threads to be mapped to many kernel threads."
            },
            {
                question: "What advantage does the many-to-many model provide in terms of kernel threads?",
                answer: "It allows the operating system to create a sufficient number of kernel threads."
            },
            {
                question: "Can you provide an example of a system that implements the many-to-many model?",
                answer: "Windows with the ThreadFiber package."
            },
        ],
    },
];