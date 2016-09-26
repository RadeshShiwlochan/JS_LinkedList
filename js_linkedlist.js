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
