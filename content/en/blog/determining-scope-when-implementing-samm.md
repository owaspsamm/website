+++
title = "Determining scope when implementing SAMM"
date = "2023-05-24T00:00:00+02:00"
tags = ["model", "scoring"]
categories = ["assessment"]
banner = "img/banners/scope.png"
author = "The SAMM Project Team"
+++


When performing a SAMM assessment, should the scope be the whole organization or should it be smaller, like a business unit or even a single team or application?

The short answer? Start small.


### Getting started

Start by evaluating your goals. What do you want to achieve?

* Do you aim to identify and prioritize areas of improvement in your organization's security posture? 
* Do you seek to establish a baseline for measuring the effectiveness of your security program over time? 
* Do you want to demonstrate compliance with industry standards and regulations? 

Defining your goals clearly ensures that your assessment is focused and effective, and that the resulting roadmap is aligned with your organization's overall security strategy. Involve all relevant stakeholders in this process, including business leaders, development teams, security professionals, and other key personnel, to guarantee the assessment is comprehensive and aligned with the organization's broader goals and priorities.


#### What's your context?

Think about your organization and the type of business context it is in. 

* What value does it provide? 
* What products and services does it deliver? 
* Who is the customer? 

Different types of business will have varying security requirements based on customer type, geographic location, and their products and services. For example, compliance and risk exposure for a banking, e-commerce, or a health care application will differ from those for the latest virtual-reality game. 

Internally, large organizations may have multiple lines of business with distinct regulatory obligations that require different levels of acceptable risk and compliance. Understanding your context is crucial to conducting a successful OWASP SAMM assessment and ensuring your security roadmap aligns with your objectives.

#### Be realistic

Set realistic goals in terms of scope. 

* Are you ready to implement an organization-wide assessment?
* If you’ve done this before you can think about going a bit bigger this time around. What maturity level do you need to achieve for the different business functions? 
* How far off do you think you are?

Tailor the assessment scope to your specific needs and objectives, ensuring that you have the necessary resources to conduct the assessment successfully.

#### Considerations

SAMM implementation might vary across teams. Maturity objectives and outcomes will vary if teams work with different methodologies or use different technology stacks.

If there are multiple business lines in your organization, you need to contemplate their business-IT alignment issues independently. Compliance requirements, as mentioned, may not be the same for all teams or applications.

You must also consider outsourced development. You shouldn’t set higher standards for your teams than for your suppliers.

Examine the available resources, budget, and timing. Keep in mind that these resources are not infinite and must be allocated strategically to ensure a successful assessment.

### Defining the scope

Careful consideration of the organization's overall ambition, resources, and current maturity level is essential when assessing the scope of a SAMM assessment. Once you have taken these factors into account, you can evaluate the scope options to determine the most appropriate focus for the assessment. 

If your organization has limited resources or a specific area of concern, you may find it most effective to assess a single line of business, product group, system, or team. On the other hand, if your organization has a broad range of operations, assessing the entire organization may provide a more comprehensive overview of your security posture. Ultimately, you should tailor the scope of the assessment to your specific needs and objectives, considering the resources you'll need to carry out the assessment successfully.

When choosing your scope, make sure that everyone within it works in the same manner. They should follow the same procedures, be aligned in their practices, and have the same management style. If you find inconsistencies, it is a sign that your scope is too broad, and you need to refine it further.

#### This is your first time around. Start small.

If this is your first SAMM assessment in the organization you’ll typically start with a willing team. This will get you started with a team that’s open and eager to do the work and make the scope more manageable. Choose a team that’s representative of the organization, a team that other teams might relate to. If you choose the organization scope to start with, it will probably be a steep learning curve for all involved. Demonstrate the value of adopting SAMM and grow from there.

Flag any practice that might be shared with multiple teams. Governance and parts of Operations will often be shared functions.

#### You've done this a few times and you're working with a larger organization.

If you’re already at a stage where your scope includes multiple teams, chances are some will be working in different ways. If that’s the case, you might need to do multiple assessments. Think about consistency. If the same team is doing different apps in a similar way, consider doing a single assessment for that team.

Some practices or Business Functions might be similar for all the teams involved. If training is shared throughout the organization you can reuse the scores for the related activities in Governance. Just make sure you verify that shared practices reach and are applied by all the teams in the assessments you’re doing.

Another practice that helps handle multiple assessments is dividing the questions in the assessment by role. This way, you only involve the relevant people, for example, asking Verification questions to testers. As with shared practices, cross check that teams are applying the guidelines set by the people you interviewed for that practice.



### Conclusion

Regardless of scope, document the context of the assessment, including assumptions and stakeholders. Doing SAMM right means measuring improvement so you will be performing similar assessments in the future. Documenting context is how you achieve repeatability.

When determining your scope, set realistic expectations and targets. This means understanding the resources available and establishing goals that are achievable given those resources.  

Starting with a single team is an effective strategy when introducing SAMM in your organization. By focusing on one willing team, you can build a solid foundation for future growth. You can build momentum and create a positive environment where relevant stakeholders feel motivated to continue improving. With the foundation in place, you can expand your efforts to other teams or areas, building on the success of the initial team to create a more robust and secure SDLC.

Once you have a full SAMM cycle, consider donating your datasets to the benchmarking initiative. What is a full SAMM cycle, you ask? Follow these scoping guidelines, perform your assessments, carry out the roadmap plan, and have all your teams aligned. Then, you’ll be ready to contribute to a stronger community and better SAMM.



---
Be a part of the SAMM community!

* Join our  {{< external-link "https://owasp.slack.com/messages/C0VF1EJGH" "Slack channel">}}, where you'll meet other users, ask questions, give feedback, and be in the loop of all things SAMM.
* Join our monthly community calls, where we discuss different topics, exchange experiences and ideas, and review SAMM’s security practices in depth.