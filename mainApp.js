// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{
        'color': []
    }, {
        'background': []
    }]
];

var quill = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});

var imgData = {

    ImageURL: 'http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png',
    ImgHeight: 400,
    ImgText: 'Text Over Image'

};


let sdk = new window.sfdc.BlockSDK(); //initalize SDK




var defaultContent = "<table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td style='background-repeat:no-repeat;' background='" + imgData.ImageURL + "' bgcolor='#ddf3e9' width='100%' height='" + imgData.ImgHeight + "' valign='top' class='bgresize'> <!--[if gte mso 9]> <v:rect xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='background-repeat:no-repeat; width:100%;height:" + imgData.ImgHeight + ";'> <v:fill type='tile' src='" + imgData.ImageURL + "' color='#ddf3e9' /> <v:textbox inset='0,0,0,0'> <![endif]--> <div> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td width='30' align='left' valign='top' style='font-size: 0%;' class='mobile-hidden'></td> <td align='left' valign='top' class='mobile-padding'><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td align='left' valign='top' style='padding-top: 95px;color: #000000; padding-left: 100px; padding-right: 100px; font-size: 48px;' class='padding65'><span class='banner-heading55'><center>" + imgData.ImgText + "</center></span></td> </tr> </tbody> </table></td> <td width='30' align='left' valign='top' class='mobile-hidden' style='font-size: 0%;'></td> </tr> </tbody> </table> </div> <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]--> </td> </tr> </tbody> </table>";

let saveData = () => {


    imgData.ImgHeight = document.getElementById('ImgHeight').value;
    imgData.ImageURL = document.getElementById('ImageURL').value;

    imgData.ImgText = quill.root.innerHTML

    

        let content = "<table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td style='background-repeat:no-repeat;' background='" + imgData.ImageURL + "' bgcolor='#ddf3e9' width='100%' height='" + imgData.ImgHeight + "' valign='top' class='bgresize'> <!--[if gte mso 9]> <v:rect xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='background-repeat:no-repeat; width:100%;height:" + imgData.ImgHeight + ";'> <v:fill type='tile' src='" + imgData.ImageURL + "' color='#ddf3e9' /> <v:textbox inset='0,0,0,0'> <![endif]--> <div> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td width='30' align='left' valign='top' style='font-size: 0%;' class='mobile-hidden'></td> <td align='left' valign='top' class='mobile-padding'><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td align='left' valign='top' style='padding-top: 95px;color: #000000; padding-left: 100px; padding-right: 100px; font-size: 48px;' class='padding65'><span class='banner-heading55'><center>" + imgData.ImgText + "</center></span></td> </tr> </tbody> </table></td> <td width='30' align='left' valign='top' class='mobile-hidden' style='font-size: 0%;'></td> </tr> </tbody> </table> </div> <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]--> </td> </tr> </tbody> </table>";


        sdk.setSuperContent(defaultContent);
        sdk.setContent(content);
   

    console.log(JSON.stringify(imgData));
}

let fetchData = () => {



    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            imgData = data;


            document.getElementById('ImgHeight').value = imgData.ImgHeight;
            document.getElementById('ImageURL').value = imgData.ImageURL;
            quill.root.innerHTML = imgData.ImgText;


        }
    });

    console.log(JSON.stringify(imgData));
}



window.onload = fetchData;
window.onchange = saveData;
