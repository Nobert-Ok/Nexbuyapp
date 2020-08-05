class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linkedlist:
    def __init__(self):
        self.head = None

    def append(self, data):
        newnode = Node(data)
        if self.head is None:
            self.head = newnode
            return
        
        lastnode = self.head
        while lastnode.next is not None:
            lastnode = lastnode.next
        lastnode.next = newnode

    def printll(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next
    
l = Linkedlist()
l.append("a")
l.append("a")
l.append("a")
l.append("a")
l.printll()




