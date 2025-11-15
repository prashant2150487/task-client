import { PiIcon } from "lucide-react";

const Features = () => {
  const data = [
    {
      title: "profile",
    },
    {
      title: "date/time",
    },
    {
      title: "email",
    },
    {
      title: "",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => {
          return (
            <div className="flex flex-col items-center bg-gray-400 p-4 rounded-2xl">
              <PiIcon />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
