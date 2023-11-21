import axios from 'axios';
import { generateHash } from '../utils/helpers';
import { Character } from '../interfaces/character';

const fetchCharacters = async (nameStartsWith: string, timestamp: number): Promise<Character[]> => {
    try {
        const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY || '';
        const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY || '';

        const hash = generateHash(timestamp, privateKey, publicKey);

        const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameStartsWith}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

        const response = await axios.get(apiUrl);

        const results: Character[] = response.data.data.results;

        return results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
};

export { fetchCharacters };
