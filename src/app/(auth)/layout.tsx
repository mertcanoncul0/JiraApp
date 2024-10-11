"use client"

import { LayoutProps } from "@/app/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AuthLayout({ children }: LayoutProps) {
  const pathname = usePathname()
  const isSignIn = pathname === "/sign-in"

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center pb-4 md:pb-14">
          <Image src="/logo.svg" alt="logo" width={152} height={56} />

          <Button variant="secondary" asChild>
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>
        <div className="grid place-items-center">{children}</div>
      </div>
    </main>
  )
}
