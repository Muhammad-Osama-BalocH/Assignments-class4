import Link from 'next/link';

const CountryListPage = () => {
  const countries = ['Canada', 'Pakistan', 'India', 'USA', 'UK'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300">
      <h1 className="text-4xl font-bold text-white">Select a Country</h1>
      <ul className="mt-8 space-y-4">
        {countries.map((country) => (
          <li key={country}>
            <Link href={`/country/${country.toLowerCase()}`}>
              <a className="text-2xl text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700">
                {country}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryListPage;
