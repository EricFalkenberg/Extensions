[{"Owner":"djeustice","Date":"2017-11-03T14:43:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood Morning.  I_t_m new to Babylon JS and JavaScript.  When I click on the Kayak in the scene the texture changes from a peach texture to the blue wave texture_co_ which is perfect.  However the Normals seem to flip.  I have no idea why this is happening.  Should I use different code to achieve the texture change on click?  Thanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.addEventListener(_qt_DOMContentLoaded_qt__co_ function() {_lt_br /_gt_\n\t    var canvas _eq_ document.querySelector(_qt_#renderCanvas_qt_)_sm__lt_br /_gt_\n\t      // Load the BABYLON 3D engine_lt_br /_gt_\n\t    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t          // -------------------------------------------------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar createScene _eq_ function () _lt_br /_gt_\n\t{_lt_br /_gt_\n\t    // This creates a basic Babylon Scene object (non-mesh)_lt_br /_gt_\n\t    var scene _eq_ new BABYLON.Scene(engine)_sm__lt_br /_gt_\n\t    BABYLON.SceneLoader.ShowLoadingScreen _eq_ false_sm__lt_br /_gt_\n\t    scene.collisionsEnabled _eq_ true_sm__lt_br /_gt_\n\t    // glTF Files use right handed system _lt_br /_gt_\n\t    scene.useRightHandedSystem _eq_ true_sm_              _lt_br /_gt_\n\t    scene.clearColor _eq_ new BABYLON.Color3(0.99_co_ 0.99_co_ 0.99)_sm__lt_br /_gt_\n\t    scene.debugLayer.show()_sm__lt_br /_gt_\n\t    _lt_br /_gt_\n\t    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 4.712_co_ 1.571_co_ 0.05_co_ BABYLON.Vector3.Zero()_co_ scene)_sm__lt_br /_gt_\n\t    camera.setPosition(new BABYLON.Vector3(85_co_ 55_co_ -115))_sm__lt_br /_gt_\n\t    camera.attachControl(scene.getEngine().getRenderingCanvas())_sm__lt_br /_gt_\n\t    camera.minZ _eq_ 0.01_sm__lt_br /_gt_\n\t    camera.maxZ _eq_ 1000_sm__lt_br /_gt_\n\t    camera.lowerBetaLimit _eq_ 0.1_sm__lt_br /_gt_\n\t    camera.upperBetaLimit _eq_ (Math.PI / 2) * 0.99_sm_            \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // This creates a light_co_ aiming 0_co_1_co_0 - to the sky (non-mesh)_lt_br /_gt_\n\t    var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_br /_gt_\n\t    // Default intensity is 1. Let_t_s dim the light a small amount_lt_br /_gt_\n\t    light.intensity _eq_ 1_sm_             \n_lt_/p_gt_\n\n_lt_p_gt_\n\t   // Append sample glTF model to scene_lt_br /_gt_\n\t    var myKayak_sm__lt_br /_gt_\n\t    BABYLON.SceneLoader.Append(_qt_./models/_qt__co_ _qt_Kayak.gltf_qt__co_ scene_co_ function (newMeshes) {_lt_br /_gt_\n\t    }_co_ null_co_ function (newMeshes) {_lt_br /_gt_\n\t        myKayak.checkCollisions _eq_ true_sm__lt_br /_gt_\n\t        myKayak.ellipsoid _eq_ new BABYLON.Vector3(10_co_ 1_co_ 5)_sm_ _lt_br /_gt_\n\t    })_sm_    _lt_br /_gt_\n\t    \n_lt_/p_gt_\n\n_lt_p_gt_\n\t/// Click to Change Texture ///_lt_br /_gt_\n\t    var BWTexture _eq_ new BABYLON.StandardMaterial(_qt_BlueWave_qt__co_ scene)_sm__lt_br /_gt_\n\t    BWTexture.diffuseTexture _eq_ new BABYLON.Texture(_qt_models/BlueWave.png_qt__co_ scene)_sm_   _lt_br /_gt_\n\t    scene.onPointerPick _eq_ function(evt_co_ pickInfo) {_lt_br /_gt_\n\t        if(pickInfo.hit) {_lt_br /_gt_\n\t            if (pickInfo.pickedMesh !_eq_ null){_lt_br /_gt_\n\t                alert(pickInfo.pickedMesh.name)_sm__lt_br /_gt_\n\t                pickInfo.pickedMesh.material _eq_ BWTexture_sm__lt_br /_gt_\n\t            }_lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    }    \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    return scene_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_sm_     _lt_br /_gt_\n\t  // -------------------------------------------------------------_lt_br /_gt_\n\t    var scene _eq_ createScene()_sm__lt_br /_gt_\n\t    engine.runRenderLoop(function () {_lt_br /_gt_\n\t     scene.render()_sm__lt_br /_gt_\n\t    })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    window.addEventListener(_qt_resize_qt__co_ function () {_lt_br /_gt_\n\t     engine.resize()_sm__lt_br /_gt_\n\t    })_sm__lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/BeforeClick.jpg.1bb477bf72fb8d141d74cf365968d225.jpg_qt_ data-fileid_eq__qt_15530_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_BeforeClick.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15530_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/BeforeClick.jpg.1bb477bf72fb8d141d74cf365968d225.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/AfterClick.jpg.2bb1dc2c9d3213548f631cea8dea2528.jpg_qt_ data-fileid_eq__qt_15531_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_AfterClick.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15531_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/AfterClick.jpg.2bb1dc2c9d3213548f631cea8dea2528.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-03T16:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou problem comes from the fact that the new material does not have all properties set accordingly to the new one\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this case the backFaceCulling seems different _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"djeustice","Date":"2017-11-03T22:48:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCould you please give an example of what the properties might be?  The Kayak.gltf is a model I exported from 3DS Max.  It only has 1 texture in the diffuse slot.  I tested the texture change on a procedural Babylon sphere and it works fine.  How should I modify the material properties on the Kayak.gltf?  Thank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTexture Change works on procedural sphere_co_ but not kayak.gltf_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar createScene _eq_ function () _lt_br /_gt_\n\t{          \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var sphere1 _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere1_qt__co_ 10.0_co_ 9.0_co_ scene)_sm__lt_br /_gt_\n\t    var Lime _eq_ new BABYLON.StandardMaterial(_qt_Lime_qt__co_ scene)_sm__lt_br /_gt_\n\t    Lime.diffuseTexture _eq_ new BABYLON.Texture(_qt_models/Lime.png_qt__co_ scene)_sm__lt_br /_gt_\n\t    sphere1.material _eq_ Lime_sm_   \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var BWTexture _eq_ new BABYLON.StandardMaterial(_qt_BlueWave_qt__co_ scene)_sm__lt_br /_gt_\n\t    BWTexture.diffuseTexture _eq_ new BABYLON.Texture(_qt_models/BlueWave.png_qt__co_ scene)_sm_   _lt_br /_gt_\n\t    _lt_br /_gt_\n\t    scene.onPointerPick _eq_ function(evt_co_ pickInfo) {_lt_br /_gt_\n\t        if(pickInfo.hit) {_lt_br /_gt_\n\t            if (pickInfo.pickedMesh !_eq_ null){_lt_br /_gt_\n\t                alert(pickInfo.pickedMesh.name)_sm__lt_br /_gt_\n\t                pickInfo.pickedMesh.material _eq_ BWTexture_sm__lt_br /_gt_\n\t            }_lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    }    _lt_br /_gt_\n\t    return scene_sm__lt_br /_gt_\n\t}_sm_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/BeforeClick.jpg.22e30e09b48d4866ba0a976c0d84154a.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15535_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/BeforeClick.jpg.22e30e09b48d4866ba0a976c0d84154a.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_BeforeClick.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/AfterClick.jpg.b0bda4003330c80820f8cdf6a51847e8.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15536_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/AfterClick.jpg.b0bda4003330c80820f8cdf6a51847e8.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_AfterClick.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-06T19:23:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAS I mentioned earlier I think the difference comes from the _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_backFaceCulling property (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/materials#back-face-culling_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/materials#back-face-culling_lt_/a_gt_). Just set it up like it was previously set up_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var BWTexture _eq_ new BABYLON.StandardMaterial(_qt_BlueWave_qt__co_ scene)_sm_\n\nBWTexture.backFaceCulling _eq_ pickInfo.pickedMesh.material.backFaceCulling\n\npickInfo.pickedMesh.material _eq_ BWTexture_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"djeustice","Date":"2017-11-06T20:12:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you_co_ this worked!  The Kayak switches textures from Peach to BlueWave.png.  Here_t_s the code that worked for me_co_ thanks again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    scene.onPointerPick _eq_ function(evt_co_ pickInfo) {_lt_br /_gt_\n\t        if(pickInfo.hit) {_lt_br /_gt_\n\t            if (pickInfo.pickedMesh !_eq_ ground){_lt_br /_gt_\n\t                alert(pickInfo.pickedMesh.name)_sm__lt_br /_gt_\n\t                _lt_br /_gt_\n\t                var BWTexture _eq_ new BABYLON.StandardMaterial(_qt_BlueWave_qt__co_ scene)_sm__lt_br /_gt_\n\t                BWTexture.diffuseTexture _eq_ new BABYLON.Texture(_qt_models/BlueWave.png_qt__co_ scene)_sm_ _lt_br /_gt_\n\t                BWTexture.backFaceCulling _eq_ pickInfo.pickedMesh.material.backFaceCulling_sm__lt_br /_gt_\n\t                BWTexture.diffuseTexture.hasAlpha _eq_ false_sm__lt_br /_gt_\n\t                BWTexture.backFaceCulling _eq_ false_sm__lt_br /_gt_\n\t                pickInfo.pickedMesh.material _eq_ BWTexture_sm__lt_br /_gt_\n\t            }_lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    } \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"apptaro","Date":"2018-07-31T02:29:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_just for a note_co_ backFaceCulling _eq_ false_co_ is just a workaround here._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_The correct way is to copy backFaceCulling and sideOrientation_lt_/span_gt__lt_span style_eq__qt_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ . See _lt_/span_gt_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed6108520669_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/39149-changing-material-flips-faces/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]