+++
title = "The \"Not Applicable\" Question"
date = "2022-11-30T00:00:00+02:00"
tags = ["SAMM", "assessment", "model", "scoring"]
categories = ["assessment"]
banner = "img/banners/discussion.png"
author = "The SAMM Project Team"
+++

### The Core Team's Thoughts

Since the initial publication of SAMM 2.0, several SAMM users have asked how to address Activities or Quality Criteria they believe are not applicable to their assessment’s scope.
At the recent SAMM Core Team Summit in Boston, we discussed this question at some length, and this article summarizes that conversation. 
The topic really involves several questions, which we’ll address one at a time.


#### Is it valid to declare an Activity Not Applicable?
Yes, it is – strictly speaking – valid to declare an Activity not applicable to the current assessment’s scope. But…we contend it’s very rarely true. Consider a couple common scenarios:

##### Responsibility for performing the Activity lies outside the assessment scope

We understand this is a situation that can arise frequently, when conducting assessments at scopes smaller than the entire organization. Policies and standards might be managed by a corporate Security Team, with smaller business units barred from creating their own. Budget and control of security-related training might rest entirely with a Training Team within the organization’s people management (“HR”) group.

In such situations, the Activity isn’t Not Applicable. Rather, the group performing the assessment must recognize they have no control over fulfillment of the Activity, and account for this in the assessment.

For example, in Education and Guidance, the assessment team would assess the organization’s training program (as they understand it) against each Activity’s quality criteria and coverage metrics. In the assessment notes, the team would record what ‘external’ elements were considered, and their reasoning for the score assigned.

When setting roadmap targets for these Activities, the assessment team should account for upcoming improvements to the provided training program, as well as any supplemental initiatives from within the assessment scope. Absent any such efforts, set all roadmap targets equal to the baseline assessment scores.

##### We choose not to do the things required to fulfill the Activity  
While we’ve observed this situation less often, it does arise. For example, it may go against the organization’s Agile culture to enforce an Approved Software List, so there’s no appetite to fulfill Activity D-SA-3-B (“Impose the use of standard technologies on all software development”).

In this case, again, the Activity isn’t Not Applicable. You’ve simply made the considered decision to say “yeah, we’re not going to do that,” or “we’re not going to do anything about that within our roadmap timeline.” These are valid decisions, but they don’t mean the Activity doesn’t apply.

In this case, the assessment team should assess the Activity as “not performed” (0.0) in the baseline assessment, and across all roadmap milestone targets.

#### If an Activity is Not Applicable, can we give ourselves full marks?
The simplest answer to this question is this: OWASP SAMM is an open framework, and you are free to modify it in any way that you’d like, as suits your use case – including adjustments to how assessment scores are computed.

The more nuanced answer, however, is this: there’s no need to make any such adjustments, as well as a compelling reason not to.

In most cases where somebody argues such adjustments are necessary, they are expressing an inappropriate focus on a single number – their score (e.g., 1.39 out of 3.00), either within a Practice or for the overall assessment. With that focus, it feels unfair to be “penalized” for not performing an Activity they see as Not Applicable.
This is the wrong way to look at SAMM assessment scores, though. Assessment scores represent “pins on the map” – a way to express the organization’s baseline maturity, as well as the short- and long-term improvement objectives, against a consistent and well-defined measurement scale.
It’s important to understand, and to help your organization understand, the value of a Practice-level or overall SAMM assessment score has no concrete meaning as a standalone metric – and there’s no such thing as a “passing” score. Assessment scores gain meaning when compared against one another, across assessments, over time, or against your roadmap’s targets.

When viewed in this way, you can see there’s no need to adjust scoring formulas, or to feel penalized for deciding not to perform an Activity. A key reason not to make such changes is that your organization would lose the ability to use – or contribute to – the OWASP SAMM Benchmark initiative. Once your organization customizes the way you compute assessment scores, it’s no longer valid to make side-by-side comparisons with other organizations’ assessments, or with benchmark scores. Likewise, contributing assessment scores based on adjusted criteria or calculations would detract from the validity of benchmark values, so they’re not acceptable for inclusion in the Benchmark initiative’s data set.

#### What if we want to waive or adjust Quality Criteria?
The same answers apply as for the case of changing scoring formulas – you’re free to do it, if you really believe it’s necessary. Again, there’s arguably no need to do so, and it would make comparisons against and contributions to benchmark data sets invalid.

On the other hand, it’s a great idea to restate Quality Criteria in the systems, domains, and practices of your organization. Call out existing policies, standards, and processes by name, and specify acceptance thresholds as values for your existing tools’ reporting elements.

#### If we’ve marked an earlier Activity in a Stream Not Applicable, can we still assess later Levels’ Activities?
This question was the focus of much debate during November’s SAMM Core Team Summit in Boston. In the end, we reached a consensus that, although there’s technically no reason why an organization couldn’t do this, we couldn’t foresee a practical scenario where it would make sense in practice.

#### If we’ve marked Activities Not Applicable, how do we avoid having our maturity scores look bad?
Our answer to this one is also straightforward – present status metrics in terms of progress toward your targets, or against a maximum achievable score, rather than against a “perfect” (3.00) score. 
Consider the example mentioned earlier – within the Security Architecture Practice, an organization has decided Activity D-SA-3-B is Not Applicable. This means the maximum possible score for the Security Architecture Practice is 2.50 out of 3.00.
For visualization, let’s assume the following baseline and target scores are identified for the Activities in that Practice:

{{< table "table" >}}
| Activity |   Baseline  |    Target
|:---|:---|:---
|Teams are trained on the use of basic security principles during design (D-SA-1-A) | 0.50 | 1.00
|Elicit technologies, frameworks and integrations within the overall solution to identify risk (D-SA-1-B) | 0.25 | 1.00
| Establish common design patterns and security solutions for adoption (D-SA-2-A) | 0.00 | 0.50
| Standardize technologies and frameworks to be used throughout the different applications (D-SA-2-B) | 0.25 | 1.00
| Reference architectures are utilized and continuously evaluated for adoption and appropriateness (D-SA-3-A) | 0.00 | 0.50
| Impose the use of standard technologies on all software development (D-SA-3-B) | N/A (0.00) | N/A (0.00)
| **Practice Score for Security Architecture** | **0.50** | **2.00**
{{% /table %}}
<br/>

When reporting on the maturity improvement program’s progress to senior stakeholders, reported values can be expressed in terms of how much of the journey has been completed. For example, if the organization’s score for the Security Architecture practice has increased to 1.25 after one year, 50% of the planned improvement has been achieved. This can be presented visually using a level meter (with the target score, 2.00, as the maximum level) or a progress bar (0% - 100%).

#### We’re keen to start making Activities Not Applicable. How can we help make that happen?
As an outcome from SAMM Core Team Summit, we’ve created a Feature Request in our Github project (link), to add support for Not Applicable responses in SAMM tools – including potential support for the visualization approach described above.

If you see this as an essential missing feature in SAMM’s tooling, consider taking some time to help the team make it happen. You can start by adding your comments and suggestions to the Feature Request issue. If you’d like to help implement the new feature in the Excel or Google Sheets toolbox, reach out to the Core Team at (<email address>).

---
Be a part of the SAMM community!

* Join our Slack channel, where you'll meet other users, ask questions, give feedback, and be in the loop of all things SAMM.
* Join our monthly community calls, where we discuss different topics, exchange experiences and ideas, and review SAMM’s security practices in depth.