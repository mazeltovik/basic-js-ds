const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootTree = null;
}

root(){
  return this.rootTree;
}

add(data) {
    let n = new Node(data);
    if (this.rootTree == null){
        this.rootTree = n;
    }
    else {
        let current = this.rootTree;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                 if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }   
    }
}

has(data) {
    if(this.find(data)){
        return true;
    }
    return false;
}

find(data) {
    let current = this.rootTree;
    while(current.data != data){
        if(data < current.data){
            current = current.left;
        }
        else {
            current = current.right;
        }
        if(current == null){
            return null;
        }
    }
    return current;
}

remove(data) {
    function findMinNode(node){
      if(node.left === null){
        return node;
      }
      else return findMinNode(node.left);
    }
    function removeNode(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.left;
            }
            var tempNode = findMinNode(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        }
        else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
    this.rootTree = removeNode(this.rootTree,data);
}

min() {
    let current = this.rootTree;
    while(current.left !== null){
        current = current.left;
    }
    return current.data
}

max() {
    let current = this.rootTree;
    while(current.right !== null){
        current = current.right;
    }
    return current.data
}
}

module.exports = {
  BinarySearchTree
};