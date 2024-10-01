import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ModernNewsletter() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Stay Updated</h2>
        <p className="text-sm text-muted-foreground">Get our latest news delivered to your inbox.</p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Input id="email" type="email" placeholder="name@example.com" required/>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  )
}