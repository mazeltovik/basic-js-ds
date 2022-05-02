const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.head = new ListNode('head');
}

getUnderlyingList() {
    return this.head.next
}

enqueue(value) {
    let newNode = new ListNode(value);
    let currNode = this.head;
    while(currNode.next !== null){
        currNode = currNode.next;
    }
    currNode.next = newNode;
}

dequeue() {
    let deleteNode = this.head.next.value;
    this.head.next = this.head.next.next;
    return deleteNode;
}
}

module.exports = {
  Queue
};
