/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', '*', '~' determine if the input string is valid.

An input string is valid if:

Open '(' bracket must be closed by TWO ')' brackets
A open '{' bracket must be closed by ONE '}' bracket
A open '[' bracket must be closed by THREE ']' bracket

A wildcard character * can close any single bracket, or no bracket.
A super-wild character ~ can close all previous unclosed brackets, or no bracket

For example the input "())" is valid because the open '(' is closed by two ')' brackets
The input '(*' is valid because the open '(' is closed by the wildcard '*'
The input '*' is valid because the wildcard character does not need to match anything
The input '({[~' is valid because the '(','{', and '[' are all closed by the super wild '~' character
*/
function isValidParenthesis(input) {
    
}

module.exports = isValidParenthesis;