
- [ ] Mention two parts of Express that you learned about this week.

    Answer: I learned that Express is a type of middleware. It's also a framework that gives us extra stuff without having to use vanilla js to code it all out. The TK puts it perfectly when it compares Express is to backend as React is to frontend.

- [ ] Describe Middleware?

    Answer: Middleware is like a callback where you can define the function and then insert it where it's needed. So instead of having to write a function that does a thing over and over, we can write one middleware function and it will run when the parent function cycles through.

- [ ] Describe a Resource?

    Answer: A resource comes from the REST idea. The way I understand it is that the resource is the "thing". Each "thing" will have it's own url. So a resource example would be /api/videogames/1. The game could come back as Doom because it has an id of 1. The game Doom is the resource. We can then delete the resource, edit it, create a new resource, etc.

- [ ] What can the API return to help clients know if a request was successful?

    Answer: If this question is in reference to a status code, then a 200 code would suffice. Or in broader terms, you could just return what is being requested.

- [ ] How can we partition our application into sub-applications?

    Answer: With Routers. The routers act similarly to React components and keep things compartmentalized. 