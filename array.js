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

  get(index){
    return this.data[index]
  }

  pop(){
    const poppedItem=delete this.data[this.length-1]
    this.length--
    return poppedItem
  }

  shift(){
    const firstItem = delete this.data[0];
    this.length--
    return this.data = Object.fromEntries(
      Object.entries(this.data).map(([key, value]) => [(key-1), value])
    );

  }

}

const newArr = new myArray();
newArr.push("apples");
newArr.push("mangoes");
newArr.push("kiwi");
console.log(newArr) ;
console.log(newArr.length) ;
console.log(newArr.shift()) ;
console.log(newArr.length) ;


