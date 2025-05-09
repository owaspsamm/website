---
title: The SAMM Benchmark Report
description: "OWASP SAMM Benchmark Report"
keywords: ["benchmark","what is","questions"]
layout: main-page
---

## Goals

The OWASP Software Assurance Maturity Model (SAMM) is rapidly becoming the go-to framework for application security programs, and it’s easy to see why. SAMM offers a structured, measurement-driven approach to improving software security. It helps organizations assess and elevate their software security maturity on a scale from 0 to 3. However, many organizations face challenges after completing their initial SAMM assessment. There’s growing interest in understanding how other organizations are progressing, making real-world data one of the hottest topics in the SAMM community. The SAMM Benchmark initiative is designed to address these challenges by offering a centralized source of real-world data, enabling organizations to compare their progress, identify trends, and learn from the broader community. In this first Benchmark Report, we provide an in-depth analysis and interpretation of the OWASP SAMM Benchmark data.

</br>

## Key Takeaways

* **Limited Dataset Scope**  
  Only 30 assessments, mostly from global multinationals, evaluated by third-party experts.

* **Skewed Averages**  
  High SAMM average score of 1.44/3.0 likely unrepresentative of smaller firms.

* **Governance and Operations**  
  Large organizations excel, driven by compliance requirements and mature processes.

* **Verification Challenges**  
  Security requirements are defined but not systematically addressed in code.

* **Tool Tuning**  
  Few organizations reduce SAST tool noise through proper tuning.

* **Metrics Gap**  
  Investments in security lack clear ROI metrics, making effectiveness hard to measure.

</br>
</br>

## Benchmark Demographics

### The Benchmark Dataset is Limited to 30 Assessments
Let’s deal with the really bad news first. The current SAMM benchmark dataset includes only 30 submissions, significantly limiting its representativeness. With such a small sample size, drawing global insights is challenging. The Benchmark Initiative aims to provide segmented data based on parameters like geography, industry, company size, and development methodology. For instance, a bank would benefit most from comparing its scores with those of similar-sized banks in the same region. However, achieving this granularity requires adhering to k-anonymity, a privacy-preserving technique that ensures individual data cannot be distinguished from at least k other entries. On a positive note, the latest SAMM benchmark update supports segmentation by company size.

### Most Data Comes from Third-Party Expert Assessments
Ensuring high-quality data is a central goal of the benchmark initiative. SAMM provides detailed criteria to help assessors evaluate each activity objectively. However, interpretations can vary, especially among self-assessments, which are often more optimistic. Over 80% of the dataset comes from independent expert third-party SAMM practitioners, ensuring data accuracy and consistency. This reliance on reputable assessors gives the benchmark data a strong foundation of credibility.
{{< responsive-image "/img/pages/benchmark/demographics-assessment-type.svg" "SAMM Benchmark is mainly comprised of third-party assessments">}}

### A Majority of Data Represents Global Multinational Companies
Surprisingly, the majority of submissions come from large multinational companies operating globally, despite the challenges they face in securing legal approval to share their data. Smaller companies, which often have fewer legal and executive hurdles, are underrepresented. While the strong presence of multinationals is impressive, the dataset would benefit from more contributions by small and medium-sized organizations to better reflect the diversity of the application security landscape.4

### Assessment Scope Reflects a Balanced Mix
The benchmark data represents a balanced mix of assessments conducted at the team, organizational, and company levels. Before conducting a SAMM assessment, defining the scope is crucial—whether it’s a single team, an entire company, or a specific business unit. While the scope itself currently does not appear to significantly impact results or their interpretation, this balance highlights the varied ways organizations are leveraging SAMM for their security maturity assessments.
</br>
</br>

## Overall benchmark results

### Maturity Levels
Before diving into the scores, let’s revisit what the SAMM maturity levels represent.
{{< responsive-image "/img/pages/SAMM_model_structure.svg" "SAMM Maturity Levels">}}

* **Maturity Level 0**  
  Indicates no activity or focus on application security for a given business function, practice, stream, or activity.
* **Maturity Level 1**  
  Reflects an initial understanding and ad-hoc implementation of the practice.
* **Maturity Level 2**  
  Represents increased efficiency and effectiveness in executing the practice.
* **Maturity Level 3**  
  Signifies comprehensive mastery and implementation of the practice at scale.

</br>

These maturity levels provide a qualitative framework for interpreting scores. However, averaging maturity levels across diverse practices can sometimes be misleading. For example, if three practices score 0.0, 3.0, and 3.0, their average would be 2.0, suggesting high maturity overall. Yet, a 0.0 score in a critical area—like secure builds—can have significant implications, diminishing the overall security posture.
Despite these nuances, averaging scores can still offer valuable insights. When practices are closely related, averaging becomes even more meaningful. For instance, averaging incident detection and incident response scores provides clearer insights than averaging governance and operations scores, which are less directly connected.

