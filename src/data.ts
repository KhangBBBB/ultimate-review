import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "OS: Lecture 2",
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
                question: "What is caching, and how does it contribute to I/O subsystem performance?",
                answer: "Caching in the I/O subsystem involves storing parts of data in faster storage for performance. It enhances speed by allowing frequently accessed data to be retrieved quickly from the cache rather than the slower main memory or external storage."
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
                answer: "The purpose of a VMM is to enable running multiple operating systems on a single physical machine."
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
        title: "OS: Bash and Linux Commands",
        flashcards: [
            // Bash.
            {
                question: "Write a Bash script that uses a for loop to print numbers from 1 to 100.",
                answer: "#!/bin/bash\n\nfor i in {1..100}; do\n  echo $i\ndone",
            },
            {
                question: "How do you declare and use variables in Bash?",
                answer: "Variables in Bash are declared by assigning a value to a variable name. For example, 'variable_name=value'. To use a variable, prepend the variable name with a '$' symbol, like '$variable_name'."
            },
            {
                question: "What is an array in Bash, and how do you use it?",
                answer: "An array in Bash is a collection of elements. You can declare an array using 'array_name=(element1 element2 element3)'. To access individual elements, use '${array_name[index]}'."
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
                answer: "To execute a command and store its output in a variable, use 'variable_name=$(command)'. This captures the output of the command and assigns it to the specified variable."
            },
            // cp.
            {
                question: "What is the purpose of the 'cp' command in Linux?",
                answer: "The 'cp' command in Linux is used to copy files or directories from one location to another."
            },
            {
                question: "How do you use the 'cp' command to copy a file in Linux?",
                answer: "The basic syntax for copying a file is: 'cp source_file destination_directory'. For example, 'cp file.txt /path/to/destination/'"
            },
            {
                question: "How can you copy multiple files using the 'cp' command?",
                answer: "To copy multiple files, you can specify them as a list after the 'cp' command, followed by the destination directory. For example, 'cp file1.txt file2.txt /path/to/destination/'"
            },
            {
                question: "What option is used to preserve the original file attributes, such as timestamps, when copying with 'cp'?",
                answer: "The '-p' option is used to preserve the original file attributes, including timestamps. For example, 'cp -p file.txt /path/to/destination/'"
            },
            {
                question: "How do you recursively copy directories and their contents using the 'cp' command?",
                answer: "To copy directories and their contents recursively, use the '-r' or '-R' option. For example, 'cp -r source_directory /path/to/destination/'"
            },
            // ps.
            {
                question: "What is the purpose of the 'ps' command in Linux?",
                answer: "The 'ps' command is used to display information about the currently running processes on a Linux system."
            },
            {
                question: "What is the basic syntax of the 'ps' command?",
                answer: "The basic syntax is simply 'ps'. This will display a snapshot of the currently running processes in the current terminal window."
            },
            {
                question: "How can you view information about all processes running on the system using 'ps'?",
                answer: "To view information about all processes on the system, use 'ps -e' or 'ps aux'. These options show a detailed list of processes."
            },
            {
                question: "What does the 'ps' option '-f' do?",
                answer: "The '-f' option with 'ps' provides a full-format listing, displaying more detailed information about each process, including the process hierarchy."
            },
            {
                question: "How do you filter and display specific process information using 'ps'?",
                answer: "To filter and display specific process information, you can use the 'ps' command with options like '-C' followed by the process name. For example, 'ps -C firefox' will display information about the Firefox process."
            },
            // ls.
            {
                question: "What is the purpose of the 'ls' command in Linux?",
                answer: "The 'ls' command is used to list files and directories in a directory."
            },
            {
                question: "What is the basic syntax of the 'ls' command?",
                answer: "The basic syntax is 'ls [options] [file/directory]'. Without specifying a file or directory, it lists the contents of the current directory."
            },
            {
                question: "How do you display detailed information about files using 'ls'?",
                answer: "To display detailed information about files, use the '-l' option. For example, 'ls -l' shows details like file permissions, owner, size, and modification time."
            },
            {
                question: "How can you list all files, including hidden ones, using 'ls'?",
                answer: "To list all files, including hidden ones, use the '-a' option. For example, 'ls -a' shows all files, including those whose names start with a dot."
            },
            {
                question: "What 'ls' option is used to sort files by modification time, with the newest first?",
                answer: "The '-t' option is used to sort files by modification time, displaying the newest files first. For example, 'ls -lt' lists files in long format with the newest at the top."
            },
            // mv.
            {
                question: "What is the purpose of the 'mv' command in Linux?",
                answer: "The 'mv' command is used to move or rename files and directories in Linux."
            },
            {
                question: "How do you use 'mv' to move a file or directory to a different location?",
                answer: "The basic syntax for moving a file is 'mv source_file destination'. For example, 'mv file.txt /path/to/destination/'"
            },
            {
                question: "What happens if you use 'mv' to move a file to an existing directory?",
                answer: "If the destination is an existing directory, the 'mv' command will move the file into that directory."
            },
            {
                question: "How do you use 'mv' to rename a file?",
                answer: "To rename a file, use 'mv' with the current filename as the source and the new filename as the destination. For example, 'mv old_name.txt new_name.txt'"
            },
            {
                question: "What is the purpose of the '-i' option with the 'mv' command?",
                answer: "The '-i' option prompts for confirmation before overwriting an existing file. For example, 'mv -i file.txt /path/to/destination/'"
            },
            // rm.
            {
                question: "What is the purpose of the 'rm' command in Linux?",
                answer: "The 'rm' command is used to remove or delete files and directories in Linux."
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
                answer: "To force the removal of files without prompting for confirmation, use the '-f' option. For example, 'rm -f file.txt'"
            },
            {
                question: "What is the purpose of the '-i' option with the 'rm' command?",
                answer: "The '-i' option prompts for confirmation before removing each file. For example, 'rm -i file.txt'"
            },
            // mkdir.
            {
                question: "What is the purpose of the 'mkdir' command in Linux?",
                answer: "The 'mkdir' command is used to create new directories (folders) in Linux."
            },
            {
                question: "How do you use 'mkdir' to create a new directory?",
                answer: "The basic syntax for creating a new directory is 'mkdir directory_name'. This command creates a directory with the specified name."
            },
            {
                question: "What 'mkdir' option is used to create parent directories if they do not exist?",
                answer: "The '-p' option with 'mkdir' is used to create parent directories if they do not exist. For example, 'mkdir -p path/to/new_directory/'"
            },
            {
                question: "How can you set the permissions of the new directory using 'mkdir'?",
                answer: "To set permissions for the new directory, you can use the '--mode' or '-m' option followed by the numeric mode. For example, 'mkdir -m 755 new_directory/'"
            },
            {
                question: "What happens if you try to create a directory that already exists with 'mkdir'?",
                answer: "If you attempt to create a directory that already exists, 'mkdir' will display an error message unless the '-p' option is used."
            },
            // rmdir.
            {
                question: "What is the purpose of the 'rmdir' command in Linux?",
                answer: "The 'rmdir' command is used to remove empty directories in Linux."
            },
            {
                question: "How do you use 'rmdir' to remove an empty directory?",
                answer: "The basic syntax for removing an empty directory is 'rmdir directory_name'. This command deletes the specified empty directory."
            },
            {
                question: "What happens if you attempt to use 'rmdir' on a non-empty directory?",
                answer: "If you try to use 'rmdir' on a directory that contains files or other directories, it will display an error message as 'rmdir' can only remove empty directories."
            },
            {
                question: "What is an alternative command for removing directories, including non-empty ones?",
                answer: "The 'rm' command with the '-r' option can be used to remove directories and their contents, including non-empty directories. For example, 'rm -r directory/'"
            },
            {
                question: "Is there any option available for 'rmdir' to force the removal of a non-empty directory?",
                answer: "No, 'rmdir' does not have an option to force the removal of a non-empty directory. For that purpose, 'rm -r' is commonly used."
            },
            // echo.
            {
                question: "What is the purpose of the 'echo' command in Linux?",
                answer: "The 'echo' command is used to display messages or values on the terminal."
            },
            {
                question: "How do you use 'echo' to print a message to the terminal?",
                answer: "The basic syntax for printing a message is 'echo message'. For example, 'echo Hello, World!' will print 'Hello, World!' to the terminal."
            },
            {
                question: "What is the purpose of the '-e' option with the 'echo' command?",
                answer: "The '-e' option enables the interpretation of backslash escapes, allowing you to include special characters in the output. For example, 'echo -e 'Line1\nLine2'' will print two lines."
            },
            {
                question: "How can you redirect the output of 'echo' to a file?",
                answer: "To redirect the output of 'echo' to a file, use the '>' operator. For example, 'echo 'Hello' > output.txt' will create a file named 'output.txt' with the text 'Hello'."
            },
            {
                question: "What is the purpose of the '-n' option with the 'echo' command?",
                answer: "The '-n' option suppresses the trailing newline, allowing you to print text without adding a newline character at the end."
            },
            // more.

            {
                question: "What is the purpose of the 'more' command in Linux?",
                answer: "The 'more' command is used to display the contents of a text file or command output in a paginated manner."
            },
            {
                question: "How do you use 'more' to view the contents of a text file?",
                answer: "The basic syntax for viewing a text file is 'more filename'. For example, 'more example.txt' will display the contents of 'example.txt' page by page."
            },
            {
                question: "What key can you press to advance to the next page while using 'more'?",
                answer: "You can press the 'Space' key to advance to the next page when using 'more' to view a text file."
            },
            {
                question: "How can you quit or exit from the 'more' command?",
                answer: "To quit or exit from the 'more' command, press the 'q' key. This will return you to the command prompt."
            },
            {
                question: "What is an alternative command to 'more' that also allows backward navigation?",
                answer: "The 'less' command is an alternative to 'more' that not only allows forward navigation with the 'Space' key but also supports backward navigation using the 'b' key."
            },
            // date.
            {
                question: "What is the purpose of the 'date' command in Linux?",
                answer: "The 'date' command is used to display or set the system date and time in the Linux terminal."
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
                answer: "To set the system date and time, use the 'date' command with the '-s' option followed by the desired date and time. For example, 'sudo date -s '2024-01-30 12:34:56''"
            },
            {
                question: "What is the purpose of the '-u' option with the 'date' command?",
                answer: "The '-u' option displays or sets the Coordinated Universal Time (UTC) instead of the local time."
            },
            // time.
            {
                question: "What is the purpose of the 'time' command in Linux?",
                answer: "The 'time' command is used to measure the execution time of a command or script in Linux."
            },
            {
                question: "How do you use 'time' to measure the execution time of a command?",
                answer: "The basic syntax for measuring the execution time of a command is 'time command'. For example, 'time ls' will display the real, user, and system time taken by the 'ls' command."
            },
            {
                question: "What does the 'real', 'user', and 'sys' values represent in the output of 'time'?",
                answer: "In the output of 'time', 'real' represents the elapsed or wall clock time, 'user' represents the CPU time spent in user mode, and 'sys' represents the CPU time spent in system mode."
            },
            {
                question: "How can you redirect only the timing information of 'time' to a file?",
                answer: "To redirect only the timing information to a file, you can use 'time command 2> timing.txt'. This will redirect the standard error (stderr) output to the specified file."
            },
            {
                question: "What is the purpose of the '-p' option with the 'time' command?",
                answer: "The '-p' option with 'time' changes the output format to be more machine-readable, providing timing information in a format that is easier to parse."
            },
            // kill.
            {
                question: "What is the purpose of the 'kill' command in Linux?",
                answer: "The 'kill' command is used to send signals to processes, allowing for termination or manipulation of their behavior."
            },
            {
                question: "How do you use 'kill' to terminate a process by its process ID (PID)?",
                answer: "The basic syntax for terminating a process by its PID is 'kill PID'. For example, 'kill 1234' will send the default signal (SIGTERM) to process with PID 1234, requesting termination."
            },
            {
                question: "What is the default signal sent by 'kill'?",
                answer: "The default signal sent by 'kill' is SIGTERM (termination signal), which allows the process to perform cleanup operations before exiting."
            },
            {
                question: "How can you force the termination of a process using 'kill'?",
                answer: "To force the termination of a process, you can use 'kill -9 PID' or 'kill -SIGKILL PID'. This sends the SIGKILL signal, which immediately terminates the process without allowing it to perform cleanup."
            },
            {
                question: "What is an alternative command to 'kill' for sending signals to processes?",
                answer: "The 'pkill' command is an alternative to 'kill' that allows you to send signals to processes based on their names or other attributes."
            },
            // history.
            {
                question: "What is the purpose of the 'history' command in Linux?",
                answer: "The 'history' command is used to display the command history list, which shows the previously executed commands in the current session."
            },
            {
                question: "How do you use 'history' to display the command history list?",
                answer: "The basic syntax for displaying the command history is simply 'history'. This command will show a numbered list of previously executed commands in the current session."
            },
            {
                question: "What 'history' option is used to limit the number of commands displayed?",
                answer: "The '-n' option with 'history' is used to limit the number of commands displayed. For example, 'history -n 10' will show the last 10 commands."
            },
            {
                question: "How can you execute a command from the history by its number?",
                answer: "To execute a command from the history by its number, use '!n', where 'n' is the command number. For example, '!5' will re-run the fifth command from the history."
            },
            {
                question: "What is the purpose of the 'history' command with the '-c' option?",
                answer: "The 'history -c' option is used to clear the entire command history, removing all previously executed commands from the history list."
            },
            // chmod.
            {
                question: "What is the purpose of the 'chmod' command in Linux?",
                answer: "The 'chmod' command is used to change the permissions (read, write, execute) of files and directories in Linux."
            },
            {
                question: "How do you use 'chmod' to add execute permission to a file?",
                answer: "The basic syntax for adding execute permission to a file is 'chmod +x filename'. This command grants execute permission to the specified file."
            },
            {
                question: "What is the numeric representation of read, write, and execute permissions in 'chmod'?",
                answer: "In the numeric representation of permissions, read is represented by 4, write by 2, and execute by 1. These values can be added to represent different combinations. For example, 'chmod 755 filename' grants read, write, and execute permission to the owner, and read and execute permission to others."
            },
            {
                question: "How can you recursively change permissions for all files and subdirectories within a directory?",
                answer: "To recursively change permissions for all files and subdirectories within a directory, use 'chmod -R'. For example, 'chmod -R 644 directory/' sets read and write permissions for the owner and read-only permissions for others on all files and directories inside 'directory'."
            },
            {
                question: "What is the purpose of the 'chmod' option '-c'?",
                answer: "The '-c' option with 'chmod' is used to display a message only if changes are made to the permissions."
            },
            // chown.
            {
                question: "What is the purpose of the 'chown' command in Linux?",
                answer: "The 'chown' command is used to change the ownership of files and directories in Linux."
            },
            {
                question: "How do you use 'chown' to change the owner of a file or directory?",
                answer: "The basic syntax for changing the owner of a file or directory is 'chown new_owner: new_group filename'. This command sets the new owner and, optionally, the new group for the specified file or directory."
            },
            {
                question: "What is the purpose of the '-R' option with 'chown'?",
                answer: "The '-R' option with 'chown' is used to recursively change ownership. This means that the specified ownership changes are applied to all files and subdirectories within the target directory."
            },
            {
                question: "How can you change only the group ownership of a file using 'chown'?",
                answer: "To change only the group ownership of a file, use 'chown :new_group filename'. Omitting 'new_owner' and specifying only the 'new_group' will change the group ownership."
            },
            {
                question: "What is the purpose of the '--reference' option with 'chown'?",
                answer: "The '--reference' option allows you to copy the ownership of one file or directory to another. For example, 'chown --reference=reference_file target_file' sets the ownership of 'target_file' to match 'reference_file'."
            },
        ]
    }
];