import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {User} from 'src/app/interfaces/user';
import { Observable, observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { StorageService } from 'src/storage/storage.service';



@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  user: any;

  constructor(
    private afAuth: AngularFireAuth, // Angular fire authentication service,
    private storage: StorageService
  ) { }

  // register method with createUserWithEmailAndPassword returns user data;
  /**
   * FireBase register service will use FireBase createUserWithEmailAndPassword method to register a user
   * @param userData userData with user interface ex:{name:'psms',mail:'psms@example.com'}
   * @param collection Collection name where data need to store after registration successful
   * returns a Observable will contain user Data
   */
  register(userData: User, collection: string): Observable<any> {
    return new Observable( observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(userData.mail, userData.password).then(
        data => {
          console.log('data here at register fire auth', data);
          this.storage.set('uuid', data.user.uid);
          observer.next(data);
          observer.complete();
        }, error => {
          console.log('error here at register fire auth', error);
          observer.error(error);
        });
    });
  }

  /**
   * Fire base Login service will use firebase signInWithEmailAndPassword method to login a user
   * @param userData userData with user interface ex:{name:'psms',mail:'psms@example.com'}
   * returns an observable whether user exists or not
   */
  login(userData: User) {
    return new Observable( observer => {
      this.afAuth.auth.signInWithEmailAndPassword(userData.mail, userData.password).then(
        data => {
          console.log('data here at Login fire auth', data);
          this.storage.set('uuid', data.user.uid);
          observer.next(data);
          observer.complete();
        }, error => {
          console.log('error here at Login fire auth', error);
          observer.error(error);
        }
      );
    });
  }

  // Check Auth state (test)
  checkAuthState() {
    this.afAuth.auth.onAuthStateChanged( user => {
      console.log('user here at logout fire auth', user);
    }, error => {
      console.log('error here at logout fire auth', error);
    });
  }

  /**
   * Logout service will use firebase signout method to signout a user
   */
  logout() {
    return new Observable( observer => {
      this.afAuth.auth.signOut().then(
        data => {
          // this.user = null;
          this.storage.remove('uuid');
          console.log('data here at logout fire auth', data);
          observer.next(true);
          observer.complete();
        }, error => {
          console.log('error here at logout fire auth', error);
          observer.error(error);
        });
    });
  }
  // isLoggedIn() {
  //   // console.log(this.afAuth, 'user here');
  //   return this.afAuth.user !== null;
  // }


  // FireBase auth state
  authState() {
      return this.afAuth.authState.pipe(first());
  }

  /**
   * isLoggedIn service will return whether a user is logged in or not.
   */
  isLoggedIn(): boolean {
    return this.storage.get('uuid') !== null;
  }

  /**
   * getUserDetails service will return the current logged in user details
   */
  getUserDetails() {
    return new Observable(observer => {
      const uuid = this.storage.get('uuid');
      if (isNullOrUndefined(uuid)) {
        observer.error('No user');
        observer.complete();
      } else {
        // Logic after doc service
      }
    });
  }

  /**
   * forgotPassword service will use firebase sendPasswordResetEmail method to sent a reset link to mail
   * @param Userdata userData with user interface ex:{mail:'psms@example.com'}
   * returns a observeable whether the link sent successfully or not
   */
  forgotPassword(Userdata: User) {
    return new Observable( observer => {
      this.afAuth.auth.sendPasswordResetEmail(Userdata.mail).then( data => {
        // console.log(data, 'data here');
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.unsubscribe();
      });
    });

  }
}
