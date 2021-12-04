/*
Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

*/

// initial value of n is 0

// push: push register to stack


// const commands = {
//   PUSH
//   ADD
//   SUB
//   MULT
//   DIV
//   REMAINDER
//   POP
//   PRINT
// }


function minilang(str) {

  let registar = 0;
  let stack = [];

  const commands = {
    push: () => {stack.push(registar)},
    add: () => {registar += stack.pop()},
    sub: () => {registar -= stack.pop()},
    mult: () => {registar *= stack.pop()},
    div: () => {registar = parseInt(registar / stack.pop())},
    remainder: () => {registar = parseInt(registar % stack.pop())},
    pop: () => {registar = stack.pop()},
    print: () => {console.log(registar);},
}

  str.split(' ').forEach(command => {
    if (command.match(/[0-9]/)) {
      registar = parseInt(command);
    } else {
      commands[command.toLowerCase()]();
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)