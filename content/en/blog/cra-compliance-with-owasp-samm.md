+++
title = "CRA Compliance with OWASP SAMM"
date = "2026-02-27T00:00:00+02:00"
tags = ["CRA", "compliance", "regulation"]
categories = ["compliance"]
banner = "img/banners/security.svg"
author = "The SAMM Project Team"
+++

## An introduction to the CRA

The Cyber Resilience Act (CRA) is a European regulation that introduces cybersecurity requirements as part of CE marking for products that are placed on the European market after the 11th of December 2027.

{{< responsive-image-small "/img/banners/ce-mark.png" "CE mark" >}}

Most of you will be familiar with the "CE" mark, a label indicating that the product where it is affixed to is compliant with relevant EU legislation, and may therefore be sold anywhere in the European Economic Area (EEA) without having to import it in each European country separately.

The CE mark was introduced back in 1985, and up until today has primarily been a mark of compliance with *safety* related legislation. The Cyber Resilience Act now introduces *cybersecurity requirements* as part of the CE marking, for "*Products with Digital Elements*". These Products with Digital Elements, or PDE for short, are products that have some kind of digital functionality and are designed to be directly or indirectly connected to a network. PDE's range from children's toys with bluetooth connectivity, over smart appliances, smartphones or laptops, all the way to industrial automation systems and everything in between. For the first time, *software* is included in the CE labeling scheme too, and will need to be compliant to the regulation if it is installed on end-user devices.

Some PDE are exempt from the regulation, such as those that are covered by a more specific legislation such as medical devices, automotive, aerospace, rail, shipping or military. SaaS products are covered under the more specific NIS2 regulation and as such are exempt unless they are required for the functioning of a PDE that is in scope of the regulation. Lastly, non-commercially supported open source software is exempt too, though open source maintainers and foundations can opt to register as a "*steward*" under the CRA, and voluntarily comply with a lighter regime of the regulation, to promote the adoption of the open source software for use in products that are in scope.
<br/>

## CRA describes outcomes

The CRA is an *outcome-based legislation*, as opposed to a *prescriptive legislation*. It does not prescribe a detailed and exhaustive checklist of technical measures, but describes broad requirements that need to be interpreted by manufacturers of PDE based on risk. These requirements don't just cover the PDE itself but touch on an organizational level too and require the implementation of formal processes enabling secure development, vulnerability handling and long-term security support.

(see {{< external-link "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_I" "ANNEX I - ESSENTIAL CYBERSECURITY REQUIREMENTS" >}})

To prove compliance the CRA requires manufacturers, importers and distributors to build a dossier of technical documentation that provides evidence that the right standards and requirements were taken into account during product design, development and support. They then declare conformity based on the evidence in this technical documentation.

(see {{< external-link "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_VII" "ANNEX VII - CONTENT OF THE TECHNICAL DOCUMENTATION" >}})

Note that while most PDE can be placed on the market with a self-declaration of compliance to the main requirements of the CRA, some categories of products have more specific requirements (described in product-specific standards) or might even require a third-party attestation.

(see {{< external-link "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_III" "ANNEX III - IMPORTANT PRODUCTS WITH DIGITAL ELEMENTS" >}} and {{< external-link "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_IV" "ANNEX IV - CRITICAL PRODUCTS WITH DIGITAL ELEMENTS" >}})

Yet for all categories of PDE, it is up to the manufacturer to determine the extent of the security measures implemented in their PDE and the processes that support the product. In practice, this will differ for each product based on the products' intended use, markets and capabilities.

With only the outcomes described, most of the work that needs to happen will actually happen out of sight, as part of regular product development. The amount of work and the level of formality and automation required will depend on the manufacturer's scale as well as the risk associated with the product with digital elements... And that is where SAMM comes in.
<br/>

## SAMM enables compliance

In an ideal world, manufacturers build products with a minimum level of security in place, backed by a Secure Development Life Cycle (SDLC) where security is considered at every step of the process. In this ideal world, CRA compliance can be proven with minor effort by collecting evidence produced at specific points in the product's SDLC.

