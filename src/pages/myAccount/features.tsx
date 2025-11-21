import { PiIcon, User } from "lucide-react";
import { Link } from "react-router";

const Features = () => {
  const data = [
    {
      title: "Profile",
      linkTitle: "profile",
      icon: User,
    },
    {
      title: "Date/Time",
      linkTitle: "date-time",
      icon: PiIcon,
    },
    {
      title: "Email",
      linkTitle: "email",
      icon: User,
    },
    {
      title: "Other",
      linkTitle: "other",
      icon: User,
    },
  ];
  return (
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((item) => {
          const Icon = item?.icon;
          return (
            <div>
              <Link
                to={item?.linkTitle || ""}
                className="flex flex-col items-center p-2 py-4 rounded-2xl border text-sm gap-2"
              >
                <Icon className="text-white" />
                <p className="text-white text-center">{item?.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
  );
};

export default Features;
