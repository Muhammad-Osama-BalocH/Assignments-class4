import { countriesData } from '../countryData';  // Import country data
import { useRouter } from 'next/router';

const CountryPage = ({ params }: { params: { country: string } }) => {
  // Check if params.country is available
  const country = params.country ? params.country.toLowerCase() : '';

  // Now access the country data
  const countryDetails = countriesData[country];

  if (!countryDetails) {
    return <div className="text-center text-red-500 bg-slate-400" >Country not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{countryDetails.name}</h1>
      <p className="text-xl mb-2">Population: {countryDetails.population}</p>
      <p className="text-xl mb-2">Capital: {countryDetails.capital}</p>
    </div>
  );
};

export default CountryPage;




