import { capitalize } from "lodash";

export const capitalizeWord = (word: string): string => {
    if (typeof word !== 'string' || word.length === 0) {
        return word; 
    }
    return capitalize(word);
}
