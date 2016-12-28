Oded
===

Oded is a WordPress theme for bloggers that incorporates Bootstrap and Google Material Design. The theme is named in loving memory of my father, Oded Stitt.

This theme was built on top of [Underscores](http://underscores.me).

Getting Started
---------------

There are several ways you can download and install Oded:

* Clone this repository by opening your command line tool and typing `cd your-project-directory` (replacing "your-project-directory" with the actual name of your project directory) and then...

If you want to keep it simple, head over to http://underscores.me and generate your `_s` based theme from there. You just input the name of the theme you want to create, click the "Generate" button, and you get your ready-to-awesomize starter theme.

If you want to set things up manually, download `_s` from GitHub. The first thing you want to do is copy the `_s` directory and change the name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain.
2. Search for `_s_` to capture all the function names.
3. Search for `Text Domain: _s` in style.css.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
5. Search for `_s-` to capture prefixed handles.

OR

* Search for: `'_s'` and replace with: `'megatherium-is-awesome'`
* Search for: `_s_` and replace with: `megatherium_is_awesome_`
* Search for: `Text Domain: _s` and replace with: `Text Domain: megatherium-is-awesome` in style.css.
* Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;Megatherium_is_Awesome</code>
* Search for: `_s-` and replace with: `megatherium-is-awesome-`

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
