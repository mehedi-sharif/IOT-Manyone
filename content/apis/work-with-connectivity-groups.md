---
title: Work with connectivity groups
weight: 05
---
This tutorial will guide you on how to work with **Connectivity groups** using the CMO and DMO APIs. You'll learn the fundamental CRUD operations and how to view your **Connectivity groups** and **Connection products.**


> The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.


## You will learn how to:
- Retrieve a list of connection products
- Fetch two specific products
- Create a connectivity group
- Check the connectivity group you create
- Retrieve your connectivity group
- Update your connectivity group
- Delete your connectivity group


## Prerequisites

Before we begin, ensure you complete the initial tutorial, "Connecting Your Application to the T IoT Hub". 

Make sure that you:

1. Register your application in Application Access Management
2. Configure a request to fetch the API token
3. Register Application Entity (AE) in your environment.
4. Possess an HTTP Client, such as [Postman](https://www.postman.com/) or [cURL](https://curl.se/).


> **Note:** This tutorial will refer to the use of cURL. If you use a different platform, the setup might vary.


## Step 1. Retrieve a list of connection products to create your group

If you need clarification on which product to create a group with, you can use this request to fetch a list of all your connected products. From this list, select the products you want to group. In our case, we will be using cURL to execute operations. To check if cURL is installed on your hardware, open a terminal or CMD and run:


    $curl --version


> The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.


- Open cURL or your preferred HTTP client.
- Retrieve the list of **connection products** with the following cURL command and replace the values of `*<your_tenant_name>*` and `<your_api_token>` with your own data.


    //Enter your tenant name
    curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product?pageSize=5&fields=id%2CconnectivityType%2Cstatus' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    //Enter your API Token.
    --header 'Authorization: Bearer <your_api_token>'

Example of output


    {
        "entities": [
            {
                //the ID of a connectivity product.
                //Copy the "id" for the next step.
                "id": "JASPER-8997112212741433747",
                "status": "ACTIVE",
                "connectivityType": "CELLULAR"
            },
            {
                //the ID of a connectivity product
                //Copy the "id" for the next step.
                "id": "JASPER-8997112212741433749",
                "status": "ACTIVE",
                "connectivityType": "CELLULAR"
              }
        ],
        "statistics": {
            "currentPage": 1,
            "pageSize": 1
        },
        "links": [
            {
                "type": "self",
                "url": "https://myiot-t.com/api-gw/connection-management-orchestrator/eos/product?pageSize=5&fields=id,connectivityType,status"
            }
        ]
    }

***Note:*** An e*xample of an ID can be “JASPER-8997112212741433749”.*


## Step 2. Fetch specific products to create a group (Using product ID)

**If you know** the network ID’s of your products. Use this request to fetch their respective product ID´s. In this case, we will be using **cURL** to execute operations.


> The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.


- Find your products with the following cURL command and replace the values of `*<your_tenant_name>*`,`<your_api_token>`, and `<your_product_id>` with your own data.


    //Enter your tenant name
    curl --location 'https://myiot-t.com/api-gw/connection-management-orchestrator/v5/<your_tenant_name>/product/find' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer <your_api_token>' \
    --data '{
      //Enter your product ID
      "iccidList": [
      "<your_product_id>"
      ],
      //Enter your product ID
      "terminalSNList": [
        "<your_product_id>"
      ]
    }
    '

Example of output


    {
        "entities": [
            {
                "id": "INTELSAT-27597",
                "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/INTELSAT-27597",
                "status": "ACTIVE",
                "connectivityType": "SATELLITE",
                "isBundle": true,
                "isCustomerVisible": true,
                "productCharacteristic": [
                    {
                        "name": "system",
                        "value": "INTELSAT"
                    },
                    {
                        "name": "account_index",
                        "value": "1"
                    }
                ],
                "name": "",
                "startDate": "2023-05-18T00:00:00.000Z",
                "billingAccount": {
                    "id": ""
                },
                "productOffering": {
                    "name": "FlexEnterprise Global"
                },
                "relatedParty": [
                    {
                        "id": "340",
                        "name": "intelsat_test",
                        "role": "customer"
                    }
                ],
                "@baseType": "product",
                "@type": "IoTConnection",
                "productRelationship": [
                    {
                        "type": "BUNDLED",
                        "product": {
                            "id": "INTELSAT-27597-terminal",
                            "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/INTELSAT-27597-terminal",
                            "isBundle": false,
                            "isCustomerVisible": true,
                            "productCharacteristic": [
                                {
                                    "name": "serialNumber",
                                    "value": "27597"
                                },
                                {
                                    "name": "name",
                                    "value": "LW01-Media_Mobil-27597"
                                },
                                {
                                    "name": "latitude",
                                    "value": "53.11050000"
                                },
                                {
                                    "name": "longitude",
                                    "value": "8.88130000"
                                },
                                {
                                    "name": "model",
                                    "value": "TIV-iQDesktop-27597-GS"
                                },
                                {
                                    "name": "state",
                                    "value": "synced"
                                },
                                {
                                    "name": "mobilityType",
                                    "value": "Fixed"
                                },
                                {
                                    "name": "imoNumber",
                                    "value": "0"
                                },
                                {
                                    "name": "mmsi",
                                    "value": ""
                                },
                                {
                                    "name": "antennaCode",
                                    "value": ""
                                },
                                {
                                    "name": "lastUpdated",
                                    "value": "2023-05-18T15:56:51.000Z"
                                },
                                {
                                    "name": "lastSync",
                                    "value": "2023-05-18T15:56:51.000Z"
                                }
                            ],
                            "customProperty": [],
                            "@baseType": "product",
                            "@type": "terminal",
                            "status": "ACTIVE"
                        }
                    },
                    {
                        "type": "BUNDLED",
                        "product": {
                            "id": "INTELSAT-27597-usageVolume-data",
                            "href": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/INTELSAT-27597-usageVolume-data",
                            "isShared": false,
                            "isBundle": false,
                            "usageType": "DATA",
                            "@baseType": "product",
                            "@type": "usageVolume",
                            "bucketCounter": [
                                {
                                    "valueName": "1401626.776576 KB",
                                    "value": {
                                        "amount": 1401626.776576,
                                        "units": "KB"
                                    },
                                    "consumptionPeriod": {
                                        "startDateTime": "2023-05-18T16:08:35.000Z",
                                        "endDateTime": "2023-06-09T08:36:31.696Z"
                                    },
                                    "counterType": "USED"
                                }
                            ]
                        }
                    }
                ],
                "correlationId": "dbe56aa9-a0c1-4b91-b2b8-1fb3141dd191"
            }
        ],
        "errors": [
            {
                "type": "Not Found",
                "status": 404,
                "title": "Error",
                "detail": "Product with iccid 8907160000000000533 not found",
                "instance": "https://myiot-t.com/api-gw/connection-management-orchestrator/v5/eos/product/eos/product/find",
                "externalErrors": [],
                "@type": "problem",
                "traceId": "15ff4b9d-cbcc-4180-96d3-e2fe7cdcbd4e"
            }
        ]
    }


## Step 3. Create your connectivity group

When you find the products you want to create a group with through the **list** or specific **find,** you will need the **product ID number**, **Connectivity type**, ****and **Network ID number**. To retrieve this information, use either the ****GET Connection Products** request ****or **the FIND Connection Product** request we used earlier. In this case, we will be using **cURL** to execute operations.


> The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.


- Create a group with the following cURL command and replace the values of `*<your_tenant_name>*`, `<your_api_token>`, `<your_product_id_number>`,`<your_product_group_number>`, `<your_network_id_number>`, `<your_router_serial_number>`, `<your_priority_product_id_number>`, `<your_fallback_product_id_number>`, `<your_threshold_level>` and `<your_group_name>` with your data.


    curl --location 'https://myiot-t.com/api-gw/device-management-orchestrator/v3/<your_tenant_name>/connectivityGroups' \
    --header 'Content-Type: application/json;ty=28' \
    --header 'X-M2M-Origin: CPDemo' \
    --header 'X-M2M-RI: 123' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer <your_api_token>' \
    --data '{
    //Group structure
      "dtiot:conGp": {
        "cnd": "com.telekom.iot.orchestrator.connectivityGroup",
        "conPs": [
          //Connectivity products
          {
            //coPID = Product ID Number
            "coPID": "<your_product_id_number>",
            //coPTe = Connectivity type
            "coPTe": <your_connectivity_type>,
            //netID = Network ID Number
            "netID": "your_network_id_number"
          },
          {
            //coPID = Product ID Number
            "coPID": "<your_product_id_number>",
            //coPTe = Connectivity type
            "coPTe": <your_connectivity_type>,
            //netID = Network ID Number
            "netID": "your_network_id_number"
          }
        ],
        //Router
        //liCRr = Serial number of the router
        "liCRr": "<your_router_serial_number>",
        "priRe": {
          //Priority ID
          "prPID": "<your_priority_product_id_number>",
          //Fallback ID
          "faPID": "your_fallback_product_id_number",
          "priTd": <your_threshold_level>
        },
        //updTe = Status update(Shows if the process was executed successfuly)
        //0 = The operation hasn't been executed
        //2 = The operation was succesfull
        "updTe": 0,
        //errMe = Error message(Shows you an error message if something failed during the process)
        "errMe": "",
        //rn = Group name(The name of the group of products)
        "rn": "<your_group_name>"
      }
    }'

***Note:*** *the* ***Threshold level*** *can be from 1-6 (1 = better**,* *6 = worse)*

Example of output


## Step 4. Check your group is added to your connectivity groups

Next, we want to check if the connectivity group you made was successfully added to the list of groups. Again, we will be using **cURL** to execute operations.


> The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.


- Fetch the list of connectivity groups with the following cURL command and replace `<your_tenant_name>`, `<your_application_name>`, and `<your_api_token>`:


    curl --location 'https://myiot-t.com/api-gw/device-management-orchestrator/v3/<your_tenant_name>/connectivityGroups?rcn=4&ty=28' \
    --header 'Content-Type: application/json' \
    --header 'X-M2M-Origin: <your_application_name>' \
    --header 'X-M2M-RI: 123' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer <your_api_token>'

Example of output


## Step 5. Retrieve your connectivity group (Read)

To retrieve your connectivity group, you can use the following cURL command and replace `your_tenant_name>`, `<your_group_name>`, and `<your_application_name>` with your data.


    curl --location 'https://myiot-t.com/api-gw/device-management-orchestrator/v3/<your_tenant_name/connectivityGroups/<your_group_name>' \
    --header 'Content-Type: application/json' \
    --header 'X-M2M-Origin: <your_application_name>' \
    --header 'X-M2M-RI: 123' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer {{key_cloack_token}}'


## Step 6. Update your connectivity group (Update)

If you update your recently created group, you only need to change the **POST request** we made earlier to create a group to a **PUT request.** Again, **cURL** will be used to execute operations.


- Copy the information from the previous command to create a group and replace the POST request with a PUT request. Make sure you replace `<your_tenant_name>` and `<your_group_name>` with your data and **make the changes you wish to update**.


    curl --location --request PUT 'https://myiot-t.com/api-gw/device-management-orchestrator/v3/<your_tenant_name>/connectivityGroups/<your_group_name>'

Example of output


## Step 7. Delete your connectivity group (Delete)

If you want to delete your group, you only need to change the GET request created earlier to retrieve your group into a DELETE request. 


> The API Token has an expiration time of 300 seconds (5 minutes). If you get error 401 when trying to make a request, this is most likely an **expired token**.


- To delete your connectivity group you can use the following cURL command and replace `your_tenant_name>`, `<your_group_name>`, and `<your_application_name>` with your data.


    curl --location --request DELETE 'https://myiot-t.com/api-gw/device-management-orchestrator/v3/<your_tenant_name>/connectivityGroups/<your_group_name>' \
    --header 'Content-Type: application/json' \
    --header 'X-M2M-Origin: <your_application_name>' \
    --header 'X-M2M-RI: 123' \
    --header 'Accept: application/json' \
    --header 'Authorization: Bearer {{key_cloack_token}}'

Example of output

