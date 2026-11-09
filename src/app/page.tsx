import NavBar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col max-w-2xl min-h-screen justify-center text-center mx-auto gap-3 p-4">
        <h1 className="text-4xl font-bold">Keep track of what matters.</h1>
        <p className="text-2xl font-semibold">
          A simple to do list. Free to start
        </p>
        <p className="text-md">
          Ready to begin? Enter your email to create an account and get started.
        </p>
        <div className="flex flex-row gap-1 items-center mx-auto w-[90%]">
          <Input placeholder="Enter email" className="p-4" type="email"></Input>
          <Button
            variant="default"
            className="flex flex-row gap-1 p-4 hover:cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
