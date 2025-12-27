import Container from "./Container";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <Container>
        <div className="h-16 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-primary">StayMate</h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <span>Home</span>
            <span>Features</span>
            <span>How it Works</span>
          </nav>

          <div className="flex gap-3">
            <Button variant="secondary">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
