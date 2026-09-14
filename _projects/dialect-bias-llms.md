---
layout: page
title: Covert Dialect Bias in LLMs
description: Measuring covert dialect prejudice and contextual integrity violations in large language models.
img: assets/img/project_visuals/dialect-bias.gif
importance: 1
category: research
related_publications: true
---

This is my Master's thesis project, supervised by [Dr. Rita Orji](https://web.cs.dal.ca/~orji/) at the Persuasive Computing Lab, [Faculty of Computer Science](https://www.dal.ca/faculty/computerscience.html), [Dalhousie University](https://www.dal.ca/).

The project measures covert dialect prejudice in large language models across housing-related social judgments, employing a computational [matched-guise](https://en.wikipedia.org/wiki/Matched-guise_test) methodology adapted from [sociolinguistics](https://en.wikipedia.org/wiki/Sociolinguistics) and social psychology, where the technique was originally developed to measure listeners' implicit attitudes toward speakers of different language varieties. Rather than relying on explicit references to racial or ethnic identity, the work investigates how implicit cues in a prompt — such as dialect and phrasing — can steer a model's social judgments. We characterize this dialect-based attribute inference as a [contextual integrity](https://digitalcommons.law.uw.edu/wlr/vol79/iss1/10/) concern, in Helen Nissenbaum's sense of the term: information about a speaker's likely identity is inferred and acted upon in a context where that inference was never volunteered.

Phase 1 of this work was accepted at the [9th AAAI/ACM Conference on AI, Ethics, and Society (AIES 2026)](https://www.aies-conference.com/2026/) {% cite abdullah2026dialect %}. Phase 2 extends the framework to study contextual integrity violations more broadly.

The broader phenomenon this work engages with has also been documented at scale by [Hofmann et al. (2024)](https://doi.org/10.1038/s41586-024-07856-5), who show that language models can express covertly prejudiced decisions about speakers on the basis of dialect alone.

Related work on this site: [Narrlytics]({{ '/projects/narrative-news-recsys/' | relative_url }}) on making recommender behaviour legible to the reader, and [Persuasive Strategies for Mindful use of AI]({{ '/projects/persuasive-strategies-mindful-ai/' | relative_url }}) on the human side of generative AI use. See also my full list of [publications]({{ '/publications/' | relative_url }}).
