# React Native

### More on Flexbox

React Native uses Flexbox to position elements and create layouts. It also uses a set of CSS properties you can use to style your elements.

One important thing to note is, that it uses Flexbox and these properties but that it doesn't really use CSS! You don't write real CSS code here, you still write everything in JavaScript.

Not even close to all CSS properties and features are supported therefore.

If you want to get a full list about the supported properties, the following cheat sheet will be useful to you: <a href="https://github.com/vhpoet/react-native-styling-cheat-sheet">https://github.com/vhpoet/react-native-styling-cheat-sheet</a>

If you want to learn more about Flexbox, don't miss this awesome article: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a>

### UseFull Resources

<ul>
<li>Understand the Basics: <a href="https://github.com/react-community/create-react-native-app">https://github.com/react-community/create-react-native-app</a></li>
<li>Understand Flexbox: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a></li>
<li>More about images: <a href="https://facebook.github.io/react-native/docs/images.html">https://facebook.github.io/react-native/docs/images.html</a>
</li>
</ul>

### Debugging React Native

<ul>
<li>React Native Debugger:<a href="https://github.com/jhen0409/react-native-debugger"> https://github.com/jhen0409/react-native-debugger</a>
</li><li>More about Debugging:<a href="https://facebook.github.io/react-native/docs/debugging.html"> https://facebook.github.io/react-native/docs/debugging.html</a>
</li>
</ul>

### vAutomatic Linking
a lot of libraries take some extra steps during the linking process which can't be automated.

For libraries that don't require such extra steps, there is an automated way of linking available though.

You'll need to install an extra package: 

```
react-native-cli
``` 

It's actually installed locally in your project already but if you want to run commands with it, you need to install it globally.

Install it globally via 
```
npm install -g react-native-cli 
```
Thereafter, in your project folder, you can run 
```
react-native link 
```
 to automatically link all libraries that require linking.

Important: ALWAYS check the docs (e.g. on the Github repo page) of the library you're using! You definitely have to ensure that no additional steps are required!