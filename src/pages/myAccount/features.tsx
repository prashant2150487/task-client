import { PiIcon } from "lucide-react";
import { Link } from "react-router";
import profileImg from "../../assets/images/profileImage.png";

const Features = () => {
  const data = [
    {
      title: "profile",
      linkTitle: "profile",
      image: profileImg,
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
            <div>
              <Link
                to={item?.linkTitle}
                className="flex flex-col items-center p-4 rounded-2xl border"
              >
                <img src={item.image} alt="" width={50} />
              </Link>
              <p className="text-white text-center">{item?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
