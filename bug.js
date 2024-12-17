The Firebase SDK may throw an error if you try to access a property of a document snapshot before the snapshot has been fully populated.  This is common when using asynchronous functions, such as `getDoc()` or `onSnapshot()`. If the data hasn't finished loading, attempting to read `data()` will result in an error or undefined values.

```javascript
// Problematic code
db.collection('myCollection').doc('myDoc').get().then((docSnapshot) => {
  console.log(docSnapshot.data().myField); // Error if data hasn't loaded yet
});
```