function BinarySearchTree() {
    this.Node = function( key ) {
        this.key = key;
        this.left = null;
        this.right = null;
    }   
    this.root = null;
}

BinarySearchTree.prototype = {
    constructor : BinarySearchTree,

    insert : function( key ) {
        var newNode = new this.Node( key );
        if( this.root === null ) {
            this.root = newNode;
        } else {
            this.insertNode( this.root, newNode );
        }
    },

    insertNode : function( node, newNode ) {
        // 중복된 부분을 하나로 만듦.
        var leftOrRight = newNode.key < node.key? 'left' : 'right';
        
        if( node[leftOrRight] === null ) {
            node[leftOrRight] = newNode;
        } else {
            this.insertNode( node[leftOrRight], newNode );
        }  

        // if( newNode.key < node.key ) {
        //     if( node.left === null ) {
        //         node.left = newNode;
        //     } else {
        //         insertNode( node.left, newNode );
        //     }
        // } else {
        //     if( node.right === null ) {
        //         node.right = newNode;
        //     } else {
        //         insertNode( node.right, newNode );
        //     }
        // }
       
    },

    search : function( key ) {},

    inOrderTraverse : function(callback) {
        this.inOrderTraverseNode( this.root, callback );
    },

    inOrderTraverseNode : function( node, callback ) {
        if( node !== null ) { // <== base case : 재귀호출이 중단되는 시점
            this.inOrderTraverseNode( node.left, callback );
            callback( node.key );
            this.inOrderTraverseNode( node.right, callback );
        }
    },


    preOrderTraverse : function() {},

    postOrderTraverse : function() {},

    min : function() {},

    max : function() {},

    remove: function() {}
}



var t1 = new BinarySearchTree();
t1.insert(11);
t1.insert(9);
t1.insert(10);
t1.insert(7);
t1.insert(8);
t1.insert(13);
t1.insert(12);
t1.insert(20);
t1.insert(18);
t1.insert(19);