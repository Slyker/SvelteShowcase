import clientPromise from '../../lib/mongo';

export async function post ({request}) {
 const dbConnection = await clientPromise;
 const db = dbConnection.db();
 const collection = db.collection('Contacts');
 let Contacts = await request.json();
 const dbContacts = await collection.insertOne(Contacts);
 return { status: 200, body: { dbContacts } }
}