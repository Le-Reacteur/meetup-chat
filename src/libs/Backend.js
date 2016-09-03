import firebase from 'firebase';

class Backend {
  store = null;
  messagesRef = null;
  uid = '';
  setStore(store) {
    this.store = store;
  }
  getStore() {
    return this.store;
  }
  init() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgsuwd_NGUlrYvE1zkJEdQeWCgtIb6paE',
      authDomain: 'slackrn-8aa2a.firebaseapp.com',
      databaseURL: 'https://slackrn-8aa2a.firebaseio.com',
      storageBucket: 'slackrn-8aa2a.appspot.com',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getStore().setUid(user.uid);
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
}

export default new Backend();
