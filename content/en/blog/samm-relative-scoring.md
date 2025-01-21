+++
title = "SAMM Scoring: Percentage to Target and Percent to Date Metrics"
date = "2025-01-21T00:00:00+02:00"
tags = ["model", "scoring"]
categories = ["assessment"]
banner = "img/banners/discussion.png"
author = "Aram Hovsepyan"
+++

# SAMM Scoring: Percentage to Target and Percent to Date Metrics
## Introduction: the “not applicable” answer
A common question among SAMM users is whether specific activities, streams, or entire practices can be marked as **not applicable**. This seems reasonable—some security activities might not fit an organization’s current reality. For example, the Supplier Security stream focuses on supply-chain risks in outsourced development. If your organization doesn’t outsource, it might seem irrelevant.
The SAMM core team acknowledges this, but emphasizes future readiness. While an activity may not apply today, it could become relevant later. This leaves organizations with two unsatisfactory choices:
1. **Giving a full score** despite doing nothing.
2. **Scoring zero** leading to frustration over a low but unavoidable score.
Instead of these extremes, we introduce two practical scoring approaches that better reflect security maturity and address the issue of score chasing, where organizations focus on high scores rather than risk-based targets. In this blog, we’ll present these new scoring options and explain how they provide a more meaningful assessment of your security posture.

## Revisiting the score calculation

{{< responsive-image  "/img/pages/SAMM_model_structure.svg" "SAMM structure">}}

Before diving into the new scoring options, let’s briefly review how SAMM scores are calculated.
In SAMM, maturity level activities represent the most granular level of assessment. Each activity is scored using four possible answers:
* No (0.0),
* Yes for some (0.25),
* Yes for half (0.5), and
* Yes for most (1.0). 

Each stream consists of three maturity level activities, and the stream score is the sum of these activity scores.
The scores for security practices are calculated by taking the average of the two associated stream scores. This pattern continues up the hierarchy, with business function scores and the overall SAMM score being computed as averages of lower-level entities.

## Score chasing
One of SAMM’s core principles is setting **risk-based targets** rather than maximizing scores across all activities. The goal is to achieve a maturity level that aligns with the actual risks faced by an organization, business unit, or team. Simply aiming for the highest possible scores can lead to wasted resources and misplaced efforts.
Defining an acceptable level of risk is challenging and is outside the scope of this blog.Note that identifying activities that are clearly irrelevant should be straightforward. For instance, if your organization does not engage in outsourced development, the Supplier Security stream should have a low or even zero target score.
However, many organizations struggle with this concept. A score of e.g., 1.2 out of 3.0 may feel like an underachievement, when in reality, it might be exactly where the organization needs to be. This tendency to “chase scores” can distract from the primary goal—managing application security effectively. To address this, we shift the focus away from absolute scores and introduce two new scoring metrics—**percentage to target** and **progress to date**.

## Target posture: setting meaningful goals
Before we present the two new relative scoring metrics let us recap what a target posture is. 

SAMM assessments are not just about measuring security maturity. The assessment is a starting point for improvement. Achieving a perfect 3.0 maturity level across all activities isn’t realistic or necessary. Instead, organizations should define a target posture, which represents an acceptable maturity level based on their specific risk profile and business needs.
A target posture is essentially a roadmap, outlining the desired maturity levels across all 90 SAMM activities that align with acceptable risk at a given time. Key takeaways when working with target postures and scoring:
The gap to target is what matters most, not the absolute score.
Overachieving in one area doesn’t compensate for gaps in others.
With a well-defined target posture, organizations can focus on closing meaningful gaps and prioritize improvements that have the greatest impact on risk reduction.
Given the current assessment and the target posture both expressed as a collection of 90 scores across all SAMM activities, in the next sections, we present the two new scoring metrics.

## Percentage to target
A key way to assess how well an organization, business unit, or team is advancing toward its security goals is by measuring the gap to their target posture. Instead of focusing on absolute SAMM scores, this approach calculates the difference between the current and target states, offering a clearer picture of the gap, hence the potential risk.
To do that we simply calculate the gap for each activity:

```
GapPerActivity = TargetScore - CurrentScore 
                 or 0 CurrentScore >= TargetScore
```
Note that the gap should be zeroed if current score is higher than the target score to avoid giving credit for overcompensating.

