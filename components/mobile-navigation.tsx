"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, Menu, User } from "lucide-react"

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="dashboard">
                    <AccordionTrigger>Dashboard</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Overview
                        </MobileNavLink>
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Analytics
                        </MobileNavLink>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="employees">
                    <AccordionTrigger>Employees</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Directory
                        </MobileNavLink>
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Departments
                        </MobileNavLink>
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Onboarding
                        </MobileNavLink>
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Performance
                        </MobileNavLink>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="reports">
                    <AccordionTrigger>Reports</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Monthly Reports
                        </MobileNavLink>
                        <MobileNavLink href="/" onClick={() => setOpen(false)}>
                          Annual Reviews
                        </MobileNavLink>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-4 border-t pt-4">
                  <MobileNavLink href="/" onClick={() => setOpen(false)}>
                    Settings
                  </MobileNavLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">ED</span>
            </div>
            <span className="text-xl font-bold">EmployeeHub</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link href={href} className="block rounded-md px-3 py-2 text-sm hover:bg-accent" onClick={onClick}>
      {children}
    </Link>
  )
}