### Average SAMM score: 1.44 out of 3.0
The average SAMM score across assessments stands at 1.44 out of 3.0—a result that may seem unexpectedly high. Realistically, if we sampled 30 random companies, it’s unlikely their average would approach this level. Community feedback corroborates this skepticism, with many practitioners reporting significantly lower scores, particularly among smaller companies. Interestingly, the average score has risen compared to the previous benchmark dataset, which contained 25 assessments.

{{< responsive-image "/img/pages/benchmark/average-data.svg" "SAMM Benchmark: average score">}}


### Operations: The Highest Scoring Business Function
The Operations function achieved the highest score at 1.81 out of 3.0, nearing maturity level 2. Operations includes maintaining the confidentiality, integrity, and availability of applications and their data throughout their operational lifecycle. This strong performance is unsurprising, given the dataset’s heavy representation of large multinational organizations, which typically excel in operational maturity due to significant investments.
Surprisingly, small companies also scored relatively well in Operations. Despite having fewer resources, these companies probably leverage best practices and tools for operations tasks such as incident detection and response.


### Design: The Second-Highest Scorer
The Design function scored 1.5 out of 3.0, making it the second-highest business function. Design activities include defining goals and creating software securely, with a focus on processes such as threat modeling, security requirements, and reusable secure architecture. These activities are often associated with the "shift left" paradigm, which encourages addressing security considerations early in the development lifecycle.
While these practices demand significant effort and organizations don’t tend to invest in them, large companies often perform well due to their robust vendor management and technology management practices. Interestingly, smaller companies also scored respectably in Design, where it ranks as their third-highest scoring function. This suggests that even resource-constrained organizations can achieve meaningful progress in this area.

### Implementation: Strong but Room for Improvement
The Implementation function scored 1.46 out of 3.0. This area focuses on how organizations build and deploy software while managing defects. Given the rise of DevOps and DevSecOps, one might expect higher scores here. However, several challenges persist:

* Many organizations avoid failing builds even when vulnerabilities are detected.
* Few teams adopt a “nice list” of approved third-party components.
* Signed builds and signature verification during builds are rare.

Small companies, despite resource limitations, see Implementation as their second-highest scoring function.

### Governance: Balancing Strengths and Weaknesses
Governance scored 1.35 out of 3.0 and encompasses activities for managing software development at an organizational level. Large organizations excel in governance, especially when it comes to policies, standards and regulatory compliance. Training and awareness initiatives are also gaining traction, lately. Smaller companies, however, often lack formal governance structures, relying instead on tribal knowledge. Programs like security champions or centralized knowledge bases remain uncommon in these environments, leading to a stark contrast in maturity scores between large and small organizations.

### Verification: The Lowest Scoring Business Function
Verification, with an average score of 1.12 out of 3.0, consistently ranks lowest. This function involves ensuring quality through activities like testing, reviews, and evaluations. Despite the critical role of verification in application security, organizations face several barriers:

* Tools are underutilized and rarely fine-tuned, leading to excessive false positives.
* Threat modeling, though essential, is often misunderstood as overly complex and time-consuming.
* Penetration testing outcomes are rarely integrated into broader security strategies, such as improved training, tuned tooling, or regression test suites.

Verification’s low score highlights a broader issue: organizations are investing in security practices but often fail to systematically verify their effectiveness. Adopting pragmatic approaches to activities like threat modeling could help bridge this gap, fostering long-term improvements in application security programs.



## Other Insights from the SAMM Benchmark

### Third-Party Assessments Outperform Self-Assessments
Surprisingly, third-party assessments score consistently higher than self-assessments. Initially, SAMM veterans expected self-assessments to inflate scores due to shallow interpretations of criteria and the tendency to overrate oneself. While these factors may still influence results, the data defies these simplistic expectations.

 {{< responsive-image "/img/pages/benchmark/third-party-vs-self-assessments.svg" "SAMM Benchmark: third party vs self-assessments">}}

One possible explanation is that teams often perceive SAMM assessments, regardless of the messaging, as audits. This perception motivates teams to prepare thoroughly, leading to improved scores. However, whether a team can significantly enhance their SAMM score in a short timeframe, such as two months, depends on various factors.


### Fast Improvements Are Possible for Certain Activities
Some SAMM activities are relatively straightforward to implement and can boost maturity scores quickly. For instance, processes like secure build and deploy, centralized defect tracking, secrets management, and security testing often involve adopting and fine-tuning tools. Small organizations, in particular, might see rapid improvements by focusing on these areas before an anticipated third-party assessment.

### Inflating Scores Without Real Progress
Unfortunately, it's also possible to artificially inflate SAMM scores without substantial work, particularly for practices where the current maturity level is low. For example, a team could quickly design a training program or update policies to appear more mature. However, this approach runs counter to the intent of SAMM, which emphasizes genuine security improvements.


