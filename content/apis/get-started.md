---
title: Get started
weight: 02
---

# Connect Your Application to the T IoT Hub

This tutorial will guide you through the initial steps of using the Connection Management Orchestrator (CMO) and Device Management Orchestrator (DMO) APIs. 
Topics covered include:

- Set up your API credentials.
- Fetch an API token for access.
- Register your application entity for DMO API communication.


## You will learn how to
- Create API credentials in the **Application Access Management.**
- Retrieve an **API Token (Locally).**
- Register your **Application Entity** to communicate with the DMO.


## Prerequisites

Before we begin, make sure that:

1. You possess a T IoT Hub Account with an Admin role. Having this will grant you access to the CMO and DMO API, enable you to request an API key, and register your application.
2. You possess an HTTP Client, such as [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

{{< note "NOTE" >}}
  - {{< textsm >}}This tutorial will refer to the use of cURL. If you use a different platform, the setup might vary.{{</ textsm >}}
{{< /note >}}

## Step 1. Create API credentials in the Application Access Management

To access the DMO and CMO API, you must first create an application on the Application Access Management page in the T IoT Hub.


- In the website header, click on [your name].
- Click on **Application access management**.
- In the Application access management, click on **Add new application access**.
- Enter an **Application name** **(Nickname for your app)** and enter the email of the person responsible for the Application.
- Select the permissions you want the developer to access.
![](https://paper-attachments.dropboxusercontent.com/s_0C7C1C4F53B15444899ED61E229344347BC79B092D689F87A88BEACD2E08EE05_1685958727744_Application+Management.png)

- Once you successfully create the account, you should have a **Client ID** `<your_client_id>` and a **Client Secret** `<your_client_secret>`.
    
- To view your client credentials, click on the **Application Name**
![](https://paper-attachments.dropboxusercontent.com/s_0C7C1C4F53B15444899ED61E229344347BC79B092D689F87A88BEACD2E08EE05_1685960815973_Client+ID.png)


## Step 2. Retrieve an API Token (Locally)
You must retrieve an API token to send requests and interact with the API. In our case, we will be using cURL to execute operations. To check if cURL is installed on your hardware, open a terminal or CMD and run:

{{< code >}}
```bash
    $curl --version
```
{{</ code >}}

{{< note "NOTE" >}}
  - {{< textsm >}}The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.{{</ textsm >}}
{{< /note >}}

- First, open the CMD line or your preferred HTTP client.
- Set up the API endpoints with the following cURL command and replace the values of `<your_client_id>` and  `<your_client_secret>` with your data.

{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}
```bash
curl --location --request POST 'https://iam-br-iot.myiot-t.com/auth/realms/iothub/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
//Replace <your_client_id> with your client id.
--data-urlencode 'client_id=<your_client_id>' \
//Replace <your_client_secret> with your client secret.
--data-urlencode 'client_secret=<your_client_secret>' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=openid email profile'
```
{{</ code >}}

{{< /tab >}}

{{< tab "Example" >}}

{{< code >}}
```bash
curl --location 'https://iam-br-iot.myiot-t.com/auth/realms/iothub/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_secret=••••••' \
--data-urlencode 'client_id=5722e237-c93a-4bff-a3bd-8c3f4a385ab3' \
--data-urlencode 'scope=openid'
```
{{< /code >}}
{{< /tab >}}

{{< tab "Output" >}}

{{< code >}}
```plain
Please add an output code
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}




- Retrieve an **API Token** with the following cURL command and replace the values of `<your_client_secret>` and `<your_client_id>`

{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}
```bash
curl --location 'https://iam-br-iot.myiot-t.com/auth/realms/iothub/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
//Change this with <your_client_secret>
--data-urlencode 'client_secret=<your_client_secret>' \
//Change this with <your_client_id>
--data-urlencode 'client_id=<your_client_id>' \
--data-urlencode 'scope=openid'
```
{{</ code >}}

{{< /tab >}}

{{< tab "Example" >}}

{{< code >}}
```plain
Please add an output code
```
{{< /code >}}
{{< /tab >}}

{{< tab "Output" >}}

{{< code >}}
```
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4Y1Z5QWdPZW13dHV4VVIwX2x5NEYtWkNzeTVWR1dQakxVaDNkc285anE0In0.eyJleHAiOjE2ODYyOTk3NjIsImlhdCI6MTY4NjI5OTQ2MiwianRpIjoiNzk5NWM0ODYtYjM1YS00OTQxLTlhNGUtM2UyMTYxYTFjZDRkIiwiaXNzIjoiaHR0cHM6Ly9pYW0tYnItaW90Lm15aW90LXQuY29tL2F1dGgvcmVhbG1zL2lvdGh1YiIsInN1YiI6ImE4MDFhNzA4LWI1MGQtNDdiNi04MDZjLTFhZjhjNjBlOWM3NyIsInR5cCI6IkJlYXJlciIsImF6cCI6IjU3MjJlMjM3LWM5M2EtNGJmZi1hM2JkLThjM2Y0YTM4NWFiMyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicm8lY29ubmVjdGlvbi1tYW5hZ2VtZW50LW9yY2hlc3RyYXRvciIsInJ3JWNvbm5lY3Rpb24tbWFuYWdlbWVudC1vcmNoZXN0cmF0b3IiLCJybyVkZXZpY2UtbWFuYWdlbWVudC1vcmNoZXN0cmF0b3IiLCJydyVkZXZpY2UtbWFuYWdlbWVudC1vcmNoZXN0cmF0b3IiXX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJ0ZW5hbnRzIjpbImVvcyJdLCJjbGllbnRIb3N0IjoiMjEzLjIzOS4xMDMuMjM4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRJZCI6IjU3MjJlMjM3LWM5M2EtNGJmZi1hM2JkLThjM2Y0YTM4NWFiMyIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC01NzIyZTIzNy1jOTNhLTRiZmYtYTNiZC04YzNmNGEzODVhYjMiLCJjbGllbnRBZGRyZXNzIjoiMjEzLjIzOS4xMDMuMjM4In0.lbPJu6PMBbmMOClsrmKNd2QhOeH71MORQII7i0WkSmVrPKlS1uWao6Cv1yxwcPIEjH6hXYRwUe1tKhz_HoGELBjWmA8-4WAx1lRxIFXbim-RTe9MmDBOBawKU8qqSN7aRqKewuKsvhmsiY_iSEksw1Pfexi3UNG27BCCb_L3vYvtEeZAgRysecCQXlDwYeHe3XTdMIkAILvB3adiobIRDjmGtx9GjjYPuM-il2aG_813zDXMP0xFUsQqbf2pRUlSRAcWtgeXkISRTvqXVdaeIe7qgN2lCCJB6BwZah5eyEaFQhZKndY2jSHx1wZ8v2x0K85Uj0zIjdlJquHFWMlinw",
    "expires_in": 300,
    "refresh_expires_in": 0,
    "token_type": "Bearer",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4Y1Z5QWdPZW13dHV4VVIwX2x5NEYtWkNzeTVWR1dQakxVaDNkc285anE0In0.eyJleHAiOjE2ODYyOTk3NjIsImlhdCI6MTY4NjI5OTQ2MiwiYXV0aF90aW1lIjowLCJqdGkiOiJiNDJiMGZhZi05ODQ3LTRjMzAtYjY0MS04OGRkODUyNzk0MTciLCJpc3MiOiJodHRwczovL2lhbS1ici1pb3QubXlpb3QtdC5jb20vYXV0aC9yZWFsbXMvaW90aHViIiwiYXVkIjoiNTcyMmUyMzctYzkzYS00YmZmLWEzYmQtOGMzZjRhMzg1YWIzIiwic3ViIjoiYTgwMWE3MDgtYjUwZC00N2I2LTgwNmMtMWFmOGM2MGU5Yzc3IiwidHlwIjoiSUQiLCJhenAiOiI1NzIyZTIzNy1jOTNhLTRiZmYtYTNiZC04YzNmNGEzODVhYjMiLCJhdF9oYXNoIjoicU94aFFHYWszYUtyd2hQTzFOSzZrUSIsImFjciI6IjEiLCJ0ZW5hbnRzIjpbImVvcyJdLCJjbGllbnRIb3N0IjoiMjEzLjIzOS4xMDMuMjM4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRJZCI6IjU3MjJlMjM3LWM5M2EtNGJmZi1hM2JkLThjM2Y0YTM4NWFiMyIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC01NzIyZTIzNy1jOTNhLTRiZmYtYTNiZC04YzNmNGEzODVhYjMiLCJjbGllbnRBZGRyZXNzIjoiMjEzLjIzOS4xMDMuMjM4In0.DMxuG9LrydwAKbjw9ErZMjKj_3WVu1H5azhx_CvbwlnWMWbBdoZHFhsYyVndBJ28Bz6dqYvYMNU3kyTbkzWxqkWtlLo4l5V8F-kkVJv1_OFrf43PFfQ349eAtF_arosXvklLHtiYb927E_JwlcD286BCffpXUK57SPBw_aLKdKdAIvAVo0K9p9PHE47UvzTSmPz2AgenuA4zgd1Xh1enUU8_TNFvgdMTUeWaX2EMx8xOoR74Nx3k0svDkHSbumdYXhIYo5MiLhp-ypklEcfi0xR8jhn-dvqq4GYSbkfHkfTsQobJ1lqZVPZF-NY45MIQhR78u2cEqHjSEVlTUs6oJA",
    "not-before-policy": 1681129780,
    "scope": "openid email profile"
}
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}

    
{{< note "NOTE" >}}
  - {{< textsm >}}The API token has an expiration time of 5 minutes (300 seconds).{{</ textsm >}}
{{< /note >}}



## Step 3. Register your application in DMO

To interact with the **DMO API**, you need to register your Application.

{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}

```bash
 //Enter your tenant name
curl --location 'https://myiot-t.com/api-gw/device-management-orchestrator/v3/<your_tenant_name>' \
--header 'Content-Type: application/json;ty=2' \
//Enter the Name of your application. The name has to start with "C".
--header 'X-M2M-Origin: C<your_application_origin>' \
--header 'X-M2M-RI: 123' \
--header 'Accept: application/json' \
//Enter your API Token.
--header 'Authorization: Bearer <your_api_token>' \
--data '{
    "m2m:ae": {
        //Enter the Type of your application. The name has to start with "N".
        "api": "N<your_application_type>",
        //Enter the Name of your application.
        "rn": "PostmanDemo<your_application_name>"
    }
}'
```

{{</ code >}}

{{< /tab >}}

{{< tab "Example" >}}

{{< code >}}
```plain
Please add an output code
```
{{< /code >}}

{{< /tab >}}

{{< tab "Output" >}}

{{< code >}}

```json
{
        "m2m:ae": {
            "api": "NTest",
            "rn": "TestApp",
            "ty": 2,
            "ri": "6482e3935b243e17db6ad715",
            "aei": "CAppTest",
            "pi": "eos",
            "ct": "20230609T083219,210000",
            "lt": "20230609T083219,210000"
        }
    }
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}

- Status code “201 created” means you registered your application successfully.


The **Application ID** you create during application registration is the ID you must use in the **X-M2M-Origin header** of all subsequent requests to the DMO API. Otherwise, the system will reject your request. This is important because DMO API must “know” the application using it for every request.

