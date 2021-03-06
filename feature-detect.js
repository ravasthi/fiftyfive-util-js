/*
 * Copyright 2015 55 Minutes (http://www.55minutes.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*------------------------------------------------------------------------------
| feature-detect.js
| 55 Minutes JS utilities v6.0
| Author(s): Richa Avasthi
| Created: 2010-10-13
|
| Browser feature detection tests.
------------------------------------------------------------------------------*/

// Establish namespace
var fiftyfive = window.fiftyfive = window.fiftyfive ? window.fiftyfive : {};
fiftyfive.featureDetect = fiftyfive.featureDetect ? fiftyfive.featureDetect : {};

/*
** Test whether the browser supports the "placeholder" attribute on textarea
** elements and input elements.
*/
fiftyfive.featureDetect.placeholder = function() {
    var i = document.createElement("input")
    var t = document.createElement("textarea");
    return ("placeholder" in i) && ("placeholder" in t);
};

/*
** SVG support.
** cf <http://stackoverflow.com/questions/654112/how-do-you-detect-support-for-vml-or-svg-in-a-browser>
*/
fiftyfive.featureDetect.svg = function() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
};
