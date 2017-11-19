import {User} from "./User";

export interface Message {
    time: Date;
    content: string;
    sender: User;
}

// fullName:string;
// givenName:string;
// familyName:string;
// imageUrl:string;
// Email:string;
// id:string;


export const Msgs: Message[] = []
for (let i = 0; i < 10; i++) {
    Msgs.push({
        content: 'content' + i,
        sender: {
            id: '110922676585645565031',
            familyName: 'gishry',
            givenName: 'lior',
            imageUrl: 'https://lh6.googleusercontent.com/-0VEgI9-ezvk/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf5jiDq4JeEO6xZnSfFejGg9BoH8nA/s96-c/photo.jpg',
            Email: 'hjk',
            fullName: 'lior gishry'
        },
        time: new Date()
    })
}

 