export const setProfileCookie = (profileId: number): void => {
    document.cookie = `profileId=${profileId}; path=/; max-age=604800`;
}

export const getProfileCookie = (): number | null => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'profileId') {
            const decodedValue = decodeURIComponent(value);
            return parseInt(decodedValue, 10);
        }
    }
    return null;
}

export const deleteProfileCookie = (): void => {
    document.cookie = 'profileId=; max-age=0; path=/;';
};