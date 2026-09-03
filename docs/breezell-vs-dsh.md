---
title: "Breezell vs DSH"
description: "A practical comparison of Breezell and DSH (deepseek-harness), including maintenance, extensibility, consistency, and security boundaries."
---

# Breezell vs DSH: What is the fundamental difference?

One of the questions we receive most often is how Breezell differs from DSH (deepseek-harness). The short answer is that the two projects prioritize different development and maintenance models.

## Quick comparison

| Area | DSH | Breezell |
| --- | --- | --- |
| Product model | Community-driven framework and ecosystem | Integrated IDE maintained primarily by the official team |
| Core experience | Built from the base framework plus selected community extensions | Designed to work as a complete product out of the box |
| Maintenance | Features and integrations can depend heavily on community contributors | Core features, integrations, and product behavior are coordinated officially |
| Extensibility | Broad freedom and faster experimentation | More controlled today, with extensibility opening gradually |
| Consistency | Experience and quality can vary between extensions | More consistent behavior, design, and release standards |
| Security boundary | Depends strongly on each extension's source, permissions, and implementation | The officially maintained core stays within a more controlled boundary |
| Main trade-off | Greater flexibility requires users to evaluate extensions carefully | Greater control means fixes and features may need to wait for official development |

## The DSH approach

DSH is closer to a community-driven framework. Its official project provides a foundation and demonstrates what can be built, while many features, integrations, plugins, and workflow choices may come from community extensions.

This offers substantial freedom and enables fast experimentation and highly customized environments. It also places more responsibility on the user. As with any extensible developer tool, an untrusted or poorly designed extension can expose credentials, introduce prompt-injection paths, behave inconsistently, become unstable, or perform destructive operations.

The actual risk depends on an extension's source, requested permissions, implementation quality, and review process—not simply on whether it is community-made.

## The Breezell approach

Breezell is developed, integrated, and maintained primarily as an official product. The goal is to provide an experience that works well for most users without requiring them to assemble the core workflow from separate plugins.

This makes it easier to coordinate product behavior, interface design, model and tool integrations, compatibility testing, security boundaries, updates, and support.

When users do not install untrusted third-party extensions, the core Breezell experience remains inside an officially maintained environment. This significantly reduces uncertainty around unknown extension code, credential handling, prompt injection, and destructive behavior.

::: info A security boundary, not an absolute guarantee
No extensible development tool is automatically risk-free. Review the source, publisher, permissions, and reputation of any third-party extension before installing it.
:::

## The trade-off

Official coordination improves consistency, stability, and control, but can also become a bottleneck. Breezell currently depends more heavily on official development resources, so some bugs, integrations, and feature requests must wait for the team to address them directly.

A highly community-driven ecosystem can often experiment and expand faster. Breezell's current model is less open in exchange for a more predictable core experience.

## Where Breezell is heading

Breezell is built on VS Code and continuously follows VS Code updates, providing a strong foundation for a mature extension ecosystem.

Our long-term direction is to let the community build and distribute extensions while preserving clear permission declarations, isolated security boundaries, transparent provenance, stable official APIs, and a core product that remains useful without third-party plugins.

## Bottom line

> **DSH is closer to a community-driven framework that prioritizes maximum freedom. Breezell focuses on a complete, officially maintained product with stronger consistency, stability, and security boundaries, while gradually opening extensibility in a controlled way.**

That difference in product philosophy and maintenance model is the most fundamental distinction between the two.
