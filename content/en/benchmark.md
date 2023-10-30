+++
title = "Benchmark"
description = "Benchmark"
keywords = ["benchmark","what is","questions"]
+++

## Goals

### How important is it for your organization to compare against peers?
This question got a 7 or higher reply from 69% of SAMM users during our 2022 questionnaire. Helping our users answer the critical questions “How am I doing?” and “What might be working for other similar organizations?” has been part of our roadmap for quite some time. Now, we’ve made this sub-project a priority.
It is our goal to build a database for companies to measure the maturity of their security development practices against the industry based on variables such as verticals and company size. In turn, the information we collect can help the SAMM model evolve based on actual information from the field.
As an added benefit, this project can facilitate research on secure development practices worldwide as universities and researchers analyze and interpret the information the community donates, providing valuable insights.
<br/>
<br/>

## Roles

This initiative can only succeed with the help of the community of practitioners that surround the OWASP SAMM project. 
Practitioners help organizations with SAMM assessments and serve as their benchmark data owner. They demonstrate thorough knowledge of the SAMM model and assess organizations according to the guidelines you can find in our [Getting started](/getting-started) page, and our {{< external-link "https://owaspsamm.thinkific.com/courses/samm" "Fundamentals Course">}}. Also, check out the [Determining Scope](/blog/2023/05/24/determining-scope-when-implementing-samm/) blog post. Practitioners might be internal to the organization that is submitting data, or [external consultants](/practitioners).


{{< responsive-image  "/img/pages/benchmark_roles.svg" "benchmark roles">}}
Visit the [SAMM Core Team](/team) page.

## Contributions
The OWASP SAMM core team accepts only benchmark contributions through verified practitioners. They act as intermediaries between the OWASP SAMM Core Team and their clients of various industries. 
A particular organization is only represented by an ID in the benchmark project database. The practitioner who submitted the data for the organization can use this ID to trace the submission back to the organization.
From the perspective of the SAMM core team, “the submitter” in this approach is always a practitioner, not a company, even though it could be an internal practitioner. 
We accept data from SAMM v1.5, SAMM v2.x, and beyond. There is support for partial comparisons between SAMM v1.5 and SAMM v2.x, but as the model has undergone breaking changes for v2.0 it will not be a full comparison between the versions.

### Submission process
1. Any practitioner can contact the SAMM core team and subject themselves to be vetted. This process is a sanity check to ensure a practitioner exists, is knowledgeable on SAMM and carries out assessments according to the best practices.
2. The SAMM core team vets the practitioner (within a 30-day window), and upon request lists the practitioner on the owaspsamm.org website
3. The practitioner requests permission from their client to share assessment data with the benchmarking initiative
4. The practitioner sends an email with the required metadata and SAMM assessment results to benchmark@owaspsamm.org 
5. The data becomes part of the benchmark

### Metadata
The following metadata are (*) required or optional when submitting benchmark datasets:
* \* Contributor Name (submitter name) 
* \* Contributor Contact Email
* \* Date assessment conducted (MM/YYYY) 
* \* Type of Assessment (Self or 3rd Party) 
* \* Scope of Assessment (Org, BU, Product, Team, … )
* \* Answers to the SAMM Assessment Questions 
* Geographic Region (Africa, Asia-Pacific, Europe, Latin America, North America, Global)
* Primary Industry (Multiple, Government, Critical Infrastructure, Defense, Aerospace, Automotive, Manufacturing, Healthcare, Finance, Fintech, IoT, Cloud, ISV, Retail, Other -please expand)
* Approximate number of developers in org (1-100, 101-1000, 1001-10000, 10000+)
* Approximate number of developers in scope of assessment (1-100, 101-1000, 1001-10000, 10000+)
* Approximate number of primary appsec (1-5, 6-10, 11-20, 20+)
* Approximate number of secondary appsec (0-20, 21-50, 51-100, 100+)
* Primary SDL Methodology (Waterfall, Agile, DevOps, Other )
The more information provided, the better the comparative analysis will be.
<br/>
<br/>

## Tapping into the benchmark data
The end-goal of the benchmark initiative is for companies to use the data to measure themselves against their peers in the industry. Our main hurdle at this point is to gather a large enough dataset to guarantee accurate comparisons and maintain full anonymity for the contributing parties. 
As an added benefit, we’ll use the data to prioritize the publication of guidance for streams and activities.


### Data visibility
We’ll start off with limited access to the raw data, and as the number of data submissions increases we’ll be able to have all the (aggregated) data publicly available. We defined the following stages of data visibility so we can give back to the community as soon as possible
Stages of data visibility
1. Report (starting 2023)  
    During this stage, the core team will create an annual report on the state of software security.  
    <br/>
2. Academic Papers (starting 2024)  
    At this point, we’ll share the information with academic researchers who can analyze the data and share their insights with the community.  
    <br/>
3. Practitioners that contributed (Q4 2024)  
    Vetted practitioners that contributed datasets will be able to compare scores or even get a copy of the database. To reach the latter, we need to have a large enough dataset to ensure anonymity of all contributors.  
    <br/>
4. Public availability (2025)  
    The complete benchmark database is published for all to download or integrate into their tooling via API calls to the underlying infrastructure. 

### Data Retention
There is no predefined retention period for the submitted data. Data will age out over the years and we’ll probably leave it out of reports, for instance. All data will remain part of the dataset, though, unless removed upon specific request. 
The core team can remove data from the dataset upon request from the original submitter (practitioner), or if the team detects fraudulent activity.
<br/>
<br/> 

## Updates
We will be updating this page and the process as the project progresses. If you have any questions, please send an email to benchmark@owaspsamm.org