export type UnsplashImages = {
    id: string | number;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string | undefined;
};