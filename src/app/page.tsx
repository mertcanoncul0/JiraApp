"use client"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      Hello World!
      <Button
        onClick={() => {
          alert("hello")
        }}
      >
        Click me
      </Button>
    </div>
  )
}
