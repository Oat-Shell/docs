---
sidebar_position: 2
title: PATH
---

# PATH Variable

When you type a command in the terminal, how does your computer know where to find it? The answer lies in the **PATH** variable.

## What is PATH?

**PATH** is an environment variable that tells the terminal where to look for executable programs. It contains a list of directories separated by colons (`:`), and the shell searches these directories to find the command you typed.

### Example of a PATH Variable

A typical PATH on macOS might look like this:

```sh
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```

This means:

1. The terminal first looks in `/usr/local/bin` for commands.
2. If not found, it checks `/usr/bin`, then `/bin`, and so on.

## How PATH Works

When you type a command like:

```sh
python
```

The shell searches through each directory listed in PATH **from left to right** until it finds `python`. If it’s not in any of these directories, you’ll see an error:

```sh
zsh: command not found: python
```

## Configuring PATH

### Viewing Your PATH

To see your current PATH, run:

```sh
echo $PATH
```

### Adding a New Directory to PATH

If you install a program that isn’t in a default location, you may need to **add it to PATH**. This is done in your shell configuration file (`.zshrc` or `.bashrc`).

For example, if you install a tool in `~/my-tools`, you can add it to PATH by adding this line to your `.zshrc` file:

```sh
export PATH="$HOME/my-tools:$PATH"
```

This ensures that programs inside `~/my-tools` can be found by the terminal.

### Making PATH Changes Take Effect

After modifying your shell configuration file, you need to **apply the changes**:

```sh
source ~/.zshrc  # or source ~/.bashrc
```

Alternatively, restarting the terminal also reloads PATH.

## Why PATH Matters

- It **controls which commands are available** in the terminal.
- It **affects program versions** (e.g., you may have multiple Python installations, and the first one in PATH gets used).
- Misconfiguring PATH can cause errors or make commands unavailable.

## How Oat Helps with PATH Management

Editing PATH manually can be confusing, and mistakes can break important functionality. Oat provides a **safe and user-friendly** way to manage PATH by:

- Letting you **easily add and remove directories** without modifying files manually.
- Ensuring **changes are visible and reversible**.
- Preventing **common mistakes** like overwriting the existing PATH.

With Oat, you can confidently manage your terminal environment without worrying about breaking anything!
