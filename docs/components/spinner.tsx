import { Loader2Icon } from "lucide-react"

export const Spinner = () => {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={"size-4 animate-spin"}
    />
  )
}