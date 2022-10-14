# :chart_with_upwards_trend: API Documentation

<details>
 <summary>Table of Contents </summary>
 
- [FEATURE 0: USER AUTHORIZATION](#feature-0--user-authorization)
  * [All endpoints that require authentication](#all-endpoints-that-require-authentication)
  * [All endpoints that require proper authorization](#all-endpoints-that-require-proper-authorization)
  * [Get the Current User](#get-the-current-user)
  * [Log In a User](#log-in-a-user)
  * [Sign Up a User](#sign-up-a-user)
- [FEATURE 1: BUSINESSES](#feature-1--businesses)
  * [Get all Businesses](#get-all-businesses)
  * [Businesses owned by Current User](#businesses-owned-by-current-user)
  * [Get details of a Business from an Id](#get-details-of-a-business-from-an-id)
  * [Create a Business](#create-a-business)
  * [Edit Business](#edit-business)
  * [Delete a Business](#delete-a-business)
- [FEATURE 2: REVIEWS](#feature-2--reviews)
  * [Get all Reviews of the Current User](#get-all-reviews-of-the-current-user)
  * [Get all Reviews by a Business's id](#get-all-reviews-by-a-businesses-s-id)
  * [Create a Review for a Business based on the Business's id](#create-a-review-for-a-business-based-on-the-business-s-id)
  * [Add an Image to a Review based on the Review's id](#add-an-image-to-a-review-based-on-the-review-s-id)
  * [Edit a Review](#edit-a-review)
  * [Delete a Review](#delete-a-review)
- [FEATURE 3: TAGS](#feature-3--tags)
  * [Get all Tags](#get-all-tags)
  * [Get Tags by Business ID](#get-tags-by-business-id)
  * [Create Tags for a business by business ID](#create-tags-for-a-business-by-business-id)
  * [Update Tags by Business ID](#update-tags-by-business-id)
 
</details>


## FEATURE 0: USER AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "status_code": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden",
      "status_code": 403
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/session
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "user_avatar":"image.url"
    }
    ```
### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/session
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "status_code": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "status_code": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```
    
### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/users
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "first_name": "John",
      "last_name": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "status_code": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "status_code": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "status_code": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "first_name": "First Name is required",
        "last_name": "Last Name is required"
      }
    }
    ```
    
    
## FEATURE 1: BUSINESSES

## Get all Businesses

Returns all the businesses

Return businesses (with optional filter by query parameters).

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/businesses
  * Query Parameters
    * page: integer, minimum: 1, maximum: 10, default: 1
    * size: integer, minimum: 1, maximum: 20, default: 20
    * business_name: string, optional
    * business_tags: string, optional
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "businesses":[
        {
          "id": 1,
          "business_name": "Some Place",
          "email":"business@app.io",
          "phone":"123-456-8910",
          "street_address": "123 Street Ave",
          "city":"Springfield",
          "zipcode":98765,
          "state":"CA",
          "country":"United States of America",
          "about":"Some descriptive sentence",
          "longitude":130,
          "latitude":90,
          "price_range":,
          "owner_id": 1,
          "website":"linktobusinesswebsite.url",
          "created_at":"some date string",
          "updated_at":"some other date string",
        }
      ],
      "page": 1,
      "size": 15
    }
    ```
    
## Businesses owned by Current User

Returns all Businesses owned by the current user.

* Require Authentication: True
* Request
  * Method: GET
  * URL: /api/businesses/current
  * Body: none
 * Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body: 
  ```json
  {
      "businesses":[
        {
          "id": 1,
          "business_name": "Some Place",
          "email":"business@app.io",
          "phone":"123-456-8910",
          "street_address": "123 Street Ave",
          "city":"Springfield",
          "zipcode":98765,
          "state":"CA",
          "country":"United States of America",
          "about":"Some descriptive sentence",
          "longitude":130,
          "latitude":90,
          "price_range":,
          "owner_id": 1,
          "website":"linktobusinesswebsite.url",
          "created_at":"some date string",
          "updated_at":"some other date string",
        }
      ]
    }
  ```
  
  ## Get details of a Business from an Id
  
  Returns details of a business specified by its id
  
   * Require Authentication: false
   * Request
     * Method: GET
     * URL: /api/businesses/:business_id
   * Successful Response
     * Status Code: 200
     * Headers:
       * Content-Type: application/json 
     * Body:
```json
{
          "id": 1,
          "business_name": "Some Place",
          "email":"business@app.io",
          "phone":"123-456-8910",
          "street_address": "123 Street Ave",
          "city":"Springfield",
          "zipcode":98765,
          "state":"CA",
          "country":"United States of America",
          "about":"Some descriptive sentence",
          "longitude":130,
          "latitude":90,
          "price_range":,
          "owner_id": 1,
          "website":"linktobusinesswebsite.url",
          "created_at":"some date string",
          "updated_at":"some other date string",
          "Owner": {
            "id":1,
            "first_name":"Gare",
            "last_name":"Bear",
          },
          "Images" : [
            {
               "id":3,
               "business_id":1,
               "url":"image.url"
            }
          ],
          "Reviews": [
            {
              "id":1,
              "business_id":1,
              "user_id":1,
              "rating":4,
              "review":"Yummy! I'd take my wife here again!",
              "created_at":"some date",
              "updated_at":"some date"
            }
          ],
          "Tags": {
              "tag":"some tags as string here"
          }
          
          
}
```
* Error response: Couldn't find a Business with the specified id

  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body: 
  ```json
  {
    "message":"Sorry, this business doesn't exist",
    "status_code":404
  }
  ```
  ## Create a Business
  
  Create and return a business
  
  * Require Authentication: true
  * Request
    * Method:POST
    * URL:/api/business
    * Headers:
      * Content-Type: application/json
    * Body:
```json
{
      "business_name": "Some Place",
      "email":"business@app.io",
      "phone":"123-456-8910",
      "street_address": "123 Street Ave",
      "city":"Springfield"        
      "zipcode":98765,
      "state":"CA",
      "country":"United States of America",
      "about":"Some descriptive sentence",
      "longitude":130,
      "latitude":90,
      "price_range":,
}
```
* Successful Response
  * Status Code: 201
  * Headers: 
    * Content-Type: application/json
  * Body:
```json
{
          "id": 1,
          "business_name": "Some Place",
          "email":"business@app.io",
          "phone":"123-456-8910",
          "street_address": "123 Street Ave",
          "city":"Springfield",
          "zipcode":98765,
          "state":"CA",
          "country":"United States of America",
          "about":"Some descriptive sentence",
          "longitude":130,
          "latitude":90,
          "price_range":,
          "owner_id": 1,
          "created_at":"some date string",
          "updated_at":"some other date string",
        }
```
* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body: 
```json
{
   "message":"Validation Error",
   "status_code": 400,
   "errors":{
      "street_address":"Address is required",
      "street_address":"A business already exists with this address",
      "city":"City is required",
      "state":"State is required",
      "country","Country is required",
      "zipcode":"Zipcode is required",
      "business_name":"Business name is required",
      "business_name":"A business with this name already exists",
      "business_name":"Business name must be less than 50 characters",
      "about":"About is required",
      "longitude":"Longitude is required",
      "latitude":"latitude is required",
      "price_range":"Price range is required"
      
   }
}
```

   ## Edit Business
   
   Edit and return an existing business
   
   * Require Authentication: true
   * Request
      * Method:PUT
      * URL:/api/businesses/:business_id
      * Headers:
         * Content-Type: application/json
      * Body:
```json
{
      "business_name": "Some Place",
      "email":"business@app.io",
      "phone":"123-456-8910",
      "street_address": "123 Street Ave",
      "city":"Springfield",        
      "zipcode":98765,
      "state":"CA",
      "country":"United States of America",
      "about":"Some descriptive sentence",
      "longitude":130,
      "latitude":90,
      "price_range":1-5,
      "website":"linktobusinesswebsite.url",
}
```
* Successful Response
  * Status Code: 201
  * Headers:
     * Content-Type: application/json
  * Body: 
```json
{
          "id": 1,
          "business_name": "Some Edited Place",
          "email":"new_email@app.io",
          "phone":"123-456-8910",
          "street_address": "123 New Street",
          "city":"Newfield",
          "zipcode":98765,
          "state":"CA",
          "country":"United States of America",
          "about":"Updated descriptive sentence",
          "longitude":130,
          "latitude":90,
          "price_range":,
          "owner_id": 1,
          "website":"linktobusinesswebsite.url",
          "created_at":"some date string",
          "updated_at":"some other date string",
}
```
* Error Response: Body Validation Error
    * Status Code: 400
    * Headers: 
       * Content-Type: application/json
    * Body:
```json
{
   "message":"Validation Error",
   "status_code": 400,
   "errors":{
      "street_address":"Address is required",
      "street_address":"A business already exists with this address",
      "city":"City is required",
      "state":"State is required",
      "country","Country is required",
      "zipcode":"Zipcode is required",
      "business_name":"Business name is required",
      "business_name":"A business with this name already exists",
      "business_name":"Business name must be less than 50 characters",
      "about":"About is required",
      "longitude":"Longitude is required",
      "latitude":"latitude is required",
      "price_range":"Price range is required"
}
```
* Error Response: Couldn't find a business associated with the specified id
    * Status Code: 404
    * Headers:
      * Content-Type: application/json
    * Body:
```json
{
  "message":"This business couldn't be found",
  "status_code":404
}
```

  ## Delete a Business
  
  Delete an existing Business
  
   * Require Authentication: true
   * Request
      * Method:DELETE
      * URL:/api/businesses/:business_id
      * Headers:
         * Content-Type: application/json
      * Body: None
      
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Business with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Business couldn't be found",
      "statusCode": 404
    }
    ```
    
## FEATURE 2: REVIEWS

### Get all Reviews of the Current User

Returns all the reviews written by the current user.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/reviews/current
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "reviews": [
        {
          "id": 1,
          "user_id": 1,
          "business_id": 1,
          "review": "This was an awesome spot!",
          "rating": 5,
          "created_at": "2021-11-19 20:39:36",
          "updated_at": "2021-11-19 20:39:36" ,
          "user": {
            "id": 1,
            "first_name": "John",
            "last_name": "Smith"
          },
          "businesses": {
            "id": 1,
            "owner_id": 1,
            "business_name": "Some Place",
            "email": "business@app.io",
            "phone": "123-456-8910",
            "street_address": "123 Street Ave",
            "city": "Springfield",
            "zipcode": 98765,
            "state": "CA",
            "country": "United States of America",
            "about": "Some descriptive sentence",
            "longitude": 130,
            "latitude": 90,
            "price_range": 1,
            "created_at":"some date string",
            "updated_at":"some other date string"
          },
          "review_images": [
            {
              "id": 1,
              "url": "image url"
            }
          ]
        }
      ]
    }
    ```

### Get all Reviews by a Businesses's id

Returns all the reviews that belong to a spot specified by id.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/businesses/:business_id/reviews
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "reviews": [
        {
          "id": 1,
          "user_id": 1,
          "business_id": 1,
          "review": "This was an awesome spot!",
          "rating": 5,
          "created_at": "2021-11-19 20:39:36",
          "updated_at": "2021-11-19 20:39:36" ,
          "user": {
            "id": 1,
            "first_name": "John",
            "last_name": "Smith"
          },
          "review_images": [
            {
              "id": 1,
              "url": "image url"
            }
          ],
        }
      ]
    }
    ```

* Error response: Couldn't find a Business with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Business couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Review for a Business based on the Business's id

Create and return a new review for a spot specified by id.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/businesses/:business_id/reviews
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "review": "This was awful!",
      "nopes": 5,
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "user_id": 1,
      "business_id": 1,
      "review": "This was awful!",
      "nopes": 5,
      "created_at": "2021-11-19 20:39:36",
      "updated_at": "2021-11-19 20:39:36"
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review text is required",
        "nopes": "Nopes must be an integer from 1 to 5",
      }
    }
    ```

* Error response: Couldn't find a Business with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Business couldn't be found",
      "statusCode": 404
    }
    ```

* Error response: Review from the current user already exists for the Business
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already has a review for this business",
      "statusCode": 403
    }
    ```

### Add an Image to a Review based on the Review's id

Create and return a new image for a review specified by id.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  * Method: POST
  * URL: /api/reviews/:review_id/images
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "url": "image url"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "url": "image url"
    }
    ```

* Error response: Couldn't find a Review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```

* Error response: Cannot add any more images because there is a maximum of 10
  images per resource
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Maximum number of images for this resource was reached",
      "statusCode": 403
    }
    ```

### Edit a Review

Update and return an existing review.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  * Method: PUT
  * URL: /api/reviews/:review_id
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "review": "This was awful!",
      "nopes": 5,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "user_id": 1,
      "business_id": 1,
      "review": "This was awful!",
      "nopes": 5,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 10:06:40"
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review text is required",
        "nopes": "Nopes must be an integer from 1 to 5",
      }
    }
    ```

* Error response: Couldn't find a Review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Review

Delete an existing review.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/reviews/:review_id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```
## Feature 3: Tags

### Get all Tags

Returns all tag options.

* Require Authentication: True
  * Method: GET
  * URL: /api/tags
  * Body: none
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:
```json
  {
      tags: ["some tag", "some other tag", "etc"]
  }
```

### Get Tags by Business ID

Returns all tags associated with a business by business ID

* Require Authentication: False
  * Method: GET
  * URL: /api/businesses/:business_id/tags
  * Body: None
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:
```json
    {
      tags: ["some tag", "some other tag", "etc"]
    }
```
* Error response: Couldn't find a Business with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

```json
    {
      "message": "Business couldn't be found",
      "statusCode": 404
    }
```
### Create Tags for a business by business ID

Add tags to a business through its ID

* Require Authentication: True
* Request
  * Method: POST
  * URL: /api/businesses/:business_id/tags
  * Body:
```json
  {
     tags: ["some tag", "some other tag", "etc"]
  }
```
* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:
```json
   {
      tags: ["some tag", "some other tag", "etc"]
   }
```
* Error response: Couldn't find a Business associated with the specified ID
* Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

```json
    {
      "message": "Business couldn't be found",
      "statusCode": 404
    }
```
### Update Tags by Business ID
Update tags associated with a business.
* Require Authentication: True
* Request:
  * Method: POST
  * URL: /api/businesses/:business_id/tags
  * Body:
```json
  {
      tags: ["some tag", "some other tag", "etc"]
  }
```
* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:
```json
   {
     tags: ["some tag", "some other tag", "etc"]
   }
```
* Error Response: Body Validation Error
    * Status Code: 400
    * Headers:
       * Content-Type: application/json
    * Body:
```json
   {
      "message":"Validation Error",
      "status_code": 400,
      "errors":{
         "message":"Tag is required",
      }
    }
```
* Error response: Couldn't find a Business associated with the specified ID
* Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

```json
    {
      "message": "Business couldn't be found",
      "statusCode": 404
    }
```
