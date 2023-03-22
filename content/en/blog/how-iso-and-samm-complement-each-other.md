+++
title = "How ISO and SAMM complement each other"
date = "2023-03-21T00:00:00+02:00"
tags = ["model", "scoring"]
categories = ["assessment"]
banner = "img/banners/iso_and_samm.png"
author = "The SAMM Project Team"
+++


October 2022 brought us the third revision of the ISO/IEC 27001 standard. 

The revisions included simplifying the domains and controls, using more practical language, and introducing new controls. The addition of a separate control for "Secure Coding." provides an opportunity to highlight how OWASP SAMM and ISO 27001 are complementary standards.

In this blog post, we shine light on how they intersect and how, implemented together, you can maximize their effectiveness and value.


### ISO 27001

The ISO 27001 standard describes an information security management system (ISMS) that covers the complete organization. This includes secure development, but also physical security, document classification, and other aspects out of the scope of SAMM. 

The standard itself goes a mile wide and an inch deep. The detailed list of controls is a list of best practices, not a roadmap. It is up to the security practitioner to implement an ISMS that works towards the goals that the organization has set, using a risk-based approach. Custom control sets, outside of the standard, are encouraged and even recommended when organizations are aiming to pursue multiple closely-overlapping certifications. 

An ISO-certified ISMS is a powerful tool to systematically improve the overall security posture of an organization. The value of an ISMS increases over time and with each passed audit, because continuous improvement is such a core part of the standard.In addition, the certification gives you a quality label, a way to show customers and other stakeholders that you are investing in security. It can be a competitive differentiator in certain markets or even a strict requirement between organizations. 

ISO 27001 certification makes it easy for non-security people to weed out vendors and service suppliers that are “not serious about security”. However, in rare cases, an ISO-certified ISMS can be an empty box. Either maliciously or due to incompetence, an implementation can be fully “checkboxed”. This can happen when you make enough effort and have enough proof to pass an audit but are not putting in the work to really affect the security posture of your organization. An area that is particularly susceptible to this is secure development. Only in the recent 2022 revision did ISO include a separate control and additional guidance on this domain.


### SAMM adds depth

And here’s where SAMM can assist companies extract more value from the ISMS. In particular for companies that develop software. With SAMM, you analyze and improve your organization’s software security posture by implementing the activities in its 15 security practices. This bolsters your Software Development Life Cycle (SDLC) to help you design, develop, and deploy secure software.

SAMM is orthogonal to ISO 27001 as it goes deep into one singular topic: secure development. Outside of secure development, the model only touches on the domains that support the proper implementation of a secure SDLC, such as documenting governance and compliance drivers.

In contrast to the made-to-measure approach in an ISO 27001 implementation, SAMM is more prescriptive. While SAMM implementations should also be risk-based and tailored to an organization's needs, implementations generally adhere to the maturity level structure that the model describes. This prescriptive guidance bridges the gap between policy and execution in the ISO controls and helps companies prioritize security early on in the development process and ultimately deliver secure software. By doing so it helps provide the evidence in audits that a sound approach was taken.

In turn, an ISO certified ISMS can facilitate implementing an SDLC with SAMM. For one, it ensures that you have leadership buy-in and some form of risk management in place. You already have a set of policies, procedures, roles, and a way to manage them. A large part of the SAMM Governance and Operations pillars map quite well to ISO controls. 

Implementing SAMM, you measure progress and build roadmaps but it will never be the simple stamp of approval you get from an audit. While SAMM offers tools to keep track of your progress along maturity levels, there is no such thing as an “approved SAMM implementation” quality label. SAMM is not meant to be a certification.

That being said, the SAMM team is working on a benchmarking initiative that will allow you to compare your organization’s security posture to your industry peers’. 


### Conclusion

SAMM helps you move the needle on product security with actionable advice, and can be leveraged as a custom control set in an ISMS. In turn, an established ISMS can facilitate a SAMM implementation by providing supporting structures. 

While the ISO certification can get you a foot in the door with customers, SAMM gets you the thumbs-up of their security team.


---
Be a part of the SAMM community!

* Join our  {{< external-link "https://owasp.slack.com/messages/C0VF1EJGH" "Slack channel">}}, where you'll meet other users, ask questions, give feedback, and be in the loop of all things SAMM.
* Join our monthly community calls, where we discuss different topics, exchange experiences and ideas, and review SAMM’s security practices in depth.