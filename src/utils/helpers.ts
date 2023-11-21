import md5 from 'md5';

const generateHash = (timestamp: number, privateKey: string, publicKey: string): string => {
    return md5(`${timestamp}${privateKey}${publicKey}`);
};

const getTimestamp = (): number => {
    return new Date().getTime();
}

export {
    generateHash,
    getTimestamp
};
