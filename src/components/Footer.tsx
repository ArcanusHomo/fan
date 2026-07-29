export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest py-8 px-4 text-center border-t border-wood/20">
      <p className="text-cream/50 text-xs tracking-wider">
        &copy; {year} 安徽老薛饭店
      </p>
    </footer>
  );
}
