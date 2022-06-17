let licenses = (license) => {
  let choice 

  switch (license) {
    case 'apache2':
      choice = "![img](./utils/License-Apache_2.0-blue.svg)"
      break;
      case 'mpl2':
        choice = "![img](./utils/mpllic.svg)"
        break;
        case "mit":
        choice = "![img](./utils/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667.svg)"
        break;
        default:
          choice = ''


  } 
  return choice
}
let licenseLink = (license) => {
  let choice 

  switch (license) {
    case 'apache2':
      choice = "(https://opensource.org/licenses/Apache-2.0)"
      break;
      case 'mpl2':
        choice = "(https://opensource.org/licenses/MPL-2.0)"
        break;
        case "mit":
        choice = "(https://opensource.org/licenses/MIT)"
        break;
        default:
          choice = ''


  } 
  return choice
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## License  ${licenses(data.license)}
  
  See the following link for license info: 
  ${licenseLink(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  https://github.com/${data.questions}
  
  
  `;

  // badge for license
}

module.exports = generateMarkdown;
