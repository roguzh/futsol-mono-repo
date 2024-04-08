export interface Metadata {
    name: string;
    symbol: string;
    description: string;
    image: string;
    attributes: { trait: string; value: string }[];
    properties: {
        category: string;
        collection: {
            name: string;
            family: string;
        }
    };
    creators: {
        address:string;
        share: number;
    }[]
}

