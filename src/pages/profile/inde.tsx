import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axiosInstance from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

type userDataProps = {
  name: string;
  phone: string;
  contact: string;
  avatar: string;
  email: string;
};
interface MyResponseType {
  success: boolean;
  message: string;
  data: userDataProps;
}
const Profile = () => {
  const [userData, setUserData] = useState<userDataProps>({
    name: "",
    phone: "",
    contact: "",
    avatar: "",
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setUserData({
        name: user?.user?.name,
        phone: user?.user?.phone,
        contact: user?.user?.contact,
        avatar: user?.user?.avatar,
        email: user?.user?.email,
      });
    }
  }, [user]);

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData, "formData");

      const res = await axiosInstance.post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Image uploaded successfully");
        setUserData({
          ...userData,
          avatar: res.data.url,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload image");
    }
  };

  const handleSubmit = async () => {
    if (!userData.name && !userData.phone && !userData.contact) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const res = await axiosInstance.put<MyResponseType>(
        "/users/me",
        userData
      );
      toast.success(res.data.message);
      setUserData({ ...userData, ...res.data.data });
      console.log(res, "data");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="text-black flex items-center justify-center min-h-screen bg-[#1C2631] flex-col gap-4">
      <div className="border border-gray-100  p-8 w-full max-w-md flex flex-col gap-6 bg-[#1A222C] text-white shadow-sm">
        <div className="flex w-full max-w-sm items-center gap-6 justify-between ">
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            placeholder="name"
            value={userData?.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="flex w-full max-w-sm items-center gap-6 justify-between ">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="name"
            value={userData?.email}
            className="flex-1 cursor-not-allowed"
            disabled
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="flex w-full max-w-sm items-center gap-6 justify-between">
          <Label htmlFor="phone">Phone</Label>
          <div className="flex-1">
            <Input
              type="number"
              placeholder="Number"
              value={userData?.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex w-full max-w-sm items-center gap-6 justify-between">
          <Label htmlFor="contact">Contact</Label>
          <Textarea
            className="flex-1"
            placeholder="Contact"
            value={userData?.contact}
            onChange={(e) =>
              setUserData({ ...userData, contact: e.target.value })
            }
          />
        </div>
        <div className="flex w-full max-w-sm items-center gap-6 justify-between">
          <Label htmlFor="avatar">Avatar</Label>
          <div className="flex gap-4 " >
            <Avatar>
              <AvatarImage
                src={userData.avatar || "https://via.placeholder.com/40"}
                alt="avatar"
                width={20}
              />
              <AvatarFallback className="text-black">CN</AvatarFallback>
            </Avatar>
            <label className="cursor-pointer relative inline-block">
              <Button className="p-5">Browse</Button>

              <input
                type="file"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
      <Button className="cursor-pointer" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save"}
      </Button>
    </div>
  );
};

export default Profile;
