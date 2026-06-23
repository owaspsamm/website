# OWASP SAMM Website

Source for [owaspsamm.org](https://owaspsamm.org), built with [Hugo](https://gohugo.io/) 0.157.0.

## Running locally

Requires Hugo extended 0.157.0 and Go.

```bash
git clone https://github.com/owaspsamm/website
cd website
hugo server
```

## Contributing

Create a feature branch from `main` and open a Pull Request targeting `main`. Opening the PR automatically rebuilds the [staging site](https://owaspsamm.netlify.app/) with your changes — a reviewer checks staging and merges. See [Website Updates Process](https://owaspsamm.netlify.app/internal/website-updates-process/) for the full workflow.

## Repo structure

Standard Hugo project. Content lives in `content/en/`, templates in `layouts/`, styles in `assets/css/`.

SAMM model content (business functions, practices, streams) comes from the [owaspsamm/core](https://github.com/owaspsamm/core) Hugo module — do not edit files in `_vendor/`.
