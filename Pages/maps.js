const {Key} = require('selenium-webdriver');
var BasePage = require ('../Pages/Basepage');

class maps extends BasePage{


    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async enter_search(searchText){
        var searchField = "//input[@type='text']";
        await this.enterTextByXpath(searchField, searchText);
        await this.enterTextByXpath(searchField, Key.RETURN);
    }
}
module.exports = new maps();