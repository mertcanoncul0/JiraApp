import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex gap-4 m-4 items-center">
      <Input placeholder="Input" />
      <Button>Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="teritary">Teritary</Button>
      <Button variant="secondary">Button</Button>
    </div>
  )
}
