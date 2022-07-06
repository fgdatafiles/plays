/* global define, console */

/**
 * @name Vector2d
 * @type {{x: Number, y: Number}}
 */
/**
 * @name Vector3d
 * @type {{x: Number, y: Number, z: Number}}
 */

/**
 * Contains functions that perform geometry calculations.
 */
define(['./util', './assert'], function(util, assert) {
  'use strict';
  var exports = {

    /**
     * Projects a world position into screen space in one-point perspective,
     * given a camera's position and rotation around the x axis.
     * Y-axis is up.
     *
     * @param {Vector3d} worldPos
     * @param {Vector3d} cameraPos
     * @param {Number} eulerX
     * @returns {Vector2d[]}
     */
    doOnePtProjection: function(worldPos, cameraPos, eulerX) {
      var X = worldPos.x - cameraPos.x;
      var Y = worldPos.y - cameraPos.y;
      var Z = worldPos.z - cameraPos.z;

      var cx = Math.cos(eulerX);
      var sx = Math.sin(eulerX);

      var dX = X;
      var dY = sx * Z + cx * Y;
      var dZ = cx * Z - sx * Y;

      // then transform to screen space
      var screenX = (cameraPos.z / dZ) * dX;
      var screenY = (cameraPos.z / dZ) * dY - cameraPos.y;

      if (isNaN(screenX) || isNaN(screenY)) {
        console.error('projection result NaN');
      }

      return [screenX, screenY];
    },

    /**
     *  Returns the rotation (in degrees) that a sprite normally facing to the
     *  right should be assigned to face the direction (x,y).
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {number}
     */
    vecToRotation: function(x, y) {
      if (x === 0 && y === 0) {
        return 0;
      }

      return -1 * (Math.atan2(x, y) * (180 / Math.PI) - 90);
    },

    /**
     * Returns the vector {x, y} representing the specified angle and radius.
     *
     * @param {number} theta
     * @param {number} [r=1]
     * @returns {{x: number, y: number}}
     */
    rotationToVec: function(theta, r) {
      r = r || 1;

      return {
        x: r * Math.cos(theta * (Math.PI / 180)),
        y: r * Math.sin(theta * (Math.PI / 180))
      };
    },

    /**
     * Returns a normalized vector.
     *
     * @param {Vector2d} vec
     * @returns {{x: number, y: number}}
     */
    vecNormalize: function(vec) {
      var mag = exports.vecGetMagnitude(vec);
      return {
        x: vec.x / mag,
        y: vec.y / mag
      };
    },

    vecGetMagnitudeSquared: function(vec) {
      return vec.x * vec.x + vec.y * vec.y;
    },

    /**
     * Returns the magnitude of the vector.
     *
     * @param {{x: Number, y: Number}} vec
     * @returns {number}
     */
    vecGetMagnitude: function(vec) {
      return Math.sqrt((vec.x * vec.x) + (vec.y * vec.y));
    },

    /**
     * Returns a new vector in the same direction of vec with the specified
     * magnitude.
     *
     * @param {{x: Number, y: Number}} vec
     * @param {Number} magnitude
     * @returns {Vector2d}
     */
    vecSetMagnitude: function(vec, magnitude) {
      var norm = this.vecNormalize(vec);
      return {
        x: norm.x * magnitude,
        y: norm.y * magnitude
      };
    },

    /**
     * Returns a new vector rotated 90 degrees clockwise from the input vector.
     *
     * @param {Vector2d} vec
     * @returns {Vector2d}
     */
    vecRotateCw90: function(vec) {
      //noinspection JSSuspiciousNameCombination
      return {
        x: -vec.y,
        y: vec.x
      };
    },

    /**
     * Returns a new vector rotated 90 degrees counterclockwise from the input
     * vector.
     *
     * @param {Vector2d} vec
     * @returns {Vector2d}
     */
    vecRotateCcw90: function(vec) {
      //noinspection JSSuspiciousNameCombination
      return {
        x: vec.y,
        y: -vec.x
      };
    },

    /**
     * returns the point {x, y} at the geometric center of a polygon
     * [{x, y}, {x, y}, ...].
     *
     * @param {Vector2d[]} polygon
     * @returns {Vector2d}
     */
    getPolygonCentroid: function(polygon) {
      var n = polygon.length;

      // check for degenerate cases
      if (n <= 0) {
        console.error('invalid polygon passed to getPolygonCentroid');
      } else if (n === 1) {
        return polygon[0];
      } else if (n === 2) {
        return {
          x: (polygon[0].x + polygon[1].x) / 2,
          y: (polygon[0].y + polygon[1].y) / 2
        };
      }

      var area = exports.getPolygonArea(polygon);

      // add areas and compute bounding box
      var xmin = Infinity;
      var xmax = -Infinity;
      var ymin = Infinity;
      var ymax = -Infinity;

      var subtotalX = 0;
      var subtotalY = 0;
      for (var ii = 0; ii < n; ii++) {
        var A = polygon[ii];
        var B = polygon[(ii + 1) % n];
        var triArea = A.x * B.y - B.x * A.y;
        subtotalX += (A.x + B.x) * triArea;
        subtotalY += (A.y + B.y) * triArea;

        xmin = Math.min(xmin, A.x);
        xmax = Math.max(xmax, A.x);
        ymin = Math.min(ymin, A.y);
        ymax = Math.max(ymax, A.y);
      }

      var leftSide = 1 / (6 * area);
      var pt = {
        x: leftSide * subtotalX,
        y: leftSide * subtotalY
      };

      // if pt is not in bounds, then the pts were probably ccw instead of cw.
      // negate it to get the correct value
      var inXBounds = (xmin < pt.x) && (pt.x < xmax);
      var inYBounds = (ymin < pt.y) && (pt.y < ymax);
      if (!(inXBounds && inYBounds)) {
        pt = {x: -pt.x, y: -pt.y};
      }

      if (isNaN(pt.x) || isNaN(pt.y)) {
        console.warn('getPolygonCentroid: centroid is NaN.');
        console.log(polygon);
      }

      return pt;
    },

    /**
     * Get the positive area of a polygon [{x, y}, {x, y}, ...].
     *
     * @param {Vector2d[]} polygon
     * @returns {number}
     */
    getPolygonArea: function(polygon) {
      // find polygon area by summing up areas of triangles inside polygon.
      var n = polygon.length;
      var subtotal = 0;
      for (var ii = 0; ii < n; ii++) {
        var jj = (ii + 1) % n;
        var A = polygon[ii];
        var B = polygon[jj];
        subtotal += (A.x * B.y - A.y * B.x);
      }

      return Math.abs(0.5 * subtotal);
    },

    /* test if a point {x, y} is inside a polygon [{x, y}, {x, y}, ...]. */
    testPointInPolygon: function(polygon, point) {
      // implementation based on C code from http://alienryderflex.com/polygon/
      var polyCorners = polygon.length;
      var P = point;

      var ii; // "this" polygon point
      var jj = polyCorners - 1; // "previous" polygon point
      var isNodeCountOdd = false;

      for (ii = 0; ii < polyCorners; ii++) {
        var A = polygon[ii];
        var B = polygon[jj];

        // check for a node on this side crossing the y threshold of the point
        if (A.y < P.y && B.y >= P.y || B.y < P.y && A.y >= P.y) {

          // is this node on the left side of the point?
          if (A.x + (P.y - A.y) / (B.y - A.y) * (B.x - A.x) < P.x) {
            isNodeCountOdd = !isNodeCountOdd;
          }
        }

        jj = ii;
      }

      return isNodeCountOdd;
    },

    /**
     * Test if the circular shell, centered at {cx, cy},
     * with inner radius r1 and outer radius r2,
     * spanning between the angles ct1 and ct2,
     * intersects the point {px, py}
     *
     * @param {number} cx
     * @param {number} cy
     * @param {number} r1
     * @param {number} r2
     * @param {number} ct1
     * @param {number} ct2
     * @param {number} px
     * @param {number} py
     * @returns {boolean}
     */
    circleShellPointHitTest: function(cx, cy, r1, r2, ct1, ct2, px, py) {
      // make sure angles are in valid range.
      if (ct1 > 360) {
        ct1 %= 360;
      }

      if (ct2 > 360) {
        ct2 %= 360;
      }

      var dist = exports.distance(cx, cy, px, py);
      var distTest = (r1 <= dist) && (dist <= r2);

      if (distTest) {
        var angle = exports.getAngleBetweenPoints(cx, cy, px, py);
        return exports.isAngleBetween(angle, ct1, ct2);
      }

      return false;
    },

    /**
     * Returns the point where the line crossing l1 and l2 intersects
     * the line crossing l3 and l4. If no intersection exists, returns null.
     *
     * @param {Vector2d}  l1
     * @param {Vector2d}  l2
     * @param {Vector2d} l3
     * @param {Vector2d}  l4
     * @returns {Vector2d | null}
     */
    getLineLineIntersectionPoint: function(l1, l2, l3, l4) {
      // see wikipedia for an explanation of this formula:
      // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection

      // if the denominator is 0 then the lines are parallel
      var bottom = (l1.x - l2.x) * (l3.y - l4.y) -
        (l1.y - l2.y) * (l3.x - l4.x);

      if (bottom === 0) {
        return null;
      } else {
        var x = ((l1.x * l2.y - l1.y * l2.x) * (l3.x - l4.x) -
          (l1.x - l2.x) * (l3.x * l4.y - l3.y * l4.x)) / bottom;
        var y = ((l1.x * l2.y - l1.y * l2.x) * (l3.y - l4.y) -
          (l1.y - l2.y) * (l3.x * l4.y - l3.y * l4.x)) / bottom;
        return {x: x, y: y};
      }
    },

    /**
     * Returns info about the point where the line crossing l1 and l2
     * intersects the line segment from s1 to s2 (inclusive).
     * If no intersection exists on the segment, returns null.
     *
     * @param {Vector2d} l1
     * @param {Vector2d} l2
     * @param {Vector2d} s1
     * @param {Vector2d} s2
     * @returns {Vector2d | null}
     */
    getInfoSegmentLineIntersectionPoint: function(l1, l2, s1, s2) {
      var intersect = exports.getLineLineIntersectionPoint(l1, l2, s1, s2);

      // since we're comparing floating points, define an epsilon value and
      // related operations.
      var E = exports.Epsilon;

      if (intersect !== null) {

        var t;
        if (E.eq(l2.x, l1.x)) {
          t = (intersect.y - l1.y) / (l2.y - l1.y);
        } else {
          t = (intersect.x - l1.x) / (l2.x - l1.x);
        }

        var loX = Math.min(s1.x, s2.x);
        var hiX = Math.max(s1.x, s2.x);
        var xBetween = (E.lte(loX, intersect.x) && E.lte(intersect.x, hiX)) ||
          E.eq(loX, hiX);

        var loY = Math.min(s1.y, s2.y);
        var hiY = Math.max(s1.y, s2.y);
        var yBetween = (E.lte(loY, intersect.y) && E.lte(intersect.y, hiY)) ||
          E.eq(loY, hiY);

        if (xBetween && yBetween) {
          return {
            t: t,
            pt: intersect
          };
        }
      }

      // else, lines are parallel, or intersect is not on segment
      return null;
    },

    /**
     * Returns info about the point closest to p on any edge of the polygon.
     *
     * @param {Vector2d[]} polygon
     * @param {Vector2d} p
     * @returns {*}
     */
    getInfoClosestPolygonPoint: function(polygon, p) {
      // iterate through each edge of the polygon and pick the one with
      // the smallest distance.

      // make sure polygon is an array with at least 3 points
      var polygonDataTest = [
        polygon[0].x,
        polygon[0].y,
        polygon[1].x,
        polygon[1].y,
        polygon[2].x,
        polygon[2].y
      ];
      if (!assert.saneData(polygonDataTest)) {
        console.error('invalid polygon data passed to ' +
          'getInfoClosestPolygonPoint');
        return null;
      }

      var _ptSqrDist = function(p1, p2) {
        return exports.sqrDistance(p1.x, p1.y, p2.x, p2.y);
      };

      var closestPt;
      var minSqrDist = Infinity;
      var closestEdgeIndex = -1;

      var ii;
      var jj = polygon.length - 1;

      for (ii = 0; ii < polygon.length; ii++) {
        var A = polygon[ii];
        var B = polygon[jj];

        // consider the point from edge AB
        var thisPt = exports.getClosestEdgePoint(A, B, p);
        var thisSqrDist = _ptSqrDist(thisPt, p);

        if (thisSqrDist < minSqrDist) {

          // resolve edge-ambiguity cases, if thisPt is the corner
          var kk;
          var C;
          if (thisPt.x === A.x && thisPt.y === A.y) {
            // compare dist from p to points on either side of A
            kk = (ii + 1) % polygon.length;
            C = polygon[kk];

            var sqrDistB = _ptSqrDist(B, p);
            var sqrDistC = _ptSqrDist(C, p);
            if (sqrDistB < sqrDistC) {
              closestEdgeIndex = ii;
            } else {
              closestEdgeIndex = kk;
            }
          } else {
            closestEdgeIndex = ii;
          }

          minSqrDist = thisSqrDist;
          closestPt = thisPt;
          closestEdgeIndex = ii;
        }

        jj = ii;
      }

      return {
        pt: closestPt,
        distance: Math.sqrt(minSqrDist),
        edgeIndex: closestEdgeIndex
      };
    },

    /**
     * Returns the point closest to p on any edge of the polygon.
     *
     * @param {Vector2d[]} polygon
     * @param {Vector2d} p
     * @returns {Vector2d}
     */
    getClosestPolygonPoint: function(polygon, p) {
      return exports.getInfoClosestPolygonPoint(polygon, p).pt;
    },

    /**
     * Returns the point closest to p on the line segment from l1 to l2.
     *
     * @param {Vector2d} l1
     * @param {Vector2d} l2
     * @param {Vector2d}  p
     * @returns {Vector2d}
     */
    getClosestEdgePoint: function(l1, l2, p) {
      // code based on this StackOverflow response:
      // http://stackoverflow.com/a/1501725
      var _ptSqrDist = function(p1, p2) {
        return exports.sqrDistance(p1.x, p1.y, p2.x, p2.y);
      };

      // check for l1 === l2 case
      var lengthSqr = _ptSqrDist(l1, l2);
      if (lengthSqr === 0.0) {
        return l1;
      }

      // find the projection of p onto the line extending the segment:
      // l1 + t * (l2 - l1)
      var t = ((p.x - l1.x) * (l2.x - l1.x) + (p.y - l1.y) * (l2.y - l1.y)) /
        lengthSqr;
      if (t < 0) {
        // before the l1 end of the segment
        return l1;
      } else if (t > 1) {
        // past the l2 end of the segment
        return l2;
      } else {
        return {
          x: l1.x + t * (l2.x - l1.x),
          y: l1.y + t * (l2.y - l1.y)
        };
      }
    },

    /* Returns the shortest distance squared between the line segment
     from l1 to l2 and the point p. Points are {x, y} */
    linePointSqrDistance: function(l1, l2, p) {
      // code based on this StackOverflow response:
      // http://stackoverflow.com/a/1501725
      var closestPt = exports.getClosestEdgePoint(l1, l2, p);
      return exports.sqrDistance(p.x, p.y, closestPt.x, closestPt.y);
    },

    /* Returns the shortest distance between the line segment from l1 to l2
     and the point p. Points are {x, y} */
    linePointDistance: function(l1, l2, p) {
      return Math.sqrt(exports.linePointSqrDistance(l1, l2, p));
    },

    distance: function(x1, y1, x2, y2) {
      return Math.sqrt(exports.sqrDistance(x1, y1, x2, y2));
    },

    sqrDistance: function(x1, y1, x2, y2) {
      return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    },

    angleLerp: function(a, b, t) {
      var diff = Math.abs(b - a);
      if (diff > 180) {
        if (b > a) {
          a += 360;
        } else {
          b += 360;
        }
      }

      var v = (a + ((b - a) * t));
      return (v % 360);
    },

    /**
     *  Returns the smallest positive difference between angles a and b.
     */
    angleDiff: function(a, b) {
      a = ((a % 360) + 360) % 360;
      b = ((b % 360) + 360) % 360;

      return Math.min(Math.abs(a - b),
        Math.abs(a + 360 - b),
        Math.abs(a - 360 - b));
    },

    /**
     *  Returns the diff with smallest absolute value between angles a and b.
     */
    angleSignedDiff: function(a, b) {
      a = ((a % 360) + 360) % 360;
      b = ((b % 360) + 360) % 360;

      var phis = [
        a - b,
        a + 360 - b,
        a - 360 - b
      ];

      var toReturn = phis[0];
      for (var ii = 1; ii < phis.length; ii++) {
        if (Math.abs(phis[ii]) < Math.abs(toReturn)) {
          toReturn = phis[ii];
        }
      }

      return toReturn;
    },

    /**
     * Returns ture if the angle a is within the smaller of the two arcs between
     * angles b and c.
     *
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @returns {boolean}
     */
    isAngleBetween: function(a, b, c) {
      var abAngleDiff = exports.angleDiff(a, b);
      var acAngleDiff = exports.angleDiff(a, c);
      var bcAngleDiff = exports.angleDiff(b, c);

      return abAngleDiff < bcAngleDiff && acAngleDiff < bcAngleDiff;
    },

    /**
     *  Returns the angle, in degrees, pointing from (x1, y1) to (x2, y2).
     */
    getAngleBetweenPoints: function(x1, y1, x2, y2) {
      var newVec = {
        x: x2 - x1,
        y: y2 - y1
      };
      return exports.vecToRotation(newVec.x, newVec.y);
    },

    isPointInEllipse: function(center, minorRadius, point) {
      var x = Math.pow(point.x - center.x, 2) / (minorRadius.x * minorRadius.x);
      var y = Math.pow(point.y - center.y, 2) / (minorRadius.y * minorRadius.y);
      return x + y < 1;
    },

    /**
     *  Test if a circle {x, y, radius} and a point intersect.
     */
    circleHitTest: function(circle, point) {
      circle.radius = circle.radius || circle.r;
      if (!assert.saneData([circle.x, circle.y, circle.radius, point])) {
        console.error('bad input to commonGameNS.circleHitTest');
      }

      // a point is in the circle if the distance between the circle's center
      // and the point is less than the circle radius.

      var dist = exports.distance(circle.x, circle.y, point.x, point.y);
      return dist < circle.radius;
    },

    /**
     *  Test if a rectangle {x, y, width, height} and a line intersect anywhere.
     */
    rectLineHitTest: function(rect, x1, y1, x2, y2) {
      var xMin = rect.x;
      var yMin = rect.y;
      var xMax = rect.x + rect.width;
      var yMax = rect.y + rect.height;
      //check if inside completely
      if ((x1 >= xMin && x1 <= xMax) &&
        (x2 >= xMin && x2 <= xMax) &&
        (y1 >= yMin && y1 <= yMax) &&
        (y2 >= yMin && y2 <= yMax)) {
        return true;
      }
      //check if any of the rect lines intersects
      return this.lineIntersect(x1, y1, x2, y2, xMin, yMin, xMin, yMax) ||
        this.lineIntersect(x1, y1, x2, y2, xMin, yMin, xMax, yMin) ||
        this.lineIntersect(x1, y1, x2, y2, xMin, yMax, xMax, yMax) ||
        this.lineIntersect(x1, y1, x2, y2, xMax, yMin, xMax, yMax);
    },

    /**
     * Checks if two lines intersect
     */
    lineIntersect: function(x1, y1, x2, y2, x3, y3, x4, y4) {
      var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) *
        (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
      var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) *
        (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
      if (isNaN(x) || isNaN(y)) {
        return false;
      } else {
        if (x1 >= x2) {
          if (!(x2 <= x && x <= x1)) {return false;}
        } else {
          if (!(x1 <= x && x <= x2)) {return false;}
        }
        if (y1 >= y2) {
          if (!(y2 <= y && y <= y1)) {return false;}
        } else {
          if (!(y1 <= y && y <= y2)) {return false;}
        }
        if (x3 >= x4) {
          if (!(x4 <= x && x <= x3)) {return false;}
        } else {
          if (!(x3 <= x && x <= x4)) {return false;}
        }
        if (y3 >= y4) {
          if (!(y4 <= y && y <= y3)) {return false;}
        } else {
          if (!(y3 <= y && y <= y4)) {return false;}
        }
      }
      return true;
    },

    /**
     *  Test if two rectangles {x, y, width, height} intersect anywhere.
     */
    rectRectHitTest: function(rect1, rect2) {
      var l1 = rect1.x;
      var r1 = rect1.x + rect1.width;
      var t1 = rect1.y;
      var b1 = rect1.y + rect1.height;

      var l2 = rect2.x;
      var r2 = rect2.x + rect2.width;
      var t2 = rect2.y;
      var b2 = rect2.y + rect2.height;

      return !(l2 > r1 || r2 < l1 || t2 > b1 || b2 < t1);
    },

    /**
     *  Test if a point {x, y} is inside a rect {x, y, width, height}.
     */
    rectangleHitTest: function(rect, point) {
      // make sure inputs are sane
      if (!assert.saneData(rect)) {
        console.error('rectangleHitTest: bad input rect');
        console.log(rect);
      }

      if (!assert.saneData([point.x, point.y])) {
        console.error('rectangleHitTest: bad input point');
        console.log(point);
      }

      var x1 = rect.x;
      var x2 = rect.x + rect.width;
      var y1 = rect.y;
      var y2 = rect.y + rect.height;

      var xHit = (x1 <= point.x) && (point.x <= x2);
      var yHit = (y1 <= point.y) && (point.y <= y2);

      return xHit && yHit;
    }
  };

  return exports;
});
