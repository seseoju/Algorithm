/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/** 
* f = maxDepth라고 하자.
*                                f(3)                       f(3) = 3
*                                  |
*            -------------------------------------------
*            |                     |                   |
*           f(9)     +           f(20)           +     1    f(9) = 1, f(20) = 1
*            |                     |
*       ------------           ---------
*       |          |           |       |
*    f(null) + f(null)      f(15) +  f(7)  +    1           f(15) = 0, f(7) = 0
*                             |        |
*                      ---------       -----------
*                      |       |       |         |
*                  f(null) + f(null)  f(null) + f(null)        
*/

const maxDepth = (root) => {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
