---
sidebar_position: 4
title: Functions
---

# Shell Functions

# Understanding Functions in the Terminal

Aliases are great for simple command shortcuts, but what if you need something more powerful? **Functions** allow you to create reusable, custom commands that can take arguments and perform multiple operations in a single command.

## What is a Shell Function?

A **function** in the terminal is a small script that runs when you call its name. Unlike aliases, functions can:

- Accept **parameters** (input values).
- Run **multiple commands**.
- Include **logic** like conditionals and loops.

### Example of a Function

Without a function, you might type multiple commands like this:

```sh
mkdir my_project
cd my_project
git init
```

Instead, you can define a function:

```sh
function new_project() {
    mkdir "$1"
    cd "$1"
    git init
}
```

Now, running:

```sh
new_project my_project
```

Will:

1. Create a directory named `my_project`.
2. Move into that directory.
3. Initialize a Git repository.

## Creating and Using Functions

### Temporary Functions

To define a function for the current session:

```sh
function greet() {
    echo "Hello, $1!"
}
```

Now, running:

```sh
greet Alice
```

Will output:

```
Hello, Alice!
```

However, this function will disappear once you close the terminal.

### Making a Function Permanent

To keep a function available in every session, you need to add it to your shell configuration file (`.zshrc` or `.bashrc`).

#### Steps to Add a Function Permanently

1. Open your shell configuration file in a text editor.
   - Zsh users (default on macOS): `~/.zshrc`
   - Bash users: `~/.bashrc`
2. Scroll to the bottom and add your function:

   ```sh
   function greet() {
       echo "Hello, $1!";
   }
   ```

3. Save the file and apply the changes by running:

   ```sh
   source ~/.zshrc  # or source ~/.bashrc
   ```

### Removing a Function

To remove a function from the current session:

```sh
unset -f greet
```

To permanently remove it, open your `.zshrc` or `.bashrc` file in a text editor and delete the function.

## Why Use Functions?

- **Automate repetitive tasks** with custom scripts.
- **Make complex commands easier** to run with simple names.
- **Accept arguments**, unlike aliases.
- **Improve efficiency**, reducing typing errors.

## How Oat Helps with Function Management

Oat makes function management **simpler and safer** by allowing users to:

- **Easily add, edit, and remove functions** without modifying configuration files manually.
- **See all available functions** in one place.

With Oat, managing functions is **quick, structured, and hassle-free**.
