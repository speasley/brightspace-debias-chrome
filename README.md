# Brightspace Debias Chrome Extension

## Description

**Brightspace Debias** is a simple tool designed to reduce potential evaluation bias in the [D2L Brightspace Learning Management System](https://www.d2l.com/brightspace/). By obfuscating learner details, this extension provides a more neutral grading environment, ensuring more fair and unbiased assessments and evaluations.

## Background

Assessing student work can be influenced by personal bias, whether it's unintentional or deliberate. To address this issue, certain educational institutions have implemented strategies (as outlined in [this source](https://resources.depaul.edu/teaching-commons/teaching-guides/feedback-grading/Pages/assessment-and-bias.aspx)).

In the context of Brightspace, there are certain aspects of the user interface where the student's name remains consistently visible throughout the grading process. While it is not possible to achieve 100% obfuscation (the student can always include their name in the content of their submissions), there is opportunity to obscure some of the persistent personal information.

## Installation

### From the Chrome Web Store (Recommended)

1. Visit the [Brightspace Debias extension page](https://chrome.google.com/webstore/detail/brightspace-debias/nmhkibdmnglnifheagdgjlllajodnclh).

2. Click the "Add to Chrome" button.

3. Follow the on-screen instructions to complete the installation.

### Manual Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/speasley/brightspace-debias-chrome.git
   ```

2. Open Google Chrome and go to chrome://extensions/.

3. Enable "Developer mode".

4. Click the "Load unpacked" button.

5. Select the folder where you cloned the extension repository and click "Open."

## Usage

Once the DOM renders, the learner's name and profile photo are blurred. The title attribute is preserved, so if you do need to see the learner's name, simply hover your cursor over the blurred text and the learner's name will show in the tooltip.

It is common for learners to use their name as part of their submission's file name. If this is a concern, notify students that their submitted files must not include their name.

## Licence

This project is licensed under the [MIT Licence](http://opensource.org/licenses/MIT).

## Privacy Policy

While this extension collects no data, you can still read its applicable [privacy policy](./PRIVACY.md).

## Disclaimer

Neither this extension nor its author are affiliated with or endorsed by D2L. This is an independent project created for the purpose of reducing potential evaluation bias.