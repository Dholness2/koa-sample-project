# koa-sample-project

##

Requires

1. Docker
2. Docker-compose
3. macOS
4. Node version: v8.11.4

##

To run:

```
brew install docker
brew install docker-compose
docker-compose up
brew install node
npm install
npm start
```
## Tips
   App requires two session cookies for testing. Suggest using postman after regeistration for manually testing end points.
##

To Run unit Tests:

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

  1. path to register user:

    ```
       POST http://localhost:3000/v2/register
    ```

    Expected Payload:

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

2. path to login:

    ```
       POST http://localhost:3000/v2/login
    ```

    expected Payload:

    ```
      {"email": "dholness2@gmail.com",
       "password": "password123" }
    ```

    Responds with:
    Authentication cookies: koa:sess= and koa:sess.sig=  
    
    ```
     {
      "status": "success",
      
      }
    ```

3.  path(include cookies to retrieve users, suggest postman for easy cookie mangement):

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

4.  path to create a like for user 1 to user 2:

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

5.  Path to get incoming likes for user 1 :
    ```
    GET http://localhost:3000/v2/user/:id/likes?type=incoming
    ```
6.  Path to get out going likes from user 1 :
    ```
    GET http://localhost:3000/v2/user/:id/likes?type=outgoing
    ```
7. Path to create user profile:
  ```
    POST http://localhost:3000/v2/profiles
    ```
    ExpectedPayload:
    ```
    {
       "state": "foo",
       "city": "bar",
       "zip": 11003,
       "dateOfBirth": "2016-01-01 00:00:00+00:00",
       "userId":1
       }
    ```
8. Path to edit user Profile:
   ```
    PUT http://localhost:3000/v2/users/:id/profiles
    ```
    ExpectedPayload:
    ```
    {
       "state": "foo",
       "city": "bar",
       "zip": 11003,
       "dateOfBirth": "2016-01-01 00:00:00+00:00",
       "user_id:":1
       }
    ```
   