The total gap across all activities is determined as the sum of all the gaps:

```
AbsoluteGap = SUM(GapPerActivity)
```

While the absolute gap provides insight, it has limitations—it can range from 0 to 90, making it difficult to interpret and compare across teams. To address this, we introduce the percentage to target metric, which normalizes the data and provides a more intuitive understanding:

```
AbsoluteTargetScore = SUM(TargetScore)
PercentageToTarget = 1 - AbsoluteGap/AbsoluteTargetScore
```

This metric expresses SAMM scores as a percentage, making it easier to track improvements and compare performance across different teams, business units or even organizations. Note that the Percentage to target metric allows us to compare teams with completely different risk appetite and different target postures.
By focusing on the percentage to target, organizations can shift attention away from achieving perfect scores and instead focus on incremental, risk-aligned progress toward their security goals.

Note that the `PercentageToTarget` can be calculated per activity and then averaged out across streams, practices, business functions. You could also recalculate `PercentageToTarget` for each entity from scratch by falling back to the original formula.  

## Progress to date
In addition to understanding how far an organization is from its target posture, it’s equally important to measure the speed of progress. The progress to date metric helps organizations track their improvement over time, providing insights into how effectively security initiatives are being implemented.

To calculate progress, we compare the organization’s current score to its initial baseline and ultimate target:
```
ProgressToDate = (CurrentScore - BaselineScore)/(TargetScore - BaselineScore)
```
In this formula, `BaselineScore` represents the SAMM score after the initial assessment. `TargetScore` represents the SAMM score for the given target posture.

## Examples for calculating percentage to target
Let us recap both metrics with the following example. After a SAMM assessment a team that builds web applications has scored as follows for the two streams in Secure Build practice:

| Activity code | Question                                      | Answer                          | Current Score |
|---------------|----------------------------------------------|---------------------------------|---------------|
| I-SB-A-1      | Is your full build process formally described? | Yes, for some applications      | 0.25          |
| I-SB-A-2      | Is the build process fully automated?         | No                              | 0             |
| I-SB-A-3      | Do you enforce automated security checks?     | No                              | 0             |
| I-SB-B-1      | Do you have solid knowledge of dependencies?  | Yes, for most or all applications | 1             |
| I-SB-B-2      | Do you handle 3rd party dependency risk?      | No                              | 0             |
| I-SB-B-3      | Do you prevent builds affected by vulnerabilities? | No                              | 0             |

The team realizes that they should improve and set the following targets:

| Activity code | Current Score | Target Score | Gap to target |
|---------------|---------------|--------------|---------------|
| I-SB-A-1      | 0.25          | 1            | 0.75          |
| I-SB-A-2      | 0             | 1            | 1             |
| I-SB-A-3      | 0             | 0            | 0             |
| I-SB-B-1      | 1             | 1            | 0             |
| I-SB-B-2      | 0             | 0.5          | 0.5           |
| I-SB-B-3      | 0             | 0            | 0             |

For the sake of simplicity let’s consider all other SAMM current and target scores as 0.
Here are the calculations for both metrics:
```
AbsoluteGap = 0.75 + 1 + 0.5 = 2.25
AbsoluteTargetScore = 1 + 1 + 1 + 0.5 = 3.5
PercentageToTarget = 1-(2.25/3.5) = 0.357 (or 36%)
BaselineScore = (0.25 + 1) / 2 = 0.625
TargetScore = (2 + 1.5) / 2 = 1.75
```

Consider after 1 quarter (i.e., 3 months) the team has improved the scores for I-SB-A-1 to 1 and I-SB-A-2 to 0.5. Hence:
```
CurrentScore = (1.5 + 1) / 2 = 1.25
PercentToDate = (1.25-0.625)/(1.75-0.625) = 0.55 (or 55%)
```

## Conclusion
In this blog, we have focused on the problem of SAMM scoring. We have provided some common issues that many SAMM users and practitioners are facing, namely the problem of not applicable activities as well as score chasing. We have presented two metrics that are more practical and meaningful in the context of SAMM adoption. The first metric provides an indication of how far a team is from its desired target, i.e., percentage to target metric. The second metric measures how fast the team is progressing to that target, i.e., progress to target.
