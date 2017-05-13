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

    /** BST 노드를 오름차순(작은값->큰값)으로 방문한다. */
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

    /** 전위순회 : 자식노드보다 노드 자신을 먼저 방문한다. 구조화된 문서 출력시 많이 사용 */
    preOrderTraverse : function( callback ) {
        function innerFunction( node, callback ) {
            if( node !== null ) {
                callback( node.key );
                innerFunction( node.left, callback );
                innerFunction( node.right, callback );
            }
        }
        innerFunction( this.root, callback );
    },
    /** 후위순회 : 자식 노드를 노드 자신보다 먼저 방문한다. 디렉토리와 서브 디렉토리의 파일용량 계산할 때 쓰는 방법이다. */
    postOrderTraverse : function( callback ) {
        function innerFunction( node, callback ) {
            if( node !== null ) {
                innerFunction( node.left, callback);
                innerFunction( node.right, callback);
                callback( node.key );
            }
        }
        innerFunction( this.root, callback );
    },

    min : function() {
        function minFunction( node ) {
            return node.left !== null ? minFunction( node.left ) : node.key;
        }
        return minFunction( this.root );
    },

    minNode : function() {
        function minNodeFunction( node ) {
            return node.left !== null ? minNodeFunction( node.left ) : node;
        }
        return minNodeFunction( this.root );
    },
    max : function() {
        function maxFunction( node ) {
            return node.right !== null ? maxFunction( node.right ) : node.key;
        }
        return maxFunction( this.root );
    },
    maxNode : function() {
        function maxNodeFunction( node ) {
            return node.right !== null ? maxNodeFunction( node.right ) : node;
        }
        return maxNodeFunction( this.root );
    },

    search : function( key ) {
        function searchFunction( node, key ) {
            if( node === null ) return false;

            if( node.key > key ) {
                return searchFunction(node.left, key)
            } else if( node.key < key ) {
                return searchFunction( node.right, key );
            } else {
                return true;
            }
        }
        return searchFunction( this.root, key );
    },
    

    remove: function( key ) {
        function removeFunction( node, key ) {
            if( node === null ) return null;

            if( node.key > key ) {
                node.left = removeFunction( node.left, key );
            } else if( node.key < key ) {
                node.right = removeFunction( node.right, key );
            } else {
                // 리프일때
                if( node.left === null && node.right === null ) {
                    node = null;
                }
                // 두개의 자식이 있을때
                else if( node.left !== null && node.right !== null ) {
                    var m = minNode( node.right );
                    node.key = m.key;
                    node.right = removeFunction( node.right, m.key );
                }
                // 하나의 자식만 있을때
                else {
                    if( node.left === null ) {
                        node = node.right;
                    } else if( node.right === null) {
                        node = node.left;
                    }
                }
            }
            return node;
        }
        removeFunction( this.root, key );
    }
}



var t1 = new BinarySearchTree();
t1.insert(11);
t1.insert(9);
t1.insert(10);
t1.insert(7);
t1.insert(8);
t1.insert(6);
t1.insert(13);
t1.insert(12);
t1.insert(20);
t1.insert(18);
t1.insert(19);