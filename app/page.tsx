import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-4 pt-12 pb-8 md:pt-24 md:pb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          UI Component System
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A showcase of the shadcn/ui components available in this project
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Documentation</Button>
        </div>
      </section>

      {/* Component Showcase Tabs */}
      <section className="mx-auto max-w-5xl py-8">
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
          </TabsList>

          {/* Buttons Section */}
          <TabsContent value="buttons" className="py-4">
            <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </TabsContent>

          {/* Cards Section */}
          <TabsContent value="cards" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content goes here. This is an example of the Card component.</p>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>Highlight important features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cards can be used to group related content and actions.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Continue</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Forms Section */}
          <TabsContent value="forms" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Form Components</CardTitle>
                <CardDescription>Example form using shadcn components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Dialogs Section */}
          <TabsContent value="dialogs" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dialogs & Modals</CardTitle>
                  <CardDescription>Popup interfaces for focused tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Dialogs appear over the page content, requiring user interaction before returning to the main interface.</p>
                </CardContent>
                <CardFooter>
                  <Button>Open Dialog</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Toast Notifications</CardTitle>
                  <CardDescription>Non-intrusive feedback messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Toast notifications provide feedback about operations without interrupting the user experience.</p>
                </CardContent>
                <CardFooter>
                  <Button>Show Toast</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* System Design Section */}
      <section className="mx-auto max-w-5xl py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">System Design</h2>
        <p className="text-center mb-8 text-muted-foreground">
          Our UI components work together in a cohesive design system, ensuring consistency across your application
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Atomic Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Build interfaces with small, reusable components that combine to form larger UI patterns.</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Composability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Components can be easily combined to create complex interfaces while maintaining consistency.</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All components are built with accessibility in mind, ensuring your app works for everyone.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}