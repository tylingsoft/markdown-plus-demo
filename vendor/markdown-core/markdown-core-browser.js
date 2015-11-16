// this file contains code which requires browser, thus not compatible with node.js


// mermaid charts
mermaid.ganttConfig = {
  axisFormatter: [
    ["%-m/%-d", function (d) {
        return d.getDay() == 1;
    }]
  ]
};
mermaid.parseError = function(err, hash){
  mdc.mermaidError = err;
};
mdc.mermaid_charts = function(code, line) {
  if(code.startsWith('sequenceDiagram')) {
    code += '\n'; // append empty line to the end, otherwise syntax error. It's a bug of mermaid.
  }
  if(mermaid.parse(code)) {
    return '<div data-source-line="' + line + '" class="mermaid">' + code + '</div>';
  } else {
    return '<pre data-source-line="' + line + '">' + mdc.mermaidError + '</pre>';
  }
}


mdc.init = function(markdown, debug) {
	var result = mdc.render(markdown);
	if(debug === true) {
	  console.log(result);
	}
    $('article.markdown-body').html(result);
    if($('.mermaid').length > 0) {
      mermaid.init();
    }
}
