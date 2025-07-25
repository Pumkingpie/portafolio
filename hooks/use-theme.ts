"use client"

import { useEffect, useState } from "react"
import { useLocalStorage } from "./use-local-storage"

type Theme = "dark" | "light" | "system"

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "system")
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const updateTheme = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light")
      } else {
        setResolvedTheme(theme)
      }
    }

    updateTheme()
    mediaQuery.addEventListener("change", updateTheme)

    return () => mediaQuery.removeEventListener("change", updateTheme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  return {
    theme,
    setTheme,
    resolvedTheme,
  }
}
