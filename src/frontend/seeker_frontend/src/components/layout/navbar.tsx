export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center pt-5 px-5">
        <div className="flex flex-col justify-between items-center">
          <img src="/images/seekerlogo.png" alt="logo" width={60} height={60} />
          <h1 className="text-2xl">Seeker</h1>
        </div>
        <div className="flex justify-between items-center gap-4">
          <a href="/">About</a>
          <a href="/">Docs</a>
          <a href="/">Submit Resource</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </nav>
  );
}
