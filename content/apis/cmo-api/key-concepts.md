---
title: Key concepts
weight: 13
---

## Products

Connectivity Management Orchestrator API (CMO API) is developed according to standards defined by [TM Forum](https://www.tmforum.org/)®. The CMO API itself is an implementation of the “Product Inventory API” and the resource representation is based on the SID model. A central concept introduced by the model is the product.

A **product** is something that a customer purchased from a Telecommunications Service Provider. That could be for example a Connectivity package with data services, SIM card, usage volume limits and so on. That means the product represents something already available and CMO API allows customer IoT applications to manage their products. The Product is therefore the main resource that is manipulated by the CMO API, which essentially provides operations to search, retrieve and update product instances.  Since CMO API is meant to cover the information related to IoT connectivity products, a number of specializations of the basic product concept are required to represent the different IoT product aspects that are supported in the CMO API. In this concept a product is taken as a base class and the actual resources retrieved are instantiations of specializations of the product as described in the section “Data Structures”.

## Tenants

A **tenant** represents a space in the IoT Hub in which customer have access to their own data and services. Thus means each customer must have its own tenant in the T IoT Hub so that it can use any of the services provided by it. That also applies to CMO API. Each CMO API request is targeted to a tenant and in order for the request to be authorized the IoT application credentials shall be valid for that tenant. With help of the IoT Hub Tenant Management it can be configured to what Carrier's IoT Platforms an T IoT Hub Tenant has access. The access permission of the user credentials used to login at the Carrier IoT Platform defines what Products can be accessed.

![](https://hub.iot.telekom.com/docs/cmo-api/images/tenants1.png)

## Authentication

Authentication of CMO API request is based on a JWT Token (JSON Web Token), which is issued for a IoT application. For that the IoT application shall present the respective application credentials. API authentication is based on OAuth 2.0 and it used the client grant. 


## Monitor

It refers to the process of continuously measuring various aspects of a system, or operation to gather information and assess its performance. Monitoring plays a crucial role in ensuring the effective management and optimization. For CMO API, it is used to monitor the execution of requests on specific resource. 

There are some differences between synchronous and asynchronous requests:

- The result of a synchronous product update is returned immediately.
- The result of an asynchronous product update is returned indirectly. This requires at least one more query to the monitor endpoint, which returns the result as soon as it is available.
- Whether a sync or async response is returned depends on the platform.

 

## Task

A task represents a specific objective or action that needs to be accomplished within a defined timeframe. It can involve activities like service provisioning, network configuration, fault management, billing, customer support, or any other operational process. The CMO API, allows to return the result of a batch operation applied to multiple products.

Examples include:
• Address Validation
• Prepay Balance top-up
• Order Cancelation
• Alarm Clearing



