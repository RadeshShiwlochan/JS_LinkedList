//constructor for making Node object
function Node(data) {
	this.data = data;
	this.next = null;
}

//constructor for making the linked list 
function SinglyList() {
	this.listLength = 0;
	this.head = null
}

SinglyList.prototype.add = function(value) {
	var node = new Node(value),
	    currentNode = this.head;

	if(!currentNode) {
		this.head = node;
		this.listLength++;
		return node;
	}

	while(currentNode.next) 
		currentNode = currentNode.next;
	    
    this.listLength++;
    return node;    	    
};

SinglyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
	length = this.listLength,
	count = 1,
	message = {failure: "Failure:non-existence node in this List"};

	if(length === 0 || position < 1 || position > length) 
		throw new Error(message.failure);

	while(count < position) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
	
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }




















