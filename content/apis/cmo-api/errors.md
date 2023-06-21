---
title: Errors
weight: 17
---

# Errors

## About

The CMO API will return a variety of errors if anything goes wrong with your API calls. 
Every error has an HTTP status code and, depending on the supported backend, will return an error type and brief explanation when the error is triggered. We expose API errors in JSON format. This documentation provides additional explanations of these errors and guidance on how to avoid them.  

If your API call returns an error, log the call in as much detail as you can. If you need to contact our support, we recommend including the complete request you’re trying to make, the error code, and the response you’re receiving so they can help as quickly as possible. 



## Common causes

Here are some general troubleshooting steps for common IoT API error messages. 

| Error                          | Troubleshooting                                                                                                                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Unauthorized Access**        | Double-check the authentication credentials you are using, such as API keys or access token, and ensure they are correct.                                                                                                                        |
| **Invalid Request Parameters** | Review the API documentation to ensure you are using the correct request parameters and formatting them properly.                                                                                                                                |
| **Resource Not Found:**        | Verify that the requested resource or endpoint exists and is accessible.<br>Check if there are any typos or errors in the URL or resource identifier.                                                                                            |
| **Rate Limit Exceeded**        | Try a new request after 1 hour.<br>Consider optimizing your API usage by batching requests or reducing the frequency of requests.                                                                                                                |
| **Server Error**               | Check our status page to see if there are any known issues with the API service.<br>Retry the request after some time as the server error may be temporary.<br>If the error persists, please contact our support team for further investigation. |

For more detail, please consult:
Glossary repository 
[CMO API](https://myiot-d.com/docs/api/cmo-v5.yml)


## Supported platforms

According to the used platform, the errors’ numbers and resolutions may present variations. 
Here is a list of platforms we support for your reference:

| Platform Name     | Platform Supplier     |
| ----------------- |-----------------------|
| TMSP              | Telekom Deutschland   |
| ERICSSON          | T-Mobile Austria      |
| TMUS              | T-Mobile US           |
| JASPER            | Etisalat              |
| AIRLINQ           | Jio                   |
| INTELSAT          | Intelsat              |
| STC               | Saudi Telecom Company |

# Error repository
## 400

There are different error titles returned for 400 errors, which will return an explanation in the “detail” field. Some of the most notable include: 

**Bad Request** 
This is the generic error type for not being able to process the request, and will generally contain an explanation in the message.
**Missing or malformed parameter**
The submitted POST body failed our input validation. This error may include an additional “errors” property, with a list of the validation issues.
**Invalid Action: The action requested was not valid for this resource.**
Returned when you try to access an action on a resource that doesn’t support that action.

**How to solve**

- Examine the response body and headers provided in the 400 error response.
- Check that the request is properly formatted according to the API's specifications.
- Ensure that the HTTP headers, request method (e.g., GET, POST), and endpoint URL are correct.

**Considerations per platform:**
Similar to all supported platforms.


## 401

**Unauthorized Access**
Authentication information is missing or invalid.

**How to solve**

- Go to **Application Access Management**
- Check the authentication credentials you are using, such as API keys or access token, and ensure they are correct. 
- Verify that the credentials have the necessary permissions to access the requested resource.
- If using OAuth-based authentication, ensure that the authentication flow is correctly implemented and that you have obtained a valid access token.
-  The access token expires every 5 minutes, you may need to generate a new token.

**Considerations per platform:**

| TMSP     |  |
| -------- |  |
| TMUS     |  |
| JASPER   |  |
| AIRLINQ  |  |
| INTELSAT |  |
| STC      |  |



## 403

**Forbidden**
Not enough permissions. The client has valid credentials but not enough privileges to perform an action on a resource.

**How to solve**
Please contact the admin of your account to update your access permissions.

**Considerations per platform:**
Similar to all supported platforms.


