# Wing API

This is a RESTful API service that manages people's profiles.

## Available Routes

### GET /api/people
Retrieves a list of all registered people in the system.

### POST /api/people
Creates a new person profile with the following attributes:

```json
{
  "name": "string",         // Person's name
  "instagram": "string",    // Instagram handle
  "dob": "YYYY-MM-DD",     // Date of birth
  "gender": "string",       // Gender identity
  "interested_in": "string", // Gender preference
  "photo_url": "string"     // URL to profile photo
}
```

## Response Format
The API returns responses in JSON format.
