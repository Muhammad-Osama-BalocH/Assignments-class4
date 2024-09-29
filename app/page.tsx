import Link from 'next/link';

const countries = ['Canada', 'India', 'Australia', 'Germany', 'Brazil'];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-slate-700">
      {/* About and Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-green-100">
        {/* About Section */}
        <section className="bg-gray-200 p-4 rounded">
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <p>
            Welcome to the Country Information App. Here you can find information about different countries.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-200 p-4 rounded">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <ul>
          <li>Html & Css</li>
            <li>Typescript & JavaScript</li>
            <li>NODE JS REACT JS </li>
            <li>Learning Next js</li>
          </ul>
        </section>

        {/* Country List Section */}
        <section className="bg-gray-200 p-4 rounded">
          <h2 className="text-3xl font-bold mb-2">Country List</h2>
          <ul className="space-y-4">
            {countries.map((country) => (
              <li key={country}>
                <Link
                  href={`/country/${country.toLowerCase()}`}
                  className="text-xl text-blue-500 hover:underline"
                >
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

