[{"Owner":"auduct","Date":"2015-05-13T12:39:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am trying for object to object collision where cubes be dragged and stop when collided with another cube. surfed net for hours tried babylon.js documentations but no luck. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you can see the problem online at this live link_dd_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//websorce.com/babylon/2builtin_models.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//websorce.com/babylon/2builtin_models.php_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The cube_co_ torus_co_ sphere can drag through each other_co_ I need them to stop passing through each other._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the code I written_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var createScene _eq_ function () {_lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var scene _eq_ new BABYLON.Scene(engine)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_scene.clearColor _eq_ new BABYLON.Color3(0_co_ 1_co_ 0)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 3 * Math.PI / 2_co_ Math.PI / 8_co_ 50_co_ BABYLON.Vector3.Zero()_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_camera.attachControl(canvas_co_ false)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// This creates a light_co_ aiming 0_co_1_co_0 - to the sky._lt_/div_gt__lt_div_gt_var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Dim the light a small amount_lt_/div_gt__lt_div_gt_light.intensity _eq_ .5_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_//Creation of a box_lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_//(name of the box_co_ size_co_ scene)_lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_var box _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 6.0_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_//Creation of a sphere _lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_//(name of the sphere_co_ segments_co_ diameter_co_ scene) _lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere_qt__co_ 10.0_co_ 10.0_co_ scene)_sm__lt_/div_gt__lt_div_gt_var materialSphere3 _eq_ new BABYLON.StandardMaterial(_qt_texture3_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    materialSphere3.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/z002.jpg_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_sphere.material _eq_ materialSphere3_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Move the sphere upward 1/2 its height_lt_/div_gt__lt_div_gt_//sphere.position.y _eq_ .25_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_//Creation of a plane_lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_//(name of the plane_co_ size_co_ scene)_lt_/div_gt__lt_div_gt_    _lt_span_gt_ _lt_/span_gt_var plane _eq_ BABYLON.Mesh.CreatePlane(_qt_plane_qt__co_ 10.0_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ //Creation of a cylinder_lt_/div_gt__lt_div_gt_    //(name_co_ height_co_ diamTop_co_ diamBottom_co_ tessellation_co_ [optional height subdivs]_co_ scene_co_ updatable)_lt_/div_gt__lt_div_gt_    var cylinder _eq_ BABYLON.Mesh.CreateCylinder(_qt_cylinder_qt__co_ 3_co_ 3_co_ 3_co_ 6_co_ 1_co_ scene_co_ false)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Creation of a torus_lt_/div_gt__lt_div_gt_    // (name_co_ diameter_co_ thickness_co_ tessellation_co_ scene_co_ updatable)_lt_/div_gt__lt_div_gt_    var torus _eq_ BABYLON.Mesh.CreateTorus(_qt_torus_qt__co_ 5_co_ 1_co_ 10_co_ scene_co_ false)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // Creation of a knot_lt_/div_gt__lt_div_gt_    // (name_co_ radius_co_ tube_co_ radialSegments_co_ tubularSegments_co_ p_co_ q_co_ scene_co_ updatable)_lt_/div_gt__lt_div_gt_    var knot _eq_ BABYLON.Mesh.CreateTorusKnot(_qt_knot_qt__co_ 2_co_ 0.5_co_ 128_co_ 64_co_ 2_co_ 3_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // Creation of a lines mesh_lt_/div_gt__lt_div_gt_    var lines _eq_ BABYLON.Mesh.CreateLines(_qt_lines_qt__co_ [_lt_/div_gt__lt_div_gt_        new BABYLON.Vector3(-10_co_ 0_co_ 0)_co__lt_/div_gt__lt_div_gt_        new BABYLON.Vector3(10_co_ 0_co_ 0)_co__lt_/div_gt__lt_div_gt_        new BABYLON.Vector3(0_co_ 0_co_ -10)_co__lt_/div_gt__lt_div_gt_        new BABYLON.Vector3(0_co_ 0_co_ 10)_lt_/div_gt__lt_div_gt_    ]_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Moving elements_lt_/div_gt__lt_div_gt_    box.position _eq_ new BABYLON.Vector3(-10_co_ 0_co_ 0)_sm_   // Using a vector_lt_/div_gt__lt_div_gt_    sphere.position _eq_ new BABYLON.Vector3(0_co_ 10_co_ 0)_sm_ // Using a vector_lt_/div_gt__lt_div_gt_    plane.position.z _eq_ 10_sm_                            // Using a single coordinate component_lt_/div_gt__lt_div_gt_    cylinder.position.z _eq_ -10_sm__lt_/div_gt__lt_div_gt_    torus.position.x _eq_ 10_sm__lt_/div_gt__lt_div_gt_    knot.position.y _eq_ -10_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Let_t_s try our built-in _t_ground_t_ shape. Params_dd_ name_co_ width_co_ depth_co_ subdivisions_co_ scene_lt_/div_gt__lt_div_gt_         var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 26_co_ 26_co_ 2_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ var startingPoint_sm__lt_/div_gt__lt_div_gt_    var currentMesh_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var getGroundPosition _eq_ function () {_lt_/div_gt__lt_div_gt_        // Use a predicate to get position on the ground_lt_/div_gt__lt_div_gt_        var pickinfo _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ function (mesh) { return mesh _eq__eq_ ground_sm_ })_sm__lt_/div_gt__lt_div_gt_        if (pickinfo.hit) {_lt_/div_gt__lt_div_gt_            return pickinfo.pickedPoint_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        return null_sm__lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var onPointerDown _eq_ function (evt) {_lt_/div_gt__lt_div_gt_        if (evt.button !_eq__eq_ 0) {_lt_/div_gt__lt_div_gt_            return_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        // check if we are under a mesh_lt_/div_gt__lt_div_gt_        var pickInfo _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ function (mesh) { return mesh !_eq__eq_ ground_sm_ })_sm__lt_/div_gt__lt_div_gt_        if (pickInfo.hit) {_lt_/div_gt__lt_div_gt_            currentMesh _eq_ pickInfo.pickedMesh_sm__lt_/div_gt__lt_div_gt_            startingPoint _eq_ getGroundPosition(evt)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            if (startingPoint) { // we need to disconnect camera from canvas_lt_/div_gt__lt_div_gt_                setTimeout(function () {_lt_/div_gt__lt_div_gt_                    camera.detachControl(canvas)_sm__lt_/div_gt__lt_div_gt_                }_co_ 0)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var onPointerUp _eq_ function () {_lt_/div_gt__lt_div_gt_        if (startingPoint) {_lt_/div_gt__lt_div_gt_            camera.attachControl(canvas_co_ true)_sm__lt_/div_gt__lt_div_gt_            startingPoint _eq_ null_sm__lt_/div_gt__lt_div_gt_            return_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var onPointerMove _eq_ function (evt) {_lt_/div_gt__lt_div_gt_        if (!startingPoint) {_lt_/div_gt__lt_div_gt_            return_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        var current _eq_ getGroundPosition(evt)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        if (!current) {_lt_/div_gt__lt_div_gt_            return_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        var diff _eq_ current.subtract(startingPoint)_sm__lt_/div_gt__lt_div_gt_        currentMesh.position.addInPlace(diff)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        startingPoint _eq_ current_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    canvas.addEventListener(_qt_pointerdown_qt__co_ onPointerDown_co_ false)_sm__lt_/div_gt__lt_div_gt_    canvas.addEventListener(_qt_pointerup_qt__co_ onPointerUp_co_ false)_sm__lt_/div_gt__lt_div_gt_    canvas.addEventListener(_qt_pointermove_qt__co_ onPointerMove_co_ false)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    scene.onDispose _eq_ function () {_lt_/div_gt__lt_div_gt_        canvas.removeEventListener(_qt_pointerdown_qt__co_ onPointerDown)_sm__lt_/div_gt__lt_div_gt_        canvas.removeEventListener(_qt_pointerup_qt__co_ onPointerUp)_sm__lt_/div_gt__lt_div_gt_        canvas.removeEventListener(_qt_pointermove_qt__co_ onPointerMove)_sm__lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_// Leave this function_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Enable Collisions_lt_/div_gt__lt_div_gt_    scene.collisionsEnabled _eq_ true_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    //Then apply collisions and gravity to the active camera_lt_/div_gt__lt_div_gt_    camera.checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_    camera.applyGravity _eq_ true_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_//Set the ellipsoid around the camera (e.g. your player_t_s size)_lt_/div_gt__lt_div_gt_    camera.ellipsoid _eq_ new BABYLON.Vector3(1_co_ 1_co_ 1)_sm__lt_/div_gt__lt_div_gt_box.checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_cylinder.checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_return scene_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_}_sm_  // End of createScene function    _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_&lt_sm_?php //Create Scene Ends ?&gt_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Now_co_ call the createScene function that you just finished creating_lt_/div_gt__lt_div_gt_  _lt_span_gt_ _lt_/span_gt_var scene _eq_ createScene()_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Register a render loop to repeatedly render the scene_lt_/div_gt__lt_div_gt_ engine.runRenderLoop(function () {_lt_/div_gt__lt_div_gt_scene.render()_sm__lt_/div_gt__lt_div_gt_ })_sm__lt_/div_gt__lt_div_gt_ // Watch for browser/canvas resize events_lt_/div_gt__lt_div_gt_ window.addEventListener(_qt_resize_qt__co_ function () {_lt_/div_gt__lt_div_gt_engine.resize()_sm__lt_/div_gt__lt_div_gt_ })_sm__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4258_qt__gt_2builtin_models.php_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2015/post-14464-0-69697400-1431520748.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2015/post-14464-0-69697400-1431520748.png_qt_ data-fileid_eq__qt_4259_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-14464-0-69697400-1431520748.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-14T18:27:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ first_co_ welcome to the forum_co_ auduct!  Good to have you with us!  I_t_m Wingnut_co_ local idiot and know-it-all wannabe_co_ how ya doon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a _qt_playground demo_qt_ from your code.  Here it is...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1P9XIK_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1P9XIK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI changed some little things_co_ but nothing important.  You have object dragging working well.  But triggering the BabylonJS collision system... requires a special _qt_move_qt_ function called .moveWithCollisions().  You can search this forum_co_ and read LOTS of information about that function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFeel free to make changes to that playground demo... and then click RUN again_co_ and then try something new_co_ and click RUN again_co_ and choose SAVE at anytime_co_ and a new URL will show at the top.  The SAVE is very safe in the playground.  You will never over-write anything... by hitting save.  And_co_ use the _t_get zip_t_ option to take a version to your home_co_ and play with it there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice line 93?  It uses an _t_addInPlace_t_ method to .position the object.  You need to replace this line... with SOME kind of .moveWithCollisions line.  Search the forum for moveWithCollisions  ... it_t_s a heavily-discussed thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow that we have the playground scene that contains your code... you COULD go back and edit the previous post_co_ and remove all that code.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Everyone who is reading this topic_co_ can now look at that playground_co_ and see your code_co_ and do experiments_co_ and hit RUN_co_ and do more saves_co_ and tell us the urls to those saves_co_ and and and... PARTY!!!  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"auduct","Date":"2015-05-16T06:25:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_First of all thanks a lot _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Wingnut_lt_/span_gt_ for such a detailed reply. and thanks for putting the sample on playground. I have tried to apply _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_moveWithCollisions() but no luck so far. can you help me with that? I am a beginner in this area so its a bit hard for me to write the code than experienced programmers._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-16T16:41:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1P9XIK%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1P9XIK#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGetting closer.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  I have _qt_stuttery_qt_ drag problems_co_ and collisions that look like earthquakes.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  I_t_m still studying it.  Maybe the experts will help us out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_update_dd__lt_/strong_gt_ I have a theory.  I think our collision system has a 1-pixel back-off _qt_feature_qt_ when a collision happens.  After a collision_co_ I think the moved mesh is told to back-away from the collision a tiny bit... to keep _qt_continuous collision_qt_ from happening.  My demo_t_s drag code... ignores that phenomena_co_ and just keeps dragging and causing further collisions and havoc. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t.moveWithCollisions is designed to back-away... from a _qt_forward_qt_ collision.  It is a forward-based function_co_ used to walk characters_co_ mostly.  When we drag a mesh at angles that are NOT forward_co_ the BJS collision system (via .moveWithCollisions) does the 1-pixel back-off... at the reverse angle of the direction that IT _lt_u_gt_thinks_lt_/u_gt_ the collision happened-at.  Possibly_co_ it _qt_quantizes_qt_ (rounds the collision angle) into a forward/backward _qt_motif_qt_. Thus_co_ the 1-pixel back-away is getting totally confused as to WHAT ANGLE to do its back-away.  This is compounded by the earlier problem... where I allow more dragging after a collision.  Instead... possibly force a call to onPointerUp if a collision happens... might fix something.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHard to explain... and it_t_s just a theory.  Possibly_co_ you/we are going to need a _qt_special_qt_ moveWithCollisions function.  Something like auductMoveWithCollisions() .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWant to see the current .moveWithCollisions function?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.js#L619_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.js#L619_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWant to see how to STEAL that code from the BJS framework and make it YOURS?  I knew ya did.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1P9XIK%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1P9XIK#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlines 4-10 ... your own special auductMoveWithCollisions().  I had to change some little things_co_ but now...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tline 103 is calling YOUR auductMoveWithCollisions() function_co_ and not the one in BJS.  So you can do dangerous edits to auductMoveWithCollisions() and hit RUN again_co_ and see what happens.  Try stuff.  Break stuff!  Blow stuff up!!!  YAY!  Fun!  Control-z in the playground editor... for un-do.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"auduct","Date":"2015-05-16T19:10:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks a Lot for so much time and interest_co_ I see this starting to work_co_ do you think this bouncing of meshes on and below other meshes can be controlled?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-19T12:39:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tno.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  hehe  (just kidding)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNew demo_dd_  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1P9XIK%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1P9XIK#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo problems fixed.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Can_t_t drag the linesMesh... so we got a 3rd problem_co_ now.  Yay!  (I_t_ve begun SOME work on a ray-intersect method of selecting it - lines 141 to 151 ...not yet working.  Experimental.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee lines 5-8?  We need to figure out what the hell they do.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSee lines 11-19?  We REALLY need to figure out what THEY do.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee my brain?  I wish someone could figure out why it doesn_t_t already know everything.  _lt_img alt_eq__qt__dd_D_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Still working and thinking_co_ Auduct.  How about you?  Have you tried some experiments?    We might need to separate _t_move_t_ and _t_withCollsions_t_... into two funcs.  That way we can find our two part problem_co_ better.  (#1 problem - dragging is jittery) (#2 problem - colliding is violent)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s keep trying_co_ eh?  Interesting challenge.  I KNOW it can be solved.  I just need some more intelligence... and time... and comments/ideas from anyone/everyone.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-20T13:49:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1P9XIK%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1P9XIK#5_lt_/a_gt_  new demo... I put some numbers on the screen so I could watch the drag and collision values.  It_t_s difficult to determine anything from the numbers_co_ but I thought I_t_d try.  *scratch scratch*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had some problems with onDispose() NOT closing old html panels. [fails to run endMenu() or endMenu() is failing to find the old html containers].  If you need to remove some old html panels that seem to be stuck on the screen_co_ you can open a JS console and type window.endMenu() and hit enter... possibly more than once. That will remove old menus/readouts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s all I have so far.  Experts_co_ we could use some help_co_ here.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Are there any around?  This thing is starting to get over-my-head.  Maybe there is some kind of solution ... using intersectsMesh.  Still testing and experimenting.   moveWithCollisions hates me.  _dd_/\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-29T03:51:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again!  Yet another...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#BJVUV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#BJVUV#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis one is working ok.  Drag is MUCH nicer_co_ now_co_ and collision ellipsoids are being honored nicely. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that EACH of the 4 mesh... needed to be pushed into the collidables[] array (line 43 is one such line).  Collidables is used later... in onPointerMove... to set intersectionEnter triggers... so don_t_t forget to push your mesh into that (when you make more mesh in your project).  Follow the pattern of making each mesh... seen in the demo... and all will be fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe SPEED that you collide... matters.  You CAN overlap these mesh... if you collide fast enough (or if you do a 2nd overlap attempt - see below). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did a LITTLE experimenting with a variable called _t_margin_t_.  Make that number larger_co_ and the collisions SHOULD happen with some space between the two mesh.  Make it smaller_co_ and the mesh SHOULD be allowed to get closer... and maybe overlap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis uses a dirty for-loop iteration through collidables array... adding an intersectionEnter trigger/action to every mesh in that array.  (except itself)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s a crappy way to do it.  It would be real nice if parameter_dd_ in line 150... were allowed to be a whole array of meshes.  But it must be one mesh... so we must loop.  Every time there is a collision_co_ the test() function runs_co_ which just force-calls onPointerUp()... which stops the drag. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKind of simple... yet miserable.  The test() function should be removed from onPointerMove() and put somewhere more _qt_global_qt_ (out in mainline code_co_ not inside a function where it keeps getting repeatedly redefined).  Hey_co_ I make mistakes sometimes.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOne _qt_feature_qt_ can be seen.  Drag an object to collision point... it stops.  Now continue to drag it_co_ and you CAN overlap.  So_co_ first drag_co_ can_t_t overlap.  Second drag_co_ CAN overlap!  Strange_co_ huh?  Remember in an earlier post... I talked about the need to _qt_back-away_qt_ the colliding mesh... after the collision?  Our demo is not doing that_co_ and that_t_s what MIGHT cause the _qt_2nd drag allows overlap_qt_ feature/bug.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ best demo try so far_co_ eh?  Phew... gruesome challenge.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"auduct","Date":"2015-05-29T18:25:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for this update. I got another small issue when i further customized the code. I have loaded the blender models online in this code instead of cubes and spheres._lt_/p_gt__lt_p_gt_you can see live demo here_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//websorce.com/a_beta/3droom/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//websorce.com/a_beta/3droom/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have loaded it to the server because i not know if external models can be loaded in playground. These models are colliding with the objects already there but are merging inside another models. I am also attaching the code with models in the attachment. _lt_/p_gt__lt_p_gt_#1. The models are merging in each other as you can see these tables and/or chairs. _lt_/p_gt__lt_p_gt_#2. The table model is visible in localhost but is not visible when being loaded on online server. I have checked it from different browsers. the chair model is visible. _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4381_qt__gt_model_issue.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-29T19:08:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_lt_/p_gt__lt_p_gt_   collidables.push(m1)_sm_  is wrong_co_ twice.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It should be... collidables.push(m)_sm_  (all three times)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not sure WHY your table is failing to import... sometimes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe insert some alerts or console.log reports..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_arch-chair/_qt__co_ _qt_tablef8.babylon_qt__co_ scene_co_ function (meshes) {    var m _eq_ meshes[0]_sm_    console.log(m)_sm_  // check to see if the object was imported    m.isVisible _eq_ true_sm_    m.scaling _eq_ new BABYLON.Vector3(1_co_1_co_1)_sm_    m.position.x _eq_ 0_sm_    m.position.y _eq_ 0_sm_    m.ellipsoid.scale(margin)_sm_    m.showBoundingBox _eq_ showBounds_sm_    collidables.push(m)_sm_})_sm__lt_/pre_gt__lt_p_gt_Good luck._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"auduct","Date":"2015-05-29T19:39:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried the with _lt_span_gt_collidables_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_push_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_m_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm_ but its still not working. Is there any way you think you can help? I mean if i send you the server access or in case playground supports model imports? or any other way?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-30T15:28:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_lt_/p_gt__lt_p_gt_Would you please update the online version.  _lt_a href_eq__qt_http_dd_//websorce.com/a_beta/3droom/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//websorce.com/a_beta/3droom/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I still see (m1) in there.  I wish I could spend more time on this... but real life has got me running around like crazy_co_ lately.\\_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All I can do is try... when I have time.  Please make sure your zip file has the MOST RECENT version of the .babylon file.  I will DL it later today._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_YOU need to keep experimenting_co_ too.  The chairs are working pretty good_co_ already.  They are not allowed to overlap our four basic shapes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I know what the problem is.  Don_t_t use _t_m_t_ at all.  Use _t_chair1_t_ and _t_chair2_t_ and _t_table1_t_ (etc) for your variable names. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Even though _t_m_t_ is being pushed into collidables[]_co_ I think we keep over-writing it when we re-assign _t_m_t_ repeatedly.  Good luck_co_ report back._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"auduct","Date":"2015-05-30T16:47:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co_ they started colliding too. what you think can be done to increase the performance of the models regarding collision._lt_/p_gt__lt_p_gt_I have updated the code on the online link_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-30T18:35:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A quick note_dd_  Take a look at some BJS framework code... with me_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.js#L49_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.js#L49_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_AbstractMesh is the basis of all BJS mesh.  See that a mesh.ellipsoid is .5 units long and .5 units wide and 1.0 units tall_co_ by default.  That might be important when setting margin._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now let_t_s look 2 lines below... anymesh._collider _eq_ new BABYLON.Collider()_sm_  SO now let_t_s go look at Collider..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Collisions/babylon.collider.js#L43_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Collisions/babylon.collider.js#L43_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See that it has a .radius property?  It is set 1_co_1_co_1._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So... MAYBE... to set a _t_margin_t__co_ a person should do_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_anymesh._collider.radius _eq_ new BABYLON.Vector3(margin_co_ 1_co_ margin)_sm_     (or something like that).  Experiment.  Maybe my old way of doing margin... is wrong.  *shrug*  More soon... maybe._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-06-02T13:56:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Auduct... I just thought about something important....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease view_dd_  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#BJVUV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#BJVUV#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ lines 144-149 should be used... if you can.  That section checks to see if there is _lt_u_gt_already_lt_/u_gt_ an actionManager on the currentMesh.  You might already be using that.  It_t_s just a good idea... but maybe not necessary.  Programming etiquette_co_ ya know?  _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_MOST IMPORTANT_lt_/strong_gt__dd_  See line 151  -  _lt_em_gt_collidables.remove(currentMesh)_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think we should probably re-push currentMesh... into collidables[]... at the end of the onPointerMove() function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO maybe... about line 160 area...  add _lt_em_gt_collidables.push(currentMesh)_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat way_co_ we ONLY remove currentMesh for the FOR-loop_co_ and then immediately push it back into collidables.  Test and experiment_co_ when you have a moment.  thx!  This MIGHT eliminate the _qt_drag once more _eq_ CAN-overlap_qt_ situation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_  Have you thought about control-z/undo?  Near your new line 160... you could also add lines such as...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     scene.lastMovedMesh _eq_ currentMesh_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     scene.lastMovedMeshStartingPoint _eq_ startingPoint_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese properties can later be used in an onUndo() function.  Only one level of undo_co_ but hey_co_ not bad.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]