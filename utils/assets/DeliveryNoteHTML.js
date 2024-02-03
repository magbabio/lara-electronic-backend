const deliveryNote = (order) => {

  const contentHtml = `

<!DOCTYPE html><!--[if IE]>  <html class="stl_ie"> <![endif]-->
<html>
	<head>
		<meta charset="utf-8" />
		<title>
		</title>
		
	<STYLE>
.stl_ sup {
	vertical-align: baseline;
	position: relative;
	top: -0.4em;
}
.stl_ sub {
	vertical-align: baseline;
	position: relative;
	top: 0.4em;
}
.stl_ a:link {text-decoration:none;}
.stl_ a:visited {text-decoration:none;}
@media screen and (min-device-pixel-ratio:0), (-webkit-min-device-pixel-ratio:0), (min--moz-device-pixel-ratio: 0) {.stl_view{ font-size:10em; transform:scale(0.1); -moz-transform:scale(0.1); -webkit-transform:scale(0.1); -moz-transform-origin:top left; -webkit-transform-origin:top left; } }
.stl_layer { }.stl_ie { font-size: 1pt; }
.stl_ie body { font-size: 12em; }
@media print{.stl_view {font-size:1em; transform:scale(1);}}
.stl_grlink { position:relative;width:100%;height:100%;z-index:1000000; }
.stl_01 {
	position: absolute;
	white-space: nowrap;
}
.stl_02 {
	font-size: 1em;
	line-height: 0.0em;
	width: 51em;
	height: 66em;
	border-style: none;
	display: block;
	margin: 0em;
}

@supports(-ms-ime-align:auto) { .stl_02 {overflow: hidden;}}
.stl_03 {
	position: relative;
}
.stl_04 {
	position: absolute;
	pointer-events: none;
	clip: rect(8.12em,48.17em,21.52583em,2.838333em);
	width: 100%;
}
.stl_05 {
	position: relative;
	width: 51em;
}
.stl_06 {
	height: 6.6em;
}
.stl_ie .stl_06 {
	height: 66em;
}
@font-face {
	font-family:"EHTECS+Arial Bold";
}
.stl_07 {
	font-size: 0.92em;
	font-family: "EHTECS+Arial Bold";
	color: #000000;
}
.stl_08 {
	line-height: 1.117188em;
}
.stl_09 {
	letter-spacing: -0.0019em;
}

.stl_ie .stl_09 {
	letter-spacing: -0.0277px;
}
@font-face {
	font-family:"APNQNR+Arial";
}
.stl_10 {
	font-size: 0.92em;
	font-family: "APNQNR+Arial";
	color: #000000;
}
.stl_11 {
	letter-spacing: -0.0021em;
}

.stl_ie .stl_11 {
	letter-spacing: -0.0304px;
}
.stl_12 {
	letter-spacing: -0.0016em;
}

.stl_ie .stl_12 {
	letter-spacing: -0.0236px;
}
.stl_13 {
	letter-spacing: -0.0022em;
}

.stl_ie .stl_13 {
	letter-spacing: -0.0321px;
}
.stl_14 {
	letter-spacing: -0.0026em;
}

.stl_ie .stl_14 {
	letter-spacing: -0.0386px;
}
.stl_15 {
	letter-spacing: -0.0017em;
}

.stl_ie .stl_15 {
	letter-spacing: -0.025px;
}
.stl_16 {
	letter-spacing: -0.0031em;
}

.stl_ie .stl_16 {
	letter-spacing: -0.0449px;
}
.stl_17 {
	letter-spacing: -0.002em;
}

.stl_ie .stl_17 {
	letter-spacing: -0.0288px;
}
.stl_18 {
	letter-spacing: -0.0024em;
}

.stl_ie .stl_18 {
	letter-spacing: -0.0349px;
}
.stl_19 {
	letter-spacing: -0.0014em;
}

.stl_ie .stl_19 {
	letter-spacing: -0.0204px;
}

</STYLE>
</head>
	<body>
		<div class="stl_ stl_02">
			<div class="stl_03">
				<img src="" alt="" class="stl_04" />
			</div>
			<div class="stl_view">
				<div class="stl_05 stl_06">
					<div class="stl_01" style="left:21.9842em;top:3.0271em;"><span class="stl_07 stl_08 stl_09" style="word-spacing:0.0063em;">Nota de Entrega &nbsp;</span></div>
					<div class="stl_01" style="left:20.8642em;top:4.7472em;"><span class="stl_10 stl_08 stl_11" style="word-spacing:0.0047em;">Nro. De Orden ${order.number} &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:8.1888em;"><span class="stl_10 stl_08 stl_12" style="word-spacing:0.0032em;">Cliente: ${order.Customer.document_type}${order.Customer.document_number} ${order.Customer.first_name} ${order.Customer.last_name} &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:9.2488em;"><span class="stl_10 stl_08 stl_12" style="word-spacing:0.0096em;">Teléfono: ${order.Customer.phone} &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:10.2988em;"><span class="stl_10 stl_08 stl_13" style="word-spacing:0.0055em;">Dirección: ${order.Customer.address} &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:13.0788em;"><span class="stl_10 stl_08 stl_14" style="word-spacing:0.0136em;">Equipo: IMPRESORA &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:14.1288em;"><span class="stl_10 stl_08 stl_15" style="word-spacing:0.0107em;">Modelo: D530 &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:15.1788em;"><span class="stl_10 stl_08 stl_16" style="word-spacing:0.0144em;">Marca: CANON &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:16.2388em;"><span class="stl_10 stl_08 stl_17" style="word-spacing:0.0122em;">Serial: WCL64475 &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:17.2888em;"><span class="stl_10 stl_08 stl_18" style="word-spacing:0.0031em;">Concepto de reparación: BISAGRA PARTIDA MNTTO &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:18.3488em;"><span class="stl_10 stl_08 stl_19" style="word-spacing:-0.001em;">Observaciones: Algunas observaciones &nbsp;</span></div>
					<div class="stl_01" style="left:3em;top:20.4513em;"><span class="stl_10 stl_08 stl_11" style="word-spacing:0.0032em;">Costo de reparación: 100$ &nbsp;</span></div>
				</div>
			</div>
		</div>
	</body>
</html>

`
return contentHtml;

}

module.exports = {
  deliveryNote: deliveryNote,
};