### Third-Party Assessments as Follow-Ups
Another factor is that third-party assessments often follow earlier self-assessments. Teams may conduct a self-assessment, address gaps, and then invite external experts to validate their progress. This sequence naturally leads to higher scores in third-party evaluations.


### Challenges with Metrics and KPIs
SAMM encourages organizations to use metrics to measure the effectiveness of their application security programs. While many companies rely on metrics like vulnerability counts from SAST, DAST, or SCA tools, these are not always effective proxies for risk or program efficiency.

* Tools often produce false positives or fail to account for system context.
* CVSS impact scores are poor substitutes for actual risk since they don't consider likelihood.
* Metrics rarely reflect the broader return on investment in security or its impact on reducing real-world risks.


### Verification of Security Requirements Is Rare
Effective software engineering involves specifying, implementing, and verifying requirements are correctly implemented. Yet, many organizations fail to verify the correct implementation of security requirements systematically. While manual and automated tests can bridge this gap, they require varying levels of effort and investment.

{{< responsive-image "/img/pages/benchmark/security-testing-pyramid.svg" "Security testing pyramid">}}


### Threat Modeling Has a Long Way to Go
Threat modeling is a crucial yet underused practice. Despite being relatively simple and cost-effective, it often lacks leadership buy-in, which hinders its adoption. With proper support, pragmatic threat modeling can significantly enhance security programs.

{{< responsive-image "/img/pages/benchmark/bottom-5-practices.svg" "SAMM Benchmark: bottom 5 practices">}}


### Security Tools Often Lack Proper Tuning
Organizations frequently invest in security tools like SAST, DAST, and SCA but fail to optimize them. Untuned tools generate excessive findings, which can overwhelm teams and reduce effectiveness.

* Tools should be tested for compatibility with the tech stack before purchase.
* Continuous tuning is essential to reduce false positives and integrate findings from manual reviews and penetration tests.


### Reluctance to Block Builds for Vulnerabilities
Many organizations hesitate to enforce build failures for vulnerabilities or vulnerable dependencies, as requested by SAMM Secure Build at maturity level 3. Although this is easy once you have a pipeline with integrated security tooling, an important reason could be that upgrading vulnerable third-party components can trigger a cascade of changes, making it a complex process. Also, while SAMM allows for risk acceptance strategies, these are rarely used.


### Secrets Management Scores Are Strong
Secrets management stands out as a well-implemented area, thanks largely to modern best practices and tools. For example, tools now offering secret scanning have helped enforce disallowing secrets in the committed code. Cloud providers and security tools have made secrets management more accessible, contributing to higher scores.


### Configuration Hardening Needs Better Monitoring
Configuration hardening ensures secure baseline configurations across components, but monitoring and enforcement often lag behind. Container image scanning frequently generates numerous findings, many of which are unresolvable due to outdated base images. Implementing “golden images” requires significant effort, and adoption can be challenging. Some teams rely on cloud providers for CIS benchmark monitoring, but this approach doesn’t fully address the complexities of diverse application stacks.


### Data Catalog Adoption Remains Low
Despite increasing regulatory requirements, data catalogs are still uncommon. Even teams strict about security practices sometimes overlook this foundational element, highlighting a gap in compliance-oriented data management.
</br>
</br>

## Path Forward
This benchmark underscores the importance of nuanced, sustained efforts to improve application security maturity. Organizations should focus on long-term strategies that integrate security into every stage of software development. The success in secrets management demonstrates the power of accessible tools and clear best practices, offering a model for tackling other challenging areas.

By addressing gaps in verification, embracing the full potential of threat modeling, and improving the alignment of metrics with meaningful outcomes, organizations can achieve more significant and lasting progress. As SAMM continues to evolve, it will remain a vital framework for guiding and measuring these efforts.

</br>

## Submit data

Remember this initiative is for organizations to measure themselves against their peers in the industry. Our goal remains to gather a large enough dataset to guarantee accurate comparisons and maintain full anonymity for the contributing parties.

There are 2 ways of submitting data
* Uploading it to the {{< external-link "https://bit.ly/sammbenchmarksubmission" "Benchmark folder">}}  
  Please, refer to {{< external-link "https://www.youtube.com/watch?v=zF4k0TXCvGw" "this video">}} for instructions.

* Sending it by email to benchmark@owaspsamm.org

The data is collected in an anonymous way and covered by the following [terms and conditions](benchmark-terms-and-conditions). During the submission process we will ask for some metadata. The more information provided, the better the comparative analysis will be.

To help practitioners get permission from their clients or companies to submit datasets, we have created the following {{< external-link "https://docs.google.com/document/d/12Ryo0vwDsCpqJYtOA1FdhKnMl89yPpiJaAaAgopiUbg/edit?usp=sharing" "email template">}}.

</br>

{{< button "/benchmark" "Go to the main Benchmark page">}}