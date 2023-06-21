---
title: Overview
weight: 12
---
On the starting page of the **Connectivity Management**, users can view a summary of the available connectivity products, each of which includes a variety of information such as:

- Identifier
- IMSI (International Mobile Subscriber Identifier)
- MSISDN (Mobile Station International Subscriber Directory Number)
- Serial number
- Platform
- Offering
- Status
- Data usage
- Data limit
- Custom properties

This data provides users with a comprehensive overview of each product, allowing them to make decisions about which product to use and how to configure it for their specific needs. 


![](https://paper-attachments.dropboxusercontent.com/s_B9BC885796E35C9AD2917792E4B131BD24DA14C07E6E4FB3AF3F66CB90221888_1686760301537_Table.png)


By presenting this information in a clear and organised manner, the Connectivity Management App aims to streamline the process of managing connectivity and enable users to access the information they need to make informed decisions. 

The page immediately loads currently available data of all connected platforms.
To load more products, click the button at the bottom of the page.


> **Please note:** Your company’s administrator has to setup one or several platforms.



## Product Status

Depending on the platform, different statuses of the product are available. The user can actively switch between these:

- **Active**
- **Suspended**
- **Blocked** (TMSP only)
- **Terminated** (TMSP only)
- **Pending terminate** (TMUS only)

The overview also shows passive statuses for information only such as:

- Inventory
- Created
- Pending active
- Terminated


> **Please note:** T IoT Hub uses standardised status names, as all platforms differ, and the goal is to have a uniform view.



## Status Mapping Table

As the T IoT Hub uses standardised status names, a helpful mapping table can be accessed clicking the **?** icon beside the **Status** column.

![](https://hub.iot.telekom.com/docs/user-guide/images/con-mgt-overview-status-mapping.png)



## Device details

If you click on the **Identifier**, a popup shows the product details (if data is available):

- ICCID (Integrated Circuit Card Identification Number)
- IMSI (International Mobile Subscriber Identifier)
- MSISDN (Mobile Station International Subscriber Directory Number)
- Platform
- Offering
- Data usage
- Data limit

Actively manageable statuses can also be switch in the detail view of the product:

- Active
- Suspended
- Blocked - Telekom M2M Service Portal only (TMSP)
- Terminated Telekom M2M Service Portal only (TMSP)
- Pending terminate (T-Mobile US only)


![](https://hub.iot.telekom.com/docs/user-guide/images/con-mgt-overview-detail-status-change.png)



## Switch Tenant Account

Analog the T IoT Hub dashboard layout above right you find access to the user account as well as the possibility to see the selected tenant.
In case the user has access to more than one tenant, clicking on the tenant enables a switch to other tenants.

![](https://hub.iot.telekom.com/docs/user-guide/images/con-mgt-overview-manage-user-and-tenant.png)



## Customize table

To customize the table (and show or hide columns) please use the **Customize table view** section.
Use the checkboxes to select the columns to be displayed or hidden on the overview. 
Once the **update columns** button is clicked, the new layout is shown.

![](https://paper-attachments.dropboxusercontent.com/s_B9BC885796E35C9AD2917792E4B131BD24DA14C07E6E4FB3AF3F66CB90221888_1686760290801_Custom+table.png)



## Custom properties

You can configure new properties to help you to identify and keep track of your connected devices.
Click on the **Manage custom properties** button and define the new property you want to add.


![](https://paper-attachments.dropboxusercontent.com/s_B9BC885796E35C9AD2917792E4B131BD24DA14C07E6E4FB3AF3F66CB90221888_1686762134057_Screenshot+2023-06-14+at+19.02.03.png)

> **Please note:** Custom Properties columns can only be completely deleted if there are no entries in the selected custom property. Otherwise, they disappear form the list, but not from the table.


## Search function

Below the **Overview** you find a search field for searching single ID.
To search a range of IDs, please click on the **Search by range** button and the view expands.


![](https://paper-attachments.dropboxusercontent.com/s_B9BC885796E35C9AD2917792E4B131BD24DA14C07E6E4FB3AF3F66CB90221888_1686760804295_Connectivity+Management+overview.png)



## Select products to edit

If you select one or more products, the header expands, and more options are available. 
You can change the status of all selected products as a bulk action, add/change custom properties and also export the selected product data as CSV and store it locally.

![](https://hub.iot.telekom.com/docs/user-guide/images/con-mgt-overview-select-products.png)


