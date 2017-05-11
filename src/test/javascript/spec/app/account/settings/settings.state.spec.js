describe(' register state test', function () {

  var $state;

  beforeEach(function () {
    module('commerzbankApp');
    inject(function (_$state_, $templateCache) {
      $state = _$state_;
      $templateCache.put('app/account/settings/settings.html', '');
    })
  });

  it('should respond to URL', function () {
    expect($state.href('settings')).toEqual('#/settings');
  });
});
