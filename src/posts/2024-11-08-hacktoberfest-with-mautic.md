---
title: Hacktoberfest with Mautic
originalPost:
  source: Druid's blog
  link: "https://druid.fi/en/blog/hacktoberfest-with-mautic/"
---
On October 31st, [Hacktoberfest 2024](https://hacktoberfest.com/) came to an end. Hacktoberfest is an annual event where open-source advocates come together to celebrate a month of code, collaboration, and community. The purpose of the event is to encourage contributions to open-source projects throughout October. This year I had the opportunity to participate by contributing to [Mautic](https://druid.fi/en/blog/mautic-is-an-easy-to-use-and-efficient-marketing-automation-system/), the open source marketing automation platform.

Mautic is an essential component in Druid’s [Digital Experience Platform](https://druid.fi/en/what-is-a-digital-experience-platform-dxp/), Druid XP. We use Mautic because it helps our clients deliver more customized experiences for website visitors. One of Mautic's key features is [website personalization](https://druid.fi/en/blog/website-personalization-in-practice/), which allows for tailored content based on each visitor’s behavior, preferences, and demographics. This enables our clients to engage users with more relevant messages and improve their overall site experience. Hacktoberfest presented a perfect opportunity to give back to the community that maintains and improves it.

## From Drupal to Mautic

Coming from a background in Drupal, I found understanding Mautic’s structure relatively straightforward. Like Drupal’s _core_, Mautic has its core _bundles_, and while Drupal uses _modules_ for extension, Mautic can be similarly extended with _plugins_. Mautic is built on [Symfony](https://symfony.com), starting with Symfony 2 and now upgraded to Symfony 5, so it felt familiar to me as a Drupal developer.

At Druid, we are actively encouraged to contribute to Drupal. We've held several contribution events throughout the year, and [many Druids regularly participate in the Drupal community](https://www.drupal.org/node/1770460/issue-credits/3060). However, as someone relatively new to Drupal, diving into the Drupal core issue queue can be daunting. There’s an overwhelming number of issues, some of which have been open for years, making it difficult to know where to start. By comparison, while Mautic has been around for a decade, it’s a smaller project than Drupal, making it easier to find issues to work on and navigate the codebase.

## Contributing to Mautic

For this month-long event, a team was formed within Mautic to help onboard new contributors. There were both code and non-code contribution opportunities available, and just after I joined, I attended an online developer onboarding session led by a core maintainer who introduced the project and answered questions. During Hacktoberfest, [non-code contributions](https://github.com/mautic/hacktoberfest-no-code/blob/main/2024.md) were organized on a special project board, while code contributions continued to be tracked on [Mautic’s Open Source Friday board](https://github.com/orgs/mautic/projects/13/views/1), where issues and PRs needing review are listed. The documentation is thorough, and the Slack community is active, welcoming, and inclusive.

I was able to contribute in several ways. I reviewed pull requests and began [ translating Mautic’s knowledge base into French](https://kb.mautic.org/index.php?ln=fr). I also set up the development environment locally, worked on a few issues, and submitted pull requests. One of my contributions was to create a data attribute for form elements that disables fields automatically based on the values in other fields. This feature is now part of the [Mautic 5.2.0 release](https://github.com/mautic/mautic/releases/tag/5.2.0) and is used in the form for creating custom fields. Another issue I tackled involved dynamically limiting a dropdown’s options based on related form fields and updating the dropdown as those fields changed.

Participating in Hacktoberfest was both rewarding and fun. It was a unique chance to contribute to a platform I already use in my work, while also gaining hands-on experience with Mautic’s codebase. This experience has inspired me to continue contributing to Mautic whenever I can.

Also checkout these cool Holopin badges I got for my contributions:
[![An image of @laurielim's Holopin badges, which is a link to view their full Holopin profile](https://holopin.me/laurielim)](https://holopin.io/@laurielim)