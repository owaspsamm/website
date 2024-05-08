+++
title = "SAMM Assessment Guide"
description = "SAMM Assessment Guide"
keywords = ["assessment","measurement","questions","guidance"]
+++

## Assessment guidelines and best practices

In this section, we offer guidelines and best practices for conducting SAMM assessments.
As a bonus, there's a link to a set of interview questions at the end.
<br/><br/>


## The goal of a SAMM assessment

The primary goal for a SAMM assessment is to evaluate the current software posture. To achieve this goal, you need to gather and evaluate information regarding the various activities described by SAMM. The outcome of a SAMM assessment ideally presents both where the organization is in terms of their security posture and where they should be in terms of their improvement roadmap.
<br/><br/>

## Assessment tools

There are several options when it comes to creating the assessment. We have 2 versions of the SAMM Toolbox, a Microsoft Excel Toolbox and a Google Spreadsheet Toolbox. You can also leverage the SAMMWise or the SAMMY online tools for running SAMM Assessments. You can then start gathering the information necessary to fill out a SAMM assessment. You can do that through questionnaires, interviews, or by requesting and investigating artifacts (such as code, configuration, documentation, logs).
You then need to evaluate this information to answer the SAMM questions accurately. Typically, the more expertise you have in application security, the more accurate your assessment will be. The quality criteria for evaluating SAMM security activities require proper understanding of best practices. Moreover, best practices in web application security might be quite different from those for example, IoT devices.
<br/><br/>

## Assessment types

There are typically two types of SAMM assessments you can perform. Each has its upsides and drawbacks. Ideally, you want to have a good mix of self-assessment and independent expert assessment.

### Self-assessment
Self-assessments are often quicker and cheaper to arrange. They typically do not require interviews because the assessor within the team is already familiar with all the security realities. A self-assessment is also one of the easiest ways for the team to get familiar with SAMM in a more hands-on manner. Note that a self-assessment questionnaire may need to be distributed over different people for different groups of questions (e.g. security officers and developers).

### Expert assessment
You can also run an expert assessment by inviting either an independent internal assessor or an external SAMM practitioner. The expert assessment will typically take more time and effort, but will end up being more accurate, more thorough and provide better insights when planning the improvement roadmap. The expert assessment will often require an interview format.
<br/><br/>

## Questionnaire-based assessment

A questionnaire-based assessment requires one or multiple stakeholders to go through the list of 90 questions. This can be perceived as overwhelming. There is also some room for interpretation in the assessment questions. Hence answers across the different teams in your organizations might be inconsistent. The goal of SAMM is to know where you are in order to set up the right improvement roadmap. However if you cannot measure precisely, your improvement strategy may not be optimal, especially for improvements that involve multiple teams. Moreover, large questionnaires may lead to questionnaire-fatigue. Teams might be refusing or reluctant to provide answers or give their time and the necessary attention required.
After an initial SAMM assessment for a given scope, the questionnaire-based approach is suitable for updating the SAMM scores. The stakeholder responsible for this should have gained sufficient understanding of the model specifics to be able to do that. Furthermore, the number of practices that need a score update is likely to be limited.

## Interview-based assessment

Interviews are a good alternative for questionnaires, since having a conversation can be more appealing than a list of questions. The interviewer can explain the questions, explain the criteria and ask follow-up questions to gain better understanding or to double check answers.
Also, in an interview you can invite people to ‘open up’ or pick up on certain non-verbal signs regarding a specific topic. These things help to identify issues that are useful for the assessment, but also very useful in case the assessment is followed by recommendations to improve. We would recommend adding the interviewer's observations next to each SAMM stream. These notes serve as a documentation of existing security practices within the assessment scope. They can also be helpful when validating the interview with the stakeholders (see the next section). Here are some examples of such observations:
- All employees (even those not involved in SDLC) are required to complete basic SDLC training. The training includes various public and internal courses. The list of courses is expanded regularly.
- Monthly security seminars are organized by the sales team to keep the awareness high.
- No refresher is organized for the tech team as most of the employees are highly skilled security professionals. Regular pen tests and threat modeling workshops keep the people sharp.
- The organization offers customized training for everyone who is part of team red and team blue.

For a more thorough sample set of observations we refer to the TurboScale Solutions Case Study from the SAMM Fundamentals Course.

### Planning the interview
An assessment interview requires careful planning.

#### Interview setup

**Setting up the meetings**

You should be selective in terms of who sets up the meetings. In some cultures, co-operation improves if the boss does that. 
<br/><br/>

**Interview format**

We recommend planning 3 to 5 interviews of 1.5-2 hours each scoped per topic. SAMM’s business functions are typically a good starting point for your interview topics.
<br/><br/>

**List of stakeholders**

Select relevant stakeholders for each interview. For instance, for the Governance business function interview you might need people involved in governance and security champions. For the Verification business function interview on the other hand you might need business analysts, application architects, developers, QA and/or project managers.  
Try to keep the interview group size small. Minimize the spectators as well. People will open up more in smaller groups.
<br/><br/>

**Pre-interview kick-off briefing**

It is a good idea to organize a prep kick-off briefing to let the interviewees know in advance of what’s to come. Such as, the purpose of the interview, the format and the length of the sessions, which co-workers of the interviewees you work with, terms of confidentiality. If the interviewees are not familiar with SAMM it is also a good idea to provide at least a high-level overview of the model.
<br/><br/>


**Live sessions vs online calls**

Live sessions are preferable over conference calls. People will likely trust you more if they meet you in person. Hence they are more likely to open up.
<br/>

### Interview preparation

