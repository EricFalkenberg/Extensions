[{"Owner":"efxlab","Date":"2018-02-09T16:17:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they you are too fast ! Iam newbie yet_co_ but Iam testing/learning it now. I post it if I see an issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat I try to do _dd_ I want change PBR textures on fly after glTF Mesh/material has loaded.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee you_co_ thanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-09T16:46:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30053-efxlab/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30053_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30053-efxlab/_qt_ rel_eq__qt__qt__gt_@efxlab_lt_/a_gt_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SBKGT0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SBKGT0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you are some others questions_co_ open a new topic and ping me _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-02-09T17:19:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204221_qt_ data-ipsquote-contentid_eq__qt_31108_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518170398_qt_ data-ipsquote-userid_eq__qt_22396_qt_ data-ipsquote-username_eq__qt_Pierre Glibert_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ Pierre Glibert said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSo_co_ if I understand you don_t_t use engine.createTexture() because _qt_onProgess_qt_ not exist on the returned internalTexture... \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThat_t_s why you created your own image loader ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf it_t_s that_co_ like you said_co_ we need to add some observable on internalTexture _dd_ onProgess_co_ onAborted_co_ ...\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI think that it would be good to use same method for all loader ...\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhat do you think ? \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThese loaders are inherently very different_co_ so using the same method might not make sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t understand the use case for this. Why do you need the url?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-09T17:28:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ I need to reload texture with different size.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUrl _dd_ \n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tassets/myTexture.256.png\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tassets/myTexture.1024.png\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tassets/myTexture.2048.png\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tWith this url_co_ I can capture _qt_assets/texture_qt_ and add the size I want to reload _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe can do what you said _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep the asset url_co_ load with a Blob and update it when canceled or loaded ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible and easy to do for you ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-02-14T19:32:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22396-pierre-glibert/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22396_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22396-pierre-glibert/_qt_ rel_eq__qt__qt__gt_@Pierre Glibert_lt_/a_gt_ I understand you want to replace the textures_co_ but why do you want to replace the textures? Is replacing the textures for progressive loading so that the smaller texture loads faster? Is it for render LODs so that meshes that are farther away uses less resources? Something else?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-14T21:17:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes exactly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI work on the new optimizer that will replace the old.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe easiest way to explain what I do is to read the doc. I should have told you before _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll doc is here _dd_ _lt_a href_eq__qt_https_dd_//github.com/pierreglibert/Extensions/tree/master/gradingSceneOptimizer_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/pierreglibert/Extensions/tree/master/gradingSceneOptimizer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLittle old demo _dd_ _lt_a class_eq__qt_ipsAttachLink_qt_ data-extension_eq__qt_core_Attachment_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14728_qt_ data-fileid_eq__qt_14728_qt_ rel_eq__qt__qt__gt_demo.mp4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-15T01:32:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_qt_replace_qt_ or _qt_complement_qt_ actually as the current one is widely used already _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-19T08:53:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI saw that assetManager use _qt_IAssetsProgressEvent_qt_ for onProgress function _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.assetsManager.ts#L149_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.assetsManager.ts#L149_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt give us the number of task loaded but it will be cool to have the data loaded in stream like SceneLoaderProgressEvent _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/a86a04b640f8f25bb4a1ed86067ce735a404979b/src/Loading/babylon.sceneLoader.ts#L2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/a86a04b640f8f25bb4a1ed86067ce735a404979b/src/Loading/babylon.sceneLoader.ts#L2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.assetsManager.ts#L694_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.assetsManager.ts#L694_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we add onProgress (type _dd_ SceneLoaderProgressEvent ) on all task type and replace _qt_IAssetsProgressEvent_qt_ on assetManager_co_ it will be possible to do that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe need onAbort function too to cancel task.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s better for user experience.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you think it_t_s possible to change it ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS _dd__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/particles#gpu-particles_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/particles#gpu-particles_lt_/a_gt_ Awesoooooome work _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt__lt_u_gt_EDIT _dd_ _lt_/u_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to talk about performance with you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt this moment_co_ BABYLON work like this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Material.diffuseTexture _eq_ texture // ( type texture )_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twhy not use an index like this with a setter and getter _dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/** \n * in MATERIAL class\n */\nprivate _cacheDiffuseTexture_dd_ number_sm_\nprivate _scene_dd_ Scene_sm_\n\n// setter\nset diffuseTexture(newTexture_dd_ Texture){\n  this._cacheDiffuseTexture _eq_ newTexture._cacheIndex_sm_\n}\n\n// getter \nget diffuseTexture() {\n  if(this._cacheDiffuseTexture) {\n    return this._scene.textures[this._cacheDiffuseTexture]_sm_\n  }\n  return null_sm_\n}\n\n\n\n\n/** \n * in TEXTURE class\n */\n\nprivate _cacheIndex_dd_ number_sm_\nprivate _scene_dd_ Scene_sm_\n\n// example of updateSize function\nupdateSize(size_dd_ number_co_ dispose? _dd_ boolean) {\n  scene.textures[this._cacheIndex] _eq_ new BABYLON.Texture(...)_sm_\n  this.dispose()_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWith this method_co_ we can easily switch texture on the fly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor exemple_co_ if we need to update ALL textures_co_ we just need to do this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for(var i _eq_ 0_sm_ i &lt_sm_ scene.textures.length_sm_ i ++) {\n  scene.textures[i] _eq_ scene.textures[i].updateSize(512)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did the exemple with scene.textures but we can apply this on several things in BABYLON.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ It_t_s just an idea. Perhaps_co_ it_t_s already done or wrong method  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact_co_ I tell you that because I saw this _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.internalTexture.ts#L341_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.internalTexture.ts#L341_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-20T21:21:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk..So unfortunately I cannot allow any breaking changes\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I_t_m absolutey ok to  add more info to the IAssetsProgressEvent interface.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso we can add abort support without sacrificing the back compat_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding the other question_dd_ I_t_m not sure to understand what you want to achieve _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Keep in mind that the Texture object does not contains data but just a link to the InternalTexture where the data belongs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo to your point you can just go through all textures from engine cache_dd_ engine..getLoadedTexturesCache(). This will return the list of internalTexture where you can then call .updateSize _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-23T09:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will simplify my code because I can_t_t do what I want. I need too much solutions that will break the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor exemple_co_ the only solution to resize a texture is create all size of texture and update url at this moment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe tool createResizedTexture return a RTT ... So I need to make a loop in scene.materials and use it on all channels to apply it. ( Not really optimized compared to an array of textures)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe risk is to optimize the same textures more that once time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo prevent this_co_ I can create a new class to reference all textures to know if it_t_s already optimized... But it_t_s a new class above the texture class.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat mean I need an Material observable that return the material and the channel updated if the user add a new textures on the fly. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor me_co_ it_t_s not a solution. Perhaps later.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ perhaps this will interest you _dd_ _lt_a href_eq__qt_https_dd_//github.com/pierreglibert/Extensions/blob/master/gradingSceneOptimizer/ts-optimizer/userInfos.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/pierreglibert/Extensions/blob/master/gradingSceneOptimizer/ts-optimizer/userInfos.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help during all of this time and happy 11000 posts ! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPs _dd_ \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_205260_qt_ data-ipsquote-contentid_eq__qt_31108_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1519030425_qt_ data-ipsquote-userid_eq__qt_22396_qt_ data-ipsquote-username_eq__qt_Pierre Glibert_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 19/02/2018 at 9_dd_53 AM_co_ Pierre Glibert said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t\t_lt_p_gt_\n\t\t\t\t_lt_span_gt_// example of updateSize function_lt_/span_gt_ updateSize(size_dd_ number_co_ dispose? _dd_ _lt_span_gt_boolean_lt_/span_gt_) { scene.textures[_lt_span_gt_this_lt_/span_gt_._cacheIndex] _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Texture(...)_sm_ _lt_span_gt_this_lt_/span_gt_.dispose()_sm_ }\n\t\t\t_lt_/p_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt_In the previous post_co_ the _t_.updateSize()_t_ was an exemple of an new fonction to resize the texture and switch it directly._lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt_It was not the current updateSize that change the size of the texture and not the size of the content. _lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt_  _lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-23T17:33:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh nice for the updateSize (did not notice that _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much for your time and passion!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-23T18:05:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_205839_qt_ data-ipsquote-contentid_eq__qt_31108_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1519407231_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t39 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOh nice for the updateSize (did not notice that _dd_))\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes but impossible to do if the first part is not possible to apply ... That should be a big change and it break the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s a different way to link textures to material for rendering ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]