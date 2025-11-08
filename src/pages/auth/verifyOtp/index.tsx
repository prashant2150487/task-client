import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const VerifyCodeView = ({ email, onBack, onVerify }: any) => {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    if (!code || code.length !== 6) {
      alert("Please enter a valid 6-digit code.");
      return;
    }
    onVerify(code);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
        <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
        <CardDescription>
          We’ve sent a 6-digit code to {email || "your email"}.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Verification Code</Label>
          <Input
            id="code"
            type="text"
            placeholder="000000"
            maxLength={6}
            className="text-center text-2xl tracking-widest"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <Button className="w-full" size="lg" onClick={handleVerify}>
          Verify Code
        </Button>
        <p className="text-center text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <button className="text-blue-600 hover:underline font-medium">
            Resend
          </button>
        </p>
      </CardContent>
    </Card>
  );
};

export default VerifyCodeView;
