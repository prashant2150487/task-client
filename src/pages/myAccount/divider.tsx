import { Separator } from "@/components/ui/separator";

const Divider = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 w-full max-w-2xl mx-auto">
      <p className="whitespace-nowrap text-sm font-medium">{title}</p>
      
    </div>
  );
};

export default Divider;
