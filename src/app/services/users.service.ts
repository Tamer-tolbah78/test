import { Injectable } from '@angular/core'
import { User } from '../models/user.module'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : User[];
  constructor() {
    this.users = [
      {
     username: 'tamer.tolbah@yahoo.com',
     password: '123123456',
     userGivenName: 'Tamer',
     books: 2
     },
     {
       username: 'moscd3@gmail.com',
       password: 'mostafa',
       userGivenName: 'Mostafa',
       books: 3
       },
       {
         username: 'ahmed@hotmail.com',
         password: '654321',
         userGivenName: 'Ahmed',
         books: 1
         },
         {
          username: 'Ali_rabea@hotmail.com',
          password: '654321',
          userGivenName: 'Ali',
          books: 4
          },
          {
            username: 'Hassan@hotmail.com',
            password: '654321',
            userGivenName: 'Hassan',
            books: 7
            },
            {
              username: 'Akram.hosny@hotmail.com',
              password: '654321',
              userGivenName: 'Akram',
              books: 2
              },
              {
                username: 'Mhmd@hotmail.com',
                password: '654321',
                userGivenName: 'mohamed',
                books: 5
                },
        ]
  }
 getUsers = () => {return this.users}
}
