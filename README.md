# vocabYOUlary

## Overview:
VocabYOUalry is a webapp aimed at helping junior developers solidify there knowledge of programming termonology and technologies. vocabYOUlary allows users to create a collection of study cards broken into categories of "technologies" and "termonology". the ability to have a visual collection of your knowledge all in one place can make learning more straightforward and hopefully build a sense of pride once users build a strong collection of vocabulary cards.

[View App] (https://vocab-you-lary-mark.netlify.app)

## About the User:
- The ideal user for this application is junior developers and people just starting to learn programming.
- People looking to have a visual representaion of their growing programming knowledge.
- People looking to deepen the programming knowledge they already have.
- The app solves the problem of having all of oyur notes and reference material scattered, it allows people to keep there thoughts and knowledge in one organized place.

## Features:
- users see vocab cards specific to their own google account
- can create their own vocabulary cards with an easy to use form
- can edit their vocab cards easilt.
- can delete vocab cards if needed.

## Relevant links:
- [wireframe for app] (https://www.figma.com/file/NWDmGFT5ExQ7o56RVfw83c/Untitled?node-id=0%3A1&t=ometC3QLfIVdDoz1-0)

## Code Snippet:
    if (e.target.id.includes('submit-term')) {
      const payload = {
        title: document.querySelector('#term-title').value,
        definition: document.querySelector('#term-form-description').value,
        time: Date.now(),
        uid: user.uid,
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getTerms(user.uid).then(showTerms);
        });
      });
    }

## Project screenshots:
<img width="400" alt="Landing page" scr="https://ibb.co/ZJBT18S">
- After sign in users see landing page and navbar apears. If you screen size is small the navbar will have a dropdown button with all navbar options.

<img width="400" alt="Termonology vocab card page" scr="https://ibb.co/4VW9LRH">
- Add, Edit or Delete vocab cards.

<img width="400" alt="Termonology add/edit form" scr="https://ibb.co/pvpS0pb">
- If edit is clicked on a card the fields will automaticly fill out with the cards current title and description.
-If add Term/Tech is clicked the same form will apear but blank.

## Contributors:
- [Mark Brewer](https://github.com/markbrew3)
