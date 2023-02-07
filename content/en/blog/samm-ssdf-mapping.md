+++
title = "Tackling App Security with SAMM-NIST SSDF Mapping"
date = "2023-01-30T00:00:00+02:00"
tags = ["model", "NIST", "SSDF"]
categories = ["mapping"]
banner = "img/banners/samm-ssdf.png"
author = "The SAMM Project Team"
+++

### The Application Security Challenge

The increasing dependence on software in our daily lives has made the challenge of ensuring its security more pressing. Despite being a critical concern, cybersecurity is often not a priority for organizations until there is an incident or breach. This has resulted in the cost of cyber insurance doubling in the past two years and the total cost of cybercrime in 2022 reaching {{< external-link "https://www.secureworks.com/resources/rp-boardroom-cybersecurity-report" "$7 trillion">}}. To address this challenge, organizations are {{< external-link "https://go.cynet.com/2022_ciso_survey" "increasing their cyber budgets">}} but are still struggling to adopt an effective security program that can provide a return on investment. The need for a comprehensive and effective security program is more important than ever to maintain the protection of sensitive information and the stability of digital infrastructure.



### Application Security Program

**Solving the software security challenge is not simple, easy, or cheap, but it is attainable**. Over 20 years ago, Microsoft introduced the Security Development Lifecycle (SDL). Since then, various approaches have emerged, including OpenSAMM, BSIMM, OWASP SAMM, SSE CMM, SafeCode, and NIST SSDF. Some of these approaches, referred to as Application Security (AppSec) programs, are more comprehensive than SDL, encompassing not just the security of applications, but also risk management, compliance, security controls, incident response, and continuous monitoring and improvement.



### Application Security Regulation

Fortunately, both the US and the EU have been adding regulations to steer organizations towards a systematic solution. In particular, the Executive Order M-22-18 now mandates all US Federal agency vendors to adopt NIST SSDF. SSDF provides a comprehensive approach to application security. However, **SSDF is very broad by design** and does not prescribe how to implement each security practice. SSDF does include a plethora of resources and references to other industry standards. Nonetheless, for organizations without any security expertise it is challenging to pick SSDF and start implementing these guidelines.

We firmly believe that OWASP SAMM is the ideal starting point for implementing and achieving SSDF compliance. SAMM is a security assurance program that helps you assess and develop a risk-informed and balanced plan for enhancing your security posture. To support this process, we have created a **comprehensive mapping between SAMM and NIST SSDF**. NIST is currently reviewing the final draft submission of this mapping.


### NIST SSDF

The NIST Secure Software Development Framework (NIST SSDF) is a set of guidelines and best practices for developing secure software. SSDF is intended to help organizations create software that is resistant to cybersecurity threats. The framework organizes security practices into four groups. Each practice is split into one or more tasks that organizations need to fulfill to perform the practice. SSDF comes with notional implementation examples for each task. However, these are neither necessary nor sufficient conditions to claim the correct fulfillment of a specific practice.

### OWASP SAMM
OWASP SAMM is a framework that has similar goals to SSDF: to help organizations improve their security posture. However, SAMM is built with three key observations that effectively flatten the learning curve for organizations.
* Change is slow in organizations and an effective security assurance program should be based on slow incremental improvements.
* No single recipe works for all organizations. SAMM is built with this in mind and supports an organization building a program tailored to their risk profile, culture, IT maturity, etc.
* Guidance related to security activities must be prescriptive.  Too often, security initiatives fail due to poor details, lack of communication, or invalid assumptions.

Overall, the success of the program is based on being simple, well-defined, and measurable. That is precisely what SAMM brings to the table.

### The use case for NIST SSDF to OWASP SAMM mapping
We, the SAMM team, aimed to address two key reasons for creating a mapping between SSDF and SAMM:

