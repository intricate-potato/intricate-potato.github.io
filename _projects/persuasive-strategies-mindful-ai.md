---
layout: page
title: Persuasive Strategies for Mindful use of AI
description: A persuasive AI companion that promotes mindful, critical engagement with generative AI during graduate research.
img: assets/img/project_visuals/persuasive-prototype.png
importance: 3
category: research
---

Generative AI tools are now deeply embedded in graduate research workflows, yet their passive use risks [cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading) — eroding the critical thinking, synthesis, and intellectual ownership that graduate training is designed to build. We made a browser-based [persuasive](https://en.wikipedia.org/wiki/Persuasive_technology) AI user interface that promotes mindful engagement through cognitive forcing functions, engagement scoring, [gamification](https://en.wikipedia.org/wiki/Gamification), and optional social comparison.

It was designed through an iterative, theory-driven process grounded in the [Persuasive Systems Design (PSD) framework](https://doi.org/10.17705/1CAIS.02428) of Oinas-Kukkonen and Harjumaa, the [Transtheoretical Model (TTM)](https://en.wikipedia.org/wiki/Transtheoretical_model), and [Social Cognitive Theory (SCT)](https://en.wikipedia.org/wiki/Social_cognitive_theory). A low-fidelity prototype was evaluated by six graduate students using a perceived persuasiveness survey, yielding design insights for a high-fidelity prototype (Hi-Fi v1).

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/project_visuals/persuasive-prototype-reward.png" title="engagement scoring example" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/project_visuals/persuasive-prototype-penalty.png" title="cognitive forcing function example" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Engagement scoring rewards reflective, critical prompts (left); cognitive forcing functions withhold points and nudge the user to contribute their own thinking before offering a full answer (right).
</div>

Hi-Fi v1 was subsequently evaluated in a within-subjects study using TTM, SCT, the [System Usability Scale (SUS)](https://en.wikipedia.org/wiki/System_usability_scale), and the Perceived Persuasion Scale (PPS). Results show that most participants advanced at least one TTM stage, [self-efficacy](https://en.wikipedia.org/wiki/Self-efficacy) and self-regulation improved, and the system achieved a mean SUS score of 87.9 and a PPS score of 6.49/7. A refined second version (Hi-Fi v2) addresses remaining concerns around perceived obtrusiveness and monotony.

Our findings suggest that carefully designed persuasive interventions can promote more intentional AI use among graduate students while maintaining usability and user autonomy. A manuscript describing this work is in preparation.

Publication coming soon!

Related work on this site: [Covert Dialect Bias in LLMs]({{ '/projects/dialect-bias-llms/' | relative_url }}) and [Narrlytics]({{ '/projects/narrative-news-recsys/' | relative_url }}). A full list of my work is on the [publications]({{ '/publications/' | relative_url }}) page.
