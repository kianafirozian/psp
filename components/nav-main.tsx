"use client"

import Link from "next/link"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function NavMain({
  className,
  items,
}: {
  items: {
    title: string
    link: string
    icon: LucideIcon
    isActive?: boolean
  }[]
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          <li>
            <div className="relative flex items-center">
              <Link
                href={item.link}
                className="min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <div className="flex flex-1 overflow-hidden">
                  <div className="line-clamp-1 pr-6">{item.title}</div>
                </div>
              </Link>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute right-1 h-6 w-6 rounded-md p-0 ring-ring transition-all focus-visible:ring-2 data-[state=open]:rotate-90"
                >
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </li>
        </Collapsible>
      ))}
    </ul>
  )
}

