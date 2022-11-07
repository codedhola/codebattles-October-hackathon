
# Hackathon

# Codebattle Hackathon
This is the first version of the codebattle october hackathon
routes is `/v1/api`

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [Company](#company)
    1. [Get All Companies](#1-get-all-companies)
        * [Success: response to get all companies](#i-example-request-success-response-to-get-all-companies)
    1. [Get A Company](#2-get-a-company)
        * [Success: response to get a single company](#i-example-request-success-response-to-get-a-single-company)
        * [Fail: response if ID is invalid](#ii-example-request-fail-response-if-id-is-invalid)
        * [Fail: response if a valid ID is not found in database](#iii-example-request-fail-response-if-a-valid-id-is-not-found-in-database)
    1. [Create A Company](#3-create-a-company)
        * [Fail: response if name field is not added](#i-example-request-fail-response-if-name-field-is-not-added)
        * [Success: response if all request is validated](#ii-example-request-success-response-if-all-request-is-validated)
        * [Fail: response if Existing company is being created](#iii-example-request-fail-response-if-existing-company-is-being-created)
    1. [Update A Company](#4-update-a-company)
        * [Fail: response if request logo is an Invalid format](#i-example-request-fail-response-if-request-logo-is-an-invalid-format)
        * [Success: response if all validation passes](#ii-example-request-success-response-if-all-validation-passes)
        * [Fail: response if a valid ID is not found in database](#iii-example-request-fail-response-if-a-valid-id-is-not-found-in-database-1)
        * [Fail: response if an Invalid ID is given](#iv-example-request-fail-response-if-an-invalid-id-is-given)
    1. [Delete A Company](#5-delete-a-company)
        * [Fail: response if an Invalid ID is Provided](#i-example-request-fail-response-if-an-invalid-id-is-provided)
        * [Fail: response if a valid ID is provided](#ii-example-request-fail-response-if-a-valid-id-is-provided)
        * [Success: response if valid ID is found in database](#iii-example-request-success-response-if-valid-id-is-found-in-database)
* [Advocate](#advocate)
    1. [Get All Advocate](#1-get-all-advocate)
        * [success: gets all advocate with default limits set as 8](#i-example-request-success-gets-all-advocate-with-default-limits-set-as-8)
        * [success: response if limit is set, gives the set value of it limit](#ii-example-request-success-response-if-limit-is-set-gives-the-set-value-of-it-limit)
        * [success: response getting the next page x of an advocate](#iii-example-request-success-response-getting-the-next-page-x-of-an-advocate)
    1. [Get An Advocate](#2-get-an-advocate)
        * [Success: response if a valid ID is found in database](#i-example-request-success-response-if-a-valid-id-is-found-in-database)
        * [Fail: response for an invalid mongoose id](#ii-example-request-fail-response-for-an-invalid-mongoose-id)
        * [Fail: response when a vali](#iii-example-request-fail-response-when-a-vali)
        * [Fail: response if a valid mongoose ID is not found](#iv-example-request-fail-response-if-a-valid-mongoose-id-is-not-found)
    1. [Create An Advocate](#3-create-an-advocate)
        * [Success: response if success](#i-example-request-success-response-if-success)
        * [Failed: response if Email exist](#ii-example-request-failed-response-if-email-exist)
        * [Failed: response if userName exists](#iii-example-request-failed-response-if-username-exists)
    1. [Update Or Edit an Advocate](#4-update-or-edit-an-advocate)
        * [Fail: response if a valid ID is not found in database](#i-example-request-fail-response-if-a-valid-id-is-not-found-in-database)
        * [Fail: response for an invalid ID](#ii-example-request-fail-response-for-an-invalid-id)
        * [Success: response if ID is found in database... update given body](#iii-example-request-success-response-if-id-is-found-in-database-update-given-body)
    1. [Delete An Advocate](#5-delete-an-advocate)
        * [Fail: response if ID not found in database](#i-example-request-fail-response-if-id-not-found-in-database)
        * [Fail: response for an invalid ID](#ii-example-request-fail-response-for-an-invalid-id-1)
        * [Success: response once a deletion occurs](#iii-example-request-success-response-once-a-deletion-occurs)

--------



## Company

# `v1/api/companies` Endpoint list
---
- GET `/` to fetch list of "all" users from database
- GET `/:ID` fetch a single company with the given ID
- POST `/` creates a Company and add to database
- PATCH `/:ID` update company with given ID from database
- DELETE `/:ID` Delete a Company with given ID



### 1. Get All Companies



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/v1/api/companies
```



***More example Requests/Responses:***


#### I. Example Request: Success: response to get all companies



***Body: None***



#### I. Example Response: Success: response to get all companies
```js
{
    "status": "successful",
    "results": 2,
    "data": [
        {
            "_id": "6362342242005c5bba8cc13f",
            "name": "Risevest",
            "logo": "logo.png",
            "summary": "A ... Company located at ..., we produce...",
            "advocates": [],
            "__v": 0
        },
        {
            "_id": "6362350238f70028dbe773fd",
            "name": "Risevest.inc",
            "logo": "logo.png",
            "summary": "A ... Company located at ..., we produce...",
            "advocates": [],
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get A Company



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/v1/api/companies/6362342242005c5bba8cc13f
```



***More example Requests/Responses:***


#### I. Example Request: Success: response to get a single company



***Body: None***



#### I. Example Response: Success: response to get a single company
```js
{
    "status": "Successful",
    "data": {
        "_id": "6362342242005c5bba8cc13f",
        "name": "Risevest",
        "logo": "logo.png",
        "summary": "A ... Company located at ..., we produce...",
        "advocates": [],
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Fail: response if ID is invalid



***Body: None***



#### II. Example Response: Fail: response if ID is invalid
```js
{
    "status": "Failed",
    "message": "Cast to ObjectId failed for value \"6362342242005c5bba8cc13\" (type string) at path \"_id\" for model \"companie\""
}
```


***Status Code:*** 400

<br>



#### III. Example Request: Fail: response if a valid ID is not found in database



***Body: None***



#### III. Example Response: Fail: response if a valid ID is not found in database
```js
{
    "status": "Fail",
    "err": "Company ID not found,does not exist or might have been deleted"
}
```


***Status Code:*** 500

<br>



### 3. Create A Company



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/v1/api/companies
```



***Body:***

```js        
{
    "name": "Risevest.inc"
}
```



***More example Requests/Responses:***


#### I. Example Request: Fail: response if name field is not added



***Body:***

```js        
{
    
}
```



#### I. Example Response: Fail: response if name field is not added
```js
{
    "status": "Failed",
    "message": "companie validation failed: name: Company must have a name"
}
```


***Status Code:*** 400

<br>



#### II. Example Request: Success: response if all request is validated



***Body:***

```js        
{
    "name": "Risevest"
}
```



#### II. Example Response: Success: response if all request is validated
```js
{
    "status": "Successful",
    "data": {
        "name": "Risevest",
        "logo": "logo.png",
        "summary": "A ... Company located at ..., we produce...",
        "advocates": [],
        "_id": "6362342242005c5bba8cc13f",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### III. Example Request: Fail: response if Existing company is being created



***Body:***

```js        
{
    "name": "Risevest"
}
```



#### III. Example Response: Fail: response if Existing company is being created
```js
{
    "status": "Failed",
    "message": "E11000 duplicate key error collection: Hackathon.companies index: name_1 dup key: { name: \"Risevest\" }"
}
```


***Status Code:*** 400

<br>



### 4. Update A Company



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/v1/api/companies/6362342242005c5bba8cc13f
```



***Body:***

```js        
{
    "logo": "risevest.jpg",
    "summary": "Risevest is a finance company that helps you manage your money and also invest on them to multiply your money"
}
```



***More example Requests/Responses:***


#### I. Example Request: Fail: response if request logo is an Invalid format



***Body:***

```js        
{
    "logo": "logo"
}
```



#### I. Example Response: Fail: response if request logo is an Invalid format
```js
{
    "status": "Fail",
    "err": "ValidationError: logo: Company logo must be a valid png, jpg, or jpeg file"
}
```


***Status Code:*** 400

<br>



#### II. Example Request: Success: response if all validation passes



***Body:***

```js        
{
    "logo": "risevest.jpg"
}
```



#### II. Example Response: Success: response if all validation passes
```js
{
    "status": "Successful",
    "data": {
        "_id": "6362342242005c5bba8cc13f",
        "name": "Risevest",
        "logo": "risevest.jpg",
        "summary": "A ... Company located at ..., we produce...",
        "advocates": [],
        "__v": 0
    }
}
```


***Status Code:*** 202

<br>



#### III. Example Request: Fail: response if a valid ID is not found in database



***Body:***

```js        
{
    "logo": "risevest.jpg"
}
```



#### III. Example Response: Fail: response if a valid ID is not found in database
```js
{
    "status": "Fail",
    "err": "Company with ID 6362342242005c5bba8cc130 not found, doesnt exist or might have been deleted"
}
```


***Status Code:*** 400

<br>



#### IV. Example Request: Fail: response if an Invalid ID is given



***Body:***

```js        
{
    "logo": "risevest.jpg"
}
```



#### IV. Example Response: Fail: response if an Invalid ID is given
```js
{
    "status": "Fail",
    "err": "CastError: Cast to ObjectId failed for value \"6362342242005c5bba8cc13\" (type string) at path \"_id\" for model \"companie\""
}
```


***Status Code:*** 400

<br>



### 5. Delete A Company



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/v1/api/companies/6362342242005c5bba8cc13f
```



***More example Requests/Responses:***


#### I. Example Request: Fail: response if an Invalid ID is Provided



#### I. Example Response: Fail: response if an Invalid ID is Provided
```js
{
    "status": "Fail",
    "err": "CastError: Cast to ObjectId failed for value \"6362342242005c5bba8cc13\" (type string) at path \"_id\" for model \"companie\""
}
```


***Status Code:*** 400

<br>



#### II. Example Request: Fail: response if a valid ID is provided



#### II. Example Response: Fail: response if a valid ID is provided
```js
{
    "status": "Fail",
    "err": "Company with ID 6362342242005c5bba8cc134 not found, might have been deleted"
}
```


***Status Code:*** 500

<br>



#### III. Example Request: Success: response if valid ID is found in database



***Status Code:*** 204

<br>



## Advocate

# `v1/api/advocates` endpoint list
---
- GET `/` fetch all advocate from database
- GET `/:ID` fetch a single advocate with the given ID
- POST `/` create an advocate
- PATCH `/:ID` update an advocate with the given ID
- DELETE `/:ID` delete an advocate with the given ID



### 1. Get All Advocate


### This gets a list of advocate paginated as 10 Advocates per Page

---
 queries | value | response
---------|-------|------
  page? | 4     | list advocates in page 4 which is determined by limits
 username? | shola | returns usernames with "shola"
limit? | 3 | set limits of results to be shown
sort? | createdAt | will be sorted by when the document is being created


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/v1/api/advocates
```



***More example Requests/Responses:***


#### I. Example Request: success: gets all advocate with default limits set as 8



***Body: None***



#### I. Example Response: success: gets all advocate with default limits set as 8
```js
{
    "status": "successful",
    "results": 8,
    "data": [
        {
            "_id": "634ef05d0f0fa30a80cf407c",
            "name": "zino",
            "email": "develo@gmail.com",
            "userName": "devel dao",
            "profile_pic": "zindjdj.jpg",
            "short_bio": "I am a UI/UX designer ",
            "long_bio": "works as a UI/UX designer at eden",
            "advocate_years_exp": 3,
            "company": [
                "634c01854437d2fc84a783db"
            ],
            "links": {
                "github": "github.com/kky",
                "twitter": "twitter.com/kky",
                "youtube": "youtube.com/kky"
            }
        },
        {
            "_id": "63698288a8e7ab002535b796",
            "name": "Scott Hanselman",
            "email": "shanels@gmail.com",
            "userName": "shanselman",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/shanselman-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636983f6a8e7ab002535b7a2",
            "name": "Jen Simmons",
            "email": "jension@email.com",
            "userName": "jensimmons",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/jensimmons-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "6369838ba8e7ab002535b79c",
            "name": "nader (🧱, 🚀) | nader.lens",
            "email": "nader@gmail.com",
            "userName": "dabit3",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/dabit3-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "6369831da8e7ab002535b79a",
            "name": "Lee Robinson",
            "email": "leeerob@gmail.com",
            "userName": "leeerob",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/leeerob-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636983aea8e7ab002535b79e",
            "name": "Angie Jones",
            "email": "techgirl@gmail.com",
            "userName": "techgirl1908",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/techgirl1908-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636982fda8e7ab002535b798",
            "name": "Pratham",
            "email": "prathkum@gmail.com",
            "userName": "prathkum",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/prathkum-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636983d1a8e7ab002535b7a0",
            "name": "Vitto Rivabella | 0xvitto.eth | vitto.lens",
            "email": "tittoe@gmail.com",
            "userName": "vittostack",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/vittostack-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        }
    ]
}
```


***Status Code:*** 200

<br>



#### II. Example Request: success: response if limit is set, gives the set value of it limit



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| limit | 4 |  |



***Body: None***



#### II. Example Response: success: response if limit is set, gives the set value of it limit
```js
{
    "status": "successful",
    "results": 4,
    "data": [
        {
            "_id": "634ef05d0f0fa30a80cf407c",
            "name": "zino",
            "email": "develo@gmail.com",
            "userName": "devel dao",
            "profile_pic": "zindjdj.jpg",
            "short_bio": "I am a UI/UX designer ",
            "long_bio": "works as a UI/UX designer at eden",
            "advocate_years_exp": 3,
            "company": [
                "634c01854437d2fc84a783db"
            ],
            "links": {
                "github": "github.com/kky",
                "twitter": "twitter.com/kky",
                "youtube": "youtube.com/kky"
            }
        },
        {
            "_id": "63698288a8e7ab002535b796",
            "name": "Scott Hanselman",
            "email": "shanels@gmail.com",
            "userName": "shanselman",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/shanselman-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "6369831da8e7ab002535b79a",
            "name": "Lee Robinson",
            "email": "leeerob@gmail.com",
            "userName": "leeerob",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/leeerob-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636982fda8e7ab002535b798",
            "name": "Pratham",
            "email": "prathkum@gmail.com",
            "userName": "prathkum",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/prathkum-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        }
    ]
}
```


***Status Code:*** 200

<br>



#### III. Example Request: success: response getting the next page x of an advocate



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| limit | 4 |  |
| page | 2 |  |



***Body: None***



#### III. Example Response: success: response getting the next page x of an advocate
```js
{
    "status": "successful",
    "results": 4,
    "data": [
        {
            "_id": "6369831da8e7ab002535b79a",
            "name": "Lee Robinson",
            "email": "leeerob@gmail.com",
            "userName": "leeerob",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/leeerob-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636983aea8e7ab002535b79e",
            "name": "Angie Jones",
            "email": "techgirl@gmail.com",
            "userName": "techgirl1908",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/techgirl1908-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636982fda8e7ab002535b798",
            "name": "Pratham",
            "email": "prathkum@gmail.com",
            "userName": "prathkum",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/prathkum-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        },
        {
            "_id": "636983d1a8e7ab002535b7a0",
            "name": "Vitto Rivabella | 0xvitto.eth | vitto.lens",
            "email": "tittoe@gmail.com",
            "userName": "vittostack",
            "profile_pic": "https://dennisivy-personal.s3.amazonaws.com/vittostack-cado.jpg",
            "short_bio": "I am ... who works as a ...",
            "advocate_years_exp": 1,
            "company": []
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get An Advocate


### This route get an advocate with the given id provided


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/v1/api/advocates/6361b866c1c5992a7da9dc57
```



***More example Requests/Responses:***


#### I. Example Request: Success: response if a valid ID is found in database



***Body: None***



#### I. Example Response: Success: response if a valid ID is found in database
```js
{
    "status": "Successful",
    "data": {
        "_id": "6361c07d389591b8f0a73177",
        "name": "david philips",
        "email": "developerdao@gmail.com",
        "userName": "developerdao",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN5gaxSCB4Nwwx6jw-4vosACBtVVqMfjugQ&usqp=CAU",
        "short_bio": "I am ... who works as a ...",
        "advocate_years_exp": 1,
        "company": [],
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Fail: response for an invalid mongoose id



***Body: None***



#### II. Example Response: Fail: response for an invalid mongoose id
```js
{
    "Status": "Failed",
    "message": {
        "stringValue": "\"jjiofajiojiojiofiojijeijiejijifj\"",
        "valueType": "string",
        "kind": "ObjectId",
        "value": "jjiofajiojiojiofiojijeijiejijifj",
        "path": "_id",
        "reason": {},
        "name": "CastError",
        "message": "Cast to ObjectId failed for value \"jjiofajiojiojiofiojijeijiejijifj\" (type string) at path \"_id\" for model \"Advocate\""
    }
}
```


***Status Code:*** 404

<br>



#### III. Example Request: Fail: response when a vali



***Body: None***



#### III. Example Response: Fail: response when a vali
```js
{
    "status": "Fail",
    "err": "This ID does not exist"
}
```


***Status Code:*** 404

<br>



#### IV. Example Request: Fail: response if a valid mongoose ID is not found



***Body: None***



#### IV. Example Response: Fail: response if a valid mongoose ID is not found
```js
{
    "status": "Fail",
    "err": "This ID does not exist or have been deleted"
}
```


***Status Code:*** 404

<br>



### 3. Create An Advocate



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/v1/api/advocates
```



***Body:***

```js        
{
    "name": "drvpro",
    "email": "drvprogrammer@gmail.com",
    "userName": "drivprogrammer"
}
```



***More example Requests/Responses:***


#### I. Example Request: Success: response if success



***Body:***

```js        
{
    "name": "coded hola",
    "email": "codedhola2000@gmail.com",
    "userName": "codedhola"
}
```



#### I. Example Response: Success: response if success
```js
{
    "status": "Successful",
    "data": {
        "name": "coded hola",
        "email": "codedhola2000@gmail.com",
        "userName": "codedhola",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN5gaxSCB4Nwwx6jw-4vosACBtVVqMfjugQ&usqp=CAU",
        "short_bio": "I am ... who works as a ...",
        "advocate_years_exp": 1,
        "company": [],
        "createdAt": "2022-11-02T00:22:57.652Z",
        "_id": "6361b866c1c5992a7da9dc57",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### II. Example Request: Failed: response if Email exist



***Body:***

```js        
{
    "name": "cod",
    "email": "codedhola2000@gmail.com",
    "userName": "codedhola"
}
```



#### II. Example Response: Failed: response if Email exist
```js
{
    "status": "Failed",
    "message": {
        "index": 0,
        "code": 11000,
        "keyPattern": {
            "email": 1
        },
        "keyValue": {
            "email": "codedhola2000@gmail.com"
        }
    }
}
```


***Status Code:*** 400

<br>



#### III. Example Request: Failed: response if userName exists



***Body:***

```js        
{
    "name": "cod",
    "email": "codedhola200@gmail.com",
    "userName": "codedhola"
}
```



#### III. Example Response: Failed: response if userName exists
```js
{
    "status": "Failed",
    "message": {
        "index": 0,
        "code": 11000,
        "keyPattern": {
            "userName": 1
        },
        "keyValue": {
            "userName": "codedhola"
        }
    }
}
```


***Status Code:*** 400

<br>



### 4. Update Or Edit an Advocate



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/v1/api/advocates/6361c07d389591b8f0a73177
```



***Body:***

```js        
{
    "name": "david philz"
}
```



***More example Requests/Responses:***


#### I. Example Request: Fail: response if a valid ID is not found in database



***Body:***

```js        
{
    
}
```



#### I. Example Response: Fail: response if a valid ID is not found in database
```js
{
    "status": "Fail",
    "err": "Advocate with ID 6361c07d389591b8f0a73170 not found or might have been deleted"
}
```


***Status Code:*** 404

<br>



#### II. Example Request: Fail: response for an invalid ID



***Body:***

```js        
{
    
}
```



#### II. Example Response: Fail: response for an invalid ID
```js
{
    "status": "Fail",
    "err": "CastError: Cast to ObjectId failed for value \"6361c07d389591b8f0a7317\" (type string) at path \"_id\" for model \"Advocate\""
}
```


***Status Code:*** 400

<br>



#### III. Example Request: Success: response if ID is found in database... update given body



***Body:***

```js        
{
    "name": "david philz"
}
```



#### III. Example Response: Success: response if ID is found in database... update given body
```js
{
    "status": "Successful",
    "data": {
        "_id": "6361c07d389591b8f0a73177",
        "name": "david philz",
        "email": "developerdao@gmail.com",
        "userName": "developerdao",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN5gaxSCB4Nwwx6jw-4vosACBtVVqMfjugQ&usqp=CAU",
        "short_bio": "I am ... who works as a ...",
        "advocate_years_exp": 1,
        "company": [],
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 5. Delete An Advocate



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/v1/api/advocates/6361c07d389591b8f0a73177
```



***More example Requests/Responses:***


#### I. Example Request: Fail: response if ID not found in database



***Body: None***



#### I. Example Response: Fail: response if ID not found in database
```js
{
    "status": "Fail",
    "err": "6361c07d389591b8f0a73170 cant be found in database, might be deleted"
}
```


***Status Code:*** 404

<br>



#### II. Example Request: Fail: response for an invalid ID



***Body: None***



#### II. Example Response: Fail: response for an invalid ID
```js
{
    "status": "Fail",
    "err": "CastError: Cast to ObjectId failed for value \"6361c07d389591b8f0a7317\" (type string) at path \"_id\" for model \"Advocate\""
}
```


***Status Code:*** 400

<br>



#### III. Example Request: Success: response once a deletion occurs



***Body: None***



***Status Code:*** 204

<br>



---
[Back to top](#hackathon)

>Generated at 2022-11-08 00:09:56 by [docgen](https://github.com/thedevsaddam/docgen)
