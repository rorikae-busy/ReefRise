# Task 1 — Sector Selection

## Project Title
**ReefRise: Rise for Reefs, Protect Our Seas**

## Sector
Blue Economy & Marine Innovation

## Local Challenge
Coastal communities need accessible info on coral reef conservation.

## Target Users
Coastal community members, students, and community volunteers.

## Key Features
Coral Reef Learning Cards, Interactive Knowledge Quiz, Reef Protection Checklist

## -----------------------------------------------

## Task 2 — Zero-Shot Prompting

**Objective:** Observe what Copilot generates from a basic prompt without examples, and preserve the result as the baseline for later comparison.

**Exact Prompt:**
> Create a simple webpage that helps people protect coral reefs.

**Actual Copilot Output:**
Check this folder: `outputs\task2\index.html`

**What Worked:**
- Clear theme and message about protecting coral reefs.
- Hero, stats, actions, closing, and footer are well-organized sections.
- Four practical, easy-to-understand actions for everyday people.
- In-page navigation links are present.
- Includes reference links to NOAA and Coral Reef Alliance.

**What Needs Improvement:**
- No Knowledge Quiz, so a planned core feature is missing.
- No interactive Reef Protection Checklist; the actions are static cards.
- No Learning Cards about marine biodiversity and threats to coral reefs.
- Target users (coastal community members, students, volunteers) are not identified, and content is generic rather than local.
- Very limited interactivity, mostly text and links.
- Mostly static, with little interactivity.

**Next Action / Verification:**
- Test the page in browser DevTools mobile view and with keyboard navigation (Tab, Enter).
- Inspect the HTML for semantic elements (header, main, section, footer).
- Verify the stats and links against their sources before keeping them.
- In Task 3, rewrite the prompt using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria to request the three ReefRise features and the target community.

## -----------------------------------------------

## Task 3 — Structured Prompt

**Objective:** Improve output relevance using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.

**Exact Prompt:**
> Act as a frontend web developer. Create a responsive single-page website called "ReefRise: Rise for Reefs, Protect Our Seas" for coastal community members, students, and community volunteers in a Philippine coastal community. The page should promote coral reef conservation and include three features:(1) Coral Reef Learning Cards about coral reefs, marine biodiversity, and common threats
(2) Interactive Knowledge Quiz with multiple-choice questions that gives a score and feedback
(3) Reef Protection Checklist where users can mark conservation actions as completed 
Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, databases, or external APIs. Use clearly labeled educational demonstration content only, and do not invent live data or official reef reports. Provide separate index.html, styles.css, and script.js files. The interface must remain readable on mobile screens, and the checklist and quiz must work through both mouse and keyboard interaction.

**Actual Copilot Output:**
Check this folder:`outputs\task3\'index.html','styles.css','script.js'`

**What Worked:**
- All three planned features are present and working.
- Tested: quiz validation, scoring (3 of 5), and reset; checklist progress updates; responsive layout in mobile view.
- Semantic HTML, native form inputs, and separate HTML, CSS, and JS files as requested.
- Content is labeled as demonstration content, with no unverified statistics.

**What Needs Improvement:**
- The quiz does not show which answers were right or wrong.
- Content is not yet specific to a Philippine or local community.

**Comparison with Task 2 baseline:**
1. The baseline had only static cards; the structured prompt produced a working quiz, learning cards, and an interactive checklist.
2. The baseline did not identify its audience; the structured version names coastal neighbors, students, and volunteers.

**Next Action / Verification:** 
- Test keyboard-only use; use few-shot and role-assignment experiments in Task 4.

## -----------------------------------------------

## Task 4A — Few-Shot Prompting

**Objective:** Explore how examples influence AI output.

**Exact Prompt:**
> Create reef protection checklist items using this format:
>
> Example 1:
> Item: Bring reusables
> Category: Reduce Waste
> Description: Carry a refillable bottle or reusable bag to help avoid single-use litter.
>
> Example 2:
> Item: Leave coral undisturbed
> Category: Safe Reef Visits
> Description: When swimming or snorkeling, look without touching, standing on, or taking coral.
>
> Generate four additional reef protection items using the same format and render them as a checklist.

**Actual Copilot Output:**
Saved in `outputs/task4/'index.html','styles.css','script.js'`.
Copilot generated four additional checklist items: Choose seafood thoughtfully (Sustainable Seafood), Keep harmful chemicals out of drains (Water Quality), Reduce energy use (Climate Care), and Support community reef care (Community Stewardship).

