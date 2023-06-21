---
title: Work with Custom Properties
weight: 06
---

# Work with Custom Properties

In this guide, we will show you how to view and create custom properties of an IoT Connection product using the Connection Management Orchestrator (CMO) and Device Management Orchestrator (DMO) APIs with cURL. We'll be focusing on a SIM card, but the same process can be applied to both satellite and SIM cards.


{{< note "NOTE" >}}
  - {{< textsm >}}The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request this is most likely an **expired token**.{{</ textsm >}}
{{< /note >}}

## You will learn how to:
- Retrieve a list of IoT **Connectivity Products**
- Retrieve the fixed and custom properties of your **Connection products.**
- Create a custom property for your **Connection product.**

## Prerequisites
Before we begin, ensure you've completed the initial tutorial, "Connecting Your Application to the T IoT Hub". Confirm that:

1. Your application is registered in the Application Access Management.
2. A request to fetch the API token is configured.
3. Your Application Entity (AE) is registered in your environment.
4. You possess an HTTP Client, such as [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

{{< note "NOTE" >}}
  - {{< textsm >}}This tutorial will refer to the use of cURL. If you use a different platform, the setup might vary.{{</ textsm >}}
{{< /note >}}


## Step 1. Retrieve a list of IoT Connectivity Products

First, we need to identify the Connectivity product that you want to create and view properties for. In our case, we will be using cURL to execute operations. To check if cURL is installed on your hardware, open a terminal or CMD and run:

{{< code >}}
```bash
    $curl --version
```

- Retrieve a list of IoT connectivity products with the following cURL command. Replace the values of `<your_tenant_name>` and `<your_api_token>` with your own data.

{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}
```bash
curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product?pageSize=10' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>'
```
{{</ code >}}

{{< /tab >}}

{{< tab "Example" >}}

{{< code >}}
```plain
Please add an example code
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


{{< note "NOTE" >}}
  - {{< textsm >}}The `pageSize` refers to the number of **Connectivity products** you wish to retrieve from the first page. In our case, we are retrieving **10 products**. You can also use `pageNumber` to refer to a specific page. Play around with the `pageSize` number to retrieve more or fewer products.{{</ textsm >}}
{{< /note >}}


## Step 2. View properties of an IoT Connection Product 

Now that we have the `id` number of our IoT Connection Product we can use the `id` number of the SIM card to access its fixed and custom properties.

- Retrieve the details of an IoT Connection Product with the following cURL command. Replace the values of `<your_tenant_name>`, `<your_product_id>`, and `<your_api_token>` with your own data.


{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}The reason we append to the `-simCard` at the end of the request path is that we have multiple substructures inside a connectivity product. `-dataConnectivity` is another example of a request path.{{</ div >}}

{{< code >}}
```bash
curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>-simCard' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>'
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
```json
{
  "id": "JASPER-8997112212741433745-simCard",
  "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/JASPER-8997112212741433745-simCard",
  "isBundle": false,
  "status": "ACTIVE",
  "productCharacteristic": [
    {
      "name": "dateActivated",
      "value": "2021-03-23T17:12:51.871Z"
    },
    //and so on for other properties
  ],
  "@baseType": "product",
  "@type": "simCard",
  "correlationId": "569219dc-4de8-47f0-92eb-d46cbbc13500"
}
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}


- Below the `productCharacteristic` you will see all the properties of your Connection Product. In our case, we used a SIM card. This is also the area where you would see your custom properties once they are added.


## Step 3. Creating a custom property

To create a custom property we can use the `id` number of the SIM card to send a `patch` request that will add the property for you.

- Create the custom property with the following cURL command and replace the values of `<your_tenant_name>`, `<your_product_id>`, `<your_property_name>` and `<your_property_value>` with your own data.

---
{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}
```bash
curl --location --request PATCH 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>-simCard' \
--header 'Content-Type: application/json-patch-query+json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>' \
--data '[
  {
    "op": "add",
    "path": "customProperty",
    "value": {
      "name": "<your_property_name>",
      "value": "<your_property_value>"
    }
  }
]'
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
  // other properties...
  "customProperty": [
    {
      "name": "MyFavoriteColour",
      "value": "Blue"
    }
  ],
  "@baseType": "product",
  "@type": "simCard",
  "correlationId": "32490aa9-4113-46ee-9483-a95df66ac6c8"
}
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}

- Once you have successfully added your custom property, the SIM card body will include a new attribute named `**customProperty**` with your new custom property added.

{{< note "NOTE" >}}
  - {{< textsm >}}Your custom property can also be accessed through the GUI of the **T IoT Hub** on the **Connectivity Management** page.{{</ textsm >}}
{{< /note >}}
