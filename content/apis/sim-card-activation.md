---
title: SIM Card Activation
weight: 07
---

# SIM Card Activation

This tutorial will guide you on activating a SIM card and verifying its activation status with the Connection Management Orchestrator (CMO) and Device Management Orchestrator (DMO) APIs. We'll cover both synchronous and asynchronous methods in detail.

**Synchronous request** - In the API, calls for operations like activating a SIM card happen immediately. The client application sends the request and waits for an immediate response.
**Asynchronous request** - In the API, calls for operations like activating a SIM card receive a tracker ID. This tracker ID allows the user to track the operation's progress while being processed in the background.

{{< note "NOTE" >}}
  - {{< textsm >}}The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request this is most likely an **expired token**.{{</ textsm >}}
{{< /note >}}

## You will learn how to
- Retrieve a list of **IoT Connection Products**
- Retrieve details of an **IoT Connection Product**
- Update the status of an **IoT Connection Product (Synchronous)**
- Update the status of an **IoT Connection Product (Asynchronous)**
- Monitor the result of an asynchronous status change **(Asynchronous)**


## Prerequisites

Before we begin, ensure you complete the initial tutorial, "Connecting Your Application to the T IoT Hub". 

Make sure that you:

1. Register your application in Application Access Management
2. Configure a request to fetch the API token
3. Register Application Entity (AE) in your environment.
4. Possess an HTTP Client, such as [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

{{< note "NOTE" >}}
  - {{< textsm >}}This tutorial will refer to the use of cURL. If you use a different platform, the setup might vary.{{</ textsm >}}
{{< /note >}}



## Step 1. Retrieve a list of IoT Connectivity Products

To identify connectivity products that need updating, you need to obtain a list of these products. In our case, we will be using cURL to execute operations. To check if cURL is installed on your hardware, open a terminal or CMD and run:

{{< code >}}
```bash
    $curl --version
```
{{< /code >}}

- Retrieve a list of IoT connectivity products with the following cURL command and replace the values of `<your_tenant_name>` and `<your_api_token>` with your data.


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
```json
    "id": "INTELSAT-27492",
        "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/INTELSAT-27492",
        "status": "INACTIVE",
        "connectivityType": "SATELLITE",
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}



{{< note "NOTE" >}}
  - {{< textsm >}}The `pageSize` refers to the number of **Connectivity products** you wish to retrieve from the **first page**. In this case, we are retrieving **ten products**. You can also use `pageNumber` to refer to a specific page. Play around with the `pageSize` number to retrieve more or fewer products.{{</ textsm >}}
{{< /note >}}


## Step 2. Retrieve details of an IoT Connection Product

Now you have identified the **connection product** that you wish to work with. Retrieve the details of this product by using the `id` number to view the status of that **SIM card**.

- Retrieve the details of an IoT Connection Product with the following cURL command and replace the values of `<your_tenant_name>`,  `<your_product_id>`, and `<your_api_token>` with your data.

---
{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}
```bash
curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>'
```
{{</ code >}}

{{< /tab >}}

{{< tab "Example" >}}

{{< code >}}
```plain
please input a example code
```
{{< /code >}}
{{< /tab >}}

{{< tab "Output" >}}

{{< code >}}
```json
{
        "id": "JASPER-8997112212741433747",
        "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/JASPER-8997112212741433747",
        "isBundle": true,
        "startDate": "2020-04-01T20:00:00.000Z",
        "status": "INACTIVE",
        "connectivityType": "CELLULAR",
        "relatedParty": [
            {
                "id": "100125307",
                "name": "JASPER_1",
                "role": "customer"
            }
        ],
        "productOffering": {
            "name": "1GB Shared Fixed Pool Roaming"
        },
        "productCharacteristic": [
            {
                "name": "SYSTEM",
                "value": "JASPER"
            }
        ],
        "productRelationship": [
            {
                "type": "BUNDLED",
                "product": {
                    "id": "JASPER-8997112212741433747-simCard",
                    "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/JASPER-8997112212741433747-simCard",
                    "isBundle": false,
                    "status": "ACTIVE",
                    "productCharacteristic": [
                        {
                            "name": "dateActivated",
                            "value": "2020-05-20T14:24:49.697Z"
                        },
                        {
                            "name": "dateAdded",
                            "value": "2020-04-02T07:17:45.375Z"
                        },
                        {
                            "name": "dateUpdated",
                            "value": "2023-06-13T03:36:35.783Z"
                        },
                        {
                            "name": "euiccid",
                            "value": ""
                        },
                        {
                            "name": "globalSimType",
                            "value": ""
                        },
                        {
                            "name": "ICCID",
                            "value": "8997112212741433747"
                        },
                        {
                            "name": "imei",
                            "value": "3587891011831701"
                        },
                        {
                            "name": "IMSI",
                            "value": "424024010729961"
                        },
                        {
                            "name": "MSISDN",
                            "value": "971562501627"
                        },
                        {
                            "name": "simNotes",
                            "value": ""
                        }
                    ],
                    "customProperty": [],
                    "@baseType": "product",
                    "@type": "simCard"
                }
            },
            }
        ],
        "@baseType": "product",
        "@type": "IoTConnection",
        "correlationId": "e11d3bcb-98a7-45a4-b1b8-7c475b9b073b"
    }
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}


- One of the benefits of using the API is you can retrieve a much more detailed view of your **connection products** compared to the user interface of the* **T IoT Hub**.