**What Worked:**
- Copilot copied the Item / Category / Description structure from my two examples.
- The categories were consistent with the examples.
- The new checkboxes worked with both mouse and keyboard.
- It also reformatted the original five items to the same structure and updated the progress count to 9.

**What Needs Improvement:**
- Copilot changed existing items and added categories I did not provide, which was beyond what I asked.
- The "Item:", "Category:", and "Description:" labels are now visible on every checklist entry, which makes the list longer and more cluttered.

**Next Action / Verification:**
- Ticked all 9 items in the interface and confirmed the progress bar reached "9 of 9 actions complete".
- Review the cluttered labels in Task 5.


## Task 4B — Role Assignment

**Objective:** Explore how a specialized perspective influences AI output.

**Exact Prompt:**
> Act as a frontend accessibility reviewer. Examine the ReefRise page. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

**Actual Copilot Output:**
Copilot identified three issues:
1. The reef illustration uses `role="img"`, so the caption inside it may not be exposed to assistive technology. Suggested moving the caption outside, such as into a figcaption.
2. The quiz result is an atomic live region that announces the score and all five explanations at once. Suggested keeping the live region to a concise score and feedback and placing explanations in a separate non-live region.
3. Checklist descriptions drop to 10px on mobile. Suggested at least 12px.

It also noted what already works: skip link, landmarks and headings, quiz fieldsets with legends, labeled radios and checkboxes, and visible keyboard focus. It stated this was a source review, not tested with a screen reader or accessibility tools

**What Worked:**
- The accessibility reviewer role produced specific concerns (ARIA, live regions, text size) that my earlier prompts did not surface.
- I checked all three findings against my HTML, CSS, and JS, and each matched the code.

**What Needs Improvement:**
- Copilot did not test with a screen reader or browser accessibility tools, so the findings are based on source code only.
- It did not report any color contrast results.

**Next Action / Verification:**
- Use these findings in Task 5: apply at least one correction and test the result.

## Task 5 — Structured Analysis and Refinement

**Objective:** Use AI-assisted analysis to identify and improve a specific implementation weakness.

**Exact Prompt:**
> Review my ReefRise project. Check whether the quiz and checklist work correctly, whether the HTML uses appropriate semantic elements and accessible labels, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them.

**Actual Copilot Output:**
Findings

[P2] The checklist is missing the four additional actions requested earlier. The current list has five items and no category labels (index.html:145); its progress bar is set to five (index.html:139). Add the four categorized rows and change the bar's maximum and initial text to nine. The script already calculates progress from the checkbox count (script.js:44). Test by checking all nine with a mouse, then with Tab and Space; the counter should reach 9 of 9.

[P2] Quiz submission may announce too much at once to screen-reader users. The result is an atomic live region (index.html:125), and submission inserts the score, feedback, and all five explanations into it (script.js:35). Keep the score and feedback in the live region, and put the explanations in a separate, non-live section. Test by completing the quiz with a screen reader; it should announce the score concisely, while the explanations remain available to navigate.

Other Checks

The quiz's fieldsets, legends, and labeled radio options are appropriate. Its required-answer check, scoring, and reset behavior look correct in the source. Checklist checkboxes have labels and a visible focus treatment. The layout has mobile breakpoints, but checklist text drops to 10px on narrow screens (styles.css:255); consider increasing it to improve readability. I reviewed the source but did not run browser or screen-reader tests.

**Selected Correction:**
I applied the second finding because it matched my code: `#quiz-result` was an atomic live region that received the score, feedback, and all five explanations. I moved the score and feedback into `#quiz-summary` (live region) and the explanations into a separate non-live list, `#quiz-explanations` (changes in `index.html` and `script.js`).

I did not apply the first finding. It said the checklist had five items and no categories, but my current version already has nine categorized items and `max="9"`, so the finding did not match my files.

**What Worked:**
- After the change, the quiz still showed the warning when unanswered, the score with explanations when answered, and cleared on "Start over".
- The checklist progress bar still reached 9 of 9 when all items were ticked.
- The live region now holds only the score and feedback, while the explanations are in a separate non-live list.

**What Needs Improvement:**
- Screen reader testing was not done, so the announcement behavior was not tested directly.
- Checklist text is still 10px on narrow screens.

**Next Action / Verification:**
- Before the change: the quiz already worked and the progress bar reached 9 of 9. The issue was accessibility only.
- After the change: repeated the same tests (no answer, answered, reset, nine checklist items), and all behaved as before.
- Before and after versions are saved in `outputs/task5-before/` and `outputs/task5-after/`.