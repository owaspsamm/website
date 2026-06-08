---
title: "Example Interview Questions"
description: "Open-ended interview questions designed to cover the full range of SAMM assessment topics, based on the SAMM assessment sheet 2.0."
weight: 30
toc: true
---

These open-ended questions are designed to trigger conversations that cover the range of SAMM questions as much as possible. Keep the SAMM assessment sheet at the side as a checklist to see if you need to ask additional questions.

The scenario is an interview with a development team. The questions follow the order of the SAMM assessment sheet 2.0, with a slight change for more natural flow: Education & Guidance comes after Secure Architecture.

## Governance

1. Tell us about the input instructions, policies, standards or any other documentation that you get from the organization regarding security?
   1. How does the organization deal with risks and threats? What assets and data are important and how?
   1. How is that security documentation accessible? Is there anything else information-wise that you might need and that is not currently available?
   1. What is the organization's strategic plan for dealing with application security? More specifically, you can ask about concepts like risk appetite, business priorities, roadmap, budgets, etc. Is there a buy-in from all stakeholders including the teams?
      1. When was the last time the plan was reviewed and updated?
      1. How do you know it is a good plan? Are there any KPIs security-wise? *(This question looks for metrics, how they are measured and where they are published. The strategy and the roadmap should ideally be based on the KPIs and updated based on the results.)*
   1. How about organizational policies and standards?
      1. Describe how you interpret / implement these from a specific technology perspective.
      1. How do you ensure the organizational policies and standards are actually implemented? *(Looking for test scripts / run-books / tools, either manual or automated.)*
      1. Do you need to report back whether the applications are compliant with these policies and standards? How do you do that?
      1. Do you have any external obligations (e.g., GDPR, ISO27001, SOC2, etc.)? How do you deal with these? *(Looking for any translation of these to requirements.)*
   1. How does the organization deal with the inherent business risks of an application? For example, an intranet-facing app for calculating holidays is obviously not as critical as a SaaS application that generates a substantial portion of the organization's revenue.
      1. Is there any documentation of this risk profile per application?
      1. Does the team know about these and can they access these profiles?
      1. When was the last time it was updated?

## Design

2. Moving on to technical risks: how do you deal with risks and threats in a given application?
   1. What approach do you use? Is there a checklist-based threat modeling approach or just a brainstorming session?
   1. Is there training for such a risk/threat modeling activity?
   1. What is the output of this exercise?
   1. When do you threat model in your SDLC?
   1. When was the last time you reviewed a threat model? Do you review the models regularly?

3. How do you deal with requirements in general and security requirements in specific? Do teams come up with requirements themselves and based on what input?
   1. Could you please show some examples?
   1. We're curious to understand who is involved in the requirements process?
   1. Are the requirements aligned with the organization baseline (e.g., a password should be 12 characters long and not be found in a dictionary attack)?
   1. Any chance you leverage a standard framework to assist (e.g., ASVS)?

4. Do you have any third parties building software for you? If yes, what do you require of them?
   1. Do you have a standard list of requirements / questions for selecting the third party?
   1. How does the agreement with the third party look? Is there anything about security requirements and processes in that agreement?
   1. Do you base your agreements on a standard template?
   1. How do you check the security quality of the software the third party has delivered?
   1. On a scale of 1 to 10, how good is the secure SDLC of this third party?

5. How do you deal with security requirements on an architectural level? Do you have any standard and reusable security building blocks or services?
   1. Do you have a list of high-level security principles that the team knows and leverages (e.g., defense in depth, no secret sauce, etc.)?
   1. When you develop new applications, how do you build the architecture? Do you start from a reference architecture or do teams improvise every time?
   1. Is there a list of available building blocks / services that you can simply reuse in every application (e.g., authentication module, sanitization service, etc.)? Do you have the necessary knowledge accessible to use these?

6. What technologies do you use? How about the security risks of those technologies?
   1. Can you use any technology you would like to?
   1. Is there any automated enforcement of the recommended list of technologies?

## Education & Guidance

7. How do you make sure that everyone is aware of security in terms of training?
   1. What trainings do you provide to whom, and when was the last time the training curriculum was updated?
   1. Is the training for everyone? Is it consistent and mandatory?
   1. Is there any customization towards different roles?
   1. Is there a learning management system to track the completion of the courses?

8. Do you have security champions in the teams?
   1. What do they do?
   1. Is the process smooth and what would you change?

