export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-end gap-4 border-t border-border/50 bg-card/50 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
      <p className="text-muted-foreground">
        &copy; {new Date().getFullYear()}, Earth Kissed Herbs. All rights reserved
      </p>
    </footer>
  );
}