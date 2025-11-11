import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import { Check, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import Options from "./Options";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/services/axiosInstance";
import TreeNode from "./treeNode";
import type { FileNode } from "./typing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ApiResponse {
  success: boolean;
  data: FileNode[];
}

const SubSidebar = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [fileData, setFileData] = useState<ApiResponse>({
    success: false,
    data: [],
  });
  const [types, setTypes] = useState<"folder" | "file">("folder");
  const [currentParentId, setCurrentParentId] = useState<number | null>(null);

  const handleChange = (name: string) => {
    setName(name);
  };
  const handleCreate = async () => {
    setEditMode(false);
    try {
      const res = await axiosInstance.post(
        types === "folder" ? "/workspace/folder" : "/workspace/file",
        {
          name: name,
          parentId: currentParentId || null,
        }
      );
      if (res.data.success) {
        getFileData();
      }
      setName("");
      console.log(res);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  async function getFileData() {
    try {
      const res = await axiosInstance.get("/workspace/tree");
      console.log(res);
      setFileData(res.data);
    } catch (err: any) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    getFileData();
  }, []);
  const handleCancel = () => {
    setEditMode(false);
    setName("");
    setShowOptions(false);
  };
  console.log(currentParentId, "current");

  return (
    <div className="min-h-svh bg-[#2A333F] min-w-sm z-10">
      <div className="border-b border-gray-400 p-3 text-white font-bold pl-4">
        HOME
      </div>
      <div>
        <Item className="p-1 mt-2">
          <ItemContent className="">
            <div className="mt-1 w-full">
              {fileData?.data?.map((item) => (
                <TreeNode
                  key={item.id}
                  node={item}
                  setShowOptions={setShowOptions}
                  setCurrentParentId={setCurrentParentId}
                />
              ))}
            </div>

            <ItemTitle className="flex justify-center w-full gap-4 text-white cursor-pointer hover:bg-muted-foreground p-1 rounded-sm">
              {editMode ? (
                <div className="border border-gray-700 w-full px-2 py-1 flex rounded-sm">
                  <input
                    placeholder="enter name"
                    className="w-full border-none focus:border-0 focus:outline-none focus:ring-0 "
                    type="text"
                    value={name}
                    onChange={(e) => handleChange(e.target.value)}
                  />

                  <Button
                    
                    className="mr-1 cursor-pointer bg-accent-foreground hover:bg-accent-foreground text-white"
                    size="icon-sm"
                    onClick={() => handleCreate()}
                  >
                    <Check />
                  </Button>
                  <Button
                    
                    className="text-white  cursor-pointer bg-accent-foreground hover:bg-accent-foreground "
                    size="icon-sm"
                    onClick={() => handleCancel()}
                  >
                    <X />
                  </Button>
                </div>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    className="p-0 "
                    onClick={() => {
                      setShowOptions(false);
                      setCurrentParentId(null);
                      setShowOptions(true);
                    }}
                  >
                    <Button className="w-full">
                      <Plus className="text-white size-5" />
                      <span className="text-base">New</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="min-w-sm bg-muted-foreground text-white"
                    side="right"
                    sideOffset={10}
                  >
                    <Options
                      setEditMode={setEditMode}
                      setShowOptions={setShowOptions}
                      setTypes={setTypes}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </ItemTitle>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
};

export default SubSidebar;
