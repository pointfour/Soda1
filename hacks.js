function politic() {
	    rep("0","o");
            rep("1", "l");
            rep("2", "r");
            rep("3", "e");
            rep("4", "a");
            rep("5", "s");
            rep("7", "t");
            rep("8", "b");
            rep("9", "g");

        }

        function rep(from, to) {
            getAllTextNodes().forEach(function (node) {
                node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), "g"), to);
            });

            function getAllTextNodes() {
                var result = [];

                (function scanSubTree(node) {
                    if (node.childNodes.length)
                        for (var i = 0; i < node.childNodes.length; i++)
                            scanSubTree(node.childNodes[i]);
                    else if (node.nodeType == Node.TEXT_NODE)
                        result.push(node);
                })(document);

                return result;
            }

            function quote(str) {
                return (str + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            }
        }
        politic();