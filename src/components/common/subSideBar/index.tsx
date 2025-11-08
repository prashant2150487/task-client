import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import { Check, Plus, Star, X } from "lucide-react";
import { useState } from "react";
import Options from "./Options";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/services/axiosInstance";

const SubSidebar = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  
  const handleChange = (name: string) => {
    setName(name);
  };
  const handleCreate = async () => {
    setEditMode(false);
    try {
      const res = await axiosInstance.post("api/v1/workspace/folder", {
        name: name,
        parentId: null,
      });
      console.log(res);
    } catch (err:any) {
      console.log(err.message);
    }
  };
  console.log(name);
  return (
    <div className="min-h-svh bg-[#2A333F] min-w-sm z-10">
      <div className="border-b border-gray-400 p-3 text-white font-bold pl-4">
        HOME
      </div>
      <div>
        <Item className="p-1 mt-2">
          <ItemContent className="">
            <ItemTitle className="text-primary-foreground p-1 pl-5 hover:bg-accent-foreground w-full rounded-md">
              <Star size="15" /> My Work
            </ItemTitle>
            <ItemTitle className="text-primary-foreground p-1 pl-5 hover:bg-accent-foreground w-full rounded-md">
              <Star size="15" /> My Work
            </ItemTitle>
            <ItemTitle className="text-primary-foreground p-1 pl-5 hover:bg-accent-foreground w-full rounded-md">
              <Star size="15" /> My Work
            </ItemTitle>
            <ItemTitle
              className="flex justify-center w-full gap-4 text-white cursor-pointer hover:bg-muted-foreground p-1 rounded-sm"
              onClick={() => setShowOptions(!showOptions)}
            >
              {editMode ? (
                <div className="border w-full px-2 py-1 flex">
                  <input
                    placeholder="enter name"
                    className="w-full"
                    value={name}
                    onChange={(e) => handleChange(e.target.value)}
                  />

                  <Button
                    variant="outline"
                    className="text-black mr-1 cursor-pointer"
                    size="icon-sm"
                    onClick={() => handleCreate()}
                  >
                    <Check />
                  </Button>
                  <Button
                    variant="outline"
                    className="text-black cursor-pointer"
                    size="icon-sm"
                  >
                    <X />
                  </Button>
                </div>
              ) : (
                <>
                  <Plus className="text-white size-5" />
                  <span className="text-base">New</span>
                </>
              )}
            </ItemTitle>
          </ItemContent>
        </Item>
      </div>
      {showOptions && (
        <Options setEditMode={setEditMode} setShowOptions={setShowOptions} />
      )}
    </div>
  );
};

export default SubSidebar;
