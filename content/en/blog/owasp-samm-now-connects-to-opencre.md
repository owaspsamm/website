+++
title = "OWASP SAMM now connects to OpenCRE"
date = "2023-09-20T00:00:00+02:00"
tags = ["model", "scoring"]
categories = ["assessment"]
banner = "img/banners/opencre.png"
author = "The SAMM Project Team"
+++


We are excited to announce that each OWASP-SAMM stream now uses {{< external-link "https://opencre.org" "OpenCRE.org">}} to link to other standards and guidelines.
OpenCRE stands for Open Common Requirement Enumeration, and it aims to provide a common language and framework for mapping and comparing different security standards, guidelines, and frameworks.
By linking SAMM to OpenCRE, we’ve made it easier for our users to find relevant and useful resources with every stream, as well as to see how SAMM aligns with other security standards such as NIST SSDF, ISO27K, PCI-DSS, OWASP ASVS, and NIST 800-53.

### How to use OpenCRE with SAMM
The SAMM website now has links to OpenCRE in every stream. If you visit a stream page, you will notice the ‘team guidance’ at the bottom. For example, this is the page for the Threat Assessment stream:  
[https://owaspsamm.org/model/design/threat-assessment/stream-b/](/model/design/threat-assessment/stream-b/)

Click on the ‘team guidance’ link to see references to useful resources for the stream. The first one is always an OpenCRE link:  
{{< external-link "https://docs.google.com/document/d/1weyNHuAm3XYOYinJPbnEBQV1k48r6Oi3JxZVi2cgy2g/edit" "Guidance Google Doc">}}

Click the OpenCRE link to go  to an OpenCRE page that shows how the SAMM stream is connected to a specific Common Requirement (CRE).  
A CRE is a high-level description of a security control or practice that can be mapped to multiple standards. For example, the Threat Assessment stream is connected to the CRE ‘Threat modeling processes’, which in turn is mapped to several standards such as NIST SSDF PW1.1, ISO27K A.14.2.5, PCI-DSS 6.5.5 and OWASP ASVS V1.4.

### Why use OpenCRE with SAMM
Using OpenCRE with SAMM has several benefits.
* Find additional resources and guidance for each stream, such as articles, books, tools and training materials.
* Compare and contrast SAMM with other security standards and frameworks, and see how they complement or overlap each other.
* Bridge the gaps between different security standards and frameworks, especially if they do not match exactly or cover different aspects of security.

For instance, SAMM’s ‘Training and awareness’ stream links to the CRE ‘Technical application security training’, which directly links to NIST SSDF PO2.2 on training. That is a nice exact match.

However, SAMM’s ‘Architecture design’ stream has no real direct link with a NIST SSDF topic. Normally, in a mapping, one would link a range of SSDF topics but that would be inaccurate and unclear.

The OpenCRE mechanism fixes this by linking SAMM ‘Architecture design’ to the CRE ‘Architecture/design processes’ with many related topics, showing that there is much to say about architecture design. One of those topics is threat modeling, and from there we link to SSDF PW1.1 on threat modeling. One of the other topics related to the CRE ‘Architecture/design processes’ is the CRE ‘Setup and maintain a secure software development process’, which again links to a number of NIST SSDF entries about security requirements.

In other words, using a taxonomy like OpenCRE is very helpful in mapping standards, especially if the mapping is not exact.

### What’s next
We hope you find OpenCRE useful and informative for your SAMM journey. Feel free to also try the new {{< external-link "https://www.opencre.org/chatbot" "OpenCRE Chatbot">}}, currently available to users with an OWASP account. Use it to ask questions on secure software development, and it will source its answers from  the connected standards.

We welcome your feedback and suggestions on how to improve it. You can use the contact form link from the Community menu or any of the options available from the footer of the website.

If you want to join our Slack channel but the direct link doesn’t work, you need an invitation. Get it {{< external-link "https://owasp.org/slack/invite" "here">}}.

The OpenCRE team is also working on adding more standards and frameworks, as well as creating more visualizations and tools for exploring the taxonomy.

Stay tuned for more updates!


---
Be a part of the SAMM community!

* Join our  {{< external-link "https://owasp.slack.com/messages/C0VF1EJGH" "Slack channel">}}, where you'll meet other users, ask questions, give feedback, and be in the loop of all things SAMM.
* Join our monthly community calls, where we discuss different topics, exchange experiences and ideas, and review SAMM’s security practices in depth.