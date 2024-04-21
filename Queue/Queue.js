//Implement a queue using a linked list.


class QNode
{
	constructor(key)
	{
		this.key = key;
		this.next = null;
	}
}

let front = null, rear = null;

function enqueue(key)
{
	// Create a new LL node
		let temp = new QNode(key);

		// If queue is empty, then new node is front and rear both
		if (rear == null) {
			front = rear = temp;
			return;
		}

		// Add the new node at the end of queue and change rear
		rear.next = temp;
		rear = temp;
}


function dequeue()
{
	// If queue is empty, return NULL.
		if (front == null)
			return;

		// Store previous front and move front one node ahead
		let temp = front;
		front = front.next;

		// If front becomes NULL, then change rear also as NULL
		if (front == null)
			rear = null;
}


enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
console.log("Queue Front : " + ((front != null) ? (front).key : -1));
console.log("Queue Rear : " + ((rear != null) ? (rear).key : -1) );



