---
title: "frontend alpha"
layout: doc
---

# Frontend (Alpha)

## Heuristic Evaluation

- **Usability criteria:** capture the broad overall goals that your visual and interactive designs might be trying to satisfy
    - *Discoverability:* how rapidly and easily can users understand how to operate the interface?
        - A comment I got from my wireframe assignment was that it’s unclear how a `cover` and a `jam` is different. Basically, the only difference is that a cover would come with `locking` whereas `jam` expires in 24 hours. For a user to easily understand this difference, I will illustrate the two posting options as `cover🔒` and `jam⌛`.
    - *Efficiency:* once you know how to use an interface, can you use it to quickly and efficiently accomplish your goals?
        - Since a `cover` and a `jam` is essentially the same content with two different features (locking/expiring), I will make the user interaction more efficient by eliminating the two buttons `create cover` and `create jam`  that used to be on the first page after logging in. Instead, there will be one `create` button, and at the end the user can choose to 🔒 or ⌛.
- **Physical heuristics:** describe characteristics about the user interface that affect how users might operate it
    - *Gestalt principles:* does the layout of the interface elements convey conceptual structure?
        - If the user is not logged in, the page will stay on the `log in` page. If the user tries to access any other page, it will tell them to log in first. This represents the conceptual structure that the user has to be logged in to initiate the other features.
        - When the user is logged in, a `post` is automatically created as the `currently listening to` page grabs the currently playing song and saves it as a post.
        - When user adds a image and text to the song `post` , it creates a `comment` (i.e.  `cover` or `jam`).
    - *Situational context:* how does the interface convey to a user their context (where they are, the app’s state, etc.), and how does it adapt to their context?
        - On the top right, the user profile will indicate that the user is logged in. If the user is not logged in, there will be a `log in` sign instead.
        - For the `currently listening to` part that is the first screen after the user logs in, if the user is not listening to a song right now, it will instead show a message that says `you are not listening to a song right now!` sign.
- **Linguistic level:** describe cultural conventions and norms about the interface
    - *Consistency:* does the interface reuse the same names, symbols, and icons for the same concepts or actions? how consistent is the interface with others across the same application domain or platform?
        - I will stick to `cover 🔒` and `jam ⌛` . The conceptual words like `post`  or `comment` is only for the backend data storage, as the user is commenting to a song post.
    - *Information scent:* how does the interface provide hints for navigation to aid a user in “foraging” for information?
        - The user, once logged in, will always start at the `currently listening to` page so that they can easily create a `cover`  or a `jam` . I will also use the top navigation bar that contains links to the main page and user profile.

## What I’ve been working on (~Oct 17)

Frontend deployment: https://memorify-omega.vercel.app/

`fetch` does not work for oauth!!!! I found this out the hard way… had to go through multiple files to find the issue and used chatGPT to debug the error message. 

I worked on modifying the `authentication` part and the `posting` part. Authentication can only happen through Spotify. Posting = getting the current song the user is listening to.