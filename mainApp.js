/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/


let sdk = new window.sfdc.BlockSDK(); //initalize SDK

let imgData = {
   
    ImageURL: 'http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png',
    ImgHeight: 300,
    ImgWidth: 600,
    Text: 'Text Over Image',

};



let defaultContent = '<img src="https://dj-gmaps-sfmc-content-nlock.herokuapp.com//dragIcon.png" style="display:block;margin-left:auto;margin-right:auto">';

let saveData = () => {
	
	var toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],
		
		[{ 'color': [] }, { 'background': [] }]
	];

	var quill = new Quill('#editor-container', {
	  modules: {
		toolbar: toolbarOptions
	  },
	  theme: 'snow'
	});

    imgData.ImgWidth = document.getElementById('ImgWidth').value;
    imgData.ImgHeight = document.getElementById('ImgHeight').value;
    imgData.ImageURL = document.getElementById('ImageURL').value;
    //imgData.Text = document.getElementById('Text').value;
	imgData.Text = quill.root.innerHTML 


    sdk.setData(imgData, (data) => {
        
        let content = "<table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td style='background-repeat:no-repeat;' background='" + imgData.ImageURL + "' bgcolor='#ddf3e9' width='" + imgData.ImgWidth + "' height='" + imgData.ImgHeight + "' valign='top' class='bgresize'> <!--[if gte mso 9]> <v:rect xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='background-repeat:no-repeat; width:" + imgData.ImgWidth + ";height:" + imgData.ImgHeight + ";'> <v:fill type='tile' src='" + imgData.ImageURL + "' color='#ddf3e9' /> <v:textbox inset='0,0,0,0'> <![endif]--> <div> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td width='30' align='left' valign='top' style='font-size: 0%;' class='mobile-hidden'></td> <td align='left' valign='top' class='mobile-padding'><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td align='left' valign='top' style='padding-top: 95px;color: #000000; padding-left: 100px; padding-right: 100px; font-size: 48px;' class='padding65'><span class='banner-heading55'><center>" + imgData.Text + "</center></span></td> </tr> </tbody> </table></td> <td width='30' align='left' valign='top' class='mobile-hidden' style='font-size: 0%;'></td> </tr> </tbody> </table> </div> <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]--> </td> </tr> </tbody> </table>";

        
        if (content.search('%%') != -1) {
            sdk.setSuperContent(defaultContent, (newSuperContent) => {});
          
        }
        sdk.setContent(content);
    });

    console.log(JSON.stringify(imgData));
}

let fetchData = () => {

  

    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            imgData = data;
      
            document.getElementById('ImgWidth').value = imgData.ImgWidth;
            document.getElementById('ImgHeight').value = imgData.ImgHeight;
            document.getElementById('ImageURL').value = imgData.ImageURL;
            //document.getElementById('Text').value = imgData.Text;
			imgData.Text = quill.root.innerHTML 

           
        }
    });

    console.log(JSON.stringify(imgData));
}



window.onload = fetchData;
window.onchange = saveData;
