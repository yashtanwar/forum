var defaultThreads = [
    {
        id: 1,
        title: "Chat",
        author: "Akira",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Akira",
                date: Date.now(),
                content: "Chat here!"
            },
            {
                author: "Akira",
                date: Date.now(),
                content: "Hosted on Github lmfao!"
            }
        ]
    },
    {
        id: 2,
        title: "Recommendations",
        author: "Akira",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Akira",
                date: Date.now(),
                content: "any feature you want me to add?"
            },
            {
                author: "Akira",
                date: Date.now(),
                content: "Send here!"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
