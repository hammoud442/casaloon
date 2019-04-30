/*****
 * rateyo - v2.3.5
 * http://prrashi.github.io/rateyo/
 * Copyright (c) 2014 Prashanth Pamidi; Licensed MIT
 *****/

;(function ($) {
    "use strict";

    // The basic svg string required to generate stars
    var BASICSTAR = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="23.484" height="23.485" viewBox="0 0 23.484 23.485">\n' +
        '  <g id="rate_casaloon" transform="translate(-0.001)">\n' +
        '    <g id="_100Asset_2" data-name="100Asset 2">\n' +
        '      <g id="Layer_1" data-name="Layer 1">\n' +
        '        <path id="Path_1" data-name="Path 1" d="M159.65,53.937a10.368,10.368,0,0,1,2.537-5.993,8.081,8.081,0,0,1,5.766-2.31,8.08,8.08,0,0,1-2.31,5.766A10.339,10.339,0,0,1,159.65,53.937Z" transform="translate(-147.847 -42.256)" fill="#8dc7b8"/>\n' +
        '        <path id="Path_2" data-name="Path 2" d="M53.946,159.65a10.369,10.369,0,0,1-2.536,5.993,8.085,8.085,0,0,1-5.766,2.313,8.067,8.067,0,0,1,2.314-5.766A10.323,10.323,0,0,1,53.946,159.65Z" transform="translate(-42.265 -147.847)" fill="#8dc7b8"/>\n' +
        '        <path id="Path_3" data-name="Path 3" d="M159.65,159.65a10.367,10.367,0,0,1,5.993,2.537,8.091,8.091,0,0,1,2.313,5.769,8.081,8.081,0,0,1-5.766-2.31A10.35,10.35,0,0,1,159.65,159.65Z" transform="translate(-147.847 -147.847)" fill="#939"/>\n' +
        '        <path id="Path_4" data-name="Path 4" d="M53.992,53.927A10.35,10.35,0,0,1,48,51.39a8.076,8.076,0,0,1-2.31-5.766,8.077,8.077,0,0,1,5.766,2.31A10.355,10.355,0,0,1,53.992,53.927Z" transform="translate(-42.311 -42.246)" fill="#939"/>\n' +
        '        <path id="Path_5" data-name="Path 5" d="M158.83,128.223a10.375,10.375,0,0,1,6.031-2.443,8.079,8.079,0,0,1,5.712,2.443,8.086,8.086,0,0,1-5.712,2.444A10.334,10.334,0,0,1,158.83,128.223Z" transform="translate(-147.088 -116.481)" fill="#a7bd5b"/>\n' +
        '        <path id="Path_6" data-name="Path 6" d="M11.742,128.224a10.382,10.382,0,0,1-6.031,2.44A8.073,8.073,0,0,1,0,128.223a8.087,8.087,0,0,1,5.711-2.443A10.342,10.342,0,0,1,11.742,128.224Z" transform="translate(0 -116.481)" fill="#a7bd5b"/>\n' +
        '        <path id="Path_7" data-name="Path 7" d="M128.178,158.83a10.382,10.382,0,0,1,2.44,6.031,8.078,8.078,0,0,1-2.444,5.712,8.087,8.087,0,0,1-2.443-5.712A10.353,10.353,0,0,1,128.178,158.83Z" transform="translate(-116.435 -147.088)" fill="#cc4377"/>\n' +
        '        <path id="Path_8" data-name="Path 8" d="M128.223,11.742a10.375,10.375,0,0,1-2.443-6.031A8.087,8.087,0,0,1,128.223,0a8.086,8.086,0,0,1,2.444,5.711A10.342,10.342,0,0,1,128.223,11.742Z" transform="translate(-116.481)" fill="#cc4377"/>\n' +
        '        <path id="Path_13" data-name="Path 13" d="M170.937,241.634a.234.234,0,1,1-.032-.117A.222.222,0,0,1,170.937,241.634Z" transform="translate(-157.867 -223.555)" fill="#fff"/>\n' +
        '        <path id="Path_14" data-name="Path 14" d="M171.8,242.56a.172.172,0,1,1-.032-.117A.221.221,0,0,1,171.8,242.56Z" transform="translate(-158.732 -224.481)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_15" data-name="Path 15" d="M162.515,278.509a.4.4,0,1,1-.055-.2A.389.389,0,0,1,162.515,278.509Z" transform="translate(-149.754 -257.548)" fill="#fff"/>\n' +
        '        <path id="Path_16" data-name="Path 16" d="M163.973,280.016a.348.348,0,1,1-.285-.274.235.235,0,0,1,.285.274Z" transform="translate(-151.213 -259.055)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_17" data-name="Path 17" d="M141.155,261.552a.4.4,0,0,1-.4.4.406.406,0,0,1-.229-.074.4.4,0,1,1,.574-.532A.39.39,0,0,1,141.155,261.552Z" transform="translate(-129.977 -241.843)" fill="#fff"/>\n' +
        '        <path id="Path_18" data-name="Path 18" d="M142.616,263.048a.4.4,0,0,1-.4.4.407.407,0,0,1-.229-.074.4.4,0,0,1,.345-.6.235.235,0,0,1,.285.274Z" transform="translate(-131.438 -243.339)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_19" data-name="Path 19" d="M141.971,216.463a.4.4,0,0,1-.4.4.406.406,0,0,1-.229-.074.4.4,0,1,1,.575-.531A.39.39,0,0,1,141.971,216.463Z" transform="translate(-130.734 -200.088)" fill="#fff"/>\n' +
        '        <path id="Path_20" data-name="Path 20" d="M143.423,218.027a.4.4,0,0,1-.4.4.406.406,0,0,1-.229-.074.4.4,0,0,1,.346-.6.4.4,0,0,1,.229.074A.389.389,0,0,1,143.423,218.027Z" transform="translate(-132.186 -201.652)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_21" data-name="Path 21" d="M96.322,200.917a.4.4,0,1,1-.055-.2A.39.39,0,0,1,96.322,200.917Z" transform="translate(-88.458 -185.692)" fill="#fff"/>\n' +
        '        <path id="Path_22" data-name="Path 22" d="M97.8,202.5a.3.3,0,1,1-.055-.2A.39.39,0,0,1,97.8,202.5Z" transform="translate(-89.931 -187.279)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_23" data-name="Path 23" d="M85.491,242.887a.4.4,0,0,1-.4.4.405.405,0,0,1-.229-.074.4.4,0,1,1,.575-.531A.389.389,0,0,1,85.491,242.887Z" transform="translate(-78.429 -224.558)" fill="#fff"/>\n' +
        '        <path id="Path_24" data-name="Path 24" d="M86.951,244.466a.4.4,0,0,1-.4.4.405.405,0,0,1-.229-.074.4.4,0,0,1,.346-.6.236.236,0,0,1,.284.276Z" transform="translate(-79.889 -226.137)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_25" data-name="Path 25" d="M55.979,250.981a.4.4,0,1,1-.055-.2A.39.39,0,0,1,55.979,250.981Z" transform="translate(-51.1 -232.055)" fill="#fff"/>\n' +
        '        <path id="Path_26" data-name="Path 26" d="M57.415,252.554a.3.3,0,1,1-.055-.2A.391.391,0,0,1,57.415,252.554Z" transform="translate(-52.536 -233.628)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_27" data-name="Path 27" d="M66.466,238.49a.233.233,0,0,1-.233.234.233.233,0,1,1,.2-.351A.227.227,0,0,1,66.466,238.49Z" transform="translate(-61.121 -220.644)" fill="#fff"/>\n' +
        '        <path id="Path_28" data-name="Path 28" d="M67.308,239.409a.233.233,0,0,1-.233.234.137.137,0,0,1-.166-.16.234.234,0,0,1,.367-.191A.228.228,0,0,1,67.308,239.409Z" transform="translate(-61.963 -221.563)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_29" data-name="Path 29" d="M29.345,152.979a.4.4,0,1,1-.055-.2A.388.388,0,0,1,29.345,152.979Z" transform="translate(-26.429 -141.299)" fill="#fff"/>\n' +
        '        <path id="Path_30" data-name="Path 30" d="M30.854,154.564a.331.331,0,1,1-.285-.274.393.393,0,0,1,.229.074A.388.388,0,0,1,30.854,154.564Z" transform="translate(-27.939 -142.884)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_31" data-name="Path 31" d="M59.055,168.709a.4.4,0,1,1-.055-.2A.388.388,0,0,1,59.055,168.709Z" transform="translate(-53.943 -155.866)" fill="#fff"/>\n' +
        '        <path id="Path_32" data-name="Path 32" d="M60.565,170.276a.4.4,0,0,1-.63.329.393.393,0,0,1-.055-.2.4.4,0,0,1,.4-.4.393.393,0,0,1,.229.074A.388.388,0,0,1,60.565,170.276Z" transform="translate(-55.453 -157.432)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_33" data-name="Path 33" d="M103.668,167.084a.234.234,0,1,1-.033-.118A.228.228,0,0,1,103.668,167.084Z" transform="translate(-95.57 -154.516)" fill="#fff"/>\n' +
        '        <path id="Path_34" data-name="Path 34" d="M104.515,167.957a.2.2,0,1,1-.166-.16.137.137,0,0,1,.166.16Z" transform="translate(-96.417 -155.389)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_35" data-name="Path 35" d="M72.757,135.594a.234.234,0,1,1-.032-.117A.222.222,0,0,1,72.757,135.594Z" transform="translate(-66.945 -125.354)" fill="#fff"/>\n' +
        '        <path id="Path_36" data-name="Path 36" d="M73.576,136.52a.175.175,0,1,1-.035-.117A.222.222,0,0,1,73.576,136.52Z" transform="translate(-67.764 -126.28)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_37" data-name="Path 37" d="M88.185,112.091a.24.24,0,1,1-.035-.118A.228.228,0,0,1,88.185,112.091Z" transform="translate(-81.231 -103.59)" fill="#fff"/>\n' +
        '        <path id="Path_38" data-name="Path 38" d="M89.026,113a.175.175,0,1,1-.036-.118A.228.228,0,0,1,89.026,113Z" transform="translate(-82.072 -104.499)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_39" data-name="Path 39" d="M63.321,80.481a.234.234,0,0,1-.233.233.236.236,0,0,1-.133-.041.233.233,0,1,1,.334-.309A.226.226,0,0,1,63.321,80.481Z" transform="translate(-58.209 -74.317)" fill="#fff"/>\n' +
        '        <path id="Path_40" data-name="Path 40" d="M64.169,81.39a.234.234,0,0,1-.233.233.237.237,0,0,1-.133-.041.234.234,0,0,1,.2-.351.136.136,0,0,1,.165.16Z" transform="translate(-59.056 -75.225)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_41" data-name="Path 41" d="M97.085,77.509a.4.4,0,1,1-.055-.2A.389.389,0,0,1,97.085,77.509Z" transform="translate(-89.161 -71.408)" fill="#fff"/>\n' +
        '        <path id="Path_42" data-name="Path 42" d="M98.592,79.113a.331.331,0,1,1-.285-.273.236.236,0,0,1,.285.273Z" transform="translate(-90.668 -73.012)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_43" data-name="Path 43" d="M68.555,54.819a.4.4,0,1,1-.055-.2A.39.39,0,0,1,68.555,54.819Z" transform="translate(-62.741 -50.395)" fill="#fff"/>\n' +
        '        <path id="Path_44" data-name="Path 44" d="M70.064,56.4a.331.331,0,1,1-.285-.274.237.237,0,0,1,.285.274Z" transform="translate(-64.25 -51.98)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_45" data-name="Path 45" d="M159.335,23.109a.4.4,0,1,1-.055-.2A.388.388,0,0,1,159.335,23.109Z" transform="translate(-146.809 -21.03)" fill="#fff"/>\n' +
        '        <path id="Path_46" data-name="Path 46" d="M160.844,24.694a.331.331,0,1,1-.285-.274.393.393,0,0,1,.229.074A.388.388,0,0,1,160.844,24.694Z" transform="translate(-148.319 -22.615)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_47" data-name="Path 47" d="M136.475,68.979a.4.4,0,1,1-.055-.2A.388.388,0,0,1,136.475,68.979Z" transform="translate(-125.639 -63.509)" fill="#fff"/>\n' +
        '        <path id="Path_48" data-name="Path 48" d="M137.984,70.564a.331.331,0,1,1-.285-.274.393.393,0,0,1,.229.074A.387.387,0,0,1,137.984,70.564Z" transform="translate(-127.149 -65.094)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_49" data-name="Path 49" d="M167.6,95.221a.233.233,0,1,1-.032-.118A.233.233,0,0,1,167.6,95.221Z" transform="translate(-154.774 -87.966)" fill="#fff"/>\n' +
        '        <path id="Path_50" data-name="Path 50" d="M168.383,96.107a.175.175,0,1,1-.032-.118A.233.233,0,0,1,168.383,96.107Z" transform="translate(-155.561 -88.852)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_51" data-name="Path 51" d="M202.849,90.981a.4.4,0,1,1-.055-.2A.4.4,0,0,1,202.849,90.981Z" transform="translate(-187.112 -83.884)" fill="#fff"/>\n' +
        '        <path id="Path_52" data-name="Path 52" d="M204.285,92.554a.3.3,0,1,1-.055-.2A.4.4,0,0,1,204.285,92.554Z" transform="translate(-188.548 -85.457)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_53" data-name="Path 53" d="M251.145,68.979a.4.4,0,1,1-.055-.2A.388.388,0,0,1,251.145,68.979Z" transform="translate(-231.832 -63.509)" fill="#fff"/>\n' +
        '        <path id="Path_54" data-name="Path 54" d="M252.654,70.564a.331.331,0,1,1-.285-.274.393.393,0,0,1,.229.074A.389.389,0,0,1,252.654,70.564Z" transform="translate(-233.341 -65.094)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_55" data-name="Path 55" d="M235.572,101.2a.234.234,0,0,1-.234.234.237.237,0,0,1-.133-.041.233.233,0,1,1,.334-.309A.222.222,0,0,1,235.572,101.2Z" transform="translate(-217.725 -93.505)" fill="#fff"/>\n' +
        '        <path id="Path_56" data-name="Path 56" d="M236.364,102.109a.234.234,0,0,1-.234.234.136.136,0,0,1-.166-.16.233.233,0,0,1,.233-.233.228.228,0,0,1,.133.042A.222.222,0,0,1,236.364,102.109Z" transform="translate(-218.517 -94.413)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_57" data-name="Path 57" d="M238.725,57.781a.233.233,0,1,1-.032-.118A.225.225,0,0,1,238.725,57.781Z" transform="translate(-220.646 -53.294)" fill="#fff"/>\n' +
        '        <path id="Path_58" data-name="Path 58" d="M239.568,58.7a.234.234,0,0,1-.366.191.229.229,0,0,1-.033-.118.233.233,0,0,1,.234-.233.23.23,0,0,1,.133.042A.226.226,0,0,1,239.568,58.7Z" transform="translate(-221.489 -54.212)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_59" data-name="Path 59" d="M283.952,160.811a.234.234,0,0,1-.234.234.237.237,0,0,1-.133-.041.233.233,0,1,1,.334-.309A.221.221,0,0,1,283.952,160.811Z" transform="translate(-262.528 -148.708)" fill="#fff"/>\n' +
        '        <path id="Path_60" data-name="Path 60" d="M284.764,161.719a.234.234,0,0,1-.234.234.136.136,0,0,1-.165-.16.233.233,0,0,1,.233-.233.23.23,0,0,1,.133.042A.222.222,0,0,1,284.764,161.719Z" transform="translate(-263.34 -149.616)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_61" data-name="Path 61" d="M258.555,143.081a.233.233,0,1,1-.032-.118A.222.222,0,0,1,258.555,143.081Z" transform="translate(-239.01 -132.288)" fill="#fff"/>\n' +
        '        <path id="Path_62" data-name="Path 62" d="M259.4,144.009a.234.234,0,0,1-.366.191.229.229,0,0,1-.033-.118.233.233,0,0,1,.234-.233.23.23,0,0,1,.133.042A.223.223,0,0,1,259.4,144.009Z" transform="translate(-239.853 -133.216)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_63" data-name="Path 63" d="M228.675,136.649a.4.4,0,1,1-.055-.2A.386.386,0,0,1,228.675,136.649Z" transform="translate(-211.023 -126.176)" fill="#fff"/>\n' +
        '        <path id="Path_64" data-name="Path 64" d="M230.184,138.234a.331.331,0,1,1-.285-.274.393.393,0,0,1,.229.074A.385.385,0,0,1,230.184,138.234Z" transform="translate(-212.533 -127.761)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_65" data-name="Path 65" d="M212.045,168.709a.4.4,0,1,1-.055-.2A.388.388,0,0,1,212.045,168.709Z" transform="translate(-195.623 -155.866)" fill="#fff"/>\n' +
        '        <path id="Path_66" data-name="Path 66" d="M213.555,170.294a.4.4,0,0,1-.63.329.393.393,0,0,1-.055-.2.4.4,0,0,1,.4-.4.393.393,0,0,1,.229.074A.388.388,0,0,1,213.555,170.294Z" transform="translate(-197.133 -157.451)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_67" data-name="Path 67" d="M245.752,227.317a.4.4,0,1,1-.055-.2A.39.39,0,0,1,245.752,227.317Z" transform="translate(-226.841 -210.14)" fill="#fff"/>\n' +
        '        <path id="Path_68" data-name="Path 68" d="M250.015,228.834a.234.234,0,1,1-.055-.2A.39.39,0,0,1,250.015,228.834Z" transform="translate(-231.103 -211.658)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_69" data-name="Path 69" d="M218.979,238.481a.24.24,0,1,1-.036-.118A.229.229,0,0,1,218.979,238.481Z" transform="translate(-202.356 -220.635)" fill="#fff"/>\n' +
        '        <path id="Path_70" data-name="Path 70" d="M221.465,239.359a.137.137,0,1,1-.033-.118A.229.229,0,0,1,221.465,239.359Z" transform="translate(-204.842 -221.513)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_71" data-name="Path 71" d="M258.555,258.511a.233.233,0,1,1-.032-.117A.226.226,0,0,1,258.555,258.511Z" transform="translate(-239.01 -239.184)" fill="#fff"/>\n' +
        '        <path id="Path_72" data-name="Path 72" d="M259.4,259.43a.234.234,0,0,1-.366.191A.229.229,0,0,1,259,259.5a.233.233,0,0,1,.234-.233.231.231,0,0,1,.133.042A.226.226,0,0,1,259.4,259.43Z" transform="translate(-239.853 -240.103)" fill="#c9ecf2"/>\n' +
        '        <path id="Path_73" data-name="Path 73" d="M239.147,247.664a.234.234,0,1,1-.032-.117A.222.222,0,0,1,239.147,247.664Z" transform="translate(-221.034 -229.139)" fill="#fff"/>\n' +
        '        <path id="Path_74" data-name="Path 74" d="M239.966,248.59a.175.175,0,1,1-.036-.117A.222.222,0,0,1,239.966,248.59Z" transform="translate(-221.853 -230.065)" fill="#c9ecf2"/>\n' +
        '      </g>\n' +
        '    </g>\n' +
        '  </g>\n' +
        '</svg>\n';

    // The Default values of different options available in the Plugin
    var DEFAULTS = {

        starWidth: "32px",
        normalFill: "gray",
        ratedFill: "#f39c12",
        numStars: 5,
        maxValue: 5,
        precision: 1,
        rating: 0,
        fullStar: false,
        halfStar: false,
        hover: true,
        readOnly: false,
        spacing: "0px",
        rtl: false,
        multiColor: null,
        onInit: null,
        onChange: null,
        onSet: null,
        starSvg: null
    };

    //Default colors for multi-color rating
    var MULTICOLOR_OPTIONS = {

        startColor: "#c0392b", //red
        endColor: "#f1c40f"  //yellow
    };

    // http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    function isMobileBrowser() {
        var check = false;
        /* jshint ignore:start */
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        /* jshint ignore:end */
        return check;
    }

    function checkPrecision(value, minValue, maxValue) {

        /*
         * This function removes the unnecessary precision, at Min and Max Values
         */

        // Its like comparing 0.0 with 0, which is true
        if (value === minValue) {

            value = minValue;
        } else if (value === maxValue) {

            value = maxValue;
        }

        return value;
    }

    function checkBounds(value, minValue, maxValue) {

        /*
         * Check if the value is between min and max values, if not, throw an error
         */

        var isValid = value >= minValue && value <= maxValue;

        if (!isValid) {

            throw Error("Invalid Rating, expected value between " + minValue +
                " and " + maxValue);
        }

        return value;
    }

    function isDefined(value) {

        // Better way to check if a variable is defined or not
        return typeof value !== "undefined";
    }

    // Regex to match Colors in Hex Format like #FF00FF
    var hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;

    var hexToRGB = function (hex) {

        /*
         * Extracts and returns the Red, Blue, Green Channel values,
         * in the form of decimals
         */

        if (!hexRegex.test(hex)) {

            return null;
        }

        var hexValues = hexRegex.exec(hex),
            r = parseInt(hexValues[1], 16),
            g = parseInt(hexValues[2], 16),
            b = parseInt(hexValues[3], 16);

        return {r: r, g: g, b: b};
    };

    function getChannelValue(startVal, endVal, percent) {

        /*
         * Returns a value between `startVal` and `endVal` based on the percent
         */

        var newVal = (endVal - startVal) * (percent / 100);

        newVal = Math.round(startVal + newVal).toString(16);

        if (newVal.length === 1) {

            newVal = "0" + newVal;
        }

        return newVal;
    }

    function getColor(startColor, endColor, percent) {

        /*
         * Given the percentage( `percent` ) of `endColor` to be mixed
         * with the `startColor`, returns the mixed color.
         * Colors should be only in Hex Format
         */

        if (!startColor || !endColor) {

            return null;
        }

        percent = isDefined(percent) ? percent : 0;

        startColor = hexToRGB(startColor);
        endColor = hexToRGB(endColor);

        var r = getChannelValue(startColor.r, endColor.r, percent),
            b = getChannelValue(startColor.b, endColor.b, percent),
            g = getChannelValue(startColor.g, endColor.g, percent);

        return "#" + r + g + b;
    }

    function RateYo($node, options) {

        /*
         * The Contructor, whose instances are used by plugin itself
         */

        // Storing the HTML element as a property, for future access
        this.node = $node.get(0);

        var that = this;

        // Remove any stuff that is present inside the container, and add the plugin class
        $node.empty().addClass("jq-ry-container");

        /*
         * Basically the plugin displays the rating using two rows of stars lying one above
         * the other, the row that is on the top represents the actual rating, and the one
         * behind acts just like a background.
         *
         * `$groupWrapper`: is an element that wraps both the rows
         * `$normalGroup`: is the container for row of stars thats behind and
         *                 acts as background
         * `$ratedGroup`: is the container for row of stars that display the actual rating.
         *
         * The rating is displayed by adjusting the width of `$ratedGroup`
         */
        var $groupWrapper = $("<div/>").addClass("jq-ry-group-wrapper")
            .appendTo($node);

        var $normalGroup = $("<div/>").addClass("jq-ry-normal-group")
            .addClass("jq-ry-group")
            .appendTo($groupWrapper);

        var $ratedGroup = $("<div/>").addClass("jq-ry-rated-group")
            .addClass("jq-ry-group")
            .appendTo($groupWrapper);

        /*
         * Variable `step`: store the value of the rating for each star
         *                  eg: if `maxValue` is 5 and `numStars` is 5, value of each star
         *                      is 1.
         * Variable `starWidth`: stores the decimal value of width of star in units of px
         * Variable `percentOfStar`: stores the percentage of width each star takes w.r.t
         *                           the container
         * Variable `spacing`: stores the decimal value of the spacing between stars
         *                     in the units of px
         * Variable `percentOfSpacing`: stores the percentage of width of the spacing
         *                              between stars w.r.t the container
         */
        var step, starWidth, percentOfStar, spacing,
            percentOfSpacing, containerWidth, minValue = 0;

        /*
         * `currentRating` contains rating that is being displayed at the latest point of
         * time.
         *
         * When ever you hover over the plugin UI, the rating value changes
         * according to the place where you point the cursor, currentRating contains
         * the current value of rating that is being shown in the UI
         */
        var currentRating = options.rating;

        // A flag to store if the plugin is already being displayed in the UI
        var isInitialized = false;

        function showRating(ratingVal) {

            /*
             * The function is responsible for displaying the rating by changing
             * the width of `$ratedGroup`
             */

            if (!isDefined(ratingVal)) {

                ratingVal = options.rating;
            }

            // Storing the value that is being shown in `currentRating`.
            currentRating = ratingVal;

            var numStarsToShow = ratingVal / step;

            // calculating the percentage of width of $ratedGroup with respect to its parent
            var percent = numStarsToShow * percentOfStar;

            if (numStarsToShow > 1) {

                // adding the percentage of space that is taken by the gap the stars
                percent += (Math.ceil(numStarsToShow) - 1) * percentOfSpacing;
            }

            setRatedFill(options.ratedFill);

            percent = options.rtl ? 100 - percent : percent;

            if (percent < 0) {

                percent = 0;
            } else if (percent > 100) {

                percent = 100;
            }

            $ratedGroup.css("width", percent + "%");
        }

        function setContainerWidth() {

            /*
             * Set the width of the `this.node` based on the width of each star and
             * the space between them
             */

            containerWidth = starWidth * options.numStars + spacing * (options.numStars - 1);

            percentOfStar = (starWidth / containerWidth) * 100;

            percentOfSpacing = (spacing / containerWidth) * 100;

            $node.width(containerWidth);

            showRating();
        }

        function setStarWidth(newWidth) {

            /*
             * Set the width and height of each SVG star, called whenever one changes the
             * `starWidth` option
             */

            // The width and height of the star should be the same
            var starHeight = options.starWidth = newWidth;

            starWidth = window.parseFloat(options.starWidth.replace("px", ""));

            $normalGroup.find("svg")
                .attr({
                    width: options.starWidth,
                    height: starHeight
                });

            $ratedGroup.find("svg")
                .attr({
                    width: options.starWidth,
                    height: starHeight
                });

            setContainerWidth();

            return $node;
        }

        function setSpacing(newSpacing) {

            /*
             * Set spacing between the SVG stars, called whenever one changes
             * the `spacing` option
             */

            options.spacing = newSpacing;

            spacing = parseFloat(options.spacing.replace("px", ""));

            $normalGroup.find("svg:not(:first-child)")
                .css({"margin-left": newSpacing});

            $ratedGroup.find("svg:not(:first-child)")
                .css({"margin-left": newSpacing});

            setContainerWidth();

            return $node;
        }

        function setNormalFill(newFill) {

            /*
             * Set the background fill of the Stars, called whenever one changes the
             * `normalFill` option
             */

            options.normalFill = newFill;

            var $svgs = (options.rtl ? $ratedGroup : $normalGroup).find("svg");

            $svgs.attr({fill: options.normalFill});

            return $node;
        }

        /*
         * Store the recent `ratedFill` option in a variable
         * so that if multiColor is unset, we can use the perviously set `ratedFill`
         * from this variable
         */
        var ratedFill = options.ratedFill;

        function setRatedFill(newFill) {

            /*
             * Set ratedFill of the stars, called when one changes the `ratedFill` option
             */

            /*
             * If `multiColor` option is set, `newFill` variable is dynamically set
             * based on the rating, what ever set as parameter will be discarded
             */
            if (options.multiColor) {

                var ratingDiff = currentRating - minValue,
                    percentCovered = (ratingDiff / options.maxValue) * 100;

                var colorOpts = options.multiColor || {},
                    startColor = colorOpts.startColor || MULTICOLOR_OPTIONS.startColor,
                    endColor = colorOpts.endColor || MULTICOLOR_OPTIONS.endColor;

                newFill = getColor(startColor, endColor, percentCovered);
            } else {

                ratedFill = newFill;
            }

            options.ratedFill = newFill;

            var $svgs = (options.rtl ? $normalGroup : $ratedGroup).find("svg");

            $svgs.attr({fill: options.ratedFill});

            return $node;
        }

        function setRtl(newValue) {

            newValue = !!newValue;

            options.rtl = newValue;

            setNormalFill(options.normalFill);
            showRating();
        }

        function setMultiColor(colorOptions) {

            /*
             * called whenever one changes the `multiColor` option
             */

            options.multiColor = colorOptions;

            // set the recently set `ratedFill` option, if multiColor Options are unset
            setRatedFill(colorOptions ? colorOptions : ratedFill);
        }

        function setNumStars(newValue) {

            /*
             * Set the number of stars to use to display the rating, called whenever one
             * changes the `numStars` option
             */

            options.numStars = newValue;

            step = options.maxValue / options.numStars;

            $normalGroup.empty();
            $ratedGroup.empty();

            for (var i = 0; i < options.numStars; i++) {

                $normalGroup.append($(options.starSvg || BASICSTAR));
                $ratedGroup.append($(options.starSvg || BASICSTAR));
            }

            setStarWidth(options.starWidth);
            setNormalFill(options.normalFill);
            setSpacing(options.spacing);

            showRating();

            return $node;
        }

        function setMaxValue(newValue) {

            /*
             * set the Maximum Value of rating to be allowed, called whenever
             * one changes the `maxValue` option
             */

            options.maxValue = newValue;

            step = options.maxValue / options.numStars;

            if (options.rating > newValue) {

                setRating(newValue);
            }

            showRating();

            return $node;
        }

        function setPrecision(newValue) {

            /*
             * Set the precision of the rating value, called if one changes the
             * `precision` option
             */

            options.precision = newValue;

            setRating(options.rating);

            return $node;
        }

        function setHalfStar(newValue) {

            /*
             * This function will be called if one changes the `halfStar` option
             */

            options.halfStar = newValue;

            return $node;
        }

        function setFullStar(newValue) {

            /*
             * This function will be called if one changes the `fullStar` option
             */

            options.fullStar = newValue;

            return $node;
        }

        function round(value) {

            /*
             * Rounds the value of rating if `halfStar` or `fullStar` options are chosen
             */

            var remainder = value % step,
                halfStep = step / 2,
                isHalfStar = options.halfStar,
                isFullStar = options.fullStar;

            if (!isFullStar && !isHalfStar) {

                return value;
            }

            if (isFullStar || (isHalfStar && remainder > halfStep)) {

                value += step - remainder;
            } else {

                value = value - remainder;

                if (remainder > 0) {

                    value += halfStep;
                }
            }

            return value;
        }

        function calculateRating(e) {

            /*
             * Calculates and returns the rating based on the position of cursor w.r.t the
             * plugin container
             */

            var position = $normalGroup.offset(),
                nodeStartX = position.left,
                nodeEndX = nodeStartX + $normalGroup.width();

            var maxValue = options.maxValue;

            // The x-coordinate(position) of the mouse pointer w.r.t page
            var pageX = e.pageX;

            var calculatedRating = 0;

            // If the mouse pointer is to the left of the container
            if (pageX < nodeStartX) {

                calculatedRating = minValue;
            } else if (pageX > nodeEndX) { // If the mouse pointer is right of the container

                calculatedRating = maxValue;
            } else { // If the mouse pointer is inside the continer

                /*
                 * The fraction of width covered by the pointer w.r.t to the total width
                 * of the container.
                 */
                var calcPrcnt = ((pageX - nodeStartX) / (nodeEndX - nodeStartX));

                if (spacing > 0) {

                    /*
                     * If there is spacing between stars, take the percentage of width covered
                     * and subtract the percentage of width covered by stars and spacing, to find
                     * how many stars are covered, the number of stars covered is the rating
                     *
                     * TODO: I strongly feel that this logic can be improved!, Please help!
                     */
                    calcPrcnt *= 100;

                    var remPrcnt = calcPrcnt;

                    while (remPrcnt > 0) {

                        if (remPrcnt > percentOfStar) {

                            calculatedRating += step;
                            remPrcnt -= (percentOfStar + percentOfSpacing);
                        } else {

                            calculatedRating += remPrcnt / percentOfStar * step;
                            remPrcnt = 0;
                        }
                    }
                } else {

                    /*
                     * If there is not spacing between stars, the fraction of width covered per
                     * `maxValue` is the rating
                     */
                    calculatedRating = calcPrcnt * (options.maxValue);
                }

                // Round the rating if `halfStar` or `fullStar` options are chosen
                calculatedRating = round(calculatedRating);
            }

            if (options.rtl) {

                calculatedRating = maxValue - calculatedRating;
            }

            return parseFloat(calculatedRating);
        }

        function setReadOnly(newValue) {

            /*
             * UnBinds mouse event handlers, called when whenever one changes the
             * `readOnly` option
             */

            options.readOnly = newValue;

            $node.attr("readonly", true);

            unbindEvents();

            if (!newValue) {

                $node.removeAttr("readonly");

                bindEvents();
            }

            return $node;
        }

        function setRating(newValue) {

            /*
             * Sets the rating of the Plugin, Called when option `rating` is changed
             * or, when `rating` method is called
             */

            var rating = newValue;

            var maxValue = options.maxValue;

            if (typeof rating === "string") {

                // If rating is given in percentage, maxValue should be 100
                if (rating[rating.length - 1] === "%") {

                    rating = rating.substr(0, rating.length - 1);
                    maxValue = 100;

                    setMaxValue(maxValue);
                }

                rating = parseFloat(rating);
            }

            checkBounds(rating, minValue, maxValue);

            rating = parseFloat(rating.toFixed(options.precision));

            checkPrecision(parseFloat(rating), minValue, maxValue);

            options.rating = rating;

            showRating();

            if (isInitialized) {

                $node.trigger("rateyo.set", {rating: rating});
            }

            return $node;
        }

        function setOnInit(method) {

            /*
             * set what method to be called on Initialization
             */

            options.onInit = method;

            return $node;
        }

        function setOnSet(method) {

            /*
             * set what method to be called when rating is set
             */

            options.onSet = method;

            return $node;
        }

        function setOnChange(method) {

            /*
             * set what method to be called rating in the UI is changed
             */

            options.onChange = method;

            return $node;
        }

        this.rating = function (newValue) {

            /*
             * rating getter/setter
             */

            if (!isDefined(newValue)) {

                return options.rating;
            }

            setRating(newValue);

            return $node;
        };

        this.destroy = function () {

            /*
             * Removes the Rating UI by clearing the content, and removing the custom classes
             */

            if (!options.readOnly) {

                unbindEvents();
            }

            RateYo.prototype.collection = deleteInstance($node.get(0),
                this.collection);

            $node.removeClass("jq-ry-container").children().remove();

            return $node;
        };

        this.method = function (methodName) {

            /*
             * Method to call the methods of RateYo Instance
             */

            if (!methodName) {

                throw Error("Method name not specified!");
            }

            if (!isDefined(this[methodName])) {

                throw Error("Method " + methodName + " doesn't exist!");
            }

            var args = Array.prototype.slice.apply(arguments, []),
                params = args.slice(1),
                method = this[methodName];

            return method.apply(this, params);
        };

        this.option = function (optionName, param) {

            /*
             * Method to get/set Options
             */

            if (!isDefined(optionName)) {

                return options;
            }

            var method;

            switch (optionName) {

                case "starWidth":

                    method = setStarWidth;
                    break;
                case "numStars":

                    method = setNumStars;
                    break;
                case "normalFill":

                    method = setNormalFill;
                    break;
                case "ratedFill":

                    method = setRatedFill;
                    break;
                case "multiColor":

                    method = setMultiColor;
                    break;
                case "maxValue":

                    method = setMaxValue;
                    break;
                case "precision":

                    method = setPrecision;
                    break;
                case "rating":

                    method = setRating;
                    break;
                case "halfStar":

                    method = setHalfStar;
                    break;
                case "fullStar":

                    method = setFullStar;
                    break;
                case "readOnly":

                    method = setReadOnly;
                    break;
                case "spacing":

                    method = setSpacing;
                    break;
                case "rtl":

                    method = setRtl;
                    break;
                case "onInit":

                    method = setOnInit;
                    break;
                case "onSet":

                    method = setOnSet;
                    break;
                case "onChange":

                    method = setOnChange;
                    break;
                default:

                    throw Error("No such option as " + optionName);
            }

            return isDefined(param) ? method(param) : options[optionName];
        };

        function onMouseEnter(e) {
            if (!options.hover) {
                return;
            }
            /*
             * If the Mouse Pointer is inside the container, calculate and show the rating
             * in UI
             */

            var rating = calculateRating(e).toFixed(options.precision);

            var maxValue = options.maxValue;

            rating = checkPrecision(parseFloat(rating), minValue, maxValue);

            showRating(rating);

            $node.trigger("rateyo.change", {rating: rating});
        }

        function onMouseLeave() {
            if (isMobileBrowser() || !options.hover) {
                return;
            }

            /*
             * If mouse leaves, revert the rating in UI to previously set rating,
             * when empty value is passed to showRating, it will take the previously set
             * rating
             */

            showRating();

            $node.trigger("rateyo.change", {rating: options.rating});
        }

        function onMouseClick(e) {

            /*
             * On clicking the mouse inside the container, calculate and set the rating
             */

            var resultantRating = calculateRating(e).toFixed(options.precision);
            resultantRating = parseFloat(resultantRating);

            that.rating(resultantRating);
        }

        function onInit(e, data) {

            if (options.onInit && typeof options.onInit === "function") {

                /* jshint validthis:true */
                options.onInit.apply(this, [data.rating, that]);
            }
        }

        function onChange(e, data) {

            if (options.onChange && typeof options.onChange === "function") {

                /* jshint validthis:true */
                options.onChange.apply(this, [data.rating, that]);
            }
        }

        function onSet(e, data) {

            if (options.onSet && typeof options.onSet === "function") {

                /* jshint validthis:true */
                options.onSet.apply(this, [data.rating, that]);
            }
        }

        function bindEvents() {

            $node.on("mousemove", onMouseEnter)
                .on("mouseenter", onMouseEnter)
                .on("mouseleave", onMouseLeave)
                .on("click", onMouseClick)
                .on("rateyo.init", onInit)
                .on("rateyo.change", onChange)
                .on("rateyo.set", onSet);
        }

        function unbindEvents() {

            $node.off("mousemove", onMouseEnter)
                .off("mouseenter", onMouseEnter)
                .off("mouseleave", onMouseLeave)
                .off("click", onMouseClick)
                .off("rateyo.init", onInit)
                .off("rateyo.change", onChange)
                .off("rateyo.set", onSet);
        }

        setNumStars(options.numStars);
        setReadOnly(options.readOnly);

        if (options.rtl) {

            setRtl(options.rtl);
        }

        this.collection.push(this);
        this.rating(options.rating, true);

        isInitialized = true;
        $node.trigger("rateyo.init", {rating: options.rating});
    }

    RateYo.prototype.collection = [];

    function getInstance(node, collection) {

        /*
         * Given a HTML element (node) and a collection of RateYo instances,
         * this function will search through the collection and return the matched
         * instance having the node
         */

        var instance;

        $.each(collection, function () {

            if (node === this.node) {

                instance = this;
                return false;
            }
        });

        return instance;
    }

    function deleteInstance(node, collection) {

        /*
         * Given a HTML element (node) and a collection of RateYo instances,
         * this function will search through the collection and delete the
         * instance having the node, and return the modified collection
         */

        $.each(collection, function (index) {

            if (node === this.node) {

                var firstPart = collection.slice(0, index),
                    secondPart = collection.slice(index + 1, collection.length);

                collection = firstPart.concat(secondPart);

                return false;
            }
        });

        return collection;
    }

    function _rateYo(options) {

        var rateYoInstances = RateYo.prototype.collection;

        /* jshint validthis:true */
        var $nodes = $(this);

        if ($nodes.length === 0) {

            return $nodes;
        }

        var args = Array.prototype.slice.apply(arguments, []);

        if (args.length === 0) {

            //If args length is 0, Initialize the UI with default settings
            options = args[0] = {};
        } else if (args.length === 1 && typeof args[0] === "object") {

            //If an Object is specified as first argument, it is considered as options
            options = args[0];
        } else if (args.length >= 1 && typeof args[0] === "string") {

            /*
             * if there is only one argument, and if its a string, it is supposed to be a
             * method name, if more than one argument is specified, the remaining arguments
             * except the first argument, will be passed as a params to the specified method
             */

            var methodName = args[0],
                params = args.slice(1);

            var result = [];

            $.each($nodes, function (i, node) {

                var existingInstance = getInstance(node, rateYoInstances);

                if (!existingInstance) {

                    throw Error("Trying to set options before even initialization");
                }

                var method = existingInstance[methodName];

                if (!method) {

                    throw Error("Method " + methodName + " does not exist!");
                }

                var returnVal = method.apply(existingInstance, params);

                result.push(returnVal);
            });

            /*
             * If the plugin in being called on only one jQuery Element, return only the
             * first value, to support chaining.
             */
            result = result.length === 1 ? result[0] : result;

            return result;
        } else {

            throw Error("Invalid Arguments");
        }

        /*
         * if only options are passed, extend default options, and if the plugin is not
         * initialized on a particular jQuery element, initalize RateYo on it
         */
        options = $.extend({}, DEFAULTS, options);

        return $.each($nodes, function () {

            var existingInstance = getInstance(this, rateYoInstances);

            if (existingInstance) {

                return existingInstance;
            }

            var $node = $(this),
                dataAttrs = {},
                optionsCopy = $.extend({}, options);

            $.each($node.data(), function (key, value) {

                if (key.indexOf("rateyo") !== 0) {

                    return;
                }

                var optionName = key.replace(/^rateyo/, "");

                optionName = optionName[0].toLowerCase() + optionName.slice(1);

                dataAttrs[optionName] = value;

                delete optionsCopy[optionName];
            });

            return new RateYo($(this), $.extend({}, dataAttrs, optionsCopy));
        });
    }

    function rateYo() {

        /* jshint validthis:true */
        return _rateYo.apply(this, Array.prototype.slice.apply(arguments, []));
    }

    window.RateYo = RateYo;
    $.fn.rateYo = rateYo;

}(window.jQuery));
