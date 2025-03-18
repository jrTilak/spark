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

export function FavouriteTopicsModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [showBlankPage, setShowBlankPage] = useState(false)
  const [selectedTopics, setSelectedTopics] = useState<number[]>([1]) // Initialize with the ID of "General"

  const topics = [
    { id: 1, icon: "📰", label: "General" },
    { id: 2, icon: "🌍", label: "World" },
    { id: 3, icon: "💼", label: "Business" },
    { id: 4, icon: "⚖️", label: "Politics" },
    { id: 5, icon: "🔬", label: "Science" },
    { id: 6, icon: "⚕️", label: "Health" },
    { id: 7, icon: "🎭", label: "Entertainment" },
    { id: 8, icon: "⚽", label: "Sports" },
    { id: 9, icon: "💻", label: "Technology" },
    { id: 10, icon: "🌦️", label: "Weather" },
    { id: 11, icon: "🎨", label: "Art" },
    { id: 12, icon: "🎶", label: "Music" },
    { id: 13, icon: "📚", label: "Books" },
    { id: 14, icon: "🎥", label: "Movies" },
    { id: 15, icon: "📺", label: "TV Shows" },
    { id: 16, icon: "🎮", label: "Gaming" },
    { id: 17, icon: "🚀", label: "Space" },
    { id: 18, icon: "🏛️", label: "History" },
    { id: 19, icon: "📖", label: "Education" },
    { id: 20, icon: "💡", label: "Innovation" },
    { id: 21, icon: "🧘", label: "Wellness" },
    { id: 22, icon: "🏋️", label: "Fitness" },
    { id: 23, icon: "🍽️", label: "Food" },
    { id: 24, icon: "🍷", label: "Beverages" },
    { id: 25, icon: "✈️", label: "Travel" },
    { id: 26, icon: "🚗", label: "Automotive" },
    { id: 27, icon: "🏠", label: "Home & Garden" },
    { id: 28, icon: "👗", label: "Fashion" },
    { id: 29, icon: "🛍️", label: "Shopping" },
    { id: 30, icon: "💰", label: "Finance" },
    { id: 31, icon: "📊", label: "Economy" },
    { id: 32, icon: "👨‍💻", label: "Programming" },
    { id: 33, icon: "🤖", label: "AI & Robotics" },
    { id: 34, icon: "🔗", label: "Blockchain" },
    { id: 35, icon: "📈", label: "Investing" },
    { id: 36, icon: "💳", label: "Cryptocurrency" },
    { id: 37, icon: "🛡️", label: "Cybersecurity" },
  ]

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
    setSelectedTopics((prev) => {
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
              <DialogTitle>Choose Your Favorite Topics</DialogTitle>
              <DialogDescription>
                Select topics you love and we'll recommend better news taylored to your interests.
              </DialogDescription>
            </DialogHeader>
            <div className="px-4 sm:px-6 py-4 flex-1 overflow-hidden">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pr-1 overflow-y-auto"
                style={{ maxHeight: "300px" }}
              >
                {topics.map((topic) => {
                  const isSelected = selectedTopics.includes(topic.id)
                  return (
                    <div
                      key={topic.id}
                      onClick={() => handleToggleTopic(topic.id)}
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
                        <span className="text-lg">{topic.icon}</span>
                        <span className="text-sm font-medium">{topic.label}</span>
                        {isSelected && <Check className="h-5 w-5 text-primary ml-auto" />}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                {selectedTopics.length === 0 ? (
                  <p>No topics selected. Please select at least one topic.</p>
                ) : (
                  <p>Selected topics: {selectedTopics.length}</p>
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
                  disabled={selectedTopics.length === 0}
                >
                  Next
                </Button>
              </div>
            </DialogFooter>
          </div>
        ) : (
          <div className="min-h-[300px] flex items-center justify-center p-4 sm:p-6">
            <Button variant="outline" onClick={handleReset}>
              Back to Topics
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

