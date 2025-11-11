import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

const Options = ({
  setEditMode,
  setShowOptions,
  setTypes,
}: {
  setEditMode: (value: boolean) => void;
  setShowOptions: (value: boolean) => void;
  setTypes: (value: string) => void;
}) => {
  const handleClick = (type: string) => {
    setEditMode(true);
    setShowOptions(false);
    setTypes(type);
  };

  return (
    <>
      <DropdownMenuItem
        className="cursor-pointer w-full hover:bg-gray-600 p-1"
        onClick={() => handleClick("folder")}
      >
        Create Folder
      </DropdownMenuItem>
      <DropdownMenuItem
        className="cursor-pointer w-full p-1 hover:bg-gray-600"
        onClick={() => handleClick("file")}
      >
        Create File
      </DropdownMenuItem>
    </>
  );
};

export default Options;
