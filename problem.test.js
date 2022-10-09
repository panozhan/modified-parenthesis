const isValidParenthesis = require('./problem');
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', '*', '~' determine if the input string is valid.

An input string is valid if:

Open '(' bracket must be closed by TWO ')' brackets
A open '{' bracket must be closed by ONE '}' bracket
A open '[' bracket must be closed by THREE ']' bracket

A wildcard character * can close any single bracket.
A super-wild character ~ can close all previous unclosed brackets

For example the input "())" is valid because the open '(' is closed by two ')' brackets
The input '(*' is valid because the open '(' is closed by the wildcard '*'
The input '({[~' is valid because the '(','{', and '[' are all closed by the super wild '~' character

The input '([~]' is INVALID because the '(','[' have been matched by the super wild '~' character, and it following ']' matches nothing
*/
const inputToOutput = {
    '())': true,
    '(*': true,
    '{}': true,
    '[]]]': true,
    '([]]]))': true,
    '([{}]]]))': true,
    '([{***': true,
    '([)]': false,
    '([]]))]': false,
    '([{]}))]]': false,
    '([{}~': true,
    '([~]': false,
    '([~[]]]': true,
    '([*[]]]{~': true,
    '*': true,
    '~': true
};

describe('Test the solution', () => {
    for (const input in inputToOutput) {
        test(`Input ${input}`, () => {
            expect(isValidParenthesis(input)).toBe(inputToOutput[input]);
        });
    }
});