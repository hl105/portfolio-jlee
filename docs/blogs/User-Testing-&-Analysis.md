---
title: User Testing & Analysis
layout: doc
---

## Populating with Real Data

One of the features of my app, snapshots, automatically “cleans up” after 24 hours - i.e. it does not show up on the web page after 24 hours. Thus while the real data existed during user testing, it might be gone by the time the app is accessed for grading!

## Task List

| titile | short instruction to user | why worth testing | what you hope to learn or uncover |
| --- | --- | --- | --- |
| authenticate | log in with Spotify Credentials | To get Spotify profile info, such as accessToken or profile Image. | How willing are they to link their profile info? Do they show security concerns? |
| music sync | go to spotify and play a song. Come back to memorify and get the currently playing song | If authentication process worked, the song they are listening to should appear on the home page. | How long does this process take? Does the song show up immediately? |
| create cover | create a cover by adding all the necessary information.  | Test if user image upload works as intended. Check if album image sync is working as intended | By vaguely instructing the user, do they understand the purpose of the lock? Would they figure out what it means by the short phase `lock until` only? |
| Profile  | Can you locate the cover you just made? | There are two options where the cover the users made could end up in: locked and unlocked. Do they know the difference and guess what would happend if the cover gets unlocked? If it’s already unlocked, can they intuitively hover over it? | If the user fully understands the concept of `locked` and `unlocked` , and if they think the rotating motion is necessary or too much. |
| create snapshot | This time, create a snapshot.  | Do they understand the difference between the cover and a snapshot? Do they intuitively know that togglign the button will give them the create snapshot option? | Do they think it’s too much for them to go back to home and click crreate and click create snapshot? Or do they follow instructions smoothly.  |
| snapshots | Explore other people’s snapshots and find your own.  | Do they know how to interact with the snapshots, i.e. click on the album covers to reveal the images they uploaded? | Is it obvious that the snapshots would delete themsevles after a certain time? |
| Accept friend request | I have just sent you a friend request. Can you accept it? | Check if `johannaa` showed up in incoming friend request section | When the request is accepted, does it reactively show on the bottom section? i.e. Does the green button say “unfriend” now.  |
| request friend | Can you send a friend request to someone? Can you cancel it? | I haven’t had the chance to extensively test the friend feature, as I only have one spotify account. This would be a chance for me to test the friending feature extensively. | Does the user intuitively know that clicking the send friend request button again will cancel it? |
| Snapshot friend feature | Can you check the snapshots all of your friends posted? | check if the user understands how to only filter for friends’ snapshots. | Do they understand that to look at snapshots, they should go to the `snapshots` page? |

## User Study (0)

The reason I wrote case study 0, is because I found a critical flaw in my app that required me to stop the session. Then, I had to recruit two other users to conduct the user testing normally, which is documented in `user study (1)` and user `study (2)` . The critical flaw was that I missed this part of the Spotify API documentation page: **Users may be able to log into a development mode app without having been allowlisted by the developer. However, API requests with an access token associated to that user and app will receive a 403 status code error.** My accounts were automatically allowlisted, so I did not notice anything wrong when I was testing with my accounts for the previous assignments. This taught me the importance of user testing, because imagine this happening when you rolled out your final product…

For now, I will have to allowlist email accounts manually. If I upgrade my develop-stage app, this would be done automatically, but I did a quick search and it looks like it usually takes 3+ months for this to happen.

## User Study (1)

I interviewed a fellow junior, Mia, for my first case study. Since the home page automatically redirects the user to the login page if the user has never logged in before, Mia was logging into her Spotify account before I even asked her to. During the authentication process, I noticed how she didn’t even wait a second to read the permission page (i.e. what my app is asking for — access token, profile info, etc.), she immediately clicked authorize. Once she was in, I asked her to go to Spotify and play a song she liked and come back. She succesfully refreshed the page and saw the currently playing song appear on the home screen. 

The first time she uploaded the image for the cover, it failed to load. I knew it was because of the image size, so at the end of the user study I asked her to try uploading a screenshot, which succesfully uploaded. The user testing revealed two import points about the cover creation part: 1. **there is no explanation about what the date means, so Mia just assumed it meant pick today’s date and selected today. 2. she also did not know what to write in the box above,** but realized she could write anything and wrote a note to herself about what the song meant for her. She also noted that on the profile page, **the text on the covers were “glitching”  when hovered over** consistently transitioning from the gray to black font and vise versa.

