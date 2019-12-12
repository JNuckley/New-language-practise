function Airport() {
  this.planes = [];
  // this.weather = weather;
  // this._defaultCapacity = defaultCapacity;
};

Airport.prototype.land = function(plane) {
  //if the plane is already landed then it cannot land
  if (this.isLanded(plane)) {
    throw new Error("Cannot land: plane has already landed")
  }
  //if the airport is at capacity then it cannot land
  if (this.isFull()) {
    throw new Error("Cannot land as the airport is full");
  }
  //if the weather is stormy then it cannot land
  if (this.isStormy()) {
    throw new Error("Cannot land plane: weather stormy");
  }
    // console.log("hello2");
  //otherwise, it can land and push into the array for planes
  this.planes.push(plane);
    // console.log("hello3");
  };

Airport.prototype.takeOff = function(plane) {
  if (this.isStormy()) {
    throw new Error("Cannot takeoff: weather is stormy");
  }
  //this will take the leftmost plane in the array
    var index = this.planes.indexOf(plane);
    this.planes.pop();
    return this.planes;
    console.log("hello4");
};

Airport.prototype.isFull = function(plane) {
  if (this.planes.length >= this._defaultCapacity) {return true}else{return false}
};

Airport.prototype.isLanded = function(plane) {
  if (this.planes.includes(plane)) {
    return true;
  }
  return false;
};

Airport.prototype.takeOff = function(plane) {
  return false;
};


  Airport.prototype.isStormy = function(plane) {
    return false;
  }
// weather = new Weather()
// // plane = new Plane()
// airport = new Airport(weather)
//
// airport.land()
