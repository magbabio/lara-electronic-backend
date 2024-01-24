const orderDocument = (order) => {

	// receiptDate = order.receipt_date;

	// const [date, hour] = receiptDate.split(' ');
	// const [year, month, day] = date.split('-');

	// const receiptDate = `${day}-${month}-${year}`;

	let counter = 0; // Contador para el incremento del valor top
	let equipmentHtml = order.Equipment.map((equipment, index) => {
		const topValue = 26.7313 + (counter * 14); // Cálculo del valor top para cada elemento
		const html = `
			<div class="equipment">
				<div class="stl_01" style="left:3em;top:${topValue}em;"><span class="stl_07 stl_08 stl_25" style="word-spacing:0.0128em;">Equipo: ${equipment.description} &nbsp;</span></div>
				<div class="stl_01" style="left:3em;top:${topValue + 2}em;"><span class="stl_07 stl_08 stl_26" style="word-spacing:0.0128em;">Modelo: ${equipment.model} &nbsp;</span></div>
				<div class="stl_01" style="left:3em;top:${topValue + 4}em;"><span class="stl_07 stl_08 stl_27" style="word-spacing:0.0128em;">Marca: ${equipment.brand} &nbsp;</span></div>
				<div class="stl_01" style="left:3em;top:${topValue + 6}em;"><span class="stl_07 stl_08 stl_28" style="word-spacing:0.0128em;">Serial: ${equipment.serial} &nbsp;</span></div>
				<div class="stl_01" style="left:3em;top:${topValue + 8}em;"><span class="stl_07 stl_08 stl_29" style="word-spacing:0.0128em;">Concepto de reparación: ${equipment.repair_concept} &nbsp;</span></div>
				<div class="stl_01" style="left:3em;top:${topValue + 10}em;"><span class="stl_07 stl_08 stl_30" style="word-spacing:0.0128em;">Observaciones: ${equipment.observations} &nbsp;</span></div>
				<div class="stl_01" style="left:3em;top:${topValue + 12}em;"><span class="stl_07 stl_08 stl_21" style="word-spacing:0.0128em;">Revisión: 3$ &nbsp;</span></div>
			</div>
		`;
		counter++; // Incremento del contador para el próximo elemento
		return html;
	}).join('');
	
	// Agregar elementos adicionales después del bucle
	equipmentHtml += `
		<div class="stl_01" style="left:3em;top:${counter * 14 + 29.363}em;"><span class="stl_07 stl_08 stl_24" style="word-spacing:0.0007em;">NOTAS: 1.- GARANTÍA REPARACIÓN 30 DÍAS. &nbsp;</span></div>
		<div class="stl_01" style="left:6.472em;top:${counter * 14 + 31.173}em;"><span class="stl_07 stl_08 stl_25" style="word-spacing:0.0024em;">2.- NO RESPONDEMOS POR EQUIPOS DEJADOS ACÁ POR MÁS DE 45 DÍAS &nbsp;</span></div>
		<div class="stl_01" style="left:3em;top:${counter * 14 + 33.733}em;"><span class="stl_07 stl_08 stl_10">------------------------------------ &nbsp;</span></div>
		<div class="stl_01" style="left:5.302em;top:${counter * 14 + 35.5355}em;"><span class="stl_07 stl_08 stl_20" style="word-spacing:0.0052em;">Firma Conforme &nbsp;</span></div>
	`;
	
	// Agregar 2 espacios adicionales al último valor de top
	equipmentHtml += `
		<div style="height: ${counter * 14 + 50.5355}em;"></div>
	`;

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
		clip: rect(2.958333em,48.17em,42.4575em,2.838333em);
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
		font-family:"TBWJWB+Arial";
	}
	.stl_07 {
		font-size: 0.92em;
		font-family: "TBWJWB+Arial";
		color: #000000;
	}
	.stl_08 {
		line-height: 1.117188em;
	}
	.stl_09 {
		letter-spacing: -0.0032em;
	}
	
	.stl_ie .stl_09 {
		letter-spacing: -0.0468px;
	}
	.stl_10 {
		letter-spacing: -0.0016em;
	}
	
	.stl_ie .stl_10 {
		letter-spacing: -0.0234px;
	}
	.stl_11 {
		font-size: 0.75em;
		font-family: "TBWJWB+Arial";
		color: #000000;
	}
	.stl_12 {
		letter-spacing: 0.0003em;
	}
	
	.stl_ie .stl_12 {
		letter-spacing: 0.0039px;
	}
	@font-face {
		font-family:"UKVNDD+Arial Bold";
	}
	.stl_13 {
		font-size: 1.17em;
		font-family: "UNPMKH+Arial Bold";
		color: #000000;
	}
	.stl_14 {
		letter-spacing: -0.0019em;
	}
	
	.stl_ie .stl_14 {
		letter-spacing: -0.0356px;
	}
	.stl_15 {
		letter-spacing: -0.0021em;
	}
	
	.stl_ie .stl_15 {
		letter-spacing: -0.0316px;
	}
	.stl_16 {
		letter-spacing: -0.0044em;
	}
	
	.stl_ie .stl_16 {
		letter-spacing: -0.0645px;
	}
	.stl_17 {
		letter-spacing: 0.0001em;
	}
	
	.stl_ie .stl_17 {
		letter-spacing: 0.0013px;
	}
	.stl_18 {
		letter-spacing: -0.002em;
	}
	
	.stl_ie .stl_18 {
		letter-spacing: -0.03px;
	}
	.stl_19 {
		letter-spacing: -0.0017em;
	}
	
	.stl_ie .stl_19 {
		letter-spacing: -0.0245px;
	}
	.stl_20 {
		letter-spacing: -0.0026em;
	}
	
	.stl_ie .stl_20 {
		letter-spacing: -0.0386px;
	}
	.stl_21 {
		letter-spacing: -0.0031em;
	}
	
	.stl_ie .stl_21 {
		letter-spacing: -0.0449px;
	}
	.stl_22 {
		letter-spacing: -0.0024em;
	}
	
	.stl_ie .stl_22 {
		letter-spacing: -0.0349px;
	}
	.stl_23 {
		letter-spacing: -0.0022em;
	}
	
	.stl_ie .stl_23 {
		letter-spacing: -0.0329px;
	}
	.stl_24 {
		letter-spacing: -0.0018em;
	}
	
	.stl_ie .stl_24 {
		letter-spacing: -0.0262px;
	}
	.stl_25 {
		letter-spacing: -0.0023em;
	}
	
	.stl_ie .stl_25 {
		letter-spacing: -0.034px;
	}
	
	</STYLE>
	</head>
		<body>
			<div class="stl_ stl_02">
				<div class="stl_03">
				</div>
				<div class="stl_view">
					<div class="stl_05 stl_06">
						<div class="stl_01" style="left:19.5542em;top:4.8271em;"><span class="stl_07 stl_08 stl_09" style="word-spacing:0.0086em;">${order.Company.name} &nbsp;</span></div>
						<div class="stl_01" style="left:19.5542em;top:6.6388em;"><span class="stl_07 stl_08 stl_10" style="word-spacing:0.0027em;">${order.Company.address} &nbsp;</span></div>
						<div class="stl_01" style="left:19.5542em;top:8.4427em;"><span class="stl_11 stl_08 stl_12" style="word-spacing:0.0014em;">TELÉFONOS ${order.Company.phone} &nbsp;</span></div>
						<div class="stl_01" style="left:30.8558em;top:11.8425em;"><span class="stl_13 stl_08 stl_14" style="word-spacing:0.0101em;">Orden #:${order.number} &nbsp;</span></div>
						<div class="stl_01" style="left:31.8558em;top:13.9588em;"><span class="stl_07 stl_08 stl_15" style="word-spacing:0.0126em;">Fecha: ${order.receipt_date} &nbsp;</span></div>
						<div class="stl_01" style="left:32.5058em;top:15.7588em;"><span class="stl_07 stl_08 stl_16" style="word-spacing:0.0089em;">PARA REPARAR &nbsp;</span></div>
						<div class="stl_01" style="left:3em;top:19.3688em;"><span class="stl_07 stl_08 stl_15" style="word-spacing:0.0002em;">CLIENTE: ${order.Customer.document_type}${order.Customer.document_number} ${order.Customer.first_name} ${order.Customer.last_name} &nbsp;</span></div>
						<div class="stl_01" style="left:32.1401em;top:19.3688em;"><span class="stl_07 stl_08 stl_17" style="word-spacing:-0.0018em;">Tlf: ${order.Customer.phone} &nbsp;</span></div>
						<div class="stl_01" style="left:3em;top:21.1813em;"><span class="stl_07 stl_08 stl_18" style="word-spacing:0.0026em;">DIRECCIÓN: ${order.Customer.address} &nbsp;</span></div>
						<div class="stl_01" style="left:3em;top:22.9813em;"><span class="stl_07 stl_08 stl_19" style="word-spacing:0.0017em;">RECIBIDO: ${order.User.first_name} &nbsp;</span></div>}

						<div class="stl_01" style="left:3em;top:24.9313em;"><span class="stl_07 stl_08 stl_20" style="word-spacing:0.0136em;">--------------------------------------- &nbsp;</span></div>

						${equipmentHtml}
		
					</div>
				</div>
			</div>
		</body>
	</html>
	

`;

return contentHtml;

}

module.exports = {
  orderDocument: orderDocument,
};