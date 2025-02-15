---
sidebar_position: 3
---

# What Are Shell Files?

When you open a terminal on your computer, it needs to know how to behave. **Shell files** are special configuration files that tell the terminal what settings, shortcuts, and customizations to load when you start a session.

## Common Shell Files

There are different types of shell files, but the most important ones are:

- **`~/.zshrc`** – Used by the **Zsh** shell (default on macOS since Catalina).
- **`~/.bashrc`** – Used by the **Bash** shell (default on older macOS versions and many Linux systems).
- **`~/.bash_profile`** – A variant of `.bashrc`, used mainly for login shells.

These files are **hidden** (the `.` at the beginning means they don’t show up in Finder by default) and live in the user's home directory (`~`).

## What Do These Files Do?

Shell files **automate setup** for your terminal session. They can include:

- **Aliases** – Shortcuts for longer commands (e.g., `alias gs="git status"`).
- **Environment Variables** – Custom settings that programs can use (e.g., setting your preferred editor).
- **Functions** – Small scripts that run inside the terminal.
- **PATH Configuration** – Tells the system where to look for executable programs.

### Example: What’s Inside a `.zshrc` File?

A simple `.zshrc` file might look like this:

```sh
# Set an alias
alias ll="ls -la"

# Set an environment variable
export EDITOR="vim"

# Modify the PATH
export PATH="$HOME/bin:$PATH"
```
