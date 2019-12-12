describe("Airport", function() {
  it ("starts with zero planes", function() {
    var airport = new Airport;
    var plane = jasmine.createSpy('plane');

    expect(airport.isLanded(plane)).toEqual(false);
  })
//before each test create an instance or double but can they access the classes?
//   beforeEach(function() {
//   weather = new Weather;
//   airport = new Airport(weather);
//   plane = jasmine.createSpy('plane');
// });
//checks that the numbers equal the correct output with toEqual
  it('can land a plane', function() {
    var airport = new Airport();
    var plane = jasmine.createSpy('plane');
    airport.land(plane);
    expect(airport.isLanded(plane)).toEqual(true);
  });
});
