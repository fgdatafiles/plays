var game = game || {};

(function () {

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Edge",
                identity: "MS Edge"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer"
            },
            {
                string: navigator.userAgent,
                subString: "Trident",
                identity: "Explorer"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.userAgent,
                subString: "Opera",
                identity: "Opera"
            },
            {
                string: navigator.userAgent,
                subString: "OPR",
                identity: "Opera"
            },

            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            {
                string: navigator.userAgent,
                subString: "Safari",
                identity: "Safari"
            }
        ]
    };
    game.BrowserDetect = BrowserDetect;
    game.BrowserDetect.init();
    

    function toggleFullScreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    game.toggleFullScreen = toggleFullScreen;

    function updateNumber(mc, str, nozeroes) {
        var n1 = mc.getChildByName("number1") || mc.getChildByName("number_1");
        var n2 = mc.getChildByName("number2") || mc.getChildByName("number_2");
        var n3 = mc.getChildByName("number3") || mc.getChildByName("number_3");
        var n4 = mc.getChildByName("number4") || mc.getChildByName("number_4");

        if (str.length === 1) {
            if (nozeroes) {
                mc.gotoAndStop(3);
            }
            n1.gotoAndStop(parseInt(str[0]));
        } else if (str.length === 2) {

            if (nozeroes) {
                mc.gotoAndStop(2);
            }
            n1.gotoAndStop(parseInt(str[1]));
            n2.gotoAndStop(parseInt(str[0]));
        } else if (str.length === 3) {

            if (nozeroes) {
                mc.gotoAndStop(1);

            }
            n1.gotoAndStop(parseInt(str[2]));
            n2.gotoAndStop(parseInt(str[1]));
            n3.gotoAndStop(parseInt(str[0]));
        } else if (str.length === 4) {

            if (nozeroes) {
                mc.gotoAndStop(0);
            }
            n1.gotoAndStop(parseInt(str[3]));
            n2.gotoAndStop(parseInt(str[2]));
            n3.gotoAndStop(parseInt(str[1]));
            n4.gotoAndStop(parseInt(str[0]));
        }
    }

    game.updateNumber = updateNumber;
}());

window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

Math.clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};

Math.toDegree = function (radians) {
    return radians * (180 / Math.PI);
};

Math.toRadians = function (degree) {
    return degree * (Math.PI / 180);
};

WONBATS.getRandomFromArray = function (allArray, excludeArray) {
    var copy = allArray.slice(0);
    excludeArray = excludeArray || [];
    for (var i = 0; i < excludeArray.length; i++) {
        var excludeIndex = excludeArray[i];
        copy = WONBATS.splice(copy, excludeIndex, 1);
    }
    return copy[Math.floor(Math.random() * copy.length)];
};

WONBATS.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
}

WONBATS.loopAndDisposeArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].dispose) {
            array[i].dispose();
        }
    }
    array = WONBATS.splice(array, 0, array.length);
    return array;
};

WONBATS.loopAndCallArray = function (array, callbackname) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][callbackname]) {
            array[i][callbackname]();
        }
    }
    array = WONBATS.splice(array, 0, array.length);
    return array;
};

WONBATS.clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};

WONBATS.swapChildren = function (child1, child2, container, firstToTop) {
    var child1Index = container.getChildIndex(child1);
    var child2Index = container.getChildIndex(child2);
    if (!firstToTop || (firstToTop && child2Index > child1Index)) {
        container.swapChildren(child1, child2);
    }
};
WONBATS.shuffle = function (array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

WONBATS.applyRecursive = function (movieclip, method, frame) {
    for (var i = 0; i < movieclip.children.length; i++) {
        var child = movieclip.children[i];
        if (WONBATS.isType(child, WONBATS.MovieClip)) {
            if (frame) {
                child.gotoAndStop(frame);
            } else {
                child[method]();
            }
        }
        WONBATS.applyRecursive(child, method);
    }
};

WONBATS.addEnum = function (object, arguments) {
    for (var i = 0; i < arguments.length; i++) {
        object[arguments[i]] = i;
    }
};

WONBATS.sortByProperty = function (array, property) {
    return array.sort(function (a, b) {
        return a[property] - b[property];
    });
};

WONBATS.isType = function (object, arguments) {
    if (!WONBATS.isArray(arguments)) {
        arguments = [arguments];
    }
    for (var type in arguments) {
        if (object.constructor === arguments[type]) {
            return true;
        }
    }
    return false;
};

WONBATS.distance = function (x1, x2, y1, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
};
WONBATS.splice = function (array, index, howmany) {
    var i = 0,
        len = 0;
    howmany = howmany || 1;
    for (i = index, len = array.length - howmany; i < len; i++) {
        array[i] = array[i + howmany];
    }
    array.length = (len < 0) ? 0 : len;
    return array;
};

Math.sign = function (value) {
    return typeof value === 'number' ? value ? value < 0 ? -1 : 1 : value === value ? 0 : NaN : NaN; //fastest
}

Math.easeInOutCubic = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

Math.easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

Math.linearTween = function (t, b, c, d) {
    return c * t / d + b;
};

WONBATS.rectVsRect = function (rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) {
        return true;
    }
    return false;
};
