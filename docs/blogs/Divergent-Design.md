---
title: Divergent-Design
layout: doc
---

# Divergent Design

## Broad application goals

1. name: memorify  / melodiary / recording / …
2. audience: music lovers who listen to songs everyday everywhere
3. value: For music lovers who listens to music wherever they go, playing a song immediately takes them back to a core memory in their lives. With this in mind, we redefine playlists, as not only a queue to store favorite songs but also a place where you can share your song-embedded memories with your friends.

## Scapbook of comparables


### Pinterest Board


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726608992/daovf5wvm9jzmaifbmoe.png" alt="">
                      <figcaption></figcaption>
                  </figure>

- image credit: [https://www.isabeltalens.com/blog/a-beginners-guide-to-pinterest-board-ideas](https://www.isabeltalens.com/blog/a-beginners-guide-to-pinterest-board-ideas)
- a pinterest board is a “scrapbook” of the content that the user saved
- This could be used an inspiration for the user profile section, where users can access their playlists that they have contributed to.
- I’ll call an individual “moodboard” a `playlist`

### **Github Contribution heatmap / Repository Statistic**


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726608993/ebbeqpjv9fxa4sc4wauk.png" alt="">
                      <figcaption></figcaption>
                  </figure>

- used to indicate how many commits user did on their github account
- idea: make a colorful playlist heatmap  (e.g. pink for cheerful songs, blue for sad) that when hovered over, shows the number of songs listened to on that day and when clicked, shows the contributions to a mood board on that day

	<figure>
	                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726608994/nwdne9hrqugtdaou4rzp.png" alt="">
	                      <figcaption></figcaption>
	                  </figure>

- idea: I could switch up the stats specfic to the playlist such as: description, likes, copy, saves

### Gmail Label


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726608995/kieieywc1jiqsc5bc3rz.png" alt="">
                      <figcaption></figcaption>
                  </figure>

- when an email comes in with the specificed words (e.g. HD), gmail automatically tags it and puts it into the corresponding categories `HD`
- when a different user creates a playlist that has a keyword you previously tagged, it automatically adds it into the category

### **Medium Highlighting**


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726608996/qfrbofup3ucwscyng0ti.png" alt="">
                      <figcaption></figcaption>
                  </figure>

- Medium allows the users to highlight text, comment, and post on X.
- The app can offer a lyrics feature where users can highlight/translate lyrics, add an image, and can add it to their `playlist`

### Youtube playlists


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726609001/haqclstjudf3bvcuhym2.png" alt="">
                      <figcaption></figcaption>
                  </figure>

- Some youtube channels offer hours-long videos with aesthetic images.
- idea: users can play their `playlist`in standby mode, and the moodboard will expand to fill the screen so that users can enjoy their moodboard on the screen while listening to the songs

### Canvas


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726609002/wyzvlzdrspyattsohjsy.png" alt="">
                      <figcaption></figcaption>
                  </figure>

- Canvas dashboard showing the classes I am currently taking
- this collection of cards might be a nice way to orgainze the `playlists` on the user profile: the image could be a collage of all the images on the playlist, and the text could be the name of the playlist, date, and other options (private/public? owner? date?)

## Brainstorming feature ideas

1. `cover` : a song + [image/highlighted lyrics/anecdote] set that represents a specific memory associated with a song.
2. `currently listening to` :  can directly add a `cover` on this page. Web color changes based on the mood of the song currently playing.
3. `cover prompts` : app suggests cover ideas for users: e.g. “The weather is so nice today! What’s your go-to picnic song?”
4. `translate` : offered for lyrics → in user’s language which they can add to a cover
5. Instead of `post` ing a song, we can call it `releasing` a cover.
6. `playlist` : a collaborative board containing `covers`. Profile page will be a set of playlists (private playlist section, public playlist section)
7. a `shared playlist` : should have the same format as a private playlist, but it also has a `- username` below each over, to indicate who posted that cover.
8. `playlist` should have an expand feature to fill up entire screen for standby mode. It should automatically show each cover when the song ends. Perfect for family gatherings.
9. `event playlists` : integrate with calendar to suggest `playlists` for special events like birthdays, concerts, study sessions, etc.
10. `curate` : users can curate a playlist by clicking the microphone button between covers, just like a podcast
11. `radio dial` : to explore what other users on the app (not necessarily friends) are posting, one can select a `mood` from a drop-down menu and click on the dial. Randomly shows a collection of `playlists` everytime the dial is clicked.
12. `scheduled releases` : users can schedule when to `release a post`by adding a timer : e.g. A concert `playlist` where users can upload their concert experience, or a birthday `playlist` . When multiple people post a `cover` with the same song, merge them by sliding images (randomly in order)
13. `mixtape` : collapses a `playlist` into a short video (accessible on the playlist description section) to share to other platforms
14. `jam session` : users directly upload what they’re listening to right now with a pic taken on the spot with a polaroid style date on it. Expires in 24 hours. They can also see what what their followings are listening to currently.
15. `insight` section on the profile that contains various statistics such as `heatmap` (below), genre they listened to the most, etc.
16. `heatmap`: of new covers posted on the playlists, github repo contribution heatmap style. Would be great if we can colorize the moods of each song (bpm maybe?). When hovered, should return number of songs posted. When clicked, shows the playlist modifed.
17. `capsuled covers`: when you click the lock button on the cover,  only you can only unlock it (i.e. it will only show up on your profile) at a later date when you are at the same location.
18. `discover local playlists` : find playlists near you - if you unlock a new location, it will show up on the playlist geographical map
19. `communities` : tab where you can search for existing communites that you can add yourself onto or create one yourself. You can also lock a community by adding automatic filtering questions to create a safer place.
20. a `community` can easiliy make a `shared playlist` on the chat. Features may include: reacting with emojis, create new events, create `templates` that everyone in the chat can use
21. `artists` : tab that links to the artist name text on any screen. It will contain stats about you and your artist (e.g. n days since listening, top songs) / communities related to the artist / your friends’ public playlists that contains a song from the artist

## VSD analysis


**Value Sensitive Design** VSD provides [four dimensions (or criteria)](https://envisioningcards.vsdesign.org/) with associated [prompts](https://canvas.mit.edu/courses/27993/files?preview=4549666): _stakeholders_ (identifying the people directly or indirectly impacted); _time_ (thinking through short, medium, and long-term effects); _pervasiveness_ (imagining what might happen if the design is broadly adopted); and _values_ (evaluating in terms of common values such as autonomy, community, inclusion and fairness). 

- _Indirect Stakeholders_
	- Most music listeners use a streaming service such as Youtube Music or Spotify. To get their data from the streaming services, we would need to make calls to their API. Would they allow large scale calls and let music play directly from an external website? Would it be costly to make these calls? → look into api specifics: e.g.[https://developer.spotify.com/](https://developer.spotify.com/)
	- Other stakeholders include artists (their music is being associated with an image that is not necessarily their album cover), music publishers (who have the right to the music that is being shared on the website), family/friends of the user (who might appear on the images on the website when they are not a user) → add a privacy agreement when the user first logs in
- _Changing Hands_
	- When the account changes hands (i.e. ownership change), the app’s ability to preseve memory would really shine. For example, if a `photography club` at a college decided to make an account, they could transwer the account to the next eboard every year, and after a decade the account will be a digital archive itself. Members can walk around campus listening to the songs that were popular ten years ago and read through the memories.
	- In this context, a features I could expand on is the `capsule` feature, allowing users to set a specific time until someone can stumble upon the `cover` or `playlist` they have hidden at a location.
- _Diverse Geographies_
	- What happens if you are listening to dowloaded music in the middle of the desert with no wifi? This raises the question of “how would you keep track of your local songs played?” → For now, I will design the website so that users can only choose songs that are published and publicly available on the streaming websites. Users can also add the songs later when they have connection, or maybe the app can even offer a offline version where the users can create drafts that will publish once the connection is back up.
- _Widespread Use_
	- As the number of users grow, new interactions will sprout such as an increase number of templates that users can reference for their `playlist` , or new communities hosting events like listening parties or a collective diary where users post their experiences. However, problematic issues might also arise; an example would be the limitations of content moderation - how would we prevent users posting inappropriate content, especially for explicit songs? For example, South Korea has a legal age limit of 18 or older for explicit songs - you need to verify your age. Would our app also need an age verfication? As the app gets used in different places, these legal agreements should be taken into account.
- Choose Desired Values
	- creativity: With multiple options to choose from to personalize a track such as `mixtape` or `curate`I hope that the users can express their creativity freely and explore different forms of content creation.
	- community: I hope to create an app that fosters collaboration and build upon other users’ creativity by implementing features such as `likes` , `use template` , or `jam session` . Maybe I can also provide incentives within the app to foster such communites, such as badges or points?
	- privacy: This is the core value I hope to implement in my app. As the user uploads their images on each `cover` , it is important that there is no unauthorized access to user data. With in-app privacy measure such as `private playlists` that only the users can access, or gated communites where only allowed users can create content within the chat, I hope that the app will continue to be a respectful community environment.

## **Storyboarding and sketching**


<figure>
                      <img src="https://res.cloudinary.com/df2rp6zoo/image/upload/v1726609005/qjxc66ca1py8y7kle846.jpg" alt="">
                      <figcaption></figcaption>
                  </figure>


