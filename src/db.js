import Dexie from 'dexie';

const db = new Dexie("feed");

db.version(1).stores({
  articles: "&uuid, title, url, picture, text, author, published"
});

export default db;
