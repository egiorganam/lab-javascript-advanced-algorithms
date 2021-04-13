class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length === this.MAX_SIZE) return false
    return true
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length > 0) return false
    return true
  }

  push(item) {
    // ... your code goes here
  }

  pop() {
    // ... your code goes here
  }
}
