import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <span className="font-display text-8xl font-extrabold text-wine/20">404</span>
        <h1 className="mt-2 text-2xl font-bold text-wine">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you are looking for might have been moved or does not exist.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Clinic
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
