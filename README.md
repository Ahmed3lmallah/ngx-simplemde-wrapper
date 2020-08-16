# ngx-simplemde-wrapper

[![NPM version](https://img.shields.io/npm/v/ngx-simplemde-wrapper.svg)](https://www.npmjs.com/package/ngx-simplemde-wrapper)
[![NPM downloads](https://img.shields.io/npm/dt/ngx-simplemde-wrapper.svg)](https://npmjs.org/package/ngx-simplemde-wrapper)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Angular wrapper around [simplemde](https://simplemde.com/).

### What is SimpleMDE - Markdown Editor?

> A drop-in JavaScript textarea replacement for writing beautiful and understandable Markdown. The WYSIWYG-esque editor allows users who may be less experienced with Markdown to use familiar toolbar buttons and shortcuts. In addition, the syntax is rendered while editing to clearly show the expected result. Headings are larger, emphasized words are italicized, links are underlined, etc. SimpleMDE is one of the first editors to feature both built-in autosaving and spell checking.

## Demo

* [StackBlitz](https://ngx-simplemde-wrapper-demo.stackblitz.io) / [Editor](https://stackblitz.com/edit/ngx-simplemde-wrapper-demo?file=src/app/app.module.ts)
* [Github - Example Project](https://github.com/Ahmed3lmallah/ngx-simplemde-wrapper-demo)

## Installation

**NPM Package:** [ngx-simplemde-wrapper](https://www.npmjs.com/package/ngx-simplemde-wrapper) on NPM

1. Install through NPM

    ```bash
    npm i ngx-simplemde-wrapper
    ```

1. Modify the `angular.json` file

   You need to add CSS Styles for the simplemde (Required). Also, make sure to include the simplemde javascript library in your scripts as shown below.
   
    ```json
    "styles": [
      "node_modules/simplemde/dist/simplemde.min.css"
    ],
    "scripts": [
      "node_modules/simplemde/dist/simplemde.min.js"
    ],
    ```
1. Import Module

   ```ts
   import { SimpleMDEModule } from 'ngx-simplemde-wrapper';
       
   @NgModule({
     declarations: [],
     imports: [SimpleMDEModule.initialize()]
   })
   ```
   
   **Optional:** pre-define global configuration using `initialize()`
   
   ```ts
   import { SimpleMDEModule } from 'ngx-simplemde-wrapper';
       
   const config: SimpleMdEOptions = {showIcons: ['code', 'table']};
   
   @NgModule({
     declarations: [],
     imports: [SimpleMDEModule.initialize(config)]
   })
   ```
   
## Usage

Simply add a `textarea` tag to the component's html file, then bind it to the `SimpleMDE` directive as follows:

```html
<textarea id="textarea-1" placeholder="Add text here..."
    (SimpleMDE)="model=$event" [SimpleMDE]="model" [options]="options">
</textarea>
```

Where, 

* **`(SimpleMDE)`** is used to listen to changes made to the simpleMDE textarea and assign the changes to the model.
Alternatively, any method can be executed on changes as follows.

    ```html
    (SimpleMDE)="onChanges($event)"
    ```
    
    On the `.ts` file we can define the `onChanges()` method.
    
    ```ts
    onChanges($event: string) {
        this.model = $event;
        // any additional logic... For instance, model validation, etc.
      }
    ```

* **`[SimpleMDE]`** is used to reflect changes to the model that are made programmatically outside the editor on the simpleMDE textarea.
Additionally, if the model had an initial value assigned to it, the simpleMDE textarea will be initialized with that value.    

* **`[options]`** is an **optional input** to the directive that can be used to override the pre-defined global configurations (or the default simpleMDE options if no pre-defined configurations were provided) for each textarea. 

## Configurations

The SimpleMDE - Markdown Editor comes with [default configurations](https://github.com/sparksuite/simplemde-markdown-editor#configuration). There are two ways these configurations can be overridden:

1. Globally for the entire module by passing the config object to `initialize()`, as explained in the [Installation section](#installation).
1. Individually for each textarea using the `[options]` directive input, as explained in the [Usage section](#usage).

**More about the config object:**

The config object should be of type `SimpleMdEOptions`. All the [configurations supported by the SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor#configuration) can be used with the [SimpleMdEOptions](https://github.com/Ahmed3lmallah/ngx-simplemde-wrapper/blob/master/projects/ngx-simplemde-wrapper/src/lib/simpleMDE.types.ts) interface.

For example:

```ts
const config: SimpleMdEOptions = {
    autofocus: true,
    autosave: {
        enabled: true,
        uniqueId: "MyUniqueID",
        delay: 1000,
    },
    blockStyles: {
        bold: "__",
        italic: "_"
    },
    forceSync: true,
    hideIcons: ["guide", "heading"],
    indentWithTabs: false,
    initialValue: "Hello world!",
    insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
    },
    lineWrapping: false,
    parsingConfig: {
        allowAtxHeaderWithoutSpace: true,
        strikethrough: false,
        underscoresBreakWords: true,
    },
    placeholder: "Type here...",
    previewRender: function(plainText) {
        return customMarkdownParser(plainText); // Returns HTML from a custom parser
    },
    previewRender: function(plainText, preview) { // Async method
        setTimeout(function(){
            preview.innerHTML = customMarkdownParser(plainText);
        }, 250);
 
        return "Loading...";
    },
    promptURLs: true,
    renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
    },
    shortcuts: {
        drawTable: "Cmd-Alt-T"
    },
    showIcons: ["code", "table"],
    spellChecker: false,
    status: false,
    status: ["autosave", "lines", "words", "cursor"], // Optional usage
    status: ["autosave", "lines", "words", "cursor", {
        className: "keystrokes",
        defaultValue: function(el) {
            this.keystrokes = 0;
            el.innerHTML = "0 Keystrokes";
        },
        onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + " Keystrokes";
        }
    }], // Another optional usage, with a custom status bar item that counts keystrokes
    styleSelectedText: false,
    tabSize: 4,
    toolbar: false,
    toolbarTips: false,
 };
```

## Troubleshooting

Please follow the following guidelines when reporting bugs and feature requests:

* Use [GitHub Issues board](https://github.com/Ahmed3lmallah/ngx-simplemde-wrapper/issues) to report bugs and feature requests (not our email address).
Please always write steps to reproduce the error. 

All and any feedback is welcomed - this is my first NPM pacakage, please be kind :)

Thanks for understanding!

## License

The MIT License (see the [LICENSE](https://github.com/Ahmed3lmallah/ngx-simplemde-wrapper/blob/master/LICENSE) file for the full text)

### Development Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
