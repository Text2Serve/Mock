# Text-To-Serve Mock

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Hit API [http://localhost:8080](http://localhost:8080)

4. Test API endpoints

## Technologies

- Node.js
- Express.js

## API Documentation

### Get One User

- **URL**

  `/user/:userId`

- **Method**

  `GET`

- **URL Params**

  **Required:**

  `userId=[string]`

- **Success Response**

  - **Code:** 200

    **Content:**

    ```json
    {
      "data": {
        "id": "2ec30fa8-ef9f-4b56-8ca9-68cd2af3665f",
        "name": "John"
      }
    }
    ```

- **Error Response**

  - **Code:** 404

    **Content:**

    ```json
    {"message": "404}
    ```

---

### Get Messages

- **URL**

  `/messages/:conversationId`

- **Method**

  `GET`

- **URL Params**

  **Required:**

  `conversationId=[string]`

- **Success Response**

  - **Code:** 200

    **Content:**

    ```json
    {
      "data": [
        {
          "id": "f32ee7ec-e9df-476a-a752-c26c321c4496",
          "conversationId": "25ed2016-a6f2-483b-a89f-a16881bdc3aa",
          "userId": "3a578a79-fd94-4eea-837f-e1b53625f975",
          "content": "Good morning",
          "createdAt": "2022-03-24T13:18:31.42405804Z"
        }
      ]
    }
    ```

- **Error Response**

  - **Code:** 404

    **Content:**

    ```json
    {"message": "404}
    ```

---

### Get Messages

- **URL**

  `/conversations`

- **Method**

  `GET`

- **Success Response**

  - **Code:** 200

    **Content:**

    ```json
    {
      "data": [
        {
          "id": "25ed2016-a6f2-483b-a89f-a16881bdc3aa",
          "members": [
            {
              "userId": "3a578a79-fd94-4eea-837f-e1b53625f975"
            },
            {
              "userId": "c7e1a461-d10b-44c2-af7a-d5154ce7dda2"
            }
          ]
        }
      ]
    }
    ```

- **Error Response**

  - **Code:** 404

    **Content:**

    ```json
    {"message": "404}
    ```
