describe("Unit: Testing Services", function () {
    describe("Register Service:", function () {
        var Register;
        beforeEach(inject(function ($injector) {
            angular.module('commerzbankApp');
            Register = $injector.get('Register');
        }));

        it('should contain a Register', function () {
            expect(Register).not.toBe(null);
        });
    });
});




