Initial steps

Requirments
    Functional
        Functionality to add post
        Feed that display a list of items
        comment section
        should scroll
    Non-Functional
        Should be mobile friendly
        accessablity friendly
        support internationalization
        should be performant
High Level Architecture
    Start with simple UI design
    then design the computer architecture
    discuss whats design pattern you want to use and why(MVC)
    expalin how data will flow
    how interaction will work
Data Model (Client)
    App={
        user:User,
        setting: Settings,
        feed: Feed
    }
    Feed={
        type: feedType,
        page:int,
        size:int
    }
Api Model
    Polling
    Graphql
    Websockets
Optimizations / Performance
    Performance
    Optimizations
    Security
    Accessablity
    Tracking




===== below one is for Api Modal =======
HTTP1 VS HTTP2

==== HTTP1 ===
 Limited number of connection can handle at once
 Syncronus blocking queue
    first html load
    second css load
    then javascript load
 Plain Text(does not support rich text/media)
 Explicity need to close the connection

===== HTTP2 ==========
Multiplexing (parllel request)
Multiple connection
Rich data
better comprssion