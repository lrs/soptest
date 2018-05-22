# Shades of Purple Test in VS Code


## Description
Repo to  test settings for [Shades of Purple](https://github.com/ahmadawais/shades-of-purple-vscode) color theme in VS Code.

Renders a simple HTML page with a "Hello World" React component.

Included sample workspace settings to overide the color theme.

Included `build` and `test` tasks.

## Issues

- Poor contrast for Gulp output timestamps in terminal.
- React Component attributes styled differently to HTML attributes.
    - This is quite possibly a personal preference!

## Usage

- Run `npm install`.
- Run `npm run build`.
    - Runs the Gulp default task which outputs timestamped (in square brackets) lines for each step in the terminal.
    - files are built to the `./dist` directory.

- Optionally run `npm run test`
    - Basic test for the example React component structure.

## Images

Without settings:

![Without Settings](/images/sop_no_settings.jpg)

- Timestamps in the terminal have poor contrast.
- React Component attributes differ to HTML element attributes.

With settings:

![With Settings](/images/sop_with_settings.jpg)
