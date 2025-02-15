---
sidebar_position: 3
---

# Aliases

When working in the terminal, you might find yourself repeatedly typing long or complex commands. **Aliases** allow you to create shortcuts for these commands, making your workflow faster and more efficient.

## What is an Alias?

An **alias** is a custom shortcut for a command. Instead of typing a long command every time, you can define a shorter name for it.

### Example of an Alias

Without an alias, you might type:

```sh
git status
```

Instead, you can create an alias:

```sh
alias gs="git status"
```

Now, typing `gs` will execute `git status`.

## Creating and Using Aliases

### Temporary Aliases

To define an alias for the current session:

```sh
alias cls="clear"
```

Now, running `cls` will execute `clear`, which clears the terminal screen. However, this alias disappears when you close the terminal.

### Making an Alias Permanent

To keep an alias available in every session, add it to your shell configuration file (`.zshrc` or `.bashrc`):

```sh
echo 'alias cls="clear"' >> ~/.zshrc
```

Then apply the changes:

```sh
source ~/.zshrc
```

## Removing an Alias

To remove an alias for the current session:

```sh
unalias cls
```

To permanently remove it, delete the line from your `.zshrc` or `.bashrc` file.

## Why Use Aliases?

- **Saves time** by reducing repetitive typing.
- **Simplifies commands**, especially those with long options.
- **Customizes workflows**, making terminal use more efficient.

## How Oat Helps with Aliases

Instead of manually editing configuration files, Oat provides a **simple interface and CLI commands** to:

- **Add, edit, and remove aliases** without modifying files directly.
- **View all active aliases** in one place.

With Oat, managing aliases is **fast, safe, and hassle-free**.
