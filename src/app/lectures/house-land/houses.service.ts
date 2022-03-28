export class HouseService{
    private houses = [
        {
            id: 1,
            name: 'LAVINE',
            image: 'https://images.squarespace-cdn.com/content/v1/5be04668f407b4d00db2abc6/1584077905785-HTZMZ35BCU92UMXNE42C/Lavine+%28Hires%29.jpg?format=1000w',
            price: '$198,000'
        },
        {
            id: 2,
            name: 'AMIRA',
            image: 'https://images.squarespace-cdn.com/content/v1/5be04668f407b4d00db2abc6/1584077962724-HNE55GRB7T1OXTKC56GH/Amira+%28Hires%29.jpg?format=1000w',
            price: '$285,000'
        }
    ]

    constructor(){}

    getHouses(){
        return this.houses.slice();
    }

}