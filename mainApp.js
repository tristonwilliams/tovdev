// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK

let imgData = {
   
    ImageURL: 'http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png',
    ImgHeight: 300,
    ImgWidth: 600,
    Text: 'Text Over Image',

};


let defaultContent = '<img src="https://dj-gmaps-sfmc-content-nlock.herokuapp.com//dragIcon.png" style="display:block;margin-left:auto;margin-right:auto">';

let saveData = () => {

    imgData.ImgWidth = document.getElementById('ImgWidth').value;
    imgData.ImgHeight = document.getElementById('ImgHeight').value;
    imgData.ImageURL = document.getElementById('ImageURL').value;
    //imgData.Text = document.getElementById('Text').value;


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
           // document.getElementById('Text').value = imgData.Text;

           
        }
    });

    console.log(JSON.stringify(imgData));
}



window.onload = fetchData;
window.onchange = saveData;
