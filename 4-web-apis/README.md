# HTTP: Hypertext Transfer Protocol

HTTP is the protocol that determines _how_ we make requests and responses

## Requests and responses

Requests have:

- a url
- a method
- headers
- body (some have this, not all)

### URL - Uniform Resource Locator

`https://mail.google.com/mail/u/0/#inbox`

`protocol://subdomain.domain.extensionOrTLD/path/to/wherever?query_params=extra_info&more_params=more_info#place-on-the-page`

#### Query parameters

any url can be modified with query params

- also called "query string" or "url parameters"
- how they are handled is up to the recipient
- made up of key/val pairs
  - ?key=val&key=val

### Methods

The HTTP method reflects what kind of information we're sending or what we expect the server to do with it
The server decides how to handle our request, depending on the method

- GET - request data
- POST - send data
- PUT - (we'll come back to how this is different)
- DELETE - delete data
- OPTIONS
- more weird ones
