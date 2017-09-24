function politic() {
            rep("1", "1");
            rep("2", "e");
            rep("3", "2");
            rep("4", "4");
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