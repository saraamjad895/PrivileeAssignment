const maps = require('../Pages/maps');

describe('Describe', function(){
    this.timeout(10000);

    beforeEach(function(){

    });

    it('POM Test Check', async function(){
        var baseurl = 'https://staging-website.privilee.ae/map';
        await maps.enter_url(baseurl);
        await maps.enter_search('Browserstack selenium javascript pom');
    })

    afterEach(async function(){
        await maps.closeBrowser();
    });

})