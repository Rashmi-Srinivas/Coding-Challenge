
const Wait = require('/wait.helper');

module.exports = class londonPage {

    constructor()
    {
        this.baseURL = browser.params.basic_url;
        this.searchMovieDest = element(by.xpath('//*[@id="search-form"]/input'));
        this.searchTextBox = element(by.xpath('/html/body/div/div/div/section[2]/div/div/div/div/div/div/div[1]/div/div[2]/section/div[1]/div[2]'));
        this.bookNowButton = element(by.xpath('/html/body/div/div/div/section[2]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[1]/div[5]/div/div[1]/div[4]/a/div'));
        this.dateSelection = element(by.xpath('//*[@id="app"]/div[1]/div[2]/div/div/div[2]/div/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[30]'));
        this.seatSelection = element(by.id('SE-STALLS-BB-7'));
        this.nextButton = element(by.xpath('//*[@id="app"]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div[3]/span'));

        this.firstName = element(by.id(' 41630_0_first'));
        this.lastName = element(by.id('  41630_0_last'));

        this.email = element(by.id(' 41631_0'));
        this.confirmEmail = element(by.id(' 41631_0_confirm'));
        this.mobNo = element(by.id(' 41632_0'));

        this.cardNo = element(by.id('card-number'));
        this.exp = element(by.id('card-expiry'));
        this.cvv = element(by.id('card-cvv'));
        this.cname = element(by.id('card-name'));
        this.completeBooking = element(by.xpath('//*[@id="app"]/div[1]/div[2]/div/div/div[2]/div/div[1]/div[4]/div/div/span'));

    }

    visitPage(url) {
        browser.get(this.baseURL);
        browser.waitForAngular();   
} 

searchMovieDestination(searchText){
    this.searchMovieDest.clear();
    this.searchMovieDest.sendKeys(searchText);
    return this;
}

clickSearchBox(){
    this.searchTextBox.click();
    Wait.wait();
  }

clickBookNow(){
    this.bookNowButton.click();
    Wait.wait();
  }

clickDateSelection(){
    this.dateSelection.click();
    Wait.wait();
}

clickSeatSelection(){
    this.seatSelection.click();
    Wait.wait();
}

clickNext(){
    this.nextButton.click();
    Wait.wait();
}

setFirstName(searchText){
    this.firstName.clear();
    this.firstName.sendKeys(searchText);
    return this;
}
 
setLastName(){
    this.lastName.clear();
    this.lastName.sendKeys(searchText);
    return this;
}

setEmail(searchText){
    this.email.clear();
    this.email.sendKeys(searchText);
    return this;
}

setConfirmEmail(searchText){
    this.confirmEmail.clear();
    this.confirmEmail.sendKeys(searchText);
    return this;
}

setMobileNumber(searchText){
    this.mobNo.clear();
    this.mobNo.sendKeys(searchText);
    return this;
}

//Add Payment Details (Junk Values)

setCardNumber(searchText){
    this.cardNo.clear();
    this.cardNo.sendKeys(searchText);
    return this;
}

setExpiry(searchText){
    this.exp.clear();
    this.exp.sendKeys(searchText);
    return this;
}

setCvvNumber(searchText){
    this.cvv.clear();
    this.cvv.sendKeys(searchText);
    return this;
}

setCardHolderName(searchText){
    this.cname.clear();
    this.cname.sendKeys(searchText);
    return this;
}

ClickCompleteBooking(){
    this.completeBooking.click();
    return this;
}
}