[{"Owner":"Nastro","Date":"2016-08-17T12:02:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen i click on a SPS Mesh i need to target camera on center of the SPS. But i can_t_t get the bounding box to get center. Any ideas ? _dd_/\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-08-17T12:17:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsps.mesh.getBoundingInfo()  ? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/AbstractMesh#getboundinginfo-rarr-boundinginfo-classes-2-4-boundinginfo-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/AbstractMesh#getboundinginfo-rarr-boundinginfo-classes-2-4-boundinginfo-_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tabout how to set the SPS BBox (not automatic by default) _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nastro","Date":"2016-08-17T13:06:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried \n_lt_/p_gt_\n\n_lt_p_gt_\n\t  SPSRoom.computeBoundingBox _eq_ true_sm__lt_br /_gt_\n\t  SPSRoom.setVisibilityBox _eq_ meshRoom.getBoundingInfo().boundingBox_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when i call _dd_ scene.onPointerDown\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI get the general bounding of all SPS not specific SPS ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nastro","Date":"2016-08-17T13:06:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_  scene.onPointerDown _eq_ function (evt_co_ pickResult) {\n    var meshFaceId _eq_ pickResult.faceId_sm_             // get the mesh picked face\n    if (meshFaceId _eq__eq_ -1) {\n      return_sm_// return if nothing picked\n    }\n\n    if (SPSRoom.pickedParticles[meshFaceId] _eq__eq__eq_ undefined) {\n      return_sm_\n    }\n    var idx _eq_ SPSRoom.pickedParticles[meshFaceId].idx_sm_  // get the picked particle idx from the pickedParticles array\n    var p _eq_ SPSRoom.particles[idx]_sm_                     // get the picked particle\n\n    if (IdSPSRoom_RefPiece_Array[idx] _eq__eq__eq_ undefined)\n      return_sm_\n\n    var bbox _eq_ SPSRoom.mesh.getBoundingInfo().boundingBox_sm_\n\n    arcCamera.setTarget(bbox.center)_sm_\n\n    arcCamera.radius _eq_ (bbox.maximum.z - bbox.minimum.z) * 1.5_sm_\n\n    //alert(IdSPSRoom_RefPiece_Array[idx])_sm_\n    //p.color.r _eq_ 1_sm_                                  // turn it red    \n    //p.color.g _eq_ 0_sm_\n    //p.color.b _eq_ 0_sm_\n    //SPSRoom.setParticles()_sm_\n  }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nastro","Date":"2016-08-17T13:44:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s ok. I save in a array the bounding box of mesh before and i get it after to use it and get center.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Jerome\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]