Today's reality is that most manufacturers have a mix of formal and informal processes already in place to build products with no or a minimal set of security features. The CRA compliance requirements lead to discussions on what needs to be done, what budget is required and how much time each action would take.

{{< external-link "https://www.cencenelec.eu/news-events/news/2025/newsletter/ots-62-cra/" "CEN/CENELEC" >}} and {{< external-link "https://www.etsi.org/newsroom/press-releases/2545-etsi-leverages-global-technical-expertise-to-support-the-eu-cyber-resilience-act" "ETSI" >}} working groups are putting in significant effort to create standards that will help further clarify what needs to be done, but while these provide more details on *what* needs to be done, they do not explain *how* organizations are supposed to achieve compliance.

SAMM can be used as a tool to bridge the gap between *where you are right now* and *what needs to be done*. It allows you to introduce, scale and continuously improve the engineering and operational capabilities that the CRA assumes will exist.

SAMM facilitates discussions with stakeholders in every layer of your organization to align on the work that needs to be done, providing guidance and references to technical topics as well as a framework for managing your product security strategy. It allows you to use the budgeting and planning structure already in place to plan the work to gradually introduce a secure development lifecycle tailored to your organization and the risk profile of the PDE you are manufacturing. This SDLC then allows you to build and maintain software (and software-enabled products) with security as a repeatable property, rather than the result of a one-off effort.

The practical outcome is that CRA compliance is not treated as a late-stage documentation project but becomes what it should be: a visible property of how you design, build, test, ship, and support products with digital elements. This is the aforementioned *"ideal world"* situation, because it prepares you not just for CRA compliance but for a range of other product security regulations and certification schemes that are in the works at the time of writing.
<br/>

## CRA readiness through the lens of SAMM

Using SAMM for CRA compliance does not meaningfully differ from using SAMM without explicit third-party compliance requirements, but there are some important nuances to keep in mind. The following is a set of recommendations that will help you evaluate an organization's CRA readiness through the lens of SAMM.

### Setting scope

The work starts by defining one or more scopes that map to how you ship and support products. Limit each scope to a product line or family with a shared architecture, release pipeline, and support model. That keeps the resulting improvement plan tied to a real PDE, rather than to an averaged "organizational-level" score that does not directly correspond to what you place on the market.

### Assessment

A SAMM assessment in context of the CRA would still follow our {{< external-link "https://owaspsamm.org/assessment-guide/" "general recommendations" >}}, but there are some caveats on how to interpret the model when using it for CRA readiness.

It is important that not just the activities are evaluated, but their formality too. Does the team follow documented processes? Can the team generate the artifacts required for the technical dossier that forms the basis for CE certification? How repeatable or automated are these activities?

Some activities are more directly and explicitly related to the CRA requirements, and some could be considered "supporting activities".

While working on how to approach CRA readiness using SAMM, two different points of view emerged, resulting in two draft mappings (that remain open to feedback, reach out to us over {{< external-link "https://owasp.slack.com/?redir=%2Fmessages%2FC0VF1EJGH" "Slack" >}}!)

There was a need for a "minimum baseline" for CRA compliance. This translated to a proposed target score for SAMM with the minimum required SAMM practices that will allow organizations to build "secure by design and by default" CRA-compliant products. The actual compliance aspects are not covered, as this is a "vanilla SAMM" target score.
> {{< external-link "https://docs.google.com/spreadsheets/d/1yJ3js30EtL2z1Lbt0EoWoUq_ipH25wGNGQa2rmHu45Q/edit?gid=0#gid=0" "View the minimum baseline mapping" >}}

To better support organizations in implementing processes around CRA compliance from the start, we also created a "CRA flavor" of SAMM that isn't aiming to provide a baseline target, but a set of CRA-specific "requirements enhancements" that help with the interpretation of SAMM for CRA readiness. There is no suggested baseline, the maturity target will differ for each organization and each PDE they manufacture, based on risk, in line with how the CRA approaches due diligence.
> {{< external-link "https://docs.google.com/spreadsheets/d/1c0CiwSc0YN1cBXZuVdLWwXdNb0AXFsHH/edit?gid=157512336#gid=157512336" "View the CRA flavor mapping" >}}

