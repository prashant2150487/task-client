import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const SuccessView = ({ onBackToLogin }: any) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Password reset successful</CardTitle>
        <CardDescription>
          Your password has been successfully reset. You can now sign in with your new password.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button className="w-full" size="lg" onClick={onBackToLogin}>
          Back to Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default SuccessView;
