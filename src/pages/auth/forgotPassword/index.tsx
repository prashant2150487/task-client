import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";

export const ForgotPasswordView = () => {
  const [email, setEmail] = useState("");

  const handleSendLink = () => {
    if (!email) return alert("Please enter your email.");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <button
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to login
        </button>
        <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
        <CardDescription>
          Enter your email address and we’ll send you a verification code.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="forgot-email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="forgot-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <Button className="w-full" size="lg" onClick={handleSendLink}>
          Send reset code
        </Button>
      </CardContent>
    </Card>
  );
};
