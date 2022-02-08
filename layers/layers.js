var wms_layers = [];

var format_DOUARZO_0 = new ol.format.GeoJSON();
var features_DOUARZO_0 = format_DOUARZO_0.readFeatures(json_DOUARZO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOUARZO_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOUARZO_0.addFeatures(features_DOUARZO_0);
var lyr_DOUARZO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DOUARZO_0, 
                style: style_DOUARZO_0,
                interactive: true,
                title: '<img src="styles/legend/DOUARZO_0.png" /> DOUAR ZO'
            });
var format_place_1 = new ol.format.GeoJSON();
var features_place_1 = format_place_1.readFeatures(json_place_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_place_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_place_1.addFeatures(features_place_1);
var lyr_place_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_place_1, 
                style: style_place_1,
                interactive: true,
                title: '<img src="styles/legend/place_1.png" /> place'
            });

        var lyr_GooglecnSatellite_2 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Districtecopier_3 = new ol.format.GeoJSON();
var features_Districtecopier_3 = format_Districtecopier_3.readFeatures(json_Districtecopier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtecopier_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtecopier_3.addFeatures(features_Districtecopier_3);
var lyr_Districtecopier_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districtecopier_3, 
                style: style_Districtecopier_3,
                interactive: true,
    title: 'Districte copier<br />\
    <img src="styles/legend/Districtecopier_3_0.png" /> Districte Hassi Mameche<br />\
    <img src="styles/legend/Districtecopier_3_1.png" /> Districte Mostaganem<br />\
    <img src="styles/legend/Districtecopier_3_2.png" /> Non Inscrite<br />\
    <img src="styles/legend/Districtecopier_3_3.png" /> Districte Sidi Ali<br />\
    <img src="styles/legend/Districtecopier_3_4.png" /> <br />'
        });
var format_Commune_4 = new ol.format.GeoJSON();
var features_Commune_4 = format_Commune_4.readFeatures(json_Commune_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_4.addFeatures(features_Commune_4);
var lyr_Commune_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_4, 
                style: style_Commune_4,
                interactive: true,
                title: '<img src="styles/legend/Commune_4.png" /> Commune'
            });
var group_ZODOUAR = new ol.layer.Group({
                                layers: [lyr_DOUARZO_0,lyr_place_1,],
                                title: "ZO DOUAR"});

lyr_DOUARZO_0.setVisible(true);lyr_place_1.setVisible(true);lyr_GooglecnSatellite_2.setVisible(true);lyr_Districtecopier_3.setVisible(true);lyr_Commune_4.setVisible(true);
var layersList = [group_ZODOUAR,lyr_GooglecnSatellite_2,lyr_Districtecopier_3,lyr_Commune_4];
lyr_DOUARZO_0.set('fieldAliases', {'Habit': 'Habit', 'Foy': 'Foy', 'Surf': 'Surf', 'Dist': 'Dist', 'Long': 'Long', 'Lat': 'Lat', 'Nom': 'Nom', 'Num': 'Num', 'Commun': 'Commun', 'NumComm': 'NumComm', });
lyr_place_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'place': 'place', 'surface': 'surface', 'landuse': 'landuse', 'name:ar': 'name:ar', 'name:fr': 'name:fr', 'name:en': 'name:en', 'population': 'population', });
lyr_Districtecopier_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'District': 'District', });
lyr_Commune_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'district': 'district', });
lyr_DOUARZO_0.set('fieldImages', {'Habit': 'TextEdit', 'Foy': 'TextEdit', 'Surf': 'TextEdit', 'Dist': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Nom': 'TextEdit', 'Num': 'TextEdit', 'Commun': 'TextEdit', 'NumComm': 'TextEdit', });
lyr_place_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'name': '', 'place': '', 'surface': '', 'landuse': '', 'name:ar': '', 'name:fr': '', 'name:en': '', 'population': '', });
lyr_Districtecopier_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'District': 'ValueMap', });
lyr_Commune_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'district': '', });
lyr_DOUARZO_0.set('fieldLabels', {});
lyr_place_1.set('fieldLabels', {});
lyr_Districtecopier_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'District': 'no label', });
lyr_Commune_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'inline label', 'visibility': 'header label', 'drawOrder': 'no label', 'icon': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'district': 'no label', });
lyr_Commune_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});