---
title: "SAMM to Assignments"
description: "Mapping of all 30 SAMM streams to leading assignments and stakeholders."
weight: 20
toc: true
---

This mapping connects each SAMM stream to the assignment that leads it and the stakeholders that support it. Use it to identify who in your organization should own and contribute to each security activity.

For each stream, the **lead** is the role that drives the work. **Stakeholders** support or collaborate.

<div class="skills-mapping">

<h2 class="skills-bf--governance" id="governance"><a href="/model/governance/">Governance</a></h2>

<div class="skills-bf-group skills-bf-group--governance">

### <a href="/model/governance/strategy-and-metrics/">Strategy & Metrics</a>

**<a href="/model/governance/strategy-and-metrics/stream-a/">A: Create and Promote</a>**
- **Lead**: Product Security Strategy
- **Stakeholders**: Organizational Security Strategy, Business Strategy

<details>
<summary>Rationale</summary>
Product security strategy takes the lead, in close collaboration with organizational security strategy. In smaller organizations, these responsibilities often sit in the same role. The larger executive management team needs to be on board for a security initiative to succeed.
</details>

**<a href="/model/governance/strategy-and-metrics/stream-b/">B: Measure and Improve</a>**
- **Lead**: Product Security Strategy
- **Stakeholders**: Organizational Security Strategy, Business Strategy

<details>
<summary>Rationale</summary>
Product security strategy and organizational security strategy jointly create the measurement-based improvement approach. Executive management are informed stakeholders.
</details>

<hr class="skills-sep">

### <a href="/model/governance/policy-and-compliance/">Policy & Compliance</a>

**<a href="/model/governance/policy-and-compliance/stream-a/">A: Policy & Standards</a>**
- **Lead**: Product Security Strategy
- **Stakeholders**: Organizational Security Strategy, Architecture, Evangelizing Security

<details>
<summary>Rationale</summary>
Policies and standards are defined by product security strategy and signed off by organizational security strategy. Architecture assists in translation to specific product areas, and evangelizing security handles translation to all teams.
</details>

**<a href="/model/governance/policy-and-compliance/stream-b/">B: Compliance Management</a>**
- **Lead**: Organizational Security Strategy
- **Stakeholders**: Cybersecurity Regulatory Compliance, Product Security Strategy, Product Ownership

<details>
<summary>Rationale</summary>
Organizational security strategy leads compliance management, working with cybersecurity regulatory compliance. Product security strategy and product ownership are key stakeholders.
</details>

<hr class="skills-sep">

### <a href="/model/governance/education-and-guidance/">Education & Guidance</a>

**<a href="/model/governance/education-and-guidance/stream-a/">A: Training and Awareness</a>**
- **Lead**: Evangelizing Security
- **Stakeholders**: Security Awareness and Training

<details>
<summary>Rationale</summary>
Evangelizing security leads the effort on selecting and pushing for secure development and role-specific training, working with security awareness and training to roll it out across the organization.
</details>

**<a href="/model/governance/education-and-guidance/stream-b/">B: Organization and Culture</a>**
- **Lead**: Evangelizing Security
- **Stakeholders**: Technical Leadership (Dev Lead), Product Security Strategy

<details>
<summary>Rationale</summary>
The evangelizing security lead builds a team of security evangelists and scales the practice, supported by technical leadership and assisted by product security strategy.
</details>

</div>

<h2 class="skills-bf--design" id="design"><a href="/model/design/">Design</a></h2>

<div class="skills-bf-group skills-bf-group--design">

### <a href="/model/design/threat-assessment/">Threat Assessment</a>

**<a href="/model/design/threat-assessment/stream-a/">A: Application Risk Profile</a>**
- **Lead**: Product Security Strategy
- **Stakeholders**: Organizational Security Strategy, Product Ownership, Architecture

<details>
<summary>Rationale</summary>
Product security strategy takes the lead, collaborating with organizational security strategy (which defines the overall risk appetite). Product ownership assists with mapping risk profiles to requirements. Architecture provides technical guidance.
</details>

**<a href="/model/design/threat-assessment/stream-b/">B: Threat Modeling</a>**
- **Lead**: Architecture
- **Stakeholders**: Offensive Security Testing, Product Ownership, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Architecture leads the threat modeling practice. Offensive security testing contributes realistic threat scenarios. Product ownership helps define threat risk. Technical leadership plays a supporting role.
</details>

<hr class="skills-sep">

### <a href="/model/design/security-requirements/">Security Requirements</a>

