"use client"; // This enables the use of client-side hooks

import { useParams}  from 'next/navigation';

const countryData: Record<string, { population: string; capital: string }> = {
  Pakistan: { population: '231 million', capital: 'Islamabad' },
  India: { population: '1.4 billion', capital: 'New Delhi' },
  Dubai: { population: '3.3 million', capital: 'Dubai City' },
  China: { population: '1.41 billion', capital: 'Beijing' },
  Bangladesh: { population: '165 million', capital: 'Dhaka' }
};

export default function CountryDetail() {
  const params = useParams();

  
  if (!params || !params['country-name']) {
    return <h1>Country parameter is missing!</h1>;
  }

 
  const countryName = params['country-name'] as string;


  const country = countryData[countryName];

 
  if (!country) {
    return <h1>Country {countryName} not found!</h1>;
  }

  // Render country details
  return (
    <div>
      <h1>Country: {countryName}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}
