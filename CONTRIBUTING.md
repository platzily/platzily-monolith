
# Contributing to Platzily Monolith

Here are a few guidelines that will help you along the way.

## Issues

### Before creating issues please

- Read the documentation.
- Search for duplicates.
- Make sure you're following the templates, if you don't see a template for your type of issue feel free to create a feature issue for it.

### At the moment you're creating an issue please

- Make sure you're following the issues naming standard

### Issues naming standard

[Issue type] [Issue name]

#### Example

```bash
Bug Report - Contribution Guideline
```

##### Issue types

- Bug Report
- Feature Request

- Contribution Guideline = Issue name

## Branches

### Branches naming standard

[Type]-[Issue ID]

### Example

```bash
git checkout -b feature-1
git checkout -b hotfix-1
```

- feature = Issue type
- 1 = Issue ID

## Commits

### Commits naming standard

[Branch Name] + [Verb] + [Substantive] + [What for]

### Example

```bash
git commit -m 'feaure-1 Added logger class to use a logger service'
```

- Branch Name - feature-1
- Verb - Added
- Substantive - logger class
- What for - to use a logger service

## Pull Requests

### Before creating a pull request please

- Make sure you created an [Issue](https://github.com/platzily/platzily-monolith/issues) related to it and you're following the [issues section](#Issues) recommendations
- Make sure you're following the [branches section](#Branches) recommendations
- Make sure you're following the [commits section](#Commits) recommendations

## License

By contributing your code to the platzily/platzily-monolith GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).
