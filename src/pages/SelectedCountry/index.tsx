import { useParams } from "react-router-dom";
import CountrySelected from "../../components/CountrySelected";
import countries from '../../data/data.json';
import NotFound from "../NotFound";


export default function SelectedCountry() {
  const { id } = useParams();
  const country = countries.find((c) => c.name === id);

  if (!country) {
    return <NotFound />;
  }

  return (
      <CountrySelected
        {...country}
      />
    )
}
