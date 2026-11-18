# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### AI Use #1

- **Date:** 2026-11-11
- **Tool / model:** ChatGPT – GPT-6 (Free tier)
- **Files:** `src/App.jsx`
- **Prompt (verbatim):**

```text
Im learning react this is my App.jsx my Addtodo form is done 



Add three buttons labelled exactly "All", "Active", "Completed" that call setFilter with "all", "active", "completed". Use onclick with an arrow function.
```

- **What it produced & what I kept / changed / rejected:**

ChatGPT suggested produced three filter buttons using arrow functions to update the filter state. I kept the buttons, corrected `onclick` to React's `onClick` syntaxz

---

## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** (2–3 sentences. e.g. it mutated
  state instead of copying, used a stale/old React idiom, missed an edge case, or
  over-engineered something simple.)

- **Explain-every-line check:** I can explain every line of the AI-assisted code in this
  lab and why it's correct. ☐  *(Your TA may ask you to walk through any of it.)*
