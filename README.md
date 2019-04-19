# koa-sample-project

##

Requires

1. Docker
2. Docker-compose
3. macOS
4. Node version: v8.11.4 and up (Optional)

##

To run:

```
docker-compose up
```

##

To Test:

```
npm install
npm test
```

## v1 routes

1.  path POST http://localhost:3000/v1/register
2.  expectedPayload:
    {"name": "donovan holness",
    "email": "dholness2@gmail.com",
    "password": "password123" }
    Responds with:
    authentication cookies: koa:sess= and koa:sess.sig=  
    response object users id:
    {
    "status": "success",
    "data": 1
    }
3.  path GET http://localhost:3000/v1/users/1 (include cookies to retrieve users)
4.  response object will have legacey username payload instead of v2 firstName/lastName:
    {
    "status": "ok",
    "data": {
    "name": "donovan holness",
    "email": "dholness2@gmail.com",
    "id": 1
    }
    }
