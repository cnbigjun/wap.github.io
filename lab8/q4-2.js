let LinkedList = {
    head: null,
    tail: null,
    add: function(value) {
        let newNode = { value: value, next: null };

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    },
    remove: function(value) {
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
    },
    print: function() {
        let values = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('{'+values.join(',')+'}');
    }
};

LinkedList.add(5);
LinkedList.add(10);
LinkedList.add(15);
LinkedList.print();
LinkedList.remove(10);
LinkedList.print();
