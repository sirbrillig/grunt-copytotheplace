# grunt-copytotheplace

> Utility to copy files to a configurable and variable place.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-copytotheplace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-copytotheplace');
```

## The "copytotheplace" task

### Overview
In your project's Gruntfile, add a section named `copytotheplace` to the data object passed into `grunt.initConfig()`.

List all the files you may want to copy. If the environment variable COPYTOTHEPLACE is not set, nothing will happen. This is by design so that this task can be configured on a per-install basis.

You can set the COPYTOTHEPLACE variable by adding `COPYTOTHEPLACE=<some directory>` in a `.env` file. See [copytotheplace](https://github.com/sirbrillig/copytotheplace) for more information.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  copytotheplace: {
    all: ['src/testing', 'src/123'],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
