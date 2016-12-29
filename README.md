Oded
====

Oded is a WordPress theme for bloggers that incorporates Bootstrap and Google Material Design. The theme is named in loving memory of my father, Oded Stitt.

This theme was built on top of [Underscores](http://underscores.me).

Getting Started
---------------

There are several ways you can download and install Oded:

* Clone this repository by opening your command line tool and typing `cd your-project-directory/wp-content/themes` (replacing "your-project-directory" with the actual name of your project directory) and then typing `git clone https://github.com/andystitt829/oded.git`
* You can download a ZIP file of theme either [with the SASS files](http://andystitt.com/themes/oded-with-sass.zip) or [without them](http://andystitt.com/themes/oded.zip).
* If you use Node.js, you can go to your project directory via the command line and then type `npm install oded`
* I have submitted this theme for inclusion in the WordPress theme repository; hoping it gets approved so you can access it from there!

A Few Notes for Developers
--------------------------

I have included the files that I use for my development workflow. You can feel free to modify or delete them as you see fit.

For your reference, I use the following:

* [Composer](https://getcomposer.org/) for PHP dependency management; I specifically use Kint for PHP debugging, Whoops for nicer error messages, and PHP Codesniffer with the WordPress Coding Standards module
* [Bower](https://bower.io/) to manage my front-end package dependencies, specifically the Bootstrap and Google Material Design Lite CSS and JS files
* [Gulp](http://gulpjs.com/) as my task runner; tasks include compiling SASS as well as compressing the theme files into a ZIP file and getting rid of those files that should not be in a WordPress theme ZIP file

I hope you enjoy using this theme! Feedback is always appreciated.
