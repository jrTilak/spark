"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function LoginModal() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showGoogleDialog, setShowGoogleDialog] = useState(true);

  const handleGoogleAuth = () => {
    setIsAuthenticating(true);
    // Simulate authentication process
    setTimeout(() => {
      setIsAuthenticating(false);
      setShowGoogleDialog(false);
      // After authentication, dialog closes
    }, 1500);
  };

  return (
    <>
      <Dialog open={showGoogleDialog} onOpenChange={setShowGoogleDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign in with Google</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex flex-col gap-2 sm:flex-col pt-4">
            <div className="py-2">
              <p className="text-center text-sm text-muted-foreground">
                Click the button below to sign in with your Google account
              </p>
            </div>
            <Button
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleAuth}
              disabled={isAuthenticating}
            >
              {isAuthenticating ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
              ) : (
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google Logo"
                  width="16"
                  height="16"
                />
              )}
              {isAuthenticating ? "Authenticating..." : "Continue with Google"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
