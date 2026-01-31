+++
title = "Navigating the AI Frontier: How OWASP SAMM Secures the Next Generation of Software"
date = "2026-01-20T00:00:00+02:00"
tags = ["ai", "compliance"]
categories = ["AI"]
banner = "img/banners/ai.svg"
author = "The SAMM Project Team"
+++



A <strong>{{< external-link "https://youtu.be/Ylr2i4OVBYg?si=HJO8EK7Hyl2WcSYS" "recent episode of the SAMM Podcast">}}</strong>, featuring SAMM Core Team members Sebastien Deleersnyder (Seba) and Nariman Aga-Tagiyev with Bart De Win as host (link), explored a critical question: As organizations rapidly adopt AI and build AI-powered applications, how does the OWASP Software Assurance Maturity Model (SAMM) apply to securing this new frontier?
Here is a look into the discussion on the current applicability of SAMM, the unique risks of AI, and the model's path forward.



## AI Development: A Different Risk Profile

While AI-powered applications are still fundamentally software, their development introduces specialized security challenges compared to traditional code:
- **Training vs. Logic**  
  Traditional software logic is explicitly defined by developers. AI systems, by contrast, are trained on massive datasets. This training process means the security, ethics, and integrity of the training data are paramount.

- **Unique Risk Domains**  
  AI introduces new risks that extend beyond classical code vulnerabilities. These include algorithmic bias, ethical implications, and increased **regulatory and compliance impact** - all stemming from how the model learns and operates.


## Is the Current SAMM Model AI-Ready?
The SAMM model does not explicitly reference AI, yet the consensus is that it remains a powerful and **applicable framework** for securing AI systems today.

### SAMM as a Starting Point
SAMM is **technology-agnostic** and provides a structured approach to the entire Secure Development Life Cycle (SDLC), covering **Governance, Design, Implementation, and Operations**.

- **Practices Hold True**  
  Core SAMM practices - such as **Threat Modeling, Security Requirements, Testing**, and **Incident Response** - are all necessary for AI.
  
- **High-Level Coverage**  
  SAMM practices like **Policy and Standards** and **Compliance Management** technically cover the requirements needed to mitigate new risks like data poisoning or model integrity issues, but they do so at a high, structural level.

### The Need for Specific Guidance
For organizations building secure AI systems, SAMM provides the skeleton of the program, but dedicated, granular controls are necessary:

{{< quote "SAMM can help you to protect AI application software, but it gives you a starting point... you will need to go to very specific frameworks to find right controls to make sure that each of that SAMM activity is actually done right." >}}

## Evolving SAMM: Enhancing Support for GenAI

To provide better guidance, the SAMM team recognizes the need to evolve the model, primarily by enhancing its supporting materials and language rather than overhauling the core structure:

1. **Update Language and Wording**  
    Reviewing the existing model to ensure the language caters explicitly to both classical software and **Generative AI** contexts.  

2. **Provide Specific GenAI Guidance**  
    Complement the model with focused guidance on unique AI risks. A key example is addressing **Prompt Injection** - a vulnerability highly specific to Large Language Models (LLMs) that requires dedicated security controls.  

3. **Cross-Reference New Resources**  
    Integrating pointers and links to emerging, specialized frameworks, such as the **OWASP GenAI Top 10** and the **OWASP AI Exchange** project. This ensures organizations on their SAMM journey have the latest references for their specific AI challenges.

## The Hidden Risk: AI-Generated Code

Beyond securing AI powered systems, another major challenge is securing the software written using AI code generators (like Copilot).
As developers accelerate code generation, new issues arise:

- **Maturity Inflation**  
    When development velocity dramatically increases (e.g., 10x more software), an organization's existing AppSec maturity level - measured previously by SAMM - may no longer reflect the reality of the larger, rapidly evolving codebase. **Assessments need to be re-evaluated**.

- **Vulnerability Injection**  
    LLMs are trained on public code repositories that contain known vulnerabilities. The generated code often inherits these flaws, requiring rigorous testing and review.

- **Context and IP Concerns**  
    AI generators lack the full **context** of an organization’s specific compliance, security standards, and business requirements. Furthermore, using generative AI to write core business logic introduces potential legal and **Intellectual Property (IP)** conflicts that must be resolved by legal teams.

    
## Conclusion

The core takeaway is clear: **SAMM remains relevant** for securing the development of AI-based applications. It offers the governance and structure necessary for a mature secure development program. However, as the AI landscape evolves, SAMM’s complementary guidance must keep pace.
The focus for the SAMM community moving forward is to ensure that the framework acts as an up-to-date and robust starting point, directing organizations to the specialized controls and knowledge needed to achieve a high security maturity in the age of Artificial Intelligence.

