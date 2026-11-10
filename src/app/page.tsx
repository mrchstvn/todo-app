import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-full justify-center text-center items-center gap-3 p-4 mx-4 mt-20">
        <h1 className="text-4xl font-bold">Keep track of what matters.</h1>
        <p className="text-xl font-semibold">
          A simple to do list. Free to start
        </p>
        <p className="text-md mt-5">
          Ready to begin? Enter your email to create an account and get started.
        </p>
        <div className="flex flex-row gap-1 items-center w-full sm:max-w-lg">
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