* NIST SSDF doesn't explain how to implement each practice, and a mapping would provide SAMM's prescriptive guidance. A mapping would help established SAMM users track their SSDF compliance.
* SSDF 1.1, released in February 2022, has a mapping to SAMM 1.5. However, SAMM 2.0 has substantial changes and the mapping is a simple crosswalk, indicating related concepts without specifying the relationship. To understand the relationship, one needs to read and comprehend both SSDF and SAMM concepts.

In collaboration with NIST, we have created mappings based on the {{< external-link "https://csrc.nist.gov/projects/olir" "National Online Informative Reference (OLIR) Program">}}. An Informative Reference shows the relationships between the Reference Document elements (NIST SSDF Tasks) and a Focal Document element (OWASP SAMM Streams). This effectively helps users understand the characterization of the nature of each relationship. 

These are some of the benefits of using the Informative Reference:

* SAMM users can prepare for future compliance with SSDF Practices
* SAMM supports SSDF Tasks by explicitly addressing software security activities in detail
* SAMM can provide a phased roadmap for how to meet SSDF criteria
* SAMM can give you objective measures aligned with SSDF


### SSDF to SAMM Mapping Details
This a schematic overview of the structure of both NIST SSDF and OWASP SAMM. 

{{< responsive-image  "/img/blog/samm-ssdf-mapping.svg" "graphical representation of SAMM-SSDF mapping ">}}

We mapped SSDF tasks to SAMM streams rather than activities for three reasons:
1. To facilitate adoption of SSDF practices based on SAMM's prescriptive guidance as SAMM is a maturity model.
2. Mapping to activities would increase the number of mappings and make it harder to understand.
3. The level of detail in SSDF tasks does not always align well with SAMM activities.

When creating the mapping, we prioritized keeping it simple. Some SSDF tasks are broad and could map to multiple SAMM streams. Despite dependencies between SAMM activities, such as the relationship between Metrics and Feedback and Measure and Improve, we mapped to the closest match without considering these dependencies.

As we have mentioned, the mapping links are Informative References. The nature of each relationship between between OWASP SAMM Activities and NIST SSDF Tasks is characterized by one of the following relationship types:
* **Synonyms**: X (SAMM Activity) and Y (SSDF) are identical. X and Y (SSDF) use exactly the same wording.
* Equivalences: Y (SSDF) and X (SAMM Activity) are equivalent. This X (SAMM Activity) and Y (SSDF) have the same meaning but different wording.
* **Generic-specific**: X (SAMM Activity) is one way (an example) of doing or achieving Y (SSDF).  In other words, you can accomplish Y (SSDF) without this X (SAMM Activity).
* **Whole-part**: X (SAMM Activity) is one part (a component) of Y (SSDF). In other words, you cannot accomplish Y (SSDF) without X (SAMM Activity).
* **Prerequisite-dependency**: X (SAMM Activity) is required to perform Y (SSDF).

We have published the final submission to NIST in {{< external-link "https://docs.google.com/spreadsheets/d/1AsIbEHK_csuYkUx8tSZvHBFlywYZ5wBejfJHi8AvnZM" "this spreadsheet">}}. Note that we have created the NIST SSDF to SAMM mapping. The reverse mapping is automatically generated and in the current version it is a crosswalk mapping.

### Mapping Coverage
Another important aspect to consider is the extent to which SAMM covers SSDF and vice versa. Given a specific SAMM score, an organization may want to determine their SSDF compliance. All SSDF tasks map to at least one SAMM stream, and the reverse is mostly true, except for the System Decommissioning stream in SAMM which has no equivalent in SSDF. 

We believe that NIST SSDF is a subset of OWASP SAMM, and implementing OWASP SAMM will cover NIST SSDF. This mapping provides security practitioners with guidance on finding value in the intersection of these two frameworks.


---
Be a part of the SAMM community!

* Join our Slack channel, where you'll meet other users, ask questions, give feedback, and be in the loop of all things SAMM.
* Join our monthly community calls, where we discuss different topics, exchange experiences and ideas, and review SAMM’s security practices in depth.
