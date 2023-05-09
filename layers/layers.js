var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Refernciescadastralsteulades2000m2_1 = new ol.format.GeoJSON();
var features_Refernciescadastralsteulades2000m2_1 = format_Refernciescadastralsteulades2000m2_1.readFeatures(json_Refernciescadastralsteulades2000m2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refernciescadastralsteulades2000m2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refernciescadastralsteulades2000m2_1.addFeatures(features_Refernciescadastralsteulades2000m2_1);
var lyr_Refernciescadastralsteulades2000m2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refernciescadastralsteulades2000m2_1, 
                style: style_Refernciescadastralsteulades2000m2_1,
                interactive: true,
                title: '<img src="styles/legend/Refernciescadastralsteulades2000m2_1.png" /> Referències cadastrals teulades +2.000 m2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Refernciescadastralsteulades2000m2_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Refernciescadastralsteulades2000m2_1];
lyr_Refernciescadastralsteulades2000m2_1.set('fieldAliases', {'id': 'id', 'Àrea': 'Àrea', });
lyr_Refernciescadastralsteulades2000m2_1.set('fieldImages', {'id': 'TextEdit', 'Àrea': 'TextEdit', });
lyr_Refernciescadastralsteulades2000m2_1.set('fieldLabels', {'id': 'no label', 'Àrea': 'no label', });
lyr_Refernciescadastralsteulades2000m2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});