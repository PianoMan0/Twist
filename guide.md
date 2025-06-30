# Twist Official Guide

Making your own esolang can be a challenge without some tips, so I'm proud to present the official Hack Club guide to making one!
---

## 1. Plan It Out First

First, figure out what makes your esolang unique. Is it minimalist, cryptic, or maybe based on a theme (like cooking, cats, or emojis)? Jot down a few rules. For example:

- Every command is a single letter.
- Only certain words are valid instructions.
- You have to use only emojis (this can be hard, I've tried it).

Be as weird as you like.

---

## 2. Define the Syntax

Write down how programs in your language will look. For example, maybe every command is a single character:

```
+++--*>
```

Or maybe you want something readable:

```
jump left
add 1
print
```

---

## 3. Write the Parser

The parser reads your esolang code and figures out what the commands are. Here’s a basic parser that splits code into tokens (commands).

**Python:**
```python
def parse(code):
    return list(code.strip())
```

**JavaScript:**
```js
function parse(code) {
    return code.trim().split('');
}
```

---

## 4. Add the Interpreter

The interpreter runs your esolang code. You’ll need to loop through the commands and do something for each one.

Here’s a super simple example: an esolang that only supports `+` (increment a number), `-` (decrement), and `p` (print the number).

**Python Example:**
```python
def run_esolang(code):
    tokens = parse(code)
    value = 0
    for token in tokens:
        if token == '+':
            value += 1
        elif token == '-':
            value -= 1
        elif token == 'p':
            print(value)
        else:
            pass  # Ignore unknown commands

run_esolang("+++-p--p")
```

**JavaScript Example:**
```js
function runEsolang(code) {
    const tokens = parse(code);
    let value = 0;
    tokens.forEach(token => {
        if (token === '+') value++;
        else if (token === '-') value--;
        else if (token === 'p') console.log(value);
        // Ignore unknown commands
    });
}

runEsolang("+++-p--p");
```

---

## 5. Test and Play Around

Write simple programs in your new language. Tweak the rules. Add more commands. Break things on purpose and see what happens. Maybe find a friend on Slack to test it for you and give it a review!

---

## 6. Share It

Once you’re happy with what you've made (and you've met all the requirements), write some documentation, give your esolang a cool name, and submit it to Twist! Try making an interpreter available on the web or as a command-line tool.

---

## Extra Tips

- Start small! You don’t need a huge feature set at first, but expand as much as you need to if you're trying to get your 10 hours in.
- Get weird. The more bizarre, the better.
- Look at other esolangs for inspiration (like [Brainf*ck](https://esolangs.org/wiki/Brainfuck), [Whitespace](https://esolangs.org/wiki/Whitespace), or [Befunge](https://esolangs.org/wiki/Befunge)).
- Don’t worry about efficiency or practicality.

---

**Now get making!**
