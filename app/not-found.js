export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        The page you are looking for doesn't exist.
      </p>
      <a
        href="/"
        className="cosmic-button"
      >
        Back to Home
      </a>
    </div>
  );
}
