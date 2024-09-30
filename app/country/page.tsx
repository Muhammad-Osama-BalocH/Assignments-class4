import Link from 'next/link';

export default function Country() {
  return (
    <div className='text-2xl bg-black text-white'>
      <h1>Select a Country</h1>
      <ul >
        <li>
          <Link href="/country/Pakistan">Pakistan</Link>
        </li>
        <li>
          <Link href="/country/India">India</Link>
        </li>
        <li>
          <Link href="/country/Dubai">Dubai</Link>
        </li>
        <li>
          <Link href="/country/China">China</Link>
        </li>
        <li>
          <Link href="/country/Bangladesh">Bangladesh</Link>
        </li>
      </ul>
    </div>
  );
}


