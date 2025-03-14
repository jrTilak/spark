"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "@tanstack/react-router"

// Define interface for Google account
interface GoogleAccount {
  id: number
  name: string
  email: string
  avatar: string
}

export function LoginModel() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [showGoogleDialog, setShowGoogleDialog] = useState(true)
  const [showAccountSelection, setShowAccountSelection] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<GoogleAccount | null>(null)

  // Sample Google accounts
  const googleAccounts: GoogleAccount[] = [
    { id: 1, name: "John Doe", email: "john.doe@gmail.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Jane Smith", email: "jane.smith@gmail.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Alex Johnson", email: "alex.johnson@gmail.com", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const handleGoogleAuth = () => {
    setShowGoogleDialog(false)
    setShowAccountSelection(true)
  }

  const handleAccountSelect = (account: GoogleAccount) => {
    setSelectedAccount(account)
    setIsAuthenticating(true)
    setShowAccountSelection(false)

    // Simulate authentication process
    setTimeout(() => {
      setIsAuthenticated(true)
      setIsAuthenticating(false)
      setShowWelcomeDialog(true)
    }, 1500)
  }

  const handleAddAccount = () => {
    // In a real implementation, this would redirect to Google's add account flow
    // For this demo, we'll just go back to the initial Google dialog
    setShowAccountSelection(false)
    setShowGoogleDialog(true)
  }

  const handleContinue = () => {
    setShowWelcomeDialog(false)
    // Navigate to favorite-topics using TanStack Router
    navigate({to:"/favourite-topics" })
  }

  return (
    <>
      {/* Initial Google Sign-in Dialog */}
      <Dialog open={showGoogleDialog} onOpenChange={setShowGoogleDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign in with Google</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex flex-col gap-2 sm:flex-col pt-4">
          <div className="pb-4">
            <p className="text-center text-sm text-muted-foreground">
              Click the button below to sign in with your Google account
            </p>
          </div>
            <Button className="w-full flex items-center justify-center gap-2" onClick={handleGoogleAuth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chrome"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="12" y2="8" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
              </svg>
              Continue with Google
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Account Selection Dialog */}
      <Dialog open={showAccountSelection} onOpenChange={setShowAccountSelection}>
        <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden">
          <div className="p-6 pb-2">
            <h2 className="text-xl font-semibold mb-1">Choose an account</h2>
            <p className="text-sm text-muted-foreground">to continue to the application</p>
          </div>

          <div className="px-2">
            {googleAccounts.map((account) => (
              <button
                key={account.id}
                className="w-full text-left p-4 hover:bg-gray-100 rounded-md flex items-center gap-4 transition-colors"
                onClick={() => handleAccountSelect(account)}
              >
                <Avatar>
                  <AvatarImage src={account.avatar} alt={account.name} />
                  <AvatarFallback>{account.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{account.name}</p>
                  <p className="text-sm text-muted-foreground">{account.email}</p>
                </div>
              </button>
            ))}

            <div className="border-t my-2"></div>

            <button
              className="w-full text-left p-4 hover:bg-gray-100 rounded-md flex items-center gap-4 transition-colors"
              onClick={handleAddAccount}
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <p className="font-medium">Use another account</p>
            </button>
          </div>

          <div className="p-4 bg-gray-50 mt-2 text-xs text-muted-foreground">
            <p>To continue, Google will share your name, email address, and profile picture with this app.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Loading Dialog */}
      <Dialog open={isAuthenticating}>
        <DialogContent className="sm:max-w-[300px]">
          <div className="py-8 flex flex-col items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mb-4"></div>
            <p>Signing in...</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Welcome Dialog */}
      <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Hello{selectedAccount ? `, ${selectedAccount.name}` : ""}!</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Welcome to your account. You can now access all features.</p>
            {selectedAccount && (
              <div className="mt-2 p-3 bg-gray-50 rounded-md flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={selectedAccount.avatar} alt={selectedAccount.name} />
                  <AvatarFallback>{selectedAccount.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedAccount.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedAccount.email}</p>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleContinue}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

