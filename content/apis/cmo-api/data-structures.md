---
title: Data Structures
weight: 14
---

# Data Structures

The production specializations used in the CMO API are presented below. They are based on standard classes defined in the SID model, as shown in the following diagram:

![](https://hub.iot.telekom.com/docs/cmo-api/images/data-structures.png)


The specializations defined in CMO are briefly described below. This model is extensible, meaning that additional components can be defined based on further specializations, for example to support different types of connectivity networks, such as satellite or other technologies.

## IoT Connection Product

This is a sub-product of the IoT Connection Product and represents the customer-visible information about the SIM card used for the connectivity services. Information such as IDs (ICCID, IMSI, MSISDN, etc.) and status are available in this sub-product.

## SIM Card Product

This is a sub-product of the IoT Connection Product and represents the customer-visible information about the SIM Card used for the Connectivity Services. Information such as IDs (ICCID, IMSI, MSISDN, etc.) and status are available in this sub-product.

## Data Connectivity Product

This sub-product of the IoT Connection Product includes the data connectivity capabilities offered by the product. For example, information about the type of service (3G, LTE, Voice, SMS) and service configuration such as IP addresses is available in this sub-product.

## Usage Volume Limit Product

This sub-product represents the usage information of the connectivity product. Depending on what is provided by the backend platform, it is possible to retrieve the current consumption of the individual connectivity product in terms of data, SMS or voice volume. Depending on the tariff model of the product, the consumption can be related to the current billing period, to the last 24 hours or to a data bucket. If usage limits are defined for the product and provided by the backend system, they can also be retrieved here.

