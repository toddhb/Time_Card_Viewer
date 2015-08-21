/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
"use strict";

var gulp = require("gulp");
var del = require("del");

// Load plugins
var $ = require("gulp-load-plugins")();
var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream"),

    sourceFile = "./app/scripts/app.js",
    destFolder = "./dist/scripts",
    destFileName = "app.js";

var browserSync = require("browser-sync");
var reload = browserSync.reload;
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var src = {}

// Styles
gulp.task("styles", ["sass"]);

gulp.task("sass", function() {
    src.sass = [
        "app/styles/**/*.scss", 
        "app/styles/**/*.css",
        "app/scripts/components/**/*.scss",
        "app/scripts/components/**/*.css"
    ]
    return gulp.src(src.sass)
        .pipe(changed("dist/styles", { extension: '.css'} ))
        .pipe($.rubySass({
            style: "compressed",
            precision: 5,
            loadPath: ["app/bower_components"]
         }))
        .on('error', function (err) {
            console.error('Error!', err.message);   // So errors don't stop the task
         })
        .pipe($.autoprefixer("last 1 version"))
        .pipe(gulp.dest("dist/styles"))
        .pipe($.size());
});

gulp.task("stylus", function() {
    return gulp.src(["app/styles/**/*.styl"])
        .pipe($.stylus())
        .pipe($.autoprefixer("last 1 version"))
        .pipe(gulp.dest("dist/styles"))
        .pipe($.size());
});


var bundler = watchify(browserify({
    entries: [sourceFile],
    debug: true,
    insertGlobals: true,
    cache: {},
    packageCache: {},
    fullPaths: true
}));

function rebundle() {
    return bundler.bundle()
        // log errors if they happen
        .on("error", $.util.log.bind($.util, "Browserify Error"))
        .pipe(source(destFileName))
        .pipe(gulp.dest(destFolder))
        .on("end", function() {
            reload();
        });
}

bundler.on("update", rebundle);
bundler.on("log", $.util.log);

// Scripts
gulp.task("scripts", rebundle);

gulp.task("buildScripts", function() {
    return browserify(sourceFile)
        .bundle()
        .pipe(source(destFileName))
        .pipe(gulp.dest("dist/scripts"));
});


function checkHeaderSendResponse(req, res) {
    var redirectAddress = 'https://employee.con-way.com/';

    var ceid = req.get('ceid');
    if(ceid == undefined) {
        res.redirect(redirectAddress);
    } else {
        ceid = decodeURIComponent(ceid.replace(/\+/g, ' '));
        ceid = new Buffer(ceid, 'base64');
        
        var options = {
            root:  __dirname + '/dist',
            headers: { 'eid': ceid }
        }
        res.sendFile('index.html', options);
    }
}

// Express
gulp.task('express:start', function() {
    var express = require('express');
    var app = express();
    var expressPort = 4000;
    
    app.get('/', function (req, res) {
        checkHeaderSendResponse(req, res);
    });
    
    app.use(express.static('dist'));
    
    app.get('*', function (req, res) {
        checkHeaderSendResponse(req, res);
    });

    app.listen(expressPort);
    gutil.log("Express serving on port " + expressPort);
});


// HTML
gulp.task("html", function() {
    return gulp.src("app/*.html")
        .pipe($.useref())
        .pipe(gulp.dest("dist"))
        .pipe($.size());
});

// Images
gulp.task("images", function() {
    return gulp.src("app/images/**/*")
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest("dist/images"))
        .pipe($.size());
});

// Fonts
gulp.task("fonts", function() {
    return gulp.src(require("main-bower-files")({
            filter: "**/*.{eot,svg,ttf,woff,woff2}"
        }).concat("app/fonts/**/*"))
        .pipe(gulp.dest("dist/fonts"));
});

// Clean
gulp.task("clean", function(cb) {
    $.cache.clearAll();
    cb(del.sync(["dist/scripts", "dist/images"]));
});

// Bundle
gulp.task("bundle", ["styles", "scripts", "bower"], function() {
    return gulp.src("./app/*.html")
        .pipe($.useref.assets())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest("dist"));
});

gulp.task("buildBundle", ["styles", "buildScripts", "bower"], function() {
    return gulp.src("./app/*.html")
        .pipe($.useref.assets())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest("dist"));
});

// Bower helper
gulp.task("bower", function() {
    gulp.src("app/bower_components/**/*.js", {
            base: "app/bower_components"
        })
        .pipe(gulp.dest("dist/bower_components/"));
});

gulp.task("json", function() {
    gulp.src("app/scripts/json/**/*.json", {
            base: "app/scripts"
        })
        .pipe(gulp.dest("dist/scripts/"));
});

// Robots.txt and favicon.ico
gulp.task("extras", function() {
    return gulp.src(["app/*.txt", "app/*.ico"])
        .pipe(gulp.dest("dist/"))
        .pipe($.size());
});

// Watch
gulp.task("watch", ["html", "fonts", "bundle"], function() {

    browserSync({
        notify: false,
        logPrefix: "BS",
        // Run as an https by uncommenting "https: true"
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: ["dist", "app"]
    });

    // Watch .json files
    gulp.watch("app/scripts/**/*.json", ["json"]);

    // Watch .html files
    gulp.watch("app/*.html", ["html"]);

    // Watch the .sass!
    gulp.watch(["app/styles/**/*.scss", "app/styles/**/*.css", "app/scripts/components/**/*.scss"], ["styles", reload])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });

    // Watch image files
    gulp.watch("app/images/**/*", reload);
});

// Build
gulp.task("build", ["html", "buildBundle", "images", "fonts", "extras"], function() {
    gulp.src("dist/scripts/app.js")
        .pipe($.uglify())
        .pipe($.stripDebug())
        .pipe(gulp.dest("dist/scripts"));
});

// Default task
gulp.task("default", ["clean", "build"  , "jest"  ]);
