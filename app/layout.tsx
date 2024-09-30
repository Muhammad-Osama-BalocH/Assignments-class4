// // app/layout.tsx
// import Link from 'next/link';
// import './globals.css'; // Import global CSS

// export const metadata = {
//   title: 'My Portfolio',
//   description: 'A portfolio showcasing my projects and skills.',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <nav>
//           <ul>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/about">About Us</Link></li>
//             <li><Link href="/contact">Contact Us</Link></li>
//             <li><Link href="/skills">Skills</Link></li>
//           </ul>
//         </nav>
//         <div className="container">
//           {children} {/* This renders the content of each page */}
//         </div>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import Link from 'next/link';
import './globals.css'; // Import global CSS

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio showcasing my projects and skills.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/country">Countries</Link></li> {/* Country navigation */}
          </ul>
        </nav>
        <div className="container">
          {children} {/* This renders the content of each page */}
        </div>
      </body>
    </html>
  );
}
