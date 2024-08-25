class ListNode<T> {
    public next: ListNode<T> | null;
    constructor(public value: T) {
        this.next = null;
    }
}

class LinkedList<T> {
    public head: ListNode<T> | null;
    constructor() {
        this.head = null;
    }

    reverse(): LinkedList<T> {
        if (this.head === null) {
            return this;
        }

        let prev: ListNode<T> | null = null;
        let next: ListNode<T> | null = this.head!.next;

        while (this.head !== null) {
            this.head!.next = prev;
            prev = this.head;
            this.head = next;
            if (next !== null) {
                next = this.head!.next;
            }
        }
        this.head = prev;
        return this;
    }
}

const newNode = new ListNode<number>(5);

const anotherNode = new ListNode<number>(35);
newNode.next = anotherNode;
console.log(newNode);
newNode.next.next = new ListNode<number>(10);

const newLinkedList = new LinkedList<number>();
newLinkedList.head = newNode;
// console.log(newLinkedList);
// console.log(newLinkedList.reverse());

const anotherList = new LinkedList<number>();
// console.log(anotherList.reverse());
