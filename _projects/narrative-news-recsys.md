---
layout: page
title: "Narrlytics: Narrative-Aware News Recommendation"
description: A narrative-grounded, explainable news recommender built on Greimas' Actantial Model.
img: assets/img/project_visuals/narrative-aware-news-rec.gif
img_width: 50%
importance: 2
category: research
---

In collaboration with [Dr. Ga Wu](https://web.cs.dal.ca/~gaw/) (Dalhousie University; formerly Senior ML Engineer at Twitter) and [Masud Imran](https://masudimran.dev) (Dalhousie University), **Narrlytics** asks a question that keyword matching, topic tags, and engagement signals leave unanswered: when a person returns to a news story, what are they actually returning to? Most recommenders answer with the entities an article mentions. Narrlytics answers with the part each entity plays in the event.

The project draws on [**Greimas' Actantial Model**](https://en.wikipedia.org/wiki/Actantial_model), a structuralist framework developed by [A. J. Greimas](https://en.wikipedia.org/wiki/Algirdas_Julien_Greimas) to analyze folklore and myth, which decomposes any story into six functional roles:

- **Subject:** the central actor pursuing an objective.
- **Object:** the goal, policy, or outcome being pursued.
- **Helper:** the allies, supporting policies, or favorable conditions aiding the subject.
- **Opponent:** the rivals, opposing factions, or obstacles hindering progress.
- **Sender:** the authority or catalyst that sets the events in motion.
- **Receiver:** the group that ultimately benefits or bears the consequences.

The same entity can occupy different roles in different stories, and that difference is invisible to representations that record only which names appear. Narrlytics treats the role as part of the representation, so that a reader who keeps encountering a familiar adversary, or an objective that never resolves, is matched on that pattern rather than on name overlap alone.

Because the roles are named and few, the same structure that drives the ranking also supplies the rationale. A recommendation can be attributed to the narrative position an entity holds in a reader's history, which is a claim a reader can check, agree with, or reject. The work is evaluated on the [**Microsoft News Dataset (MIND)**](https://msnews.github.io/) benchmark.

A paper describing the method and results is currently under preparation, so the architecture and evaluation are not documented in full here. I am happy to discuss the work in detail by email.
