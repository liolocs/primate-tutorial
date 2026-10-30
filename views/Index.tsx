import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-3">
      <div className="text-lg">hello world</div>
        <Button variant="default">Press me!</Button>
      </div>
    </main>
  )
}
