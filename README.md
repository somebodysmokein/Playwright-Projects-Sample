![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Playwright Framework <a href="https://playwright.dev/"><img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" height="30" /></a>

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
    - Node.js

    Install the requirements:
    ```sh
    npm install
    ```


## About the tests in this repository

  This repository contains the following Selenium tests:

  | Module   | Test name                          | 
  | ---   | ---                                   |
  | example.spec.js      | get started link                |
  | sample_test_2.spec.js    | sample test 2               | 
  | sample_test_3.spec.js    | sample test 3               |
  
  
  ---


## Test infrastructure environments 

- [BrowserStack](#browserstack)



## Running Your Tests

---


# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

## Prerequisites

- Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands.

    - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

    - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
  Alternatively, you can also hardcode username and access_key objects in the [fixtures.js](./fixtures.js) file.

Note:
- We have configured a list of test capabilities in the [playwright-bstack.config.js](resources/conf/playwright-bstack.config.js) file. You can certainly update them based on your device / browser test requirements. 
- The exact test capability values can be easily identified using the [Browserstack Capability Generator](https://browserstack.com/automate/capabilities) and the allowed Browsers and OS are mentioned [here](https://www.browserstack.com/docs/automate/playwright/browsers-and-os)


## Running Your Tests

### Run a specific test on BrowserStack

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the `playwright-bstack.config.js` file.

- How to run the test?
  

  To run a specific test scenario, use the following command :
  Note: You can change the test you want to run by replacing the respective spec file.

  ```sh
  npx browserstack-node-sdk playwright test --project=accountA --project=accountB --reporter=list

  ```

  
- Output

  This run profile executes sampel_test_2 and sample_test_3 in their individual separate worker threads. sample_test_2 amd sample_test_3 uses different datasets hence it wil not cause a conflict
