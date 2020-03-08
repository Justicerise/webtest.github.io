var map = new AMap.Map("container", {
    zoom: 9,
    center: [114.052778,22.545278]
});

var wms  = new AMap.TileLayer.WMS({
    url:'http://localhost:8080/geoserver/webgis/wms',
        blend:false,
        tileSize:512,
        params:{'LAYERS': 'webgis:sz_dist',VERSION:'1.3.0'}
});
wms.setMap(map);

var wms1  = new AMap.TileLayer.WMS({
    url:'http://localhost:8080/geoserver/webgis/wms',
        blend:false,
        tileSize:512,
        params:{'LAYERS': 'webgis:szdist_dist_center',VERSION:'1.3.0'}
    
});
wms1.setMap(map);

AMap.plugin([
    'AMap.ToolBar',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.MapType'
],function(){
    map.addControl(new AMap.ToolBar());
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.OverView({isOpen:true}));
    map.addControl(new AMap.MapType());
});