From your end you should consider working with two people, namely the interviewer and the note taker.
Study the organization roughly if you are not familiar with it yet. You might consider asking them to provide you with any relevant documentation in advance. Typical documents that are relevant in this context include amongst others organizational policies and standards, process-related documents, artifacts from completed activities, etc.
We recommend you write an interview guide with open-ended questions based on the information you need to obtain (SAMM questions in this case). The guide provides the structure of a conversation instead of a long list of questions. We have provided a sample interview guide in the appendix.
Finally, make sure to book time after the interview to consolidate your notes.


### Interview questions

**Focus on the actuality**

When conducting the interviews try to focus on what we call the actuality. Always ask how things have been going and not how things should be. For instance, “when was the organizational policy document last updated” instead of “is the organizational policy updated frequently”.
<br/><br/>

**Ask open-ended questions**

Open-ended questions are ideally not copies of SAMM questions, but meant to get the interviewee to talk on subjects in which the SAMM questions are likely to be answered. During that answering process, you can further help by mentioning topics that the interviewee doesn’t come up with. For instance, if the conversation is about organizational policies you could ask “and how about compliance obligations, are they relevant?”.
<br/><br/>

**Be a detective**

Avoid communicating with questions about what is right or wrong. Try to find out what are the organizational realities as someone who is simply curious to understand them. For instance, instead of asking “Do you use checklists during threat modeling”, it is better to ask “Describe the threat modeling process” and then listen to see if checklists are mentioned.
<br/><br/>

**The ‘rate’ trick**

A good strategy to get people to open up and get them going is to ask them to rate certain things on a scale of 1 to 10 and then ask why.
<br/><br/>

**Focus on feelings**

Asking people about their feelings rather than just their thoughts can be a more effective way to encourage them to open up. This approach can foster a deeper level of communication and understanding. For instance, you could ask the interviewee “How do you feel about the added value of your threat modeling process?“.
<br/><br/>

#### The interview process

**Starting the interview**

Ask whether you may record all the interviews. In our experience the recordings (and their transcripts) can be extremely helpful during the note consolidation process. However in some cultures it works better not to record the interview. Even if people allow it, the tendency to speak the truth is less and people feel less comfortable. 
<br/><br/>

**Break the ice**

Invest some time in the interviewees even if it’s just to chitchat to lighten up the atmosphere. If you do a round of introductions, you can start for example and make your introduction a bit more personal, to invite others to do the same.
<br/><br/>

**It is not an exam**

Be courteous, friendly, respectful and humble. Try to connect and always remember that the interview is a collaboration, not an interrogation. You are not an auditor, but rather you want to assess a situation the way it is, so we know how to make it better where possible.
<br/><br/>

**Be supportive**

Appreciate that people may feel proud or threatened. Try to avoid negativity or judgment in your questions and reactions. Listen and encourage responses with enthusiasm, such as, “I see”, “That makes sense”, “Given your risk profile that is a reasonable strategy”. Paraphrase and ask follow up questions. Be curious.
<br/><br/>

**Ask for artifacts**

It is a good idea to ask for evidence for some of the answers. If you do this early in the session people will realize that you might check their answers and try to be more truthful.
<br/><br/>

**The power of silence**
Aside from listening and not interrupting it is a good idea to be silent for a while. Long silences can help people to open up.
<br/><br/>

**Keep a natural conversation flow**

Allow the conversation to flow in a natural way. This means that some of the questions you prepared may be already answered in the natural conversation. It also means that you need to pick your questions based on the topic where the conversation is. Hence not per se the topic that was next on your question list. This takes concentration, and keeping good track of which questions have been answered and which criteria have been covered. Your note-taking colleague (if any) can help with this.
<br/><br/>

**Keep it structured**
Give interviewees a sense of structure during the interview by providing transitions between major topics, at a quiet moment in the dialogue. For example “Now that we have discussed X, let’s move to Y”. It will help people to focus, and it will give them confidence in your approach. Counter-intuitively, it is better to avoid sharing a precise structure at the beginning of the interview, because you don’t want to restrict people in discussing topics. Natural conversations tend to go back and forth, and it is better to let it flow like that without controlling it too much.
<br/><br/>

**Note taking**

A we have already mentioned the note taker notes everything. Use verbatim unless completely sure of interpretation. For online sessions you could also leverage online transcription. In that case the note taker can be processing the conversations into more structured and interpreted notes. If you do the interview online, it is a good idea to keep a backchannel communication with your note taker (e.g., via Slack).
Do make sure though not to cause any distraction by the note taking process itself. Don’t bring one of those loud keyboards or make use of the mute feature in online calling tools.
<br/><br/>

**The end of the interview**

Consider ending with ‘Is there anything you think we forgot to discuss?’ Finally, consider asking any sensitive questions after the interview is officially done.

### Post-interview validation

It is good practice to present the preliminary assessment result (final answers to the questions) to the assessed organization in order to validate the outcome, to see if the organization has any suggestions. To make this process effective, it helps if the assessment contains rationale regarding the decision.
<br/><br/>

## Example interview questions for the OWASP SAMM framework

This example presents open-ended questions designed to trigger conversations that cover the range of SAMM questions as much as possible. You need to keep the SAMM assessment sheet at the side as a checklist, to see if you need to ask additional questions.

The scenario for these questions is an interview with a development team. The questions follow the order of the SAMM assessment sheet 2.0, but with a slight change for a more natural flow. Concretely, Education & Guidance comes after Secure Architecture.

See the example {{< external-link "https://docs.google.com/document/d/1rUsktgsGna65KJPCT91UiOxFRvKdFs0TJxCWN0aa5u4/edit?usp=sharing" "here">}}.

---

The initial version of this assessment guide was provided by Rob van der Veer, based on the assessment experience of the Software Improvement Group.


