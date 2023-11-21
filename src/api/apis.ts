import axios from 'axios';
import { generateHash } from '../utils/helpers';
import { Character } from '../interfaces/character';

const fetchCharacters = async (nameStartsWith: string, timestamp: number): Promise<Character[]> => {
    try {
        const publicKey = 'a7b157c4673c57971a4ac3c838e9f4d7';
        const privateKey = '710040fcf7a74dcda0e0abd9454cf91696be770a';

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
