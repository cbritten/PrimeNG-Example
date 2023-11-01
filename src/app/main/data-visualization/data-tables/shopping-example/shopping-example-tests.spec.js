describe('Shopping Example Component', function() {
    it('should add two different items to your cart', function(){
        browser.get('http://http://localhost:4200/data-visualization/data-tables/shopping-example');
        browser.manage().window().maximize(); 
        browser.sleep(3000);
    });
});