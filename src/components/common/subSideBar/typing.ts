export interface FileNode {
  id: number;
  name: string;
  type: string;
  status?: string | null;
  parentId: number | null;
  children: FileNode[];
}
export interface TreeNodeProps {
  node: FileNode;
  depth?: number;
}
