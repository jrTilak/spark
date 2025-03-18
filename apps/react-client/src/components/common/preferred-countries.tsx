"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"

export function PreferredCountries() {
  const [isOpen, setIsOpen] = useState(true)
  const [showBlankPage, setShowBlankPage] = useState(false)
  const [SelectedCountries, setSelectedCountries] = useState<number[]>([1]) // Initialize with the ID of "General"

  const countries = [
    { id: 1, flag: "🇺🇸", name: "United States" },
    { id: 2, flag: "🇨🇦", name: "Canada" },
    { id: 3, flag: "🇬🇧", name: "United Kingdom" },
    { id: 4, flag: "🇦🇺", name: "Australia" },
    { id: 5, flag: "🇮🇳", name: "India" },
    { id: 6, flag: "🇨🇳", name: "China" },
    { id: 7, flag: "🇯🇵", name: "Japan" },
    { id: 8, flag: "🇩🇪", name: "Germany" },
    { id: 9, flag: "🇫🇷", name: "France" },
    { id: 10, flag: "🇮🇹", name: "Italy" },
    { id: 11, flag: "🇪🇸", name: "Spain" },
    { id: 12, flag: "🇧🇷", name: "Brazil" },
    { id: 13, flag: "🇲🇽", name: "Mexico" },
    { id: 14, flag: "🇷🇺", name: "Russia" },
    { id: 15, flag: "🇿🇦", name: "South Africa" },
    { id: 16, flag: "🇰🇷", name: "South Korea" },
    { id: 17, flag: "🇸🇦", name: "Saudi Arabia" },
    { id: 18, flag: "🇦🇷", name: "Argentina" },
    { id: 19, flag: "🇹🇷", name: "Turkey" },
    { id: 20, flag: "🇮🇩", name: "Indonesia" },
    { id: 21, flag: "🇳🇬", name: "Nigeria" },
    { id: 22, flag: "🇵🇰", name: "Pakistan" },
    { id: 23, flag: "🇵🇭", name: "Philippines" },
    { id: 24, flag: "🇳🇱", name: "Netherlands" },
    { id: 25, flag: "🇸🇬", name: "Singapore" },
    { id: 26, flag: "🇨🇭", name: "Switzerland" },
    { id: 27, flag: "🇧🇩", name: "Bangladesh" },
    { id: 28, flag: "🇲🇾", name: "Malaysia" },
    { id: 29, flag: "🇸🇪", name: "Sweden" },
    { id: 30, flag: "🇵🇱", name: "Poland" },
    { id: 31, flag: "🇨🇴", name: "Colombia" },
    { id: 32, flag: "🇹🇭", name: "Thailand" },
    { id: 33, flag: "🇻🇳", name: "Vietnam" },
    { id: 34, flag: "🇦🇪", name: "United Arab Emirates" },
    { id: 35, flag: "🇪🇬", name: "Egypt" },
    { id: 36, flag: "🇳🇴", name: "Norway" },
    { id: 37, flag: "🇮🇱", name: "Israel" },
    { id: 38, flag: "🇬🇷", name: "Greece" },
    { id: 39, flag: "🇵🇹", name: "Portugal" },
    { id: 40, flag: "🇮🇷", name: "Iran" },
    { id: 41, flag: "🇺🇦", name: "Ukraine" },
    { id: 42, flag: "🇨🇿", name: "Czech Republic" },
    { id: 43, flag: "🇷🇴", name: "Romania" },
    { id: 44, flag: "🇭🇺", name: "Hungary" },
    { id: 45, flag: "🇧🇪", name: "Belgium" },
    { id: 46, flag: "🇩🇰", name: "Denmark" },
    { id: 47, flag: "🇫🇮", name: "Finland" },
    { id: 48, flag: "🇮🇪", name: "Ireland" },
    { id: 49, flag: "🇨🇱", name: "Chile" },
    { id: 50, flag: "🇳🇿", name: "New Zealand" },
    { id: 51, flag: "🇵🇪", name: "Peru" },
    { id: 52, flag: "🇪🇨", name: "Ecuador" },
    { id: 53, flag: "🇻🇪", name: "Venezuela" },
    { id: 54, flag: "🇦🇹", name: "Austria" },
    { id: 55, flag: "🇰🇿", name: "Kazakhstan" },
    { id: 56, flag: "🇿🇲", name: "Zambia" },
    { id: 57, flag: "🇿🇼", name: "Zimbabwe" },
    { id: 58, flag: "🇷🇸", name: "Serbia" },
    { id: 59, flag: "🇭🇷", name: "Croatia" },
    { id: 60, flag: "🇱🇰", name: "Sri Lanka" },
  ];

  // Ensure dialog opens when component mounts
  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleSkip = () => {
    setShowBlankPage(true)
  }

  const handleNext = () => {
    setShowBlankPage(true)
  }

  const handleReset = () => {
    setShowBlankPage(false)
  }

  const handleToggleTopic = (topicId: number) => {
    setSelectedCountries((prev) => {
      // If topic is already selected, remove it
      if (prev.includes(topicId)) {
        return prev.filter((id) => id !== topicId)
      }
      // Otherwise add it to the selection
      else {
        return [...prev, topicId]
      }
    })
  }

  // Allow the dialog to be closed
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Treat closing as a skip
      setShowBlankPage(true)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowBlankPage(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] flex flex-col">
        {!showBlankPage ? (
          <div className="flex flex-col h-full">
            <div className="absolute right-4 top-4 z-10">
              <button
                className="flex items-center justify-center h-6 w-6 rounded-full bg-muted cursor-pointer"
                onClick={handleClose}
                aria-label="Close"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-foreground"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
              <DialogTitle>Preferred Countries</DialogTitle>
              <DialogDescription>
                Choose the countries you are interested in, and we will keep you updated with the latest news from those countries.
              </DialogDescription>
            </DialogHeader>
            <div className="px-4 sm:px-6 py-4 flex-1 overflow-hidden">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pr-1 overflow-y-auto"
                style={{ maxHeight: "300px" }}
              >
                {countries.map((country) => {
                  const isSelected = SelectedCountries.includes(country.id)
                  return (
                    <div
                      key={country.id}
                      onClick={() => handleToggleTopic(country.id)}
                      className={`
                        relative rounded-md border-2 p-2 cursor-pointer transition-all duration-200
                        ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-sm"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm font-medium">{country.name}</span>
                        {isSelected && <Check className="h-5 w-5 text-primary ml-auto" />}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                {SelectedCountries.length === 0 ? (
                  <p>No counties selected. Please select at least one region.</p>
                ) : (
                  <p>Selected countries: {SelectedCountries.length}</p>
                )}
              </div>
            </div>
            <DialogFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t">
              <div className="flex flex-col sm:flex-row gap-2 sm:justify-between w-full">
                <Button variant="outline" className="w-full sm:w-auto" onClick={handleSkip}>
                  Skip
                </Button>
                <Button
                  type="button"
                  className="w-full sm:w-auto"
                  onClick={handleNext}
                  disabled={SelectedCountries.length === 0}
                >
                  Next
                </Button>
              </div>
            </DialogFooter>
          </div>
        ) : (
          <div className="min-h-[300px] flex items-center justify-center p-4 sm:p-6">
            <Button variant="outline" onClick={handleReset}>
              Back to Countries List
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

