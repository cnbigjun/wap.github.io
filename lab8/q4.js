function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function(value) {
    let node = new Node(value);

    if(this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
}

LinkedList.prototype.remove = function(value) {
    let currentNode = this.head;
    let previousNode = null;

    while(currentNode !== null) {
        if(currentNode.value === value) {
            if(previousNode === null) {
                this.head = currentNode.next;
            } else {
                previousNode.next = currentNode.next;
                if(currentNode.next === null) {
                    this.tail = previousNode;
                }
            }
            return;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.print = function() {
    let values = [];
    let currentNode = this.head;

    while(currentNode !== null) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log('{'+values.join(',')+'}');
}


let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(15);
linkedList.print();
linkedList.remove(10);
linkedList.print();
