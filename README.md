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
  | sample_test_2.spec.js    | sample test 2favourites nav item    | 
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

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### Run the entire test suite in parallel on BrowserStack browsers

In this section, we will run the tests in parallel on a single browser on Browserstack. Refer to `playwright-bstack.conf.js` file to change test capabilities for this configuration.

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser, use the following command:
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack.config.js --project '<project-name>' --workers 5
  ```

 Note: The `workers` argument mentions the number of tests you want to run in parallel at a time.

- Output

  This run profile executes the entire test suite in parallel on a single BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.

  Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-parallel-tests
  ```

  <b>Note:</b> If you want to run tests on multiple browsers, you just need to remove the `project` argument from the command.

  You can directly run the above scenario using the following command:

  ```sh
  npm run bstack-parallel-browsers
  ```




### Run a tests on BrowserStack which need Local Environment access

## Prerequisites
* Clone the BrowserStack demo application repository.
    ```sh
    git clone https://github.com/browserstack/browserstack-demo-app
    ```
* Please follow the README.md on the BrowserStack demo application repository to install and start the dev server on localhost.

* In this section, we will run a single test case to test the BrowserStack Demo app hosted on your local machine i.e. localhost. Refer to the `playwright-bstack-local.conf.js` file for configuration and setup and teardown processes.

Note: You may need to provide additional BrowserStackLocal arguments to successfully connect your localhost environment with BrowserStack infrastructure. (e.g if you are behind firewalls, proxy or VPN).

* Further details for successfully creating a BrowserStackLocal connection can be found here:

    * [Local Testing with Automate](https://www.browserstack.com/local-testing/automate)
  
## [Web application hosted on internal environment] Run a specific test on BrowserStack using BrowserStackLocal

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the `playwright-bstack-local.config.js` file.
  
  To run a specific test scenario, use the following command :
  Note: You can change the test you want to run by replacing the respective spec file.

  ```sh
  npx playwright test <spec-file> --config=resources/conf/playwright-bstack-local.config.js --project 'chrome@latest:Windows 10@browserstack'"
  ```

  where,  the argument `<spec-file>` can be any spec files from the repository.
  
  E.g. "e2e.spec.js", "login.spec.js", "product.spec.js" or any of the other tests, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

  Also, the argument `<project-name>` can be any of the project names from the `playwright-bstack.conf.js` file.

Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-local
  ```

- Output

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### [Web application hosted on internal environment] Run a tests in parallel on BrowserStack using BrowserStackLocal

Refer the below snippet, here we will run the tests in parallel on a single browser on Browserstack. Refer to `playwright-bstack-local.conf.js` file to change test capabilities for this configuration.
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack-local.config.js --project '<project-name>' --workers 5
  ```

Refer the below snippet, here we will run the tests in parallel on a multiple browser on Browserstack. Refer to `playwright-bstack-local.conf.js` file to change test capabilities for this configuration.
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack-local.config.js --workers 5
  ```

 Note: The `workers` argument mentions the number of tests you want to run in parallel at a time.


Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-local-parallel
  ```

- Output

  This run profile executes the entire test suite in parallel on a single BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


## Additional Resources

- View your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- Documentation for writing [Automate test scripts in Java](https://www.browserstack.com/automate/java)
- Customizing your tests capabilities on BrowserStack using our [test capability generator](https://www.browserstack.com/automate/capabilities)
- [Using Automate REST API](https://www.browserstack.com/automate/rest-api) to access information about your tests via the command-line interface
- Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)
- For testing public web applications behind IP restriction, [Inbound IP Whitelisting](https://www.browserstack.com/local-testing/inbound-ip-whitelisting) can be enabled with the [BrowserStack Enterprise](https://www.browserstack.com/enterprise) offering
