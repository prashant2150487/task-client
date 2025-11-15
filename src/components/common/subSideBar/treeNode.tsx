import {
  File,
  Folder,
  ChevronRight,
  ChevronDown,
  Plus,
  Ellipsis,
} from "lucide-react";
import { useState } from "react";
import { ItemTitle } from "@/components/ui/item";
import type { TreeNodeProps } from "./typing";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const TreeNode = ({
  node,
  depth = 0,
  setShowOptions ,
  setCurrentParentId,
  newButtonRef,
}: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFolder = node.type === "folder";

  const toggleExpand = () => {
    if (isFolder) setIsExpanded((prev) => !prev);
  };

  return (
    <div style={{ paddingLeft: `${depth * 12}px` }}>
      <ItemTitle
        className="flex items-center w-full gap-2 text-primary-foreground px-2 hover:bg-accent-foreground rounded-md cursor-pointer"
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

        <span className="truncate capitalize">{node.name}</span>
        <span className="gap-2 ml-auto flex">
          <ButtonGroup>
            <Button
              size="icon"
              className="bg-transparent cursor-pointer hover:bg-muted-foreground"
            >
              <Ellipsis size={17} className="text-gray-300" />
            </Button>
            <Button
              size="icon"
              className="bg-transparent cursor-pointer hover:bg-muted-foreground"
              onClick={(e) => {
                setCurrentParentId(node?.id);
                setShowNewDialog(true);
                newButtonRef.current?.click()
              }}
            >
              <Plus size={17} className="text-gray-300" />
            </Button>
          </ButtonGroup>
        </span>
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
