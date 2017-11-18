export interface Message {
    time: Date;
    content: string;
    sender: string;
}

export const Msgs: Message[] = []
for (let i = 0; i < 100; i++) {
    Msgs.push({
        content: 'content' + i,
        sender: 'sender' + i,
        time: new Date()
    })
}

 