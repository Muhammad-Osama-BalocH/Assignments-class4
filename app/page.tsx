import Link from "next/link";

function Home() {
  return (
    <div>
      <h1 className="bg-slate-900 text-white">Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/skills">Skills</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

