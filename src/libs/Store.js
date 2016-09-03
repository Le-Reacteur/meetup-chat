class Store {
  name = '';
  uid = '';
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  setName(value) {
    this.name = value;
  }
  getName() {
    return this.name;
  }
  getAvatar() {
    let sumChars = 0;
    for (let i = 0; i < this.uid.length; i++) {
      sumChars += this.uid.charCodeAt(i);
    }
    return `avatars/${(sumChars % 14) + 1}.png`;
  }
}

export default new Store();