9. Do you have a security team / center of excellence?
   1. What is its charter and what do they do?
   1. Is there any material they publish and how is it accessible / searchable for everyone in the organization?
   1. Is the security team effective and how could it be further improved?

10. How do teams share AppSec information?
    1. Is there a portal / Slack channel? How do you make sure people actually read it?
    1. What information is shared? Tool updates? Standard changes? Metrics?
    1. How well does it work on a scale from 1 to 10 and how would you make it better?

## Implementation

11. Could you describe your build process?
    1. How do you harden / secure the process and the tools? Can anyone tamper with them?
    1. How do you store the build-time secrets?
    1. How much human interaction is required in the build process?
    1. Do you have any security checks in the build? What tools do you leverage? Are the tools effective?
    1. Do the tools break the build when they find vulnerabilities? When do you accept a build and when not?
    1. Do you log the warnings and failures?
    1. How often do you reconfigure and reconsider the tools?

12. How do you deal with third-party dependencies?
    1. How do you deal with vulnerable dependencies?
    1. How about outdated or no longer maintained dependencies?
    1. How about the legal (licensing) aspect?
    1. What happens to the build process if a vulnerability is found in one of the third-party libraries?
    1. Which tools do you leverage for third-party dependency monitoring?
    1. When a developer decides to add a new dependency, is there any approval process behind it?

13. Could you describe your deployment process?
    1. How is the process hardened?
    1. How much human interaction is required in the deployment process?
    1. What happens if vulnerabilities are identified during the deployment?
    1. How do you make sure that what you deploy is actually what you have produced in your build process (integrity of the deployed artifacts)?
    1. How do you deal with production secrets? Who has access to them and is there any monitoring for suspicious events / access?
    1. Can the source code end up containing secrets?
    1. How do your secrets end up in configuration files?
    1. How frequently are the secrets changed?

14. How do you track defects in your landscape?
    1. Do you have a registry for it?
    1. How do you classify your known weaknesses in type and in severity?
    1. What are the sources?
    1. Is there an SLA on these defects? Or do you have KPIs/metrics?
    1. How is follow-up on defects enforced?

## Verification

15. How and when do you review your architecture for security?
    1. Who does it and how?
    1. Do you have any standardized security requirements for that?
    1. Do you track the findings?
    1. Do you approach it from the perspective of standard threats, or threats identified from threat assessment?
    1. Do you also review the effectiveness of controls in that architecture? How?
    1. Do you update your reference architecture based on findings?

16. What is your security testing policy?
    1. When are tests executed?
    1. What part of the tests is automated and what part is not? For instance, how does the QA know what to test?
    1. What frameworks / tools / languages do you leverage (test suites, DSLs, DAST, SAST, fuzzing)?
    1. When do you translate bugs into regression tests?
    1. Do you have a set of predetermined threats (abuse cases) to test against?
    1. How about stress tests / denial of service?
    1. How is security testing performed during build and deployment? What do you do with the findings?
    1. How about manual review? Who, when and how do you perform it? Any checklists?
    1. How about pentesting: when, how and who? Any specific test cases?
    1. How do you use findings from testing to improve the development process / training?

## Operations

17. Do you analyze logs for security incidents? What is the process of handling them (document, respond, root cause analysis)? Always ask how, by whom and when.
    1. How formal are these detection and handling processes (owner, documented)?
    1. When was the last time these processes were reviewed / updated?
    1. How informed are people (training checklist)?
    1. Do you have incident classification?
    1. How about forensic analysis tooling?
    1. Is there an incident response team?

18. How do you make sure your key tech stack components are configured securely (e.g., container configurations, Linux machines, etc.)?
    1. Are there any baselines in place and who maintains them?
    1. Is there training for this?
    1. How do you monitor conformity with baselines (automated)?

19. What is your process of keeping components up-to-date?
    1. Do you have an SBOM and how do you check for vulnerabilities?
    1. Is there an SLA in place?
    1. How do you review and update this process?

20. How do you keep track of what data is stored where, and the sensitivity levels?
    1. Do you leverage a data catalog?
    1. Do you include regulation?
    1. How do you prevent production data getting into acceptance and testing? Who has access to the production data?
    1. Are there any controls in place to protect data in its lifecycle?
    1. How do you deal with backups and most importantly their timely deletion?
    1. Do you audit and review the data catalog, policies and procedures?

21. What happens when applications or services become end-of-life?
    1. How do you know which applications are still in use?
    1. How do you review applications and services with respect to their life state and estimations?
