import { useEffect } from 'react'

export default function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [title, description])
}
