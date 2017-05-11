describe("Unit: Testing Services", function () {
    describe("Password Service:", function () {
        var Password;
        beforeEach(inject(function ($injector) {
            angular.module('commerzbankApp');
            Password = $injector.get('Password');
        }));

        it('should contain a Password', function () {
            expect(Password).not.toBe(null);
        });
    });
});




