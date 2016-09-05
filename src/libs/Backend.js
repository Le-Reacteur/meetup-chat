import firebase from 'firebase';

class Backend {
  uid = '';
  name = 'Developer';
  messagesRef = null;
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAiuvZgc9iLMezprc5zYLBw9PsrgRkXjrE',
      authDomain: 'meetupchat-dbce1.firebaseapp.com',
      databaseURL: 'https://meetupchat-dbce1.firebaseio.com',
      storageBucket: 'meetupchat-dbce1.appspot.com',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  loadMessages(channelName, callback) {
    this.messagesRef = firebase.database().ref('messages_'+channelName);
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
          avatar: message.user.avatar,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  sendMessages(messages) {
    for (let i = 0; i < messages.length; i++) {
      this.messagesRef.push({
        text: messages[i].text,
        user: messages[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
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

export default new Backend();
