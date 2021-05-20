# OWASP SAMM Website

This is the source code for the web pages in https://owaspsamm.org

The website is generated using [Hugo](https://gohugo.io). We use a theme originally based on the [Hugo Universal Theme](https://themes.gohugo.io/hugo-universal-theme/).

To contribute to this repository, you can edit simply using the GitHub integrated editor. You will need to have a [GitHub account](#github), and a new pull request with your changes will be created.

If you need to edit multiple files, or if you want to check the resulting pages before posting a pull request, you can download Hugo and use it locally. It is a simple process, and you can check your work before submitting the changes.

# Editing locally

## You need Git and Hugo

* Install [Hugo](https://gohugo.io/getting-started/installing/). Please install the `extended` version!
* Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

[Fork this repo](https://github.com/OWASPsamm/website#fork-destination-box) first, and call your copy something like `samm-website`.

```
$ git clone https://github.com/<your github username>/samm-website.git
```

## Testing locally

This website uses [hugo modules](https://gohugo.io/hugo-modules/use-modules/) for its theme and to get the latest model files in markdown format.

If you are testing your own branch from the model, the trick is to *replace* the module that points to the model repo with yours.

These are the rough steps you should follow:

1. You forked [the model](https://github.com/owaspsamm/core) to your own repo, e.g. `https://github.com/<myuser>/samm-core`. After pushing the changes, a build will be fired and the files in compatible format will be stored in the `markdown/<your-new-branch>` in that repo.
2. Git pull from your model repo, to get the newly created `markdown` branch.
3. Use `replacements` with hugo modules, by changing the config file, or using environment vars like: `env HUGO_MODULE_REPLACEMENTS="github.com/owaspsamm/core -> ../.." hugo serve -e development`, 
4. Test you can access the site locally, in the url hugo prints in your console.

If you want to use a different generated branch from upstream, just point to the corresponding branch in the repo:
```
❯ hugo mod get github.com/owaspsamm/core@markdown/v2.0.1
go: downloading github.com/owaspsamm/core v0.0.0-20210520122448-8de72e41633a
go get: downgraded github.com/owaspsamm/core v2.0.1+incompatible => v0.0.0-20210520122448-8de72e41633a
```

In this case, the `@markdown/v2.0.1` indicates that we are using the `markdown/v2.0.1` branch. You can verify it by taking a look at the sha1 hash at the end: both should match. In this case the sha1 sum is `8de72e41633a`.

## Submitting your change

Make your changes, commit to *your* fork of the repository, and push the changes. After pushing, you will see a "create a pull request" link.  Follow that link and do a pull request against our repository.

After we merge your changes, a webhook will be fired to update your changes, and it take up to 5 minutes to go live!


## GitHub
* [Signup](https://github.com/) for a GitHub account
* Signin to GitHub
* Generate or locate your [SSH Key](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) and add them to your GitHub profile settings:
	profile > settings > SSH and GPG Keys

## Serving Hugo

From there, you've got all the files ready to go and you can start your hugo server to preview the changes you made. Live reload will update your change in the browser as soon as you hit that `save` key.

```
$ hugo serve -v
```

The terminal will tell you at which address your hugo server lives, but it usually is at `http://localhost:1313`

## Editors

Several editors for better markdown editing:
* [Sublime](https://www.sublimetext.com/3) has package called [MarkdownExtended](https://github.com/jonschlinkert/sublime-markdown-extended) that improves Markdown + Front Matter syntax highlighting
* [Atom](https://atom.io/) has a built in GitHub Markdown syntax highlighting
* [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432)
* [WebStorm](https://www.jetbrains.com/webstorm/)

## Git Clients

Git, using command lines can be a little bit confusing at first, those UI clients will help wrap your head around it.
* [GitHub Desktop](https://desktop.github.com/)
* [Source Tree](https://www.sourcetreeapp.com/)
* [Git Kraken](https://www.gitkraken.com/)

Happy Hacking!
