(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.EmojiPicker = f()
    }
})(function () {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function (require, module, exports) {
            (function (global, factory) {
                if (typeof define === "function" && define.amd) {
                    define(["module"], factory);
                } else if (typeof exports !== "undefined") {
                    factory(module);
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod);
                    global.emojiPicker = mod.exports;
                }
            })(this, function (module) {
                "use strict";

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var EmojiPicker = function () {
                    function EmojiPicker() {
                        _classCallCheck(this, EmojiPicker);

                        this.initiate();
                    }

                    _createClass(EmojiPicker, [{
                        key: "initiate",
                        value: function initiate() {
                            var _this = this;

                            var emojiInputs = document.querySelectorAll('[data-emoji-picker="true"]');

                            emojiInputs.forEach(function (element) {
                                _this.generateElements(element);
                            });
                        }
                    }, {
                        key: "generateElements",
                        value: function generateElements(emojiInput) {
                            var clickLink = function clickLink(event) {
                                var caretPos = emojiInput.selectionStart;
                                emojiInput.value = emojiInput.value.substring(0, caretPos) + " " + event.target.innerHTML + emojiInput.value.substring(caretPos);
                                emojiPicker.style.display = "none";

                                //trigger ng-change for angular
                                if (typeof angular !== "undefined") {
                                    angular.element(emojiInput).triggerHandler("change");
                                }
                            };

                            emojiInput.style.width = "100%";

                            var emojiContainer = document.createElement("div");
                            emojiContainer.style.position = "relative";

                            var parent = emojiInput.parentNode;
                            parent.replaceChild(emojiContainer, emojiInput);
                            emojiContainer.appendChild(emojiInput);

                            var emojiPicker = document.createElement("div");
                            emojiPicker.tabIndex = 0;

                            emojiPicker.addEventListener("blur", function (event) {
                                emojiPicker.style.display = "none";
                            }, false);

                            emojiPicker.style.position = "absolute";
                            emojiPicker.style.right = "2px";
                            emojiPicker.style.outline = "none";
                            emojiPicker.style.top = "-210px";
                            emojiPicker.style.zIndex = "999";
                            emojiPicker.style.display = "none";
                            emojiPicker.style.width = "300px";
                            emojiPicker.style.height = "200px";
                            emojiPicker.style.padding = "7px 7px 7px 7px";
                            emojiPicker.style.marginTop = "5px";
                            emojiPicker.style.overflowY = "auto";
                            emojiPicker.style.background = "#fff";
                            emojiPicker.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
                            emojiPicker.style.borderRadius = "10px;";

                            var emojiTrigger = document.createElement("a");
                            emojiTrigger.style.position = "absolute";
                            emojiTrigger.style.top = "8px";
                            emojiTrigger.style.right = "10px";
                            emojiTrigger.style.textDecoration = "none";
                            emojiTrigger.setAttribute("href", "javascript:void(0)");
                            emojiTrigger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>';
                            emojiTrigger.onclick = function () {
                                if (emojiPicker.style.display === "none") {
                                    emojiPicker.style.display = "block";
                                }
                                emojiPicker.focus();
                            };

                            emojiContainer.appendChild(emojiTrigger);

                            var emojiList = document.createElement("ul");
                            emojiList.style.padding = "0";
                            emojiList.style.margin = "0";
                            emojiList.style.listStyle = "none";

                            var emojis = [
                                0x1F600, 0x1F601, 0x1F602, 0x1F603, 0x1F604, 0x1F605, 0x1F606, 0x1F607, 0x1F608, 0x1F609, 0x1F60A, 0x1F60B, 0x1F60E, 0x1F60D,
                                0x1F618, 0x1F617, 0x1F619, 0x1F61A, 0x1F642, 0x1F917, 0x1F929, 0x1F914, 0x1F928, 0x1F610, 0x1F611, 0x1F636, 0x1F644, 0x1F60F,
                                0x1F623, 0x1F625, 0x1F62E, 0x1F910, 0x1F62F, 0x1F62A, 0x1F62B, 0x1F634, 0x1F60C, 0x1F61B, 0x1F61C, 0x1F61D, 0x1F924, 0x1F612,
                                0x1F613, 0x1F614, 0x1F615, 0x1F643, 0x1F911, 0x1F632
                            ];

                            emojis.map(function (item) {
                                var emojiLi = document.createElement("li");
                                emojiLi.style.display = "inline-block";
                                emojiLi.style.margin = "5px";

                                var emojiLink = document.createElement("a");
                                emojiLink.style.textDecoration = "none";
                                emojiLink.style.margin = "5px";
                                emojiLink.style.position = "initial";
                                emojiLink.style.fontSize = "16px";
                                emojiLink.setAttribute("href", "javascript:void(0)");
                                emojiLink.innerHTML = String.fromCodePoint(item);
                                emojiLink.onmousedown = clickLink;

                                emojiList.appendChild(emojiLink);
                            });

                            emojiPicker.appendChild(emojiList);
                            emojiContainer.appendChild(emojiPicker);
                        }
                    }]);

                    return EmojiPicker;
                }();

                module.exports = EmojiPicker;
            });

        }, {}]
    }, {}, [1])(1)
});