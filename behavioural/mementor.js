// The memento pattern is basically providing temporary state of an object and restoration of that object from a conversion into
//  a different format or whatnot.It is often used into serialization and deserialization of data.In this use case, an object is
// typically in a JavaScript object, where we need to transmit the data to some type of back-end, where we serialize this object
//  into JSON for streaming it through HTTP protocols.Then, when this object hits the back - end server, or when we get a
// response back from the server through HTTP, we might need to deserialize the JSON object back into a JavaScript object for
// consumption into our application.Well, this is basically the memento pattern in action, where the data never loses its
// accuracy, despite several conversions in between formats.
