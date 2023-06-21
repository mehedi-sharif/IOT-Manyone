---
title: About
weight: 10
---
The T IoT Hub **Connectivity Management Orchestrator API** (CMO API) enables applications to retrieve and manage data about IoT connectivity products offered by different operators and related BSS systems in a standardized format using a single set of operations. 

This means that applications can achieve a single view of all IoT products (e.g. SIM cards and associated data connectivity) used by an enterprise, even if they are purchased and managed by different carriers worldwide.


![](https://hub.iot.telekom.com/docs/cmo-api/images/carrier1.png)


Assuming that the API of the respective backend system is supported by the IoT Hub Connection Management Orchestrator (CMO) and the customer has an account in the IoT Hub, it would be possible to connect this account to the respective backend and not only access the data, but also perform data management operations such as changing the status and updating product properties. 

This API can also be used by IoT applications to enrich IoT device data by integrating the information about the connectivity used by the devices, such as how much data has been consumed, what is the status of the SIM card, what APN it is using, and so on.

The Connectivity Management Orchestrator API (CMO API) is developed according to the standards defined by the [TM Forum](https://www.tmforum.org/)®.


> **Please note**: The Connection Management Orchestrator API (CMO API) is an optional service and is not included with the IoT Hub by default.

