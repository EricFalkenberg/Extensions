[{"Owner":"negrant","Date":"2016-12-02T23:05:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi_co_ all! I am trying posting questions not so often_co_ but sometimes it is very need and I have to do it. I want to know a picking point of a mesh with playing an animation. But when I am using scene.pick or pickWithRay - it is function does picking relative a first frame of animation of a mesh_co_ but my mesh it is a runing man and hands and legs and different parts of body every frame in different positions. How I can do this? Pick a mesh relative of current frame of animation. Thank! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ To be precise I want to know pickedPoint.getTextureCoordinations.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-03T00:04:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can ask as many questions as you need _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem you have is _qt_expected_qt__dd_ The animation is done on GPU side (for performance reason) so because picking is done on CPU you cannot reach the animated values\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-12-03T15:31:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153377_qt_ data-ipsquote-contentid_eq__qt_26780_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1480723462_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tyou can ask as many questions as you need _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe problem you have is _qt_expected_qt__dd_ The animation is done on GPU side (for performance reason) so because picking is done on CPU you cannot reach the animated values\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOkay_co_ I will be waiting for it_co_ and now I will find another ways for my goal. Thank _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-03T16:05:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou could attach pickable_co_ invisible sphere or box meshes to the bones in the areas you_t_d like to pick.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-12-03T20:56:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153450_qt_ data-ipsquote-contentid_eq__qt_26780_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1480781100_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou could attach pickable_co_ invisible sphere or box meshes to the bones in the areas you_t_d like to pick.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ I know this method_co_ but it dont work if you need to know a pickedPoint.getTextureCoordinates - it returns me texture coordinates of sphere but I need to know textureCoordinates of my animating model.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-03T21:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOne thing that might work is getting the picked position relative to the bone when the invisible mesh is clicked.  Then use that local position on a model that is at rest to get the world position and texture coordinates. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-12-05T21:22:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153481_qt_ data-ipsquote-contentid_eq__qt_26780_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1480799866_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 03.12.2016 at 11_dd_17 PM_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOne thing that might work is getting the picked position relative to the bone when the invisible mesh is clicked.  Then use that local position on a model that is at rest to get the world position and texture coordinates. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGood idea! I like and I am trying to do it_co_ but I am stuck. How to get rotate of a bone_co_ global rotate?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-05T21:29:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have several options_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.getRotation(BABYLON.Space.WORLD_co_ mesh)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.getRotationToRef(BABYLON.Space.WORLD_co_ mesh_co_ result)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.getRotationQuaternion(BABYLON.Space.WORLD_co_ mesh)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.getRotationQuaternionToRef(BABYLON.Space.WORLD_co_ mesh_co_ result)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.getRotationMatrix(BABYLON.Space.WORLD_co_ mesh)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.getRotationMatrixToRef(BABYLON.Space.WORLD_co_ mesh_co_ result)_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-05T23:03:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just submitted a PR for bone.getLocalPositionFromAbsolute\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1559_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1559_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand the Bone class already has getAbsolutePositionFromLocal.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-12-06T17:08:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153748_qt_ data-ipsquote-contentid_eq__qt_26780_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1480979005_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI just submitted a PR for bone.getLocalPositionFromAbsolute\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1559_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1559_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tand the Bone class already has getAbsolutePositionFromLocal.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOkay_co_ I have completed this step. I have _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_picked position relative to the bone in any frame of animation_co_ how I can get this point relative of the rest pose? Set an animation in the rest pose_co_ then get a point and return an animation in current frame? I think it is not best way _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-06T17:33:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153866_qt_ data-ipsquote-contentid_eq__qt_26780_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481044109_qt_ data-ipsquote-userid_eq__qt_23713_qt_ data-ipsquote-username_eq__qt_negrant_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 minutes ago_co_ negrant said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thow I can get this point relative of the rest pose?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_d make a clone of the skeleton when it loads that you could use just for this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons#cloning-bones_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons#cloning-bones_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-12-07T15:52:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tadam_co_ and the last question. If I found _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_picked position of the invisible mesh in the world space_co_ how to find texture coordinates of the body mesh? becouse the picked position saved texture coordinates of the invisible mesh_co_ but I need texture coordinates of body mesh. This picked position very close to the body mesh_co_ but do not intersects with him and the picked position do not have informations about the texture coordinates of the body mesh. Thank!_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-07T16:05:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think you could do another pick using the new position info.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2016-12-07T16:10:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154032_qt_ data-ipsquote-contentid_eq__qt_26780_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481126708_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think you could do another pick using the new position info.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tCreate the new ray? or change picked position of my current ray? becouse if I need to create a new ray then where I can know a direction of a new ray?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-07T16:38:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRight now there is a bone.getDirection function which takes a local direction and gives you the global direction.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.bone.ts#L618_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.bone.ts#L618_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo get the local direction from the global_co_ you need to invert mat before calling TransformNormalToRef.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the bone class should have_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBone.getLocalDirectionFromWorld\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBone.getWorldDirectionFromLocal\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlike it does for position (getAbsolutePositionFromLocal_co_ getLocalPositionFromAbsolute).  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]