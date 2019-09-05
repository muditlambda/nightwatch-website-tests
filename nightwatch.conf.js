

module.exports = {
  src_folders: ['test'],
  page_objects_path : 'lib/pages',
  custom_commands_path : 'lib/custom-commands',
  custom_assertions_path : 'lib/custom-assertions',

  selenium : {
    start_process : false,
    server_path : "",
    log_path : "",
    host : "hub.lambdatest.com",
    port : 80,
    cli_args : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : "",
      "webdriver.firefox.profile": ""
    }
  },

  test_workers : {"enabled" : true, "workers" : "auto"},

  test_settings : {
    default : {
      request_timeout_options: {
        timeout: 1000000
      },
      launch_url : "https://nightwatchjs.org",
      selenium_port : 80,
      selenium_host  : "hub.lambdatest.com",
      silent: false,
      screenshots : {
        enabled : true,
        path : ""
      },
    
      username : process.env.LT_USERNAME ||  "<your username>",
      access_key : process.env.LT_ACCESS_KEY || "<your accessKey>",

      skip_testcases_on_fail: false,

      desiredCapabilities: {
        build:"Nightwatch-Selenium-Sample",
        visual:true,
        video:true,
        console:true,
        network:true
      }
    },

    chrome: {
      desiredCapabilities: {
        platform: "Windows 8",
        browserName: "chrome",
        version: "71.0"
      }
    },
    safari : {
      desiredCapabilities: {
        platform: "macos 10.13",
        browserName: "safari",
        version: "11.0"
      }
},
firefox: {
  desiredCapabilities: {
    platform: "win10",
    browserName: "firefox",
    version: "60"
  }
},
     

      globals: {
        // NIGHTWATCH_VERSION is defined as an environment variable (.env files are supported also)
        nightwatchVersion: '${NIGHTWATCH_VERSION}'
      }
    },

    
  };