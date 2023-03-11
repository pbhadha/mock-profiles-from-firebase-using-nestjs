import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
const serviceAccount = require('./firebaseCreds.json');

@Injectable()
export class FirebaseService {
    public db: admin.firestore.Firestore;

    constructor(){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'bco-sandbox-348413.firebaseio.com'
        });
        this.db = admin.firestore();
    }
}
