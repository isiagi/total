"use client";

import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

function TreeChart() {
  return (
    <div>
      <Tree label={<div>Root</div>}>
        <TreeNode label={<div>Child 1</div>}>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
        <TreeNode label={<div>Child 1</div>}>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
      </Tree>
    </div>
  );
}

export default TreeChart;
