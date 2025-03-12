class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value){
    const newNode=new Node (value);
    this.tail = newNode;
    this.tail.next=newNode
    this.length++



  }
}