Both mappings can serve as a helpful guide towards evaluating the teams and setting a target that matches the risk level of the PDE in scope.

Another caveat is the fact that you are evaluating a product that most likely will be used by a third party during its operational life. Most activities in SAMM are based on the assumption that you will be responsible for deploying and operating the software in an environment you manage.

When using SAMM for products that are operated by others, we recommend that you approach this with a shared responsibility model in mind. In what parts of the product's lifecycle are you responsible for security? In what parts is your customer responsible? For each activity that you have no direct control over in the operational phase, evaluate how well you are supporting your customers or end-users in carrying out the activity in a secure way.

As an example for {{< external-link "https://owaspsamm.org/model/operations/incident-management/stream-a/" "O-IM-A" >}}, incident detection:

- *Are you generating audit logs for each security relevant activity in your product?*
- *Can your customers access these logs and optionally integrate them into their SIEM?*
- *What were the nonfunctional security requirements for this feature?*
- *Did you document this capability for your customers or users?*
- *Do you provide technical documentation that facilitates automated incident detection?*

Taking these nuances into account, scoring SAMM in a strict way is almost impossible. The motivation for each activity score should be clearly documented, and is more important than the actual score at this point in time.

Documenting why a certain score is given will help you define and prioritize your roadmap and becomes even more important when doing reassessments, allowing for consistent scoring and planning over multiple years. This documentation can be used as a powerful signal of due diligence in the context of the CRA, showing that you have a continuously improving SDLC in place.

### Setting a compliance target

Once the current state is captured, the goal is to set a target profile that is risk-appropriate, not maximalist. Identify which activities are required to be highly mature or even automated, and which ones can be introduced in a more lightweight fashion.

We recommend that you work your way back from the technical documentation requirements described in annex VII, the essential cybersecurity requirements described in Annex I, and the EN40000 series of standards (that are in draft at the time of writing), to identify the maturity target for each supporting process. This, again, is where the mappings will help you.

### Following the roadmap

With a baseline and target in place, teams can create a roadmap that sequences the activities required to close the gap between current and desired maturity. This approach does not differ from regular use of SAMM. The roadmap should be developed collaboratively and owned by the team responsible for the product. It should be incorporated into their existing planning and issue-tracking systems, and executed as part of normal development, change and support processes.

Progress toward the target is best monitored through relative scoring metrics, such as percent to target, which measure the distance between current and target maturity rather than focusing on absolute scores. ({{< external-link "https://owaspsamm.org/blog/2025/01/21/samm-relative-scoring/" "SAMM Relative Scoring" >}}) This approach encourages teams to prioritise improvements that reduce risk and advance the most critical maturity goals rather than simply increasing raw maturity scores. Regular reporting of progress against the roadmap helps organizations to keep track of their ongoing CRA readiness, and again provides another excellent way of proving due diligence.

You should plan for periodic reassessments, typically every one to two years or after material changes to processes or products, to update targets and refine roadmaps. This cadence supports continuous, structured increases in maturity rather than episodic upgrades, ensuring that engineering practices evolve over time in response to both internal improvements and the changing threat and regulatory landscape.
<br/>

## Further reading

An increasing number of practitioners is using SAMM for CRA-oriented roadmaps, and we are learning together with them. Come and join the discussion on {{< external-link "https://owasp.slack.com/?redir=%2Fmessages%2FC0VF1EJGH" "Slack" >}} or our {{< external-link "https://www.meetup.com/owasp-samm/" "community calls" >}} to ask questions and share feedback!

Dag Flachet gave a talk on CRA and SAMM at the {{< external-link "https://youtu.be/SgKzp60s544" "SAMM user day in Barcelona 2025" >}}.

Recent {{< external-link "https://github.com/lrmapna/samm-cra" "academic work by Lara Brito" >}}, published by the Tilburg Institute for Law, Technology and Society, has evaluated SAMM as the basis for real-world maturity evaluation and improvement planning in context of the CRA.

