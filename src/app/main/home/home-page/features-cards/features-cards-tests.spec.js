describe('Features Card component', function() {
    it('should check card titles--one by id, the other by xpath', function(){
        browser.get('http://localhost:4200/home-page');
        browser.manage().window().maximize(); 
        browser.sleep(3000);
        expect(browser.findElement(By.id('featuresTitle')).getText()).toEqual('Features to come');
        expect(browser.findElement(By.xpath('/html/body/app-root/app-main/div/div/app-home-page/div/div/app-features-cards/div/div[2]/span/h3')).getText()).toEqual('Things to check out');
    });
});