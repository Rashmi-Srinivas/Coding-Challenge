
const using = require('../node_modules/jasmine-data-provider');
const Wait = require('wait.helper');
const LondonPage = require('london.page.js');
const TestData = require('london.testdata');

describe('London theater Ticket Booking', function(){

    const londonPage = new LondonPage();
        beforeAll(() => {
        londonPage.visitPage();
        });

    using(TestData.londonMovieSearchText, (data) => {
    it('Seacrh for the simon and garfunkel story and proceed to Book', function(){
        Wait.wait();
        londonPage.searchMovieDestination(data.searchText);
        Wait.Wait();
        londonPage.clickSearchBox();
        Wait.Wait();
        londonPage.clickBookNow();
        Wait.Wait();
    });
    });

    it('Navigate to Booking Page and proceed for date and Seat selection', function() {
        browser.getAllWindowHandles().then(function(handles){
        newWindowHandle = handles[1];
        browser.switchTo().window(newWindowHandle).then(function() {
        Wait.wait();
        expect(browser.getCurrentURL()).toContain('date&time&variantId');
        Wait.wait();
        londonPage.clickDateSelection();
        Wait.wait();
        londonPage.clickSeatSelection();
        Wait.wait();
        londonPage.clickNext();
        Wait.wait();
    });
 });
});

using(TestData.EnterTextData, (data) => {
it('Navigate to Entering information Details page by providing Junk values in payment page', function() {
    londonPage.setFirstName(data.firstName);
    londonPage.setLastName(data.lastName);
    londonPage.setEmail(data.email);
    londonPage.setConfirmEmail(data.confirmemail);
    londonPage.setMobileNumber(data.mobileNumber);
    Wait.wait();
    londonPage.setCardNumber(data.cardNumber);
    londonPage.setExpiry(data.expiryDate);
    londonPage.setCvvNumber(data.cvvnumber);
    londonPage.setCardHolderName(data.cardHoler);
    Wait.wait();
    londonPage.ClickCompleteBooking();


});
});

});