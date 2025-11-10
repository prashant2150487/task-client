import { File, Folder, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ItemTitle } from "@/components/ui/item";

interface FileNode {
  id: number;
  name: string;
  type: string;
  status?: string | null;
  parentId: number | null;
  children: FileNode[];
}

interface TreeNodeProps {
  node: FileNode;
  depth?: number;
}

const TreeNode = ({ node, depth = 0 }: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFolder = node.type === "folder";

  const toggleExpand = () => {
    if (isFolder) setIsExpanded((prev) => !prev);
  };

  return (
    <div style={{ paddingLeft: `${depth * 12}px` }}>
      <ItemTitle
        className="flex items-center gap-2 text-primary-foreground py-1 pl-2 pr-1 hover:bg-accent-foreground rounded-md cursor-pointer"
        onClick={toggleExpand}
      >
        {isFolder && (
          <>
            {isExpanded ? (
              <ChevronDown size={14} className="text-gray-300" />
            ) : (
              <ChevronRight size={14} className="text-gray-300" />
            )}
          </>
        )}
        {!isFolder && <div className="w-4" />} 

        {isFolder ? (
          <Folder size={15} className="text-blue-400" />
        ) : (
          <File size={15} className="text-gray-300" />
        )}

        <span className="truncate">{node.name}</span>
      </ItemTitle>

      {isFolder && isExpanded && node.children?.length > 0 && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
