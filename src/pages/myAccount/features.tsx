import { PiIcon } from "lucide-react";
import { Link } from "react-router";



const Features = () => {
  const data = [
    {
      title: "profile",
      linkTitle: "profile",
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
            <Link to={item?.linkTitle} className="flex flex-col items-center bg-gray-400 p-4 rounded-2xl">
              <PiIcon />
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
