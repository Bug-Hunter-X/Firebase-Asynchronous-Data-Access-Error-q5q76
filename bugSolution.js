To solve this, always check if the document exists and the data is available before attempting to access its properties.

```javascript
// Corrected code
db.collection('myCollection').doc('myDoc').get().then((docSnapshot) => {
  if (docSnapshot.exists()) {
    const data = docSnapshot.data();
    if (data && data.myField) {
      console.log(data.myField); 
    } else {
      console.log('Document or field does not exist');
    }
  } else {
    console.log('Document does not exist');
  }
}).catch((error) => {
  console.error('Error fetching document:', error);
});
```
Using async/await can also improve code readability:
```javascript
async function getData(){
  try{
    const docSnap = await db.collection('myCollection').doc('myDoc').get();
    if(docSnap.exists()){
        const data = docSnap.data();
        console.log(data.myField);
    }else{
        console.log('No such document!');
    }
  } catch(error){
    console.error('Error getting document:', error);
  }
}
getData();
```