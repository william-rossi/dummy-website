class CookieHandlers {
    public static getCookie = (name: string): string | null => {
        if (typeof window === 'undefined')
            return null;

        const matches = document.cookie.match(
            new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
        );

        return matches ? decodeURIComponent(matches[1]) : null;
    };

    public static setCookie = (name: string, value: string, days: number) => {
        if (typeof window === 'undefined')
            return;

        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    };
}

export default CookieHandlers;