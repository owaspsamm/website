+++
title = "Addressing Log4J vulnerabilities with SAMM"
date = "2022-02-07T00:00:00+02:00"
tags = ["incident", "log4j", "vulnerabilities"]
categories = ["guidance"]
banner = "img/banners/undraw_code_inspection_bdl7.png"
author = "The SAMM Project Team"
+++

{{< responsive-image  "/img/blog/undraw_hacker_mind_6y85.png" "SAMM assessment">}}

It’s that dreaded notification. The one that holds the threat, and later the reality, of many sleepless nights. The newest vulnerability is here and its severity is considered critical.

This Log4J vulnerability (CVE-2021-44228) has caused quite the stir, and rightfully so. It’s kept security peeps on our toes for the last few months so it was interesting to see this topic come up during our last SAMM monthly community call. One participant asked the very relevant question:

{{< highlight_text  "How can SAMM help identify systems impacted by a vulnerability like Log4Shell and then take actions to remediate it?">}}

To sum it up, we believe this is a great example of the added value of structurally implementing SAMM. It demonstrates that when the SAMM practices and activities work together you are in a better position to face problems such as this one. No single solution will be definitive. Partial implementations will result in partial solutions. Tackling this challenge from different angles and understanding its different dimensions will provide a holistic solution. That is where SAMM will make a difference.

Let’s dive into different security practices in the model and how they help with this issue.

### Governance | Strategy & Metrics

The implementation of [this security practice](/model/governance/strategy-and-metrics/) has an indirect impact but it’s an overarching one. At a high level, having a strategy around appsec to structure all your activities lays the foundation for all the rest.

### Governance | Education & Guidance

Similarly to having an appsec strategy, [training and awareness](/model/governance/education-and-guidance/) in your team provide a baseline and brings more people into the fold. This means more eyes on the lookout and more readiness to take action when needed. Have you considered having a specific info campaign on the topic?

### Design | Security Architecture

In [Maturity Level 2 of Stream A, Architecture Design](/model/design/security-architecture/stream-a/), you identify shared infrastructure or services with security functionality. For this issue, WAFs are particularly relevant. If you don’t have the means to fix the problem in legacy applications, for example, a workaround can involve blocking traffic based on pattern matching for specific Log4Shell attack patterns towards your software.
An application firewall rule can help you detect and might even block an attack, providing an extra layer of defense. A practical example is using the OWASP Core Rule Set, see the latest Log4j rules [here](https://coreruleset.org/20211213/crs-and-log4j-log4shell-cve-2021-44228/).
 
### Design | Security Requirements

[Stream B in this practice](/model/design/security-requirements/stream-b/) focuses on Supplier Security, which applies quite specifically to this vulnerability. Ideally, include a clause in your SLA so suppliers must keep software up to date regarding security. Make sure your supplier contracts state they should act upon security issues, providing a time frame if possible. This includes third-party software you use or acquire, as well as subcontractors that provide services for your organization. You might even be fortunate enough to get Bills of Materials from some of your suppliers, that will allow you to analyze the problem for specific acquired softwares that you are running.
 
### Implementation | Secure Build

[Stream B in the secure Build practice](/model/implementation/secure-build/stream-b/) is about Software dependencies. Again, spot on for Log4Shell.
Building a BOM (Bill of Materials) for your applications is part of the quality criteria for Maturity Level 1 in this activity. What are the libraries included in the software you’re developing? You can make it specifically identify Log4J, adding automatic checks for vulnerabilities in your BOM. OWASP related projects to consider are OWASP [Dependency-Track](https://owasp.org/2021/01/08/dependency-track) and [Dependency-Check](https://binarymindset.com/owasp-dependency-check/).
 
 
### Implementation | Defect Management

[Stream A](/model/implementation/defect-management/stream-a/) is where we keep track of defects. This is the place where the output of many sources of defects come together. You may have outputs from scans, threat modeling, BOM analysis. In this practice is where they all come together and where you’ll look for Log4J issues in the list of defects.

Activities in [Stream B, Metrics and Feedback](/model/implementation/defect-management/stream-b/), are about doing something useful with the defects that you identify . Consider defining a Log4J specific metric or trigger to monitor the state of the organization on the topic.
 
### Verification | Security Testing

The aim [here](/model/verification/security-testing/) is to uncover weaknesses in the organization’s applications through both automated and manual tests. Implementing this practice, we should be able to determine whether the software running in the organization is vulnerable to, in this case, Log4Shell. You can focus on breadth through application scans to identify issues, and you can use static code analysis, for example, for a more in-depth approach. A practical example is to use the [OWASP ZAP Log4Shell Active Scan Rule](https://www.zaproxy.org/blog/2021-12-14-log4shell-detection-with-zap/).

### Verification | Architecture Assessment

[Stream B](/model/verification/architecture-assessment/stream-b/) activities in the Architecture Assessment practice consist of reviewing the architecture for unmitigated threats. In this case it can involve evaluating the architecture for Log4J specific threats. Maturity Level 2 uses input from Threat Modeling and logs unhandled threats as defects. 
 
### Operations | Incident Management

The [Incident Management security practice](/model/operations/incident-management/) is about dealing with breaches or threats of breaches through, for example, the abuse of a security vulnerability. This means aiming for a higher score here could mean our organization is better prepared for Log4J based attacks. In this practice, Stream A is about detection and Stream B is about response.
 
### Operations | Environment Management

[Stream B of Environment Management](/model/operations/environment-management/stream-b/) helps you set up a secure environment, making sure you regularly patch your systems. In the case of Log4J this means updating libraries in your software regularly, and forcing an update now.

{{< responsive-image  "/img/blog/security.png" "SAMM assessment">}}

Log4Shell isn’t the first critical vulnerability and it certainly won’t be the last. Hopefully, we’ve shown how SAMM can help your organization be better prepared for what’s to come, understanding and improving your security posture and having the tools to react fast and efficiently.
 
The best way to lower the risk and get this problem under control is by looking at it in all its dimensions, implementing the different practices and activities in the Model. Doing so will help you attack the problem from multiple sides and compensate for real-world situations like having difficulties building a comprehensive BOM. There are quite a few scripts around to try and spot the vulnerability or even protection patterns to plug in to your WAF to block this kind of attack. But these are limited solutions. They are like pieces of a puzzle. And we need the combination of all the pieces to solve this in a controlled way. SAMM helps us with a structural and proactive approach instead of a reactive one.
 
Join us on our [SAMM Slack channel](https://owasp.slack.com/messages/C0VF1EJGH) and let us know how you handled Log4Shell with SAMM practices!
 
Here are some background links for Log4Shell:
- {{< external-link "https://nakedsecurity.sophos.com/2021/12/13/log4shell-explained-how-it-works-why-you-need-to-know-and-how-to-fix-it/" "A good explanation">}} of Log4Shell from naked security by Sophos
- {{< external-link "https://blog.sonatype.com/ftc-warning-in-wake-of-log4j?hsLang=en-us" "Some input">}} on why software composition analysis tools might be important to identify and track library usage
- A {{< external-link "https://www.reddit.com/r/blueteamsec/comments/rd38z9/log4j_0day_being_exploited/" "list of recommendations and patching pointers">}}

<br/><br/>
Be a part of the SAMM community!
- Join our Slack channel where you will meet other users, ask questions, give feedback, and be in the loop of all things SAMM.
- Join our monthly community calls, where we discuss topics like Log4J, exchange experiences and ideas, and review SAMM’s security practices in depth.
