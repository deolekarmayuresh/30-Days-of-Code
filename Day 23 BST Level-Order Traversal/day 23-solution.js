// code snippet for Day 23: BST Level-Order Traversal

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        if (root){
            let queue = [root];

            while (queue.length) {
                let tree = queue.shift();
                process.stdout.write(tree.data + ' ');

                if (tree.left){
                    queue.push(tree.left);
                }
                if (tree.right){
                    queue.push(tree.right);
                }
            }
            return queue;
        }   
