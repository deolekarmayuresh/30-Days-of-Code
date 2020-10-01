// code snippet for Day 15: Linked List

function Solution(){

	this.insert=function(head,data)
    {
        //complete this method

        // Create a new node with the data passed in
        newNode = new Node(data);
        // Set the current node as the passed in head
        currentNode = head;

        // If the current node is not null (it has values), walk the node list
        if (currentNode != null )
        {
            while (currentNode.next != null)
            {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        // Otherwise, if the list is empty, return the created node
        else
        {
            head = newNode;
        }
    
        return head;

    };
	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		