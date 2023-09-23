ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([395491.186472, 4079463.760306, 397182.403141, 4080430.018640]);
var wms_layers = [];

var format_230803_0 = new ol.format.GeoJSON();
var features_230803_0 = format_230803_0.readFeatures(json_230803_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_230803_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230803_0.addFeatures(features_230803_0);
var lyr_230803_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230803_0, 
                style: style_230803_0,
                interactive: true,
                title: '230803'
            });
var format_230810_1 = new ol.format.GeoJSON();
var features_230810_1 = format_230810_1.readFeatures(json_230810_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_230810_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230810_1.addFeatures(features_230810_1);
var lyr_230810_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230810_1, 
                style: style_230810_1,
                interactive: true,
                title: '230810'
            });
var format_230818_2 = new ol.format.GeoJSON();
var features_230818_2 = format_230818_2.readFeatures(json_230818_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_230818_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230818_2.addFeatures(features_230818_2);
var lyr_230818_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230818_2, 
                style: style_230818_2,
                interactive: true,
                title: '230818'
            });
var format_230830_3 = new ol.format.GeoJSON();
var features_230830_3 = format_230830_3.readFeatures(json_230830_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_230830_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230830_3.addFeatures(features_230830_3);
var lyr_230830_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230830_3, 
                style: style_230830_3,
                interactive: true,
                title: '230830'
            });
var format_230919_4 = new ol.format.GeoJSON();
var features_230919_4 = format_230919_4.readFeatures(json_230919_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_230919_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230919_4.addFeatures(features_230919_4);
var lyr_230919_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230919_4, 
                style: style_230919_4,
                interactive: true,
                title: '230919'
            });
var lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/ortofoto2016",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofotografia_2016_rgb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofografia de Andalucía 2016 Color RGB (0.50m Pixel / 0.25m Pixel)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_5, 0]);
var lyr_Catastro_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?SRS%3DEPS%0AG:23029%26bbox%3D511950,4662900,512150,4663100%26width%3D756%26heig%0Aht%3D756%26transparent%3DNo%26layers%3Dcatastro",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_6, 0]);
var lyr_ToponmiadelosNucleosdePoblacin_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ideandalucia.es/wms/dea100_toponimia",
    attributions: ' ',
                              params: {
                                "LAYERS": "Toponimia_nucleos_poblacion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Toponímia  de los Nucleos de Población",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ToponmiadelosNucleosdePoblacin_7, 0]);
var format_03_01_Rio_8 = new ol.format.GeoJSON();
var jsonSource_03_01_Rio_8 = new ol.source.Vector({
    attributions: ' ',
    format: format_03_01_Rio_8
});var lyr_03_01_Rio_8 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_03_01_Rio_8, 
    style: style_03_01_Rio_8,
    interactive: true,
    title: "03_01_Rio"
});

function get03_01_Rio_8Json(geojson) {
    var features_03_01_Rio_8 = format_03_01_Rio_8.readFeatures(geojson);
    jsonSource_03_01_Rio_8.addFeatures(features_03_01_Rio_8);
}
var group_SEPTIEMBRE2023 = new ol.layer.Group({
                                layers: [lyr_230919_4,],
                                title: "SEPTIEMBRE 2023"});
var group_AGOSTO2023 = new ol.layer.Group({
                                layers: [lyr_230803_0,lyr_230810_1,lyr_230818_2,lyr_230830_3,],
                                title: "AGOSTO2023"});

lyr_230803_0.setVisible(true);lyr_230810_1.setVisible(true);lyr_230818_2.setVisible(true);lyr_230830_3.setVisible(true);lyr_230919_4.setVisible(true);lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_5.setVisible(true);lyr_Catastro_6.setVisible(true);lyr_ToponmiadelosNucleosdePoblacin_7.setVisible(true);lyr_03_01_Rio_8.setVisible(true);
var layersList = [group_AGOSTO2023,group_SEPTIEMBRE2023,lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_5,lyr_Catastro_6,lyr_ToponmiadelosNucleosdePoblacin_7,lyr_03_01_Rio_8];
lyr_230803_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr_230810_1.set('fieldAliases', {'fid': 'fid', });
lyr_230818_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr_230830_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr_230919_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr_03_01_Rio_8.set('fieldAliases', {'id_dera': 'id_dera', 'codigo': 'codigo', 'nombre': 'nombre', 'categoria': 'categoria', 'desc_cat': 'desc_cat', });
lyr_230803_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'DateTime', 'Images': 'TextEdit', });
lyr_230810_1.set('fieldImages', {'fid': '', });
lyr_230818_2.set('fieldImages', {'fid': '', 'ID': '', 'Name': '', 'Date': '', 'Time': '', 'Lon': '', 'Lat': '', 'Altitude': '', 'North': '', 'Azimuth': '', 'Cam. Maker': '', 'Cam. Model': '', 'Title': '', 'Comment': '', 'Path': '', 'RelPath': '', 'Timestamp': '', 'Images': '', });
lyr_230830_3.set('fieldImages', {'fid': '', 'ID': '', 'Name': '', 'Date': '', 'Time': '', 'Lon': '', 'Lat': '', 'Altitude': '', 'North': '', 'Azimuth': '', 'Cam. Maker': '', 'Cam. Model': '', 'Title': '', 'Comment': '', 'Path': '', 'RelPath': '', 'Timestamp': '', 'Images': '', });
lyr_230919_4.set('fieldImages', {'fid': '', 'ID': '', 'Name': '', 'Date': '', 'Time': '', 'Lon': '', 'Lat': '', 'Altitude': '', 'North': '', 'Azimuth': '', 'Cam. Maker': '', 'Cam. Model': '', 'Title': '', 'Comment': '', 'Path': '', 'RelPath': '', 'Timestamp': '', 'Images': '', });
lyr_03_01_Rio_8.set('fieldImages', {'id_dera': 'TextEdit', 'codigo': 'Range', 'nombre': 'TextEdit', 'categoria': 'TextEdit', 'desc_cat': 'TextEdit', });
lyr_230803_0.set('fieldLabels', {});
lyr_230810_1.set('fieldLabels', {});
lyr_230818_2.set('fieldLabels', {});
lyr_230830_3.set('fieldLabels', {});
lyr_230919_4.set('fieldLabels', {});
lyr_03_01_Rio_8.set('fieldLabels', {'id_dera': 'no label', 'codigo': 'no label', 'nombre': 'no label', 'categoria': 'no label', 'desc_cat': 'no label', });
lyr_03_01_Rio_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});