import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";

export default function Header({ showAuthAction = true }) {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <Container>
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-semibold text-primary">
            <Link to="/">StayMate</Link>
          </h1>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/features" className="hover:text-primary">
              Features
            </Link>
            <Link to="/how-it-works" className="hover:text-primary">
              How it Works
            </Link>
          </nav>

          {/* Actions */}
          {showAuthAction && (
            <div className="flex gap-3">
              <Button variant="secondary">
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
