import { BiArrowBack } from 'react-icons/bi';
import countries from '../../data/data.json';
import ButtonLink from '../ButtonLink';
import Container from '../Container';
import styles from './CountrySelected.module.scss';

type Props = typeof countries[0];

export default function CountrySelected(props: Props) {
    const { name, flags, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = props;

    return (
        <Container>
            <ButtonLink to='/'>
                <div>
                    <BiArrowBack /> Back
                </div>
            </ButtonLink>
            <section
                className={styles.countrySelected}
                key={name}>
                <img
                    src={flags.svg}
                />
                <section>
                    <h3>{name}</h3>
                    <article className={styles.countrySelected__description}>
                        <ul>
                            <li>
                                <span>Native Name:</span> {nativeName}
                            </li>
                            <li>
                                <span>Population:</span> {population}
                            </li>
                            <li>
                                <span>Region:</span> {region}
                            </li>
                            <li>
                                <span>Sub Region:</span> {subregion}
                            </li>
                            <li>
                                <span>Capital:</span> {capital}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Top Level Domain:</span> {topLevelDomain}
                            </li>
                            <li>
                                <span>Currencies:</span> {currencies?.map(l =>
                                    l.name).join(', ')}
                            </li>
                            <li>
                                <span>Languages:</span> {languages.map(l =>
                                    l.name).join(', ')}
                            </li>
                        </ul>
                    </article>
                    <div className={styles.countrySelected__bordeCountries}>
                        <p>Border Countries:</p>
                        {borders?.map((border) =>
                            <ButtonLink>
                                {border}
                            </ButtonLink>
                        )}
                    </div>
                </section>
            </section>
        </Container >
    )
}