**<a href="/model/design/security-requirements/stream-a/">A: Software Requirements</a>**
- **Lead**: Architecture
- **Stakeholders**: Product Ownership, Evangelizing Security, Defensive Security Testing

<details>
<summary>Rationale</summary>
Architecture advises product ownership on security requirements. Evangelizing security helps refine them in the team. Defensive security testing supports from their knowledge domain.
</details>

**<a href="/model/design/security-requirements/stream-b/">B: Supplier Security</a>**
- **Lead**: Vendor Management
- **Stakeholders**: Cybersecurity Regulatory Compliance, Product Security Strategy

<details>
<summary>Rationale</summary>
Vendor management has the end assignment, advised on security matters by cybersecurity regulatory compliance and product security strategy.
</details>

<hr class="skills-sep">

### <a href="/model/design/secure-architecture/">Secure Architecture</a>

**<a href="/model/design/secure-architecture/stream-a/">A: Architecture Design</a>**
- **Lead**: Architecture
- **Stakeholders**: Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Security is a core component of any architecture. Architecture and technical leadership both need to build up security knowledge as the organization matures.
</details>

**<a href="/model/design/secure-architecture/stream-b/">B: Technology Management</a>**
- **Lead**: Architecture
- **Stakeholders**: Defensive Security Testing, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Technology management assesses technological risks, where defensive security testing can help. Architecture remains the lead, with technical leadership involved.
</details>

</div>

<h2 class="skills-bf--implementation" id="implementation"><a href="/model/implementation/">Implementation</a></h2>

<div class="skills-bf-group skills-bf-group--implementation">

### <a href="/model/implementation/secure-build/">Secure Build</a>

**<a href="/model/implementation/secure-build/stream-a/">A: Build Process</a>**
- **Lead**: Build System and Automation
- **Stakeholders**: Technical Leadership (Dev Lead), Architecture

<details>
<summary>Rationale</summary>
Build system and automation sets up the build and deploy pipelines. Technical leadership is closely involved. Architecture has a secondary role as certain architectural considerations may be essential for CI/CD.
</details>

**<a href="/model/implementation/secure-build/stream-b/">B: Software Dependencies</a>**
- **Lead**: Build System and Automation
- **Stakeholders**: Architecture, Cybersecurity Regulatory Compliance, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Cybersecurity regulatory compliance is included due to licensing impact.
</details>

<hr class="skills-sep">

### <a href="/model/implementation/secure-deployment/">Secure Deployment</a>

**<a href="/model/implementation/secure-deployment/stream-a/">A: Deployment Process</a>**
- **Lead**: Build System and Automation
- **Stakeholders**: Architecture, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Build system and automation leads the deployment pipelines. Technical leadership is closely involved. Architecture has a secondary role for CI/CD considerations.
</details>

**<a href="/model/implementation/secure-deployment/stream-b/">B: Secret Management</a>**
- **Lead**: Build System and Automation
- **Stakeholders**: Architecture, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
The same responsibilities as deployment process, but architecture plays a more essential role due to the interplay between secret management and architectural decisions.
</details>

<hr class="skills-sep">

### <a href="/model/implementation/defect-management/">Defect Management</a>

**<a href="/model/implementation/defect-management/stream-a/">A: Defect Tracking</a>**
- **Lead**: Technical Leadership (Dev Lead)
- **Stakeholders**: Evangelizing Security, Defensive Security Testing

<details>
<summary>Rationale</summary>
Technical leadership is the primary responsible for defect tracking, in close collaboration with evangelizing security. Defensive security testing plays a secondary role.
</details>

**<a href="/model/implementation/defect-management/stream-b/">B: Metrics and Feedback</a>**
- **Lead**: Evangelizing Security
- **Stakeholders**: Product Security Strategy, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
This is the team-level equivalent of G-SM-B. Evangelizing security functions as the liaison between product security strategy and technical leadership.
</details>

</div>

<h2 class="skills-bf--verification" id="verification"><a href="/model/verification/">Verification</a></h2>

<div class="skills-bf-group skills-bf-group--verification">

### <a href="/model/verification/architecture-assessment/">Architecture Assessment</a>

**<a href="/model/verification/architecture-assessment/stream-a/">A: Architecture Validation</a>**
- **Lead**: Defensive Security Testing
- **Stakeholders**: Architecture, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
While this is in the architecture domain, defensive security testing leads in the verification phase. Technical leadership is closely involved: what their team has built based on the architecture is what gets evaluated.
</details>

**<a href="/model/verification/architecture-assessment/stream-b/">B: Architecture Mitigation</a>**
- **Lead**: Offensive Security Testing
- **Stakeholders**: Architecture

