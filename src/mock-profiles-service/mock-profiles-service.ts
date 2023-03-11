import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class MockProfilesService {
    private mockProfileCollection;

    constructor(private db: FirebaseService) {
        this.mockProfileCollection = this.db.db.collection('mockProfiles');
        /*const doc = this.mockProfileCollection.doc("customer1").get();
        doc.then((res) => {
            console.log(res.data())
        });*/
    }

    async getMockProfileByID(mockProfileID: string): Promise<any> {
        return this.mockProfileCollection.doc(mockProfileID).get();
        const doc1 = this.mockProfileCollection.doc(mockProfileID);
        try {
            const result = await doc1.get();
            if (!result.exists) {
                return 'No profile with mockID: ' + mockProfileID;
            }
            return result.data();
        }
        catch (error: any) {
            return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createMockProfile(mockProfileID, mockProfile): Promise<any> {
        const doc = this.mockProfileCollection.doc(mockProfileID).set(mockProfile);
        return doc;
    }

}