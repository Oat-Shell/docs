---
sidebar_position: 1
---

# Environment Variables

In a terminal session, **environment variables** store information that can be used by your system and applications. They help configure behavior without needing to modify the programs themselves.

## What Are Environment Variables?

An **environment variable** is a key-value pair that stores information accessible to your shell and programs. For example, the `HOME` variable stores the path to your home directory:

```sh
echo $HOME
```

This might output:

```sh
/Users/yourname
```

### Common Environment Variables

Here are some frequently used environment variables:

| Variable | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| `PATH`   | Tells the shell where to find executable programs.                    |
| `HOME`   | Points to your home directory (e.g., `/Users/yourname`).              |
| `SHELL`  | Indicates which shell you're using (e.g., `/bin/zsh` or `/bin/bash`). |
| `USER`   | Stores your username.                                                 |
| `EDITOR` | Defines the default text editor for the terminal.                     |
| `LANG`   | Specifies the system language and encoding.                           |

## How to Use Environment Variables

### Viewing an Environment Variable

To check the value of a variable, use `echo`:

```sh
echo $USER
```

### Setting an Environment Variable Temporarily

You can create or modify a variable in your terminal session:

```sh
export MY_VARIABLE="Hello, world!"
echo $MY_VARIABLE  # Output: Hello, world!
```

However, this change only lasts until you close the terminal.

## Making Environment Variables Permanent

To make a variable persist across sessions, add it to your shell configuration file (`.zshrc` or `.bashrc`):

```bash filename=".zshrc"
export MY_VARIABLE="Hello, world!"
```

Then apply the changes by running:

```sh
source ~/.zshrc  # or source ~/.bashrc
```

## Unsetting a Variable

To remove a variable from the current session:

```sh
unset MY_VARIABLE
```

## Why Environment Variables Matter

- They **configure applications** without modifying their code.
- They **store secrets** like API keys (though for security, it's better to use a secrets manager).
- They **customize behavior**, like setting a preferred editor (`export EDITOR=vim`).

## How Oat Simplifies Variable Management

Manually managing variables requires modifying configuration files, which can lead to errors. Oat makes it **easy and safe** by providing:

- A **visual interface** to add, edit, or remove environment variables.
- A **CLI** for managing variables from the terminal.

With Oat, you can confidently manage your environment variables **without ever touching a configuration file**.
