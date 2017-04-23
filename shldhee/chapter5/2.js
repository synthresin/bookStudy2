this.insert = function(position, element) {
	if (position >= 0 && position <= length) {

		var node = new Node(element),
		current = head,
		previous,
		index = 0;

		if (position === 0) {
			node.next = current;
			head = node;
		} else {
			while (index++ < position) {
				previous = current;
				current = current.next;
			}
			node.next = current;
			previous.next = node;
		}

		length++;

		return true;
	} else {
		return false;
	}
}
