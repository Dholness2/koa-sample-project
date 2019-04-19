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
brew install docker
brew install docker-compose
docker-compose up
```

##

To Test:

```
npm install
npm test
```

## v1 routes

1.  path:
    ```
       POST http://localhost:3000/v1/register
    ```
    expected Payload:
    ```
      {"name": "foo bar",
       "email": "dholness2@gmail.com",
       "password": "password123" }
    ```
    Responds with:
    Authentication cookies: koa:sess= and koa:sess.sig=  
    Response object users id:
    ```
     {
      "status": "success",
       "data": 1
      }
    ```
2.  path(include cookies to retrieve users):

    ```
      GET http://localhost:3000/v1/users/1
    ```

    Response object will have legacey username payload instead of v2 firstName/lastName:

         ```
            {"status": "ok",
              "data": {
                "name": "donovan holness",
                "email": "dholness2@gmail.com",
                "id": 1
                }
           }
         ```

    ##v2

    1. path:

    ```
       POST http://localhost:3000/v2/register
    ```

    expected Payload:

    ```
      {"firstName": "foo",
        "lastName: "bar"
       "email": "dholness2@gmail.com",
       "password": "password123" }
    ```

    Responds with:
    Authentication cookies: koa:sess= and koa:sess.sig=  
     Response object users id:

    ```
     {
      "status": "success",
       "data": 1
      }
    ```

3.  path(include cookies to retrieve users):

```
  GET http://localhost:3000/v2/users/1
```

Response object will have legacey username payload instead of v2 firstName/lastName:

      ```
         {"status": "ok",
           "data": {
             "name": "donovan holness",
             "email": "dholness2@gmail.com",
             "id": 1
             }
        }
      ```

3.  path to create a like for user 1 to user 2:

    ```
    POST http://localhost:3000/v2/likes
    ```
    Request Payload:

     ```
     {
     "fromUser": 1,
     "toUser": 2
    }
    ```

4. Path to get incoming likes for user 1 :
   ```
   GET http://localhost:3000/v2/user/:id/likes?type=incoming
   ```
5. Path to get out going likes from user 1 :
   ```
   GET http://localhost:3000/v2/user/:id/likes?type=outgoing
   ```
