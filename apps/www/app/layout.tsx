"use client"

import "@/styles/globals.css"
import { Metadata } from "next"
import { GroundControlClient } from "@groundcontrolsh/groundcontrol"
import { GroundControlProvider } from "@groundcontrolsh/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const client = new GroundControlClient({
    projectId: "P0J3GPCGANJSV5MV",
    apiKey: "gcp_6N47wSF9uNLgSFG47R0qMtbCQGCJx22Xmb6e",
  })

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col pt-10">
              <GroundControlProvider client={client}>
                <div className="flex-1">{children}</div>
              </GroundControlProvider>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <ThemeSwitcher />
          <Analytics />
          <NewYorkToaster />
          <DefaultToaster />
        </body>
      </html>
    </>
  )
}
