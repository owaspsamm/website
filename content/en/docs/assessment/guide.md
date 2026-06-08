---
title: "Assessment Guide"
description: "Best practices for conducting SAMM assessments, from questionnaire-based approaches to expert interview techniques."
weight: 10
toc: true
---

## The goal of a SAMM assessment

The primary goal of a SAMM assessment is to evaluate the current software security posture. To achieve this, you need to gather and evaluate information regarding the various activities described by SAMM. The outcome of a SAMM assessment ideally presents both where the organization is in terms of their security posture and where they should be in terms of their improvement roadmap.

## Assessment tools

There are several options when it comes to creating the assessment. We have two versions of the SAMM Toolbox: a Microsoft Excel Toolbox and a Google Spreadsheet Toolbox. You can also leverage the [SAMMwise](https://github.com/owaspsamm/sammwise) or [SAMMY](https://codific.com/sammy/) online tools for running SAMM Assessments.

You start by gathering the information necessary to fill out a SAMM assessment: through questionnaires, interviews, or by requesting and investigating artifacts (code, configuration, documentation, logs). You then evaluate this information to answer the SAMM questions accurately. Typically, the more expertise you have in application security, the more accurate your assessment will be.

## Assessment types

There are typically two types of SAMM assessments you can perform. Each has its upsides and drawbacks. Ideally, you want a good mix of self-assessment and independent expert assessment.

### Self-assessment

Self-assessments are often quicker and cheaper to arrange. They typically do not require interviews because the assessor within the team is already familiar with all the security realities. A self-assessment is also one of the easiest ways for the team to get familiar with SAMM in a hands-on manner. Note that a self-assessment questionnaire may need to be distributed over different people for different groups of questions (e.g. security officers and developers).

### Expert assessment

An expert assessment invites either an independent internal assessor or an external SAMM practitioner. The expert assessment will typically take more time and effort, but will end up being more accurate, more thorough, and provide better insights when planning the improvement roadmap. The expert assessment will often require an interview format.

## Questionnaire-based assessment

A questionnaire-based assessment requires one or multiple stakeholders to go through the list of 90 questions. This can be perceived as overwhelming. There is also some room for interpretation in the assessment questions, so answers across different teams in your organization might be inconsistent. If you cannot measure precisely, your improvement strategy may not be optimal, especially for improvements that involve multiple teams. Moreover, large questionnaires may lead to questionnaire fatigue.

After an initial SAMM assessment for a given scope, the questionnaire-based approach is suitable for updating the SAMM scores. The stakeholder responsible for this should have gained sufficient understanding of the model specifics, and the number of practices that need a score update is likely to be limited.

## Interview-based assessment

Interviews are a good alternative to questionnaires, since having a conversation can be more appealing than a list of questions. The interviewer can explain questions, explain the criteria, and ask follow-up questions to gain better understanding or to double-check answers.

In an interview you can also invite people to open up or pick up on non-verbal signals regarding a specific topic. These help identify issues that are useful for the assessment and for any subsequent recommendations to improve. We recommend adding the interviewer's observations next to each SAMM stream. These notes document existing security practices and can be helpful when validating the interview with the stakeholders. Examples:

- All employees (even those not involved in SDLC) are required to complete basic SDLC training. The training includes various public and internal courses. The list of courses is expanded regularly.
- Monthly security seminars are organized by the sales team to keep awareness high.
- No refresher is organized for the tech team as most employees are highly skilled security professionals. Regular pen tests and threat modeling workshops keep people sharp.
- The organization offers customized training for everyone who is part of team red and team blue.

For a more thorough sample set of observations we refer to the TurboScale Solutions Case Study from the SAMM Fundamentals Course.

For detailed guidance on planning, running, and validating assessment interviews, see [Conducting Interviews](../interview-based-assessment/).

---

*The initial version of this assessment guide was provided by Rob van der Veer, based on the assessment experience of the Software Improvement Group.*
