export class LandService{
    private lands  = [
        {
            id: 1,
            name: 'Lot 1',
            image: 'https://www.realtor.com/realestateandhomes-detail/22980-Black-Hills-Dr-13_Trinidad_CO_81082_M90965-83632',
            price: '$198,000'
        },
        {
            id: 2,
            name: 'Lot 2',
            image: 'https://ap.rdcpix.com/871e1f8ab93661e1fb97bbfceba62b2fl-m3562804032od-w480_h360_x2.webp',
            price: '$285,000'
        }
    ]

    constructor(){}

    getLands(){
        return this.lands.slice();
    }

}