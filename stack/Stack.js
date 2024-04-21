//Implement a stack using an array.

/* Stack
        Stack is a linear data structure based on based on LIFO(Last In First Out) principle in
        which the insertion of a new element and removal of an existing element 
        takes place at the same end represented as the top of the stack.
        push() to insert an element into the stack
Oprations:
      pop() to remove an element from the stack
      top() Returns the top element of the stack.
      isEmpty() returns true if stack is empty else false.
      isFull() returns true if the stack is full else false.
*/

let t = -1;
let MAX = 1000;
let a = Array(MAX).fill(0);

function isEmpty() {
  return t < 0;
}

function push(x) {
  if (t >= MAX - 1) {
    console.log("Stack Overflow");
    return false;
  } else {
    t += 1;
    a[t] = x;

    console.log(x + " pushed into stack");
    return true;
  }
}

function pop() {
  if (t < 0) {
    console.log("Stack Underflow");
    return 0;
  } else {
    let x = a[t];
    t -= 1;
    return x;
  }
}

function peek() {
  if (t < 0) {
    console.log("Stack Underflow");
    return 0;
  } else {
    let x = a[t];
    return x;
  }
}

function print() {
  for (i = t; i > -1; i--) {
    console.log(" " + a[i]);
  }
}

push(10);
push(20);
push(30);
console.log(pop() + " Popped from stack");
console.log("Top element is :" + peek());
console.log("Elements present in stack : ");
print();
