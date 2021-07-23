// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Welcome to Generating a Markdown File 

  ## What is the title of your project? 
  * ${data.title} #
  
  ## Describe your project? 
  * ${data.project} 

  ## What is needed for project? 
  * ${data.install} 

  ## How is this helpful? 
  * ${data.usage} 

  ## What are the guidelines? 
  * ${data.guideline}
  
  ## What is needed to test the gerator markdown? 
  * ${data.test}

  ## What licenses does your project have? 
  * ${data.license}

  ## What is your github? 
  * ${data.github} 

  ## What is your email? 
  * ${data.email} 
`;
}

module.exports = generateMarkdown;