When I told her this time to try creating a snapshot, she followed all the steps confidently and discovered the interactive “click to see image” part herself. However, in the debrief session after the post user study, she mentioned how it would be nice to have a notification/popup that says **“click to reveal.”** Also, she mentioned that nowhere in the app mentions snapshots disapper in 24 hours, so it would be nice to hint it by **adding expires on <date> beneath the snapshot.** For the friending part, she found it fun that she could see the other users on the explore page. She understood that clicking the green button twice would cancel the request, and accepted incoming friend requests smoothly. **However, I noticed her clicking the friend profile, assuming it will take her to the friend’s profile page.** This is not an implemented feature, but I would add it to my list of features to add.

### Opportunities for Improvement

- Add “Locked until” sign before date selection, and don’t allow past dates to be selected
    - user does not understand the calendar is for picking `locked until` date instead of current date
    - Instead of just having a calendar selection slot, add a line so that the user conceptually understands the feature better
    - conceptual
    - critical
- Modify text box and default text
    - instead of the placeholder “currently listening too..” text in the text box, maybe I can split it up into two text boxes: `entry title`,  `entry body`
    - use placeholder texts like “Listening to this song makes me think of…” so that it is clear that the app is asking for the user’s thoughts while listening to the selected song
    - conceptual
    - major
- Snapshot hints
    - add a `click to reveal` popup when user visits the snapshots page, so that the user knows what to do.
    - add a `expires on` under each snapshot to highlight the expiration feature
    - conceptual
    - critical
- More Friend Features
    - user tried to click on other people’s profile, expecting the app to take them to the person’s profile
    - Add a  `user profile` page, so that on the explore page, the user can click on other people’s profiles and explore what cover/snapshot they have posted before they send a friend request
    - conceptual
    - moderate

## User Study (2)

I interviewed a senior, Jasmine, for my second user study. She is interested in UX design, so I got a lot of feedback on that. She also did not hesitate to grant my app permission during the authentication process— she immediately clicked authorize. Once she was in, I asked her to play a song on her Spotify and get the currently listening to song — she played a song and successfully reloaded the page. When I asked her to create a cover, she struggled with some parts that I hope to address: 1. she **put the song name in the first text box**,  2. also **picked today’s date on the calendar**, and 3. She also was in a hurry to finish the user study as she told me she had assignments to do after, so she **did not upload an image at all**. This got me to consider **making the image and text and lock date all required,** so that the created cover contains all info instead of just containg a gray placeholder background where the image should have been.

Another interesting user behavior was that she clicked on the created cover, hoping there would be another interactive feature. This is definitely on my to-do list, by **allowing the users to click a cover to see additional cover details,** such as lyrics or time created/locked time, and also allowing them to edit or delete a cover. She also commented on the layout of the profile page: she would like it more if the profile page was a grid that fills from the left side instead of centering the covers. 

For the snapshot, she found the toggle button to create a cover and made one successfully. For the friending feature, she successfully accepted the friend request and sent one herself. However, from a designer’s perspective, she had a lot to say about this part too. She explained how the **incoming friend request should not have its own section, but rather should have been more of a notification** since it’s not always there. She also mentioned how there should be **more padding** around the sides of the profiles, and more padding between the buttons for the friend requests.

Next I asked her to find only friends’ snapshots, I spotted a very interesting user behavior — instead of going to the snapshots page like I intended, she tried to find her friends by going to her profile page. Currently, the user profile page only contains the user information and their covers, without any friend features. When I mentioned this in the debrief that followed the interview, she told me that **she expected to see a “Friends” tab in the profile section, so that she can look through and click on their profiles** to see what they have posted. She also mentioned how there is a lot of empty space in the nav bar that is going unused.

### Opportunities for Improvement

- Add Cover features
    - allow users to edit/delete covers.
        - major
    - fix glitching (mentioned in user study with Mia above) when hovering over text.
        - critical
    - mention only screenshots are allowed for now (because of max image size limit) as a popup (mentioned in user study with Mia above)
        - critical
- if time permits, add a lyrics feature to Cover Creation where users can put in their favorite lyrics of the day / play the song when clicked
    - this is because one of the feedback I got from Jasmine was that she would not use my app since she personalized her playlists on Spotify, and she could add an image and description for the playlist — for her, that was enough. So I want to add additional features outside of what I have on the app right now.
    - minor
- Add Friends section on profile
    - most social media apps have the number of friends on the user’s profile page → on click you can see a list of friends → on click you can visit other friends’ profile pages,
    - I hope to implement this feature to reflect the user’s mental model -- users can see the number of friends on their profile page and navigate to their profiles.
    - major