/// <reference types='cypress'/>

describe('API tests', () =>{

    let bookingID

    it('Get booking request', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking'
        }).then(response => {
            expect(response.status).to.eq(200)
            assert.isArray(response.body, 'Response is an array')
            bookingID = response.body[0].bookingid
            cy.log(bookingID)
        })
    })
})