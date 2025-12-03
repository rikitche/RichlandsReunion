"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useLogin";
type LoginFormProps = {
  onSubmit?: () => void;
};
export function LoginForm({ onSubmit }: LoginFormProps) {
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = await login(email, password);

    if (result?.error) {
      alert(result.error.message);
    } else if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <section className="py-16 px-4 bg-charcoal">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-rich-gold text-balance">
          Login
        </h2>

        <Card className="p-8 bg-charcoal border-sage/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-rich-gold">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                className="text-white"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-rich-gold">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                className="text-white"
                type="password"
                required
              />
            </div>

            <Button
              className="w-full bg-sage hover:bg-sage/90 text-white cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
