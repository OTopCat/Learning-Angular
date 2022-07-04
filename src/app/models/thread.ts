export class Thread {
    id: string;
    title: string;
    author: string;
    post: string;
    subReddit: string;
    createdDate: Date;
    img: string;
    url: string;

    constructor(trd :any) {
        this.id = trd['id'];
        this.title = trd['title'];
        this.author = trd['author'];
        this.post = trd['selftext'];
        this.subReddit = trd['subreddit'];
        this.createdDate = new Date(trd['created_utc'] * 1000);
        this.img = trd['preview'] ? trd['preview']['images'][0]['source']['url'] : '';
        this.url = trd['permalink'];
    }  
}


