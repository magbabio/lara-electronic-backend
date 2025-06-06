const orderEmail = (emailData) => {

const html = `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Notificacion</title>
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
  <script src="https://kit.fontawesome.com/e3f4029a28.js" crossorigin="anonymous"></script>

  <style type="text/css">
      @media only screen and (max-width:600px) {

          p,
          ul li,
          ol li,
          a {
              font-size: 16px !important;
              line-height: 150% !important
          }

          h1 {
              font-size: 30px !important;
              text-align: center;
              line-height: 120% !important
          }

          h2 {
              font-size: 26px !important;
              text-align: center;
              line-height: 120% !important
          }

          h3 {
              font-size: 20px !important;
              text-align: center;
              line-height: 120% !important
          }

          h1 a {
              font-size: 30px !important
          }

          h2 a {
              font-size: 26px !important
          }

          h3 a {
              font-size: 20px !important
          }

          .es-menu td a {
              font-size: 16px !important
          }

          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
              font-size: 16px !important
          }

          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
              font-size: 16px !important
          }

          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
              font-size: 12px !important
          }

          *[class="gmail-fix"] {
              display: none !important
          }

          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
              text-align: center !important
          }

          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
              text-align: right !important
          }

          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
              text-align: left !important
          }

          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
              display: inline !important
          }

          .es-button-border {
              display: block !important
          }

          a.es-button {
              font-size: 20px !important;
              display: block !important;
              border-width: 15px 25px 15px 25px !important
          }

          .es-btn-fw {
              border-width: 10px 0px !important;
              text-align: center !important
          }

          .es-adaptive table,
          .es-btn-fw,
          .es-btn-fw-brdr,
          .es-left,
          .es-right {
              width: 100% !important
          }

          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
              width: 100% !important;
              max-width: 600px !important
          }

          .es-adapt-td {
              display: block !important;
              width: 100% !important
          }

          .adapt-img {
              width: 100% !important;
              height: auto !important
          }

          .es-m-p0 {
              padding: 0px !important
          }

          .es-m-p0r {
              padding-right: 0px !important
          }

          .es-m-p0l {
              padding-left: 0px !important
          }

          .es-m-p0t {
              padding-top: 0px !important
          }

          .es-m-p0b {
              padding-bottom: 0 !important
          }

          .es-m-p20b {
              padding-bottom: 20px !important
          }

          .es-mobile-hidden,
          .es-hidden {
              display: none !important
          }

          .es-desk-hidden {
              display: table-row !important;
              width: auto !important;
              overflow: visible !important;
              float: none !important;
              max-height: inherit !important;
              line-height: inherit !important
          }

          .es-desk-menu-hidden {
              display: table-cell !important
          }

          table.es-table-not-adapt,
          .esd-block-html table {
              width: auto !important
          }

          table.es-social {
              display: inline-block !important
          }

          table.es-social td {
              display: inline-block !important
          }
      }

      #outlook a {
          padding: 0;
      }

      .ExternalClass {
          width: 100%;
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
          line-height: 100%;
      }

      .es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
      }

      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }

      .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
      }
  </style>
</head>

<body
  style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
  <div class="es-wrapper-color" style="background-color:#F4F4F4;">
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">
          <tr class="gmail-fix" height="0" style="border-collapse:collapse;">
              <td style="padding:0;Margin:0;">
                  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                      <tr style="border-collapse:collapse;">
                          <td cellpadding="0" cellspacing="0" border="0"
                              style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0"><img
                                  src="https://esputnik.com/repository/applications/images/blank.gif"
                                  style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px;"
                                  alt="Logo" width="600" height="1"></td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr style="border-collapse:collapse;">
              <td valign="top" style="padding:0;Margin:0;">
                  <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
                      <tr style="border-collapse:collapse;"></tr>
                      <tr style="border-collapse:collapse;">
                          <td align="center" style="padding:0;Margin:0;">
                              <table class="es-content-body"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                  width="600" cellspacing="0" cellpadding="0" align="center">
                                  <tr style="border-collapse:collapse;">
                                      <td align="left"
                                          style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px;">
                                          <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="282" align="left" style="padding:0;Margin:0;">
                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                          <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="278" align="left" style="padding:0;Margin:0;">
                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                          <tr style="border-collapse:collapse;">
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
                  <table class="es-header" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#0947fa;background-repeat:repeat;background-position:center top;">
                      <tr style="border-collapse:collapse;">
                          <td align="center" style="padding:0;Margin:0;">
                              <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;">
                                  <tr style="border-collapse:collapse;">
                                      <td align="left"
                                          style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                          <table width="100%" cellspacing="0" cellpadding="0"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="580" valign="top" align="center"
                                                      style="padding:0;Margin:0;">
                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                          <tr style="border-collapse:collapse;">
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
                  <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
                      <tr style="border-collapse:collapse;">
                          <td style="padding:0;Margin:0;background-color:#0947fa;" bgcolor="#0947fa" align="center">
                              <table class="es-content-body"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                  width="600" cellspacing="0" cellpadding="0" align="center">
                                  <tr style="border-collapse:collapse;">
                                      <td align="left" style="padding:0;Margin:0;">
                                          <table width="100%" cellspacing="0" cellpadding="0"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="600" valign="top" align="center"
                                                      style="padding:0;Margin:0;">
                                                      <table
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:0px; border-top-right-radius: 4px;border-top-left-radius: 4px;"
                                                          width="100%" cellspacing="0" cellpadding="0"
                                                          bgcolor="#ffffff">
                                                          <tr style="border-collapse:collapse;">
                                                              <td align="center"
                                                                  style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px;">
                                                              </td>
                                                              <td align="center"
                                                                  style="Margin:0;padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:35px;">
                                                                  <h1
                                                                      style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:32px;font-style:normal;font-weight:normal;color:#111111;">
                                                                      ${emailData.title}</h1>
                                                              </td>
                                                              <td align="center"
                                                                  style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px;">
                                                                  <img
                                                                      src="https://live.staticflickr.com/65535/53504964126_aa86e6f0c4_b.jpg"
                                                                      style="width: 110px; height: 50px;" alt="Logo"
                                                                      width="100%" height="100%">
                                                              </td>
                                                          </tr>
                                                          <tr style="border-collapse:collapse;">
                                                              <td bgcolor="#ffffff" align="center"
                                                                  style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;">
                                                                  <table width="100%" height="100%" cellspacing="0"
                                                                      cellpadding="0" border="0"
                                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                                      <tr style="border-collapse:collapse;">
                                                                          <td
                                                                              style="padding:0;Margin:0px;border-bottom:1px solid #FFFFFF;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;">
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
                  <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
                      <tr style="border-collapse:collapse;">
                          <td align="center" style="padding:0;Margin:0;">
                              <table class="es-content-body"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                  width="600" cellspacing="0" cellpadding="0" align="center">
                                  <tr style="border-collapse:collapse;">
                                      <td align="left" style="padding:0;Margin:0;">
                                          <table width="100%" cellspacing="0" cellpadding="0"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="600" valign="top" align="center"
                                                      style="padding:0;Margin:0;">
                                                      <table
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF;"
                                                          width="100%" cellspacing="0" cellpadding="0"
                                                          bgcolor="#ffffff">
                                                          <tr style="border-collapse:collapse;">
                                                              <td class="es-m-txt-l" bgcolor="#ffffff" align="left"
                                                                  style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px;">
                                                                  <p
                                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666; text-align: justify;">
                                                                      Estimado cliente <b style="text-transform: uppercase;">${emailData.customerName}</b>, se le indica que se generó una notificación de orden
                                                                      que corresponde al servicio de reparación solicitado. Cualquier duda e inquietud notificar por esta vía o a través de nuestros números
                                                                      de teléfono                                                               
                                                                  </p>
                                                                  <p
                                                                  style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666; text-align: justify;">
                                                                  ${emailData.companyPhone}
                                                                  </p>
                                                              </td>
                                                          </tr>                                                      
                                                          <tr style="border-collapse:collapse;">
                                                              <td class="es-m-txt-l" align="left"
                                                                  style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px;">
                                                                  <p
                                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;">
                                                                      Departamento de Administración </p>

                                                                  <p
                                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;">
                                                                      ${emailData.companyName} </p>                                                              
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
                  <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
                      <tr style="border-collapse:collapse;">
                          <td align="center" style="padding:0;Margin:0;">
                              <table class="es-content-body"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                  width="600" cellspacing="0" cellpadding="0" align="center">
                                  <tr style="border-collapse:collapse;">
                                      <td align="left" style="padding:0;Margin:0;">
                                          <table width="100%" cellspacing="0" cellpadding="0"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="600" valign="top" align="center"
                                                      style="padding:0;Margin:0;">
                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                          <tr style="border-collapse:collapse;">
                                                              <td align="center"
                                                                  style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;">
                                                                  <table width="100%" height="100%" cellspacing="0"
                                                                      cellpadding="0" border="0"
                                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                                      <tr style="border-collapse:collapse;">
                                                                          <td
                                                                              style="padding:0;Margin:0px;border-bottom:1px solid #F4F4F4;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;">
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>

                  <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
                      <tr style="border-collapse:collapse;">
                          <td align="center" style="padding:0;Margin:0;">
                              <table class="es-content-body"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                  width="600" cellspacing="0" cellpadding="0" align="center">
                                  <tr style="border-collapse:collapse;">
                                      <td align="left"
                                          style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;">
                                          <table width="100%" cellspacing="0" cellpadding="0"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                              <tr style="border-collapse:collapse;">
                                                  <td width="560" valign="top" align="center"
                                                      style="padding:0;Margin:0;">
                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                                          <tr style="border-collapse:collapse;">
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </div>
</body>

</html>

`;

return html;

}

module.exports = {
 orderEmail: orderEmail
};