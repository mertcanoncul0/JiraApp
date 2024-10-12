"use client"

import { Button } from "@/components/ui/button"
import { useCurrent } from "@/features/auth/service/use-current"
import { useLogout } from "@/features/auth/service/use-logout"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const { data, isLoading } = useCurrent()
  const { mutate } = useLogout()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in")
    }
  }, [data])

  return (
    <div className="flex gap-4 m-4 items-center">
      Only authenticated users can see this page
      <Button
        onClick={() => {
          mutate()
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </Button>
    </div>
  )
}
