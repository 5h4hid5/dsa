let Node = function (data) {
  this.data = data;
  this.next = null;
}

let SinglyLinkedList = function () {
  this.count = 0;
  this.head = null;
}

SinglyLinkedList.prototype.append = function (data) {
  let node = new Node(data),
  currentNode = this.head;

  if(!currentNode){
    this.head = node;
    this.count++;
    return node;
  }

  while(currentNode.next){
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this.count++;

  return node;
}

SinglyLinkedList.prototype.prepend = function (data) {
  let node = new Node(data);
  node.next = this.head;
  this.head = node;
  this.count++;

  return node;
}

SinglyLinkedList.prototype.deleteValue = function (data) {
  let currentNode = this.head;

  if(!currentNode){
    return "No item found";
  }

  if(currentNode.data === data){
    this.head = currentNode.next;
    this.count--;

    return ;
  }

  while(currentNode.next){
    if(currentNode.next.data === data){
      currentNode.next = currentNode.next.next;
      this.count--;

      return ;
    }
    currentNode = currentNode.next;
  }
}

let printList = function (list) {
  let node = list.head;
  if(list.count === 0){
    console.log("No item in the list");
    return ;
  } else {
    while(true){
      console.log(node.data);
      if(node.next){
        node = node.next;
      } else {
        break;
      }
    }
  }
}

let myList = new SinglyLinkedList();

myList.append(5);
myList.append(6);
myList.prepend(4);
myList.prepend(2);
myList.append(17);
myList.append(10);
console.log("--- Before Delete ---");
printList(myList);
myList.deleteValue(2);
console.log("--- After Delete ---");
printList(myList);