## Step 3. Update the status of an IoT Connection Product (Synchronous)

After checking if the status of the **SIM card** you want to **activate** is **deactivated,** proceed with the request to **activate** it using the `id`  number retrieved earlier in the tutorial.

- Update the status of the IoT Connection Product using a payload with the following cURL command and replace the values of `<your_tenant_name>`, `<your_product_id>`, and `<your_api_token>` with your data.

---
{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}You have to append to `-simCard` *at the end of the* request path because there are multiple substructures inside a connectivity product. `-dataConnectivity` is another example of a request path.{{</ div >}}

{{< code >}}
```bash
curl --location --request PATCH 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>-simCard' \
--header 'Content-Type: application/json-patch+json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>' \
--data '[
    {
    //op = the operation you would like to execute
    "op": "replace",
    //path = the attribute you wish to change
    "path": "/status",
    //value = the value you wish to change
    "value": "ACTIVE"
    }
]'
```
{{< /code >}}

{{< /tab >}}

{{< tab "Example" >}}

{{< code >}}
```plain
Please add example code
```
{{< /code >}}
{{< /tab >}}

{{< tab "Output" >}}

{{< code >}}
```json
{
        "id": "JASPER-8997112212741433747-simCard",
        "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/JASPER-8997112212741433747-simCard",
        "isBundle": false,
        "status": "ACTIVE",
        "productCharacteristic": [
            {
                "name": "dateActivated",
                "value": "2020-05-20T14:24:49.697Z"
            },
            {
                "name": "dateAdded",
                "value": "2020-04-02T07:17:45.375Z"
            },
            {
                "name": "dateUpdated",
                "value": "2023-06-13T12:43:16.519Z"
            },
            {
                "name": "euiccid",
                "value": ""
            },
            {
                "name": "globalSimType",
                "value": ""
            },
            {
                "name": "ICCID",
                "value": "8997112212741433747"
            },
            {
                "name": "imei",
                "value": "3587891011831701"
            },
            {
                "name": "IMSI",
                "value": "424024010729961"
            },
            {
                "name": "MSISDN",
                "value": "971562501627"
            },
            {
                "name": "simNotes",
                "value": ""
            }
        ],
        "customProperty": [],
        "@baseType": "product",
        "@type": "simCard",
        "correlationId": "23860f1e-d042-448a-91b4-335a90fbd554"
    }
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}
---

- To check if the status is successfully activated, use the same cURL command we used to **Retrieve details of an IoT Product** and check if the SIM card status has changed from `DEACTIVATED` to `ACTIVE`. 

{{< code >}}
```bash
curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>'
```
{{< /code >}}

- This change will also reflect in the GUI of the T IoT Hub. To view the SIM card status, visit the **Connectivity Management** page.



## Step 4. Update the status of an IoT Connection Product (Asynchronous)

If you work with a system that operates asynchronously, you will utilize the same cURL command used to **update the status**. However, you will also receive a tracker ID number to monitor the progress of your request.

- Perform the same action we used earlier to update the status of the IoT Connection Product using a payload with the following cURL command and replace the values of `<your_tenant_name>`, `<your_product_id>`, and  `<your_api_token>` with your data.

{{< code >}}
```bash
    curl --location --request PATCH 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>-simCard' \
    --header 'Content-Type: application/json-patch+json' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer <your_api_token>' \
    --data '[
      {
    //op = the operation you would like to execute
        "op": "replace",
    //path = the attribute you wish to change
        "path": "/status",
    //value = the value you wish to change
        "value": "ACTIVE"
      }
    ]'
```
{{< /code >}}

- If your system operates asynchronously, your output should provide you with a **monitor link** that we will use in the next step:

{{< code >}}
<https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/monitor/89490200001575268860-1685435484707>
{{< /code >}}


## Step 5. Monitor the result of the asynchronous status change (Asynchronous)

Use the **monitor link** received in the previous step to track the request progress. To do this, interact with the monitor operation, which is a part of the CMO API. 

- Send a monitor request with the **monitor link** `id`, which are the numbers after the monitor/… in the URL with the following cURL command and replace the values of `<your_tenant_name>`, `<your_monitor_id>`, and `<your_api_token>` with your data.

{{< tabs "code-tab-1" >}}

{{< tab "Copy & paste" >}}

{{< div class="mb-4" >}}optional text Example{{</ div >}}

{{< code >}}
```bash
curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/monitor/<your_monitor_id>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_api_token>'
```
{{< /code >}}

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
```json
},
    "header": [],
    "statusCode": 202
    
},
    "sourceHref": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/pdocut/TMSP-89490200001575268860-1685435484707-simCard",
    "state": "InProgress"
}
```
{{< /code >}}

{{< /tab >}}

{{< /tabs >}}


- In the monitor output, you can see details about your operation and the operation `response`.
- At the bottom of the body, you have a `state` which tells you the status of the operation. It will look something like this:

{{< note "NOTE" >}}
  - {{< textsm >}}Depending on your system's setup, update time may vary.{{</ textsm >}}
{{< /note >}}

- To check if the status is successfully activated, use the same cURL command we used to **Retrieve details of an IoT Product** and check if the SIM card status has changed from `DEACTIVATED` to `ACTIVE`. 

{{< code >}}
```bash
    curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/<your_product_id>' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer <your_api_token>'
```
{{< /code >}}


