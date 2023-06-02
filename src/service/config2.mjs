const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('../..credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://maga-mic.firebaseio.com' // Reemplaza con la URL de tu base de datos de Firebase
});

const db = admin.firestore();

fs.readFile('../../dbUpload.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    } else {
        console.log("Leido")
    }

    const jsonData = JSON.parse(data);

    // Itera sobre los objetos del archivo JSON e importa los datos a Firebase
    Promise.all(
        jsonData.map((item) => db.collection('Products').add(item))
    )
        .then(() => {
            console.log('Documentos agregados correctamente');
        })
        .catch((error) => {
            console.error('Error al agregar documentos:', error);
        });
});