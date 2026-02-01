

export const problemData = {
  id: "daily-240",
  title: "Invert Binary Tree",
  difficulty: "Medium",
  description: `Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]`,
  starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // Write your solution here...
    
};`,
  stats: {
    attempts: "14.2k",
    successRate: "68.4%",
    avgTime: "12m 30s",
  },
  hints: [
    "Think recursively. Swapping the children of a node effectively inverts that subtree.",
    "The base case is when the node is null.",
  ]
};

export const leaderboard = [
  { rank: 1, user: "AlexDev", score: 98, time: "2m 10s" },
  { rank: 2, user: "SarahCodes", score: 98, time: "2m 45s" },
  { rank: 3, user: "Jia_Li", score: 95, time: "3m 12s" },
  { rank: 4, user: "DevPatel", score: 92, time: "4m 05s" },
];