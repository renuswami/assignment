package assignment.java.linkedlist;

public class AssingLinkedList {

	Node head;

	public AssingLinkedList() {
		head = null;

	}

	public void insert(int data) {

		Node newNode = new Node(data);

		if (head == null || data < head.data) {

			newNode.next = head;
			head = newNode;

		} else {
			Node current = head;
			while (current.next != null && current.next.data < data) {
				current = current.next;
			}
			newNode.next = current.next;
			current.next = newNode;
		}
	}

	public void printLinkedList() {

		Node current = head;

		while (current != null) {

			System.out.print(current.data + " ");
			current = current.next;
		}
		System.out.println();

	}

}
