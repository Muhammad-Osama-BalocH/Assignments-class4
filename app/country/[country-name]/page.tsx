"use client"; // This enables the use of client-side hooks

import { useParams } from 'next/navigation';

const countryData: Record<string, { population: string; capital: string }> = {
  Pakistan: { population: '231 million', capital: 'Islamabad' },
  India: { population: '1.4 billion', capital: 'New Delhi' },
  Dubai: { population: '3.3 million', capital: 'Dubai City' },
  China: { population: '1.41 billion', capital: 'Beijing' },
  Bangladesh: { population: '165 million', capital: 'Dhaka' },
};

export default function CountryDetail() {
  const params = useParams();
  
  // Type assertion to ensure params['country-name'] is treated as a string
  const countryName = params['country-name'] as string; 

  // Ensure that countryName is a valid key
  const country = countryData[countryName];

  // If the country doesn't exist, show an error message
  if (!country) {
    return <h1>Country "{countryName}" not found!</h1>;
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
