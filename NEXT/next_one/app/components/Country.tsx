interface CountryData {
  name: string;
  code: string;
}

interface CountryProps {
  country: CountryData;
}

const Country = ({ country }: CountryProps) => {
  return (
    <div className="country" id={country.name}>
      <div className="title">{country.name}</div>
      <div className="sub-title">{country.code}</div>
    </div>
  );
};

export default Country;
