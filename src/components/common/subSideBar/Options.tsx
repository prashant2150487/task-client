import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

const Options = ({
  setEditMode,
  setShowOptions,
}: {
  setEditMode: (value: boolean) => void;
  setShowOptions: (value: boolean) => void;
}) => {
  const handleClick = () => {
    setEditMode(true);
    setShowOptions(false);
  };

  return (
    <div className="bg-gray-700 absolute w-sm left-96 top-50 rounded-md">
      <Item className="p-2">
        <ItemContent className="p-0">
          <ItemTitle
            className="cursor-pointer w-full hover:bg-gray-600 p-1"
            onClick={() => handleClick()}
          >
            Create Folder
          </ItemTitle>
          <ItemTitle
            className="cursor-pointer w-full p-1 hover:bg-gray-600"
            onClick={() => setEditMode(false)}
          >
            Create{" "}
          </ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
};

export default Options;
