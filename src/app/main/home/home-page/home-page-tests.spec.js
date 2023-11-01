describe('Angular Portfolio Home Page', function() {
    
    it('should load the home page and confirm the title', function() {
        browser.get('http://localhost:4200/home-page');
        browser.manage().window().maximize(); 
        browser.sleep(3000); 
        expect(browser.getTitle()).toEqual("Caleb's PrimeNG Portfolio");
    });
    // it('should navigate to the bar chart component', function() {
    // })
});