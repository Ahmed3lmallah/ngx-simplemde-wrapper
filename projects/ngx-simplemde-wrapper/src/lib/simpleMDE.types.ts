/*
 * SimpleMDE Configurations:
 * https://github.com/sparksuite/simplemde-markdown-editor#configuration
 */
export interface SimpleMdEOptions {
  // If set to true, force downloads Font Awesome (used for icons).
  // If set to false, prevents downloading.
  // Defaults to undefined, which will intelligently check whether Font Awesome has already been included, then download accordingly.
  autoDownloadFontAwesome?: boolean;
  // If set to true, autofocuses the editor. Defaults to false.
  autofocus?: boolean;
  // Saves the text that's being written and will load it back in the future.
  // It will forget the text when the form it's contained in is submitted.
  // Example: {
  // 		enabled: true,
  // 		uniqueId: "MyUniqueID",
  // 		delay: 1000,
  // 	}
  autosave?: AutosaveOptions;
  // Customize how certain buttons that style blocks of text behave.
  // Example: {
  // 		bold: "__",
  // 		italic: "_"
  // 	}
  blockStyles?: BlockStylesOptions;
  // Strictly used by the directive - shouldn't be provided as a custom option
  // The DOM element for the textarea to use. Defaults to the first textarea on the page.
  element?: any;
  // If set to true, force text changes made in SimpleMDE to be immediately stored in original textarea. Defaults to false.
  forceSync?: boolean;
  // An array of icon names to hide. Can be used to hide specific icons shown by default without completely customizing the toolbar.
  // Example: ["guide", "heading"],
  hideIcons?: any;
  // If set to false, indent using spaces instead of tabs. Defaults to true.
  indentWithTabs?: boolean;
  // If set, will customize the initial value of the editor.
  initialValue?: string;
  // Customize how certain buttons that insert text behave. Takes an array with two elements.
  // The first element will be the text inserted before the cursor or highlight, and the second element will be inserted after.
  // For example: {
  // 		horizontalRule: ["", "\n\n-----\n\n"],
  // 		image: ["![](http://", ")"],
  // 		link: ["[", "](http://)"],
  // 		table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
  // 	}
  insertTexts?: any;
  // If set to false, disable line wrapping. Defaults to true.
  lineWrapping?: boolean;
  // Adjust settings for parsing the Markdown during editing (not previewing).
  // For Example: {
  // 		allowAtxHeaderWithoutSpace: true,
  // 		strikethrough: false,
  // 		underscoresBreakWords: true,
  // 	}
  parsingConfig?: ParsingConfig;
  // Custom placeholder that should be displayed
  placeholder?: string;
  // Custom function for parsing the plaintext Markdown and returning HTML. Used when user previews.
  previewRender?: any;
  // If set to true, a JS alert window appears asking for the link or image URL. Defaults to false.
  promptURLs?: boolean;
  // Adjust settings for parsing the Markdown during previewing (not editing).
  // For Example: {
  // 		singleLineBreaks: false,
  // 		codeSyntaxHighlighting: true,
  // 	}
  renderingConfig?: RenderingConfig;
  // Keyboard shortcuts associated with this instance. Defaults to the array of shortcuts.
  // Reference: https://github.com/sparksuite/simplemde-markdown-editor#keyboard-shortcuts
  shortcuts?: any;
  // An array of icon names to show. Can be used to show specific icons hidden by default without completely customizing the toolbar.
  // For Example: ["code", "table"]
  showIcons?: string[];
  // If set to false, disable the spell checker. Defaults to true.
  spellChecker?: boolean;
  // If set to false, hide the status bar. Defaults to the array of built-in status bar items.
  // Optionally, you can set an array of status bar items to include, and in what order: ["autosave", "lines", "words", "cursor"]
  // You can even define your own custom status bar items: ["autosave", "lines", "words", "cursor", {
  // 		className: "keystrokes",
  // 		defaultValue: function(el) {
  // 			this.keystrokes = 0;
  // 			el.innerHTML = "0 Keystrokes";
  // 		},
  // 		onUpdate: function(el) {
  // 			el.innerHTML = ++this.keystrokes + " Keystrokes";
  // 		}
  // 	}], // Another optional usage, with a custom status bar item that counts keystrokes
  status?: any;
  // If set to false, remove the CodeMirror-selectedtext class from selected lines. Defaults to true.
  styleSelectedText?: boolean;
  // If set, customize the tab size. Defaults to 2.
  tabSize?: number;
  // If set to false, hide the toolbar. Defaults to the array of icons.
  // Optionally, you can set an array of toolbar items to include, and in what order: ["bold", "italic", "heading", "|", "quote"]
  // You can even define your own custom toolbar items: [{
  // 			name: "bold",
  // 			action: SimpleMDE.toggleBold,
  // 			className: "fa fa-bold",
  // 			title: "Bold",
  // 		},
  // 		{
  // 			name: "custom",
  // 			action: function customFunction(editor){
  // 				// Add your own code
  // 			},
  // 			className: "fa fa-star",
  // 			title: "Custom Button",
  // 		},
  // 		"|", // Separator
  // 		...
  // 	]
  toolbar?: any;
  // If set to false, disable toolbar button tips. Defaults to true.
  toolbarTips?: boolean;
}

export interface AutosaveOptions {
  // If set to true, autosave the text. Defaults to false.
  enabled?: boolean;
  // Delay between saves, in milliseconds. Defaults to 10000 (10s).
  delay?: number;
  // You must set a unique string identifier so that SimpleMDE can autosave.
  // Something that separates this from other instances of SimpleMDE elsewhere on your website.
  uniqueId?: string;
}

export interface BlockStylesOptions {
  // bold Can be set to ** or __. Defaults to **.
  bold?: string;
  // code Can be set to ``` or ~~~. Defaults to ```.
  code?: string;
  // italic Can be set to * or _. Defaults to *.
  italic?: string;
}

export interface ParsingConfig {
  // If set to true, will render headers without a space after the #. Defaults to false.
  allowAtxHeaderWithoutSpace?: boolean;
  // If set to false, will not process GFM strikethrough syntax. Defaults to true.
  strikethrough?: boolean;
  // If set to true, let underscores be a delimiter for separating words. Defaults to false.
  underscoresBreakWords?: boolean;
}

export interface RenderingConfig {
  // If set to false, disable parsing GFM single line breaks. Defaults to true.
  singleLineBreaks?: boolean;
  // If set to true, will highlight using highlight.js.
  // Defaults to false. To use this feature you must include highlight.js on your page.
  codeSyntaxHighlighting?: boolean;
}
