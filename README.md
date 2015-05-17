# TimeCardView
A web front-end to the Kronos API.

[![Build Status](https://travis-ci.org/TeamACapstone2015/TimeCardView.png?branch=master)](https://travis-ci.org/TeamACapstone2015/TimeCardView)
[![Code Climate](https://codeclimate.com/github/TeamACapstone2015/TimeCardView/badges/gpa.svg)](https://codeclimate.com/github/TeamACapstone2015/TimeCardView)
[![Test Coverage](https://codeclimate.com/github/TeamACapstone2015/TimeCardView/badges/coverage.svg)](https://codeclimate.com/github/TeamACapstone2015/TimeCardView/coverage)

## Development

### Setting up development environment

#### Get the source code

    git clone git@github.com:TeamACapstone2015/TimeCardView.git
    cd TimeCardView

#### Install NPM

NPM sometimes referred to as The Node Package Manager is responsible
for downloading the dependencies for this project. Its installation
will depend on what environment you are using.

NPM will can install things 3 different ways. Its will install things
into the `./node_modules` directory by default, under `~/` if the
`--user` flag is given or under `/` if the `--global` flag is using.
Note, root permissions may be required if the `--global` flag is used.

##### Ubuntu/Debian

    sudo apt-get update && sudo apt-get install npm

##### Mac

    brew install npm 

##### Windows

Install Cygwin it should come with npm.

#### Install Bower

Bower is the second package manager used in this project. It is very
similar to NPM but install packages in a way the browser understands.
Bower will install the dependencies under the `app/bower_components/`
directory. `sudo` or evelvated permission may be needed on some systems.

    npm install --global bower

#### Install Gulp
    
Gulp is the build system for this project. It is responsible for 
compiling JSX and Sass as well as constructing the test and production 
builds. http://gulpjs.com/. `sudo` or evelvated permission may be needed 
on some systems.

    npm install --global gulp

#### Install Sass

Sass is an alternative to CSS. Gulp will compile any Sass in to CSS at
build time.  `sudo` or evelvated permission may be needed on some systems.

    gem install Sass

#### Install npm/bower dependencies

In root directory of project the following command will install of the
NPM dependencies under the `./node_modules/` directory  and bower 
dependencies under the `./app/bower_components/` directory.

    npm install

You may need to set your PYTHON enviroment variable, this has been a
problem from some people on Windows. If the npm command does not work
then try this one first.

    export PYTHON=$(which python)

### Automatic build for development

Run this command when developing. Gulp will watch for any changes and
automatically rebuild and open in a browser.

    gulp watch

### Running the test suite

Command to run the test suite.

    npm test

### build for deployment

Command to build for production. 

    gulp deploy
