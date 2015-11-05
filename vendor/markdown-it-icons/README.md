# markdown-it-icons

Emoji icons, Font awesome icons and Ionicons icons for markdown-it.


## Install

`bower install markdown-it-icons`


## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/emojione/1.5.1/assets/css/emojione.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/fontawesome/4.4.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/ionicons/2.0.1/css/ionicons.min.css">
<script src="https://cdn.jsdelivr.net/markdown-it/5.0.0/markdown-it.min.js"></script>
<script src="https://cdn.jsdelivr.net/emojione/1.5.1/lib/js/emojione.min.js"></script>
<script src="dist/markdown-it-icons.min.js"></script>
```

```javascript
window.mdc = window.markdownit();
mdc.use(window.markdownitIcons);
emojione.cacheBustParam = ''; // change this to invalidate emojione icons cache
emojione.imagePathPNG = 'https://cdn.jsdelivr.net/emojione/assets/png/';
mdc.renderer.rules.emoji = function(token, idx) {
  var shortname = token[idx].markup;
  if(shortname.startsWith('fa-')) { // fontawesome
    return '<i class="fa ' + shortname + '"></i>';
  }
  if(shortname.startsWith('ion-')) { // ionicons
    return '<i class="' + shortname + '"></i>';
  }
  return emojione.shortnameToImage(':' + shortname + ':'); // emojione
};
```


## Syntax

### Emoji icons

`:panda_face:`


### Font awesome icons

`:fa-cog:`


### Ionicons icons

`:ion-social-tux:`


## License

MIT
