+++
title = "SAMM BSIMM Mapping"
date = "2024-12-10T00:00:00+02:00"
tags = ["model", "SAMM", "BSIMM"]
categories = ["mapping"]
banner = "img/banners/samm-ssdf.png"
author = "Aram Hovsepyan, Maxim Baele"
+++

### Building Security In Maturity Model (BSIMM) Mapped to OWASP SAMM
{{<external-link "https://docs.google.com/spreadsheets/d/1WiQcn7wFzSM8xg78SqkIM1QF2C48jBCYi_N_6kOq174" "The full mapping sheet between BSIMM 14 and OWASP SAMM.">}}

#### Introduction

The Building Security In Maturity Model (BSIMM) and OWASP Software Assurance Maturity Model (SAMM) share a common history. Both were conceived around 2008-2009 and are based on OpenSAMM, which was created by Pravir Chandra. Over time, however, these two models have evolved independently, with distinct conceptual differences. We have previously {{<external-link "https://owaspsamm.org/blog/2020/10/29/comparing-bsimm-and-samm/" "explored these differences in detail">}}. Despite their divergence, both frameworks aim to help organizations enhance their application security programs. Recognizing this shared mission, we have developed a detailed mapping between SAMM and BSIMM, highlighting their similarities and points of alignment.

#### Mapping Granularity
The mapping between SAMM and BSIMM follows a similar approach as we did during the SAMM to NIST SSDF mapping. We have mapped BSIMM activities to SAMM streams rather than SAMM activities. This choice highlights the conceptual and structural differences between the two frameworks. Rather than mapping individual activities at specific maturity levels, the SAMM-BSIMM mapping groups BSIMM activities under SAMM streams. SAMM organizes its framework into streams. Streams cover different aspects of a practice and have their own objectives, aligning and linking the activities in the practice over the different maturity levels. BSIMM provides a catalog of specific activities focused on observable behaviors in software security initiatives throughout the organizations that have committed to BSIMM.

#### How Similar Are BSIMM and SAMM?

Despite their conceptual differences, the mapping effort demonstrates that SAMM and BSIMM remain relatively aligned in terms of content. Many activities defined in BSIMM have direct equivalents in SAMM, and vice versa. However, exploring the activities unique to one model offers interesting insights. The differences also provide valuable feedback to the SAMM core team who could consider adding some of these missing activities to the SAMM model.

#### BSIMM Activities Not Present in SAMM

##### 1. Strategy and Metrics: SM3.2 – Make SSI Efforts Part of External Marketing

This BSIMM activity emphasizes the integration of software security initiatives (SSI) into external marketing strategies. By showcasing robust application security practices to the public, organizations can enhance their reputation and foster a security-aware culture internally. This approach draws on the psychological principle known as the {{<external-link "https://en.wikipedia.org/wiki/Pygmalion_effect" "Pygmalion Effect">}}, where higher expectations from individuals or teams often lead to improved performance. When employees recognize that their organization values and promotes security excellence, they are more likely to take pride in their work and strive for continuous improvement.

While SAMM does not explicitly include this activity, introducing it as a quality criterion could be beneficial. First of all, this would reinforce the reputation of SAMM being an industry-wide standard application security program. Encouraging organizations to communicate their application security achievements externally could also positively influence the overall security culture. As the saying goes, "Culture eats strategy for breakfast!".

##### 2. Software Environment: SE3.2 – Code Protection to Safeguard Intellectual Property

This BSIMM activity focuses on protecting intellectual property by making codebases harder to reverse engineer. Techniques such as code obfuscation are particularly relevant for mobile applications and front-end code (typically in Javascript). SAMM currently lacks a direct analog to this activity, reflecting a divergence in focus.

The utility of this activity can be debated. On one hand, relying solely on security by obscurity is discouraged as a standalone strategy. However, when viewed through the lens of the defense-in-depth principle, code protection adds another layer of security. By increasing the effort required for attackers to reverse-engineer code, organizations can make exploitation more challenging.

##### 3. Attack Models: AM2.9 – Monitor Automated Asset Creation
Yet another BSIMM activity not found in SAMM is AM2.9: Monitor Automated Asset Creation. This activity focuses on implementing technology controls that provide a continuously updated view of assets created by engineering teams. These assets include network infrastructure, machines, software components, and related resources. The ability to monitor automated asset creation is crucial for several reasons:
- In modern engineering environments, automated processes such as CI/CD pipelines and infrastructure-as-code (IaC) can instantiate new assets rapidly and at scale. Without continuous monitoring, organizations may lose track of these assets, leading to blind spots in their infrastructure.
- Unmonitored assets can become prime targets for attackers, especially if they are misconfigured, unpatched, or unintentionally exposed.
- Both SAMM and BSIMM require organizations to maintain an accurate inventory of assets.
This activity could align well with SAMM under the Operations business function, specifically within the Environment Management stream.

#### SAMM Activities Not Present in BSIMM
##### 1. Secret Management: I-SD-B

One notable SAMM activity that does not have a direct equivalent in BSIMM is I-SD-B: Secret Management. This activity explicitly focuses on maintaining strong secret management hygiene, including practices such as managing the lifecycle of secrets, detecting potentially leaked secrets, and ensuring secure storage and access mechanisms. BSIMM does reference aspects of secret management in several activities. For instance, SFD1.1 (Integrating and delivering security features), SE3.9 (Protecting the integrity of development environments), and SE2.7 (Using orchestration and virtualized environments). However BSIMM does not explicitly define a dedicated activity for secret management. We believe the root cause for this is BSIMM's descriptive nature. It is indeed plausible to think that organizations are unlikely to have efforts focused on secret management in isolation, rather in combination with concrete activities.

#### Conclusion
The mapping between BSIMM and OWASP SAMM reveals significant overlap and alignment between the two frameworks, highlighting their shared roots and complementary goals. At the same time, exploring activities unique to each model provides valuable opportunities for mutual enrichment.