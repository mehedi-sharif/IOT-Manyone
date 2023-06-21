---
title: KPI Report
weight: 14
---
These reports improve business processes, help manage changes, and help you make better decisions going forward. 

The start page of the Connectivity Management App displays multiple tabs. 
Click the **KPI Report** to open KPI Report tab.


![](https://hub.iot.telekom.com/docs/user-guide/images/kpi-report1.png)


Use the info icons to get more information about reports and metrics.

![](https://hub.iot.telekom.com/docs/user-guide/images/kpi-report_2.png)


You have two timeframes available for a report:

- This month
- Past six months
![](https://hub.iot.telekom.com/docs/user-guide/images/kpi-report3.png)



**Metric documentation per KPI provider**

| Key Performance Indicator     | Meaning                                                                                                                               | Telekom Deutschland calculation method                                                                                                                                                                                                                                     | T-Mobile US calculation method                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Platform GUI Availability** | Success rate of a request to the designated URL of the service portal for connectivity management of the respective network provider. | Availability of the Telekom Deutschland M2M Service Portal 3.0 web interface. Calculated based on the ratio of successful attempts to all attempts. Reported monthly. Excludes planned downtime.                                                                           | Availability of the T-Mobile US Cisco IoT Control Center web interface. <br>Reported monthly. Excludes planned downtime. |
| **API Availability**          | Success rate of the acknowledgment of a command sent over the API of the connectivity platform of the respective network provider.    | Availability of the Telekom Deutschland M2M Service Portal 3.0 API. Measured with multiple SIMs within 15 minute time slots. The metric shows the proportion of successfully received responses.                                                                           | Coming soon.                                                                                                             |
| **M2M APN Availability**      | Availability of the M2M IP service in the mobile network.                                                                             | It is periodically checked whether the PDP (Packet Data Protocol) Context can be established for an IP connection via the APN “internet.m2mportal.de”. Calculated based on the ratio of successful attempts to all attempts on a monthly basis. Excludes planned downtime. | Coming soon.                                                                                                             |






