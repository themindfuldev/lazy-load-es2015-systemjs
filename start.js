System.config({
  paths: {
    "*": "*.js",
    "github:*": "../jspm_packages/github/*",
    "npm:*": "../jspm_packages/npm/*"
  }
});

System.import('main');