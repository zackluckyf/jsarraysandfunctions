fdescribe('Prototypes', function () {
  it('should set a prototype when using the new keyword', function () {
    expect(Dog.prototype.isPrototypeOf(dog)).toEqual(true);
  });

  it('should chain off the parent', function () {
    expect(dog.age).toEqual(2);
  });
  it('should chain 2 levels deep', function () {
    expect(evenMoreSettings.value).toEqual(5);
  });
  it('should be able to shadow parent property', function () {
    settings.value = 6;
    expect(settings.value).toEqual(6);
    expect(evenMoreSettings.value).toEqual(6);
  });
  it('should change the childs value when the parents value changes', function () {
    proto.value = 6;
    expect(evenMoreSettings.value).toEqual(6);
  });
  it('should have prototype pointing to parent', function () {
    expect(Object.getPrototypeOf(evenMoreSettings)).toEqual(moreSettings);
  });
});
