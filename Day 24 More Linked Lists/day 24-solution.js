// code snippet for Day 24: More Linked Lists

function Solution(){

    this.removeDuplicates=function(head){
      //Write your code here
      
    //   if (typeof theactualHead === 'undefined') {
    //         theactualHead = head;
    //    }

    let unique = []

      while(head) {
        let exist = unique.includes(head.data)
        
        if(!exist) unique.push(head.data)

        head = head.next
      }
      
      console.log(unique.join(' '))
    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
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
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		