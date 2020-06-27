// Making a change on GitHub to follow process through
// Create a tray object 
class Tray {
  constructor (traySize, trayContents, trayWeight, trayComment, trayAddress) {
    this.traySize = traySize;
    this.trayContents = trayContents;
    this.trayWeight = trayWeight;
    this.trayComment = trayComment;
    this.trayAddress = trayAddress;
  }
  
    isThisSize(traySize) {
    this.traySize = traySize;
  }
    getsFilled(category) {
    this.trayContents = category;
  }
  
  getsWeighed(trayWeight) {
    this.trayWeight = trayWeight;
  }
  
  getsComment(trayComment) {
    this.trayComment = trayComment;
  }

  getsAddress(trayAddress) {
    this.trayAddress = trayAddress;
  }
}

const tray1 = new Tray('Small', 'Beans', 15.3, "", 'GreenB423');

console.log(tray1);