In our January 2026 community call, we hosted a {{< external-link "https://youtu.be/cTU_XHlX9H4" "mini-podcast on the interaction between CRA and SAMM" >}}.
<br/>

## Product security legislation around the world

The Cyber Resilience Act is not the only product security legislation around, but at the time of writing this article, it is the one with the widest coverage and most stringent requirements. There's a wide range of similar legislations that have an overlap with some of the CRA requirements that should be taken into account too, depending on the market where you sell your products.

**UK PSTI Act 2022** -- UK (effective 29 Apr 2024)
{{< external-link "https://www.legislation.gov.uk/ukpga/2022/46/part/1" "legislation.gov.uk" >}}
Mandates security requirements for consumer "connectable" products; prohibits default passwords and requires vulnerability disclosure policies, product update plans, and a statement of compliance. The Act's 2023 Regulations (UK SI 2023/1007) set specific minimum security criteria based on ETSI EN 303 645.

**Japan JC-STAR Labeling Scheme** -- Japan (launched Mar 25, 2025)
Voluntary labeling scheme ("Labeling Scheme based on Japan Cyber-Security Technical Assessment Requirements") for IP-connected IoT devices. It defines a unified baseline (STAR-1) covering all IoT products and higher security levels (STAR-2/3/4) by category. Labels are awarded by IPA based on self-attestation (STAR-1/2) or third-party testing (STAR-3/4) and include QR codes linking to product security info.

**Australia Smart Device Rules 2025** -- Australia (effective 4 Mar 2026)
Introduces mandatory security standards for consumer smart devices (excl. PCs, smartphones, etc). Requirements include no universal default passwords, published vulnerability-reporting contact, and disclosure of support period. Suppliers must accompany devices with a compliance statement as per the Cyber Security Act 2024.

**US IoT Cybersecurity Improvement Act of 2020** -- US (signed 4 Dec 2020; key provisions effective Dec 5 2022)
{{< external-link "https://www.congress.gov/bill/116th-congress/house-bill/1668" "congress.gov" >}}
Requires NIST to develop IoT device security standards and vulnerability disclosure guidelines for federal agencies. From Dec 5, 2022, federal agencies are prohibited from contracting for IoT devices that do not comply with the NIST standards or disclosure policies. (Applies only to federal procurement of connected devices.)

**FCC IoT Labeling (Cyber Trust Mark)** -- US (rule adopted March 2024)
{{< external-link "https://www.fcc.gov/document/fcc-adopts-rules-iot-cybersecurity-labeling-program" "fcc.gov" >}}
Voluntary cybersecurity labeling program for wireless consumer IoT products. The FCC rules create a "Cyber Trust Mark" that manufacturers can use to certify basic security practices. (Rules codified at 47 C.F.R. SS8.200 et seq.) The FCC's press release notes the program is voluntary and will be overseen by a third-party rating body.

**California Connected Device Security Law (SB-327)** -- US/California (effective 1 Jan 2020)
Requires manufacturers of Internet-connected devices sold in CA to equip them with "reasonable security features" appropriate to the device. SB-327 mandates that any preprogrammed default password be unique per device or require a user-set password on first use.

**Canada Consumer Product Safety Act (CCPSA)** -- Canada (effective Jan 15, 2015)
{{< external-link "https://laws-lois.justice.gc.ca/eng/acts/c-1.68" "justice.gc.ca" >}}
Federal law requiring consumer products to be safe from physical risks to health or safety. Applies broadly to goods but does **not** address cybersecurity or digital vulnerabilities. No mandatory IoT/cybersecurity labeling scheme exists in Canada to date.

**Singapore Cybersecurity Labelling Scheme (CLS-IoT)** -- Singapore (launched 2019, ongoing)
Government-backed voluntary labelling for consumer IoT devices. Products are rated (Level 1-4) based on their built-in security provisions. The scheme (first in Asia-Pacific) enables consumers to compare device security; it has been extended to most consumer IoT categories.
