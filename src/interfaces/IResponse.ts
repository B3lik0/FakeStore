interface IResponse {
    id?: string | number,
    title?: string,
    price?: string | number,
    category?: string,
    description?: string,
    image?: string,
    rating?: IRating
}

interface IRating {
    rate?: string | number,
    count?: string | number,
}

export default IResponse