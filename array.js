class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    if (item) {
      this.data[this.length] = item;
      this.length++;
    }
    return this.data;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const poppedItem = delete this.data[this.length - 1];
    this.length--;
    return poppedItem;
  }

  shift() {
    const firstItem = delete this.data[0];
    this.decrementLength();
    const data = this.updatesKeys();
    return data;
  }

  updatesKeys() {
    return (this.data = Object.fromEntries(
      Object.entries(this.data).map(([key, value]) => [key - 1, value])
    ));
  }

  decrementLength() {
    this.length--;
  }

  deleteItemByIndex(index) {
    const item = this.data[index]; // Store the item first
    delete this.data[index]; // Delete it
    this.updatesKeys(); // Reorder keys
    this.decrementLength(); // Update length
    return item; // Return deleted value
  }
  
}

const newArr = new myArray();
newArr.push("apples");
newArr.push("mangoes");
newArr.push("kiwi");


console.log(newArr.deleteItemByIndex(0));
console.log(newArr);

