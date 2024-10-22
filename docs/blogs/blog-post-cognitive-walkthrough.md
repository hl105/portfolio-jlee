---
title: "Cognitive Walkthrough - DTILE edition!"
layout: doc
---

# Cognitive Walkthrough - DTILE edition!

In Lecture 13, we went over various forms of user testing. One part of it was `cognitive walkthrough` . For readers who are not familiar with this term, I’ll reiterate what the process is first:  (taken from lecture notes!)

- Brainstorm a set of tasks a user might wish to perform with your interface.
- For each task, break it down into the specific sequence of actions a user needs to perform (and expected system responses) .
- For each action, answer the 4 questions. How easily can a user:
    - know they need to do something?
    - notice the correct action is available, and associate it with what they're trying to do?
    - based on what occurs after the action is taken, know that it was the right thing to have done?
    - understand how they've made progress towards their larger goal?
- If you locate a problem, pretend it has been fixed and proceed to the next action.

This reminded me of what I just learned in 6.910A - Design Innovation for Engineers (DTILE) as part of the Gordon Engineer Leadership (GEL) program. In this class, we defined the `12 steps for innovation`:

- Problem Space Definition
- Need & Assumption Analysis
- Research & Discovery
- Boundary & Hazard Mitigation
- Specify Desired Outcomes
- Concept Generation
- Concept Downselection
- Concept Articulation
- Uncertainty Identification
- Uncertainty Reduction
- Launch, Iterate, or Stop

One can easiliy see how these steps overlap with the concepts we learned in class. For example, `divergent design` is research & discovery + concept generation, `convergent design` is concept downselection. Needs & assumption analysis was done in the `social media needfinding` assignment. This tells us that what we learned in this software design class can actually be applied to any innovation process! But back to the topic of cognitive walkthrough for this post. Can you guess what this corresponds to out of the 12 steps? 

## Uncertainty Reduction → Cognitive Walkthrough

If you guessed `uncertainty reduction`, you’re right! Our professor proposed a very similar approach to reducing unceratinty called `k-scripts` . Just like a cognitive walkthrough, we brainstorm a set of tasks a user might perform on the product. However, a `k-script` slightly goes deeper: one can divide up the process like this:

| who | observable action | unobservable action/notes |
| --- | --- | --- |
| customer | stops in front of the BoA ATM | customer wants to withdraw $40 immediately, he is in a hurry |
| ATM | shows message “please insert debit card” | customer reads message (*what if the customer doesn’t understand english?*) |
...and so on

- The `who` part defines the actor preforming the action. It could be a customer or a product, like in the example, or even a system
- The `observable action` part is something a viewer can observe, like the message that shows up on the ATM
- The `unobservable action` part is where we can ask the 4 questions or other comments about the action.

According to our professor, thie k-script acts as a “easy way to convey basic functionality.” By adding the 4 questions of the `cognitive walkthrough` proposed in class at each step, we can further break down the steps in detail. I hope that with this clear table structure provided as a k-script, we can create the `cognitive walkthrough` process more easily. 

## Sources

https://medium.com/@bladekotelly/k-scripts-the-fastest-and-most-flexible-way-to-articulate-a-user-experience-97264d9c4786