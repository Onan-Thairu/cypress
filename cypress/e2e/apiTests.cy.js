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

    it('Create booking', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                "firstname": "Onan",
                "lastname": "Thairu",
                "totalprice": 444,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2023-06-15",
                    "checkout": "2023-06-20"
                },
                "additionalneeds": "Breakfast"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    })

    it('Auth', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                'username': 'admin',
                'password': 'password123'
            }
        }).then(response => {
            expect(response.body).has.property('token')
            cy.log(response.body.token)
        })
    })
})