<details>
<summary>Rationale</summary>
The offensive counterpart of architecture validation.
</details>

<hr class="skills-sep">

### <a href="/model/verification/requirements-driven-testing/">Requirements Testing</a>

**<a href="/model/verification/requirements-driven-testing/stream-a/">A: Control Verification</a>**
- **Lead**: Defensive Security Testing
- **Stakeholders**: Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Defensive security testing leads manual and automated verification. Technical leadership ensures all requirements translate to security test cases.
</details>

**<a href="/model/verification/requirements-driven-testing/stream-b/">B: Misuse/Abuse Testing</a>**
- **Lead**: Offensive Security Testing
- **Stakeholders**: Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
The offensive counterpart of control verification. Offensive security testing leads to ensure realistic abuse test cases are covered, with technical leadership in the loop for full requirement coverage.
</details>

<hr class="skills-sep">

### <a href="/model/verification/security-testing/">Security Testing</a>

**<a href="/model/verification/security-testing/stream-a/">A: Scalable Baseline</a>**
- **Lead**: Defensive Security Testing
- **Stakeholders**: Build System and Automation, Product Security Strategy, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Defensive security testing advises on test tooling and helps with triaging results. Build system and automation integrates the tooling. Product security strategy and technical leadership determine response times and KPIs.
</details>

**<a href="/model/verification/security-testing/stream-b/">B: Deep Understanding</a>**
- **Lead**: Offensive Security Testing
- **Stakeholders**: Technical Leadership (Dev Lead), Architecture

<details>
<summary>Rationale</summary>
Offensive security testing leads maturation of this stream. Technical leadership and architecture define critical components and ensure flagged issues get resolved.
</details>

</div>

<h2 class="skills-bf--operations" id="operations"><a href="/model/operations/">Operations</a></h2>

<div class="skills-bf-group skills-bf-group--operations">

### <a href="/model/operations/incident-management/">Incident Management</a>

**<a href="/model/operations/incident-management/stream-a/">A: Incident Detection</a>**
- **Lead**: Security Operations
- **Stakeholders**: Infrastructure, Technical Leadership (Dev Lead)

<details>
<summary>Rationale</summary>
Security operations handles daily incident detection. Infrastructure and technical leadership provide integrations and logging, and are pulled in when incidents are detected.
</details>

**<a href="/model/operations/incident-management/stream-b/">B: Incident Response</a>**
- **Lead**: Security Operations
- **Stakeholders**: Infrastructure, Technical Leadership (Dev Lead), Organizational Security Strategy

<details>
<summary>Rationale</summary>
Security operations leads initial incident response. Infrastructure and technical leadership are second-line responders. Organizational security strategy helps define contingency scenarios.
</details>

<hr class="skills-sep">

### <a href="/model/operations/environment-management/">Environment Management</a>

**<a href="/model/operations/environment-management/stream-a/">A: Configuration Hardening</a>**
- **Lead**: Infrastructure
- **Stakeholders**: Technical Leadership (Dev Lead), Architecture

<details>
<summary>Rationale</summary>
Infrastructure leads configuration hardening. Technical leadership and architecture ensure applications maintain the required level of hardening.
</details>

**<a href="/model/operations/environment-management/stream-b/">B: Patching and Updating</a>**
- **Lead**: Infrastructure
- **Stakeholders**: Technical Leadership (Dev Lead), Architecture, Security Operations

<details>
<summary>Rationale</summary>
Patching and updating is carried out by infrastructure. Technical leadership and architecture are involved in planning. Security operations provides threat intelligence.
</details>

<hr class="skills-sep">

### <a href="/model/operations/operational-management/">Operational Management</a>

**<a href="/model/operations/operational-management/stream-a/">A: Data Protection</a>**
- **Lead**: Cybersecurity Regulatory Compliance
- **Stakeholders**: Architecture, Technical Leadership (Dev Lead), Infrastructure

<details>
<summary>Rationale</summary>
Data protection is largely led by legal and compliance. Technical leadership creates and maintains data catalogs. Infrastructure handles backups and their timely destruction.
</details>

**<a href="/model/operations/operational-management/stream-b/">B: System Decommissioning / Legacy Management</a>**
- **Lead**: Product Ownership
- **Stakeholders**: Technical Leadership (Dev Lead), Infrastructure

<details>
<summary>Rationale</summary>
Product ownership manages the product lifecycle. Technical leadership supports this lifecycle together with infrastructure, which handles upgrades and migrations.
</details>

</div>

</div>
