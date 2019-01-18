[{"Owner":"arek3D","Date":"2018-11-15T10:32:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co__lt_br /_gt_\n\t_lt_br /_gt_\n\tI have noticed that there is a difference in displaying .glb files between desktop and mobiles e.g. on Facebook. The files exported from babylonjs.serializers using GLTF2Export.GLBAsync() or 3DS max + Babylon JS plugin has strange reflection despite of specular_eq_0_co_ roughness_eq_1_co_ metallic_eq_0 etc. I have tried many combination with Std and PBR materials and I always have this strange reflection on mobiles._lt_br /_gt_\n\tI decided to try Modo and the effect is much better. So probably you have a bug in babylonjs.serializers and 3DS max plugin. I have noticed that in attached file called _qt_babylonJS.glb_qt_ which was exported from 3DS max _qt_roughnessFactor_qt_ is 0.9 and should be 1.0 if I use standard material with specular _eq_ 0._lt_br /_gt_\n\t_lt_br /_gt_\n\tGLB files_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_20990_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_20990_qt_ rel_eq__qt__qt__gt_babylonJS.glb_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_20991_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_20991_qt_ rel_eq__qt__qt__gt_Modo.glb_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tScreenshot from the smartphone (Android/iOS_co_ the effect is the same)_co_ 3DS max + Babylon JS plugin and the same effect after using babylonjs.serializers.js GLTF2Export.GLBAsync() method_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20992_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/851739266_3dsBabylonJSexporter.png.3237e7eabb3d6e61cbda103eb7105714.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_3ds+BabylonJS exporter.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20992_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/1956371423_3dsBabylonJSexporter.thumb.png.72eb04b990b043a0d2143aef85c009a5.png_qt_ /_gt__lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tScreenshot from the smartphone when Modo was used (on smartphone the box is totally black - so the effect is actually perfect).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20993_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/Modo.png.121de93e040f1f2f989458b07e896b17.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Modo.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20993_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/Modo.thumb.png.ee7c82c2bf6b59bc1e9e6208c114414a.png_qt_ /_gt__lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd the effect which we can see on the desktop web browser (as you can see the file exported from Babylon JS is not totally black_co_ but it should be. However the worst thing is this reflection on mobiles)_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20994_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.3fcb7713076c6e59eb11c5e8ccbfe1df.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_image.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20994_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.3fcb7713076c6e59eb11c5e8ccbfe1df.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-15T17:12:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo disable specular is babylon.js you have to set specularColor _eq_ black\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ for GLB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-15T17:13:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso as GLB is only supporting PBR can you share the initial scene you exported to GLB from babylon?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-15T17:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ the initial scene would help a bunch.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arek3D","Date":"2018-11-16T09:35:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTo disable specular is babylon.js you have to set specularColor _eq_ black\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ but I also tried that and also used PBR materials with roughness_eq_1_co_ metallic_eq_0  etc. I cannot achieve totally black and also totally white color on mobiles without any reflections. This is possible from Modo_co_ so I do not think it is an Facebook_t_s issue_co_ however I reported this also to them. I have not received any response yet._lt_br /_gt_\n\t_lt_br /_gt_\n\tHere is the playground_dd__lt_/span_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#QEZVMP_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#QEZVMP_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_And here is my test scene. I use the newest exporter for 3DS Max 2016 (ver. 1.3.9)_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_21003_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_21003_qt_ rel_eq__qt__qt__gt_boxScene.zip_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope it will help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-16T16:59:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBecause glTF uses PBR (physically based rendering) for materials_co_ a pure black or white material with no reflections does not really fit as they don_t_t exist in the real world. The Modo one that you linked above also has reflections when loaded in Babylon sandbox. The inconsistencies between renderers is something the glTF working group is actively working to fix. I_t_m not sure why you want a material with no reflections_co_ but I think it might be better to use the _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit_qt_ rel_eq__qt_external nofollow_qt__gt_unlit extension_lt_/a_gt_. Facebook supports the unlit extension as does Babylon_t_s glTF loader. There are not a lot of exporters that create glTF with unlit yet_co_ but it_t_s easy to add the unlit extension manually to the glTF file. I_t_m not sure if that will work for you scenario.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is one that I modified from the glTF box exported from the playground you sent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_21015_qt_ data-fileid_eq__qt_21015_qt_ rel_eq__qt__qt__gt_scene.glb_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arek3D","Date":"2018-11-19T10:11:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your help _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_!_lt_br /_gt_\n\tYes_co_ I know that pure black or white with no reflections do not exist in the real world. But Modo also uses PBR materials and the range of colors is wider. Also_co_ the roughness is greater._lt_br /_gt_\n\tThe darkest box exported from Babylon JS looks distinctly brighter than e.g. the black frame of my  LCD screen._lt_br /_gt_\n\tAlso_co_ I can see a lot of objects around me that are more rough than this box on FB mobile. It is very shiny despite of roughness _eq_ 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope that glTF working group will fix those inconsistencies between the most popular renderers._lt_br /_gt_\n\tOr maybe Facebook developers will allow changing the reflection map from their scene to have more control of the final effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you mean by _qt_ add the unlit extension manually to the glTF file_qt_? I have tried to add those lines to the material in the text editor_co_ but I have noticed before_co_ that every try of editing .glb file causes an error during Facebook upload and I do not know why. Maybe I use incorrect encoding?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-19T19:15:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_ll be difficult to modify the GLB file directly as it is a packed version of a bunch of loose files (like a zip except it_t_s not compressed). You should unpack the GLB into loose files before modifying the glTF and then repack it into a GLB. There are some tools that can do it easily. I_t_ve written _lt_a href_eq__qt_https_dd_//github.com/bghgary/glTF-Shell-Extensions_qt_ rel_eq__qt_external nofollow_qt__gt_one_lt_/a_gt_ for Windows if you_t_re on that platform. If not on Windows_co_ you can use _lt_a href_eq__qt_https_dd_//marketplace.visualstudio.com/items?itemName_eq_cesium.gltf-vscode_qt_ rel_eq__qt_external nofollow_qt__gt_glTF Tools for vscode_lt_/a_gt_ or something similar.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-19T19:21:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235369_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542622271_qt_ data-ipsquote-userid_eq__qt_24145_qt_ data-ipsquote-username_eq__qt_arek3D_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ arek3D said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe darkest box exported from Babylon JS looks distinctly brighter than e.g. the black frame of my  LCD screen.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI tried it earlier and the values that were exported looked correct to me_co_ so I don_t_t think there is an issue with the BabylonJS exporter. I didn_t_t try to export using the 3dsMax exporter_co_ so maybe there is an issue with that. That said_co_ the darkest box representable by core glTF is not going to be totally black because the PBR metallic roughness model that we (the glTF working group) picked for glTF is not capable of representing it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arek3D","Date":"2018-11-20T09:27:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235455_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542655300_qt_ data-ipsquote-userid_eq__qt_26831_qt_ data-ipsquote-username_eq__qt_bghgary_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ bghgary said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI don_t_t think there is an issue with the BabylonJS exporter. I didn_t_t tr_lt_span_gt_﻿_lt_/span_gt_y to export usin_lt_span_gt_﻿_lt_/span_gt_g the 3dsMa_lt_span_gt_﻿_lt_/span_gt_x expor_lt_span_gt_﻿_lt_/span_gt_ter_co_ so m_lt_span_gt_﻿_lt_/span_gt_aybe there is a_lt_span_gt_﻿_lt_/span_gt_n issue with t_lt_span_gt_﻿_lt_/span_gt_ha_lt_span_gt_﻿_lt_/span_gt_t.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_The method in the Babylon JS Serializers _qt_GLTF2Export.GLBAsync()_qt_ exports actualy the same visual result like 3dsMa﻿x expor﻿ter. The only difference I saw in the HEX Editor was the file from 3DS Max has Roughness _eq_ 0.99 instead of 1._lt_br /_gt_\n\tThe object exported using GLBAsync() is shiny despite of roughness_eq_1_co_ metallic_eq_0 on mobiles on FB. And it is distinctly brighter than e.g. from Modo also on desktop. White color from Modo is closer to #FFFFFF than from Babylon JS_co_ and Modo also uses glTF and PBR metallic﻿ roughness﻿ model. But of course these reflections from Facebook scene could affect colors on the object and the problem could be only with roughness and metallic part._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Thank you_lt_/span_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ for the information about _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit_qt_ rel_eq__qt_external nofollow_qt__gt_unlit extension_lt_/a_gt_ _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_and your glTF-Shell-Extensions tool. It helped to avoid weird reflections on Facebook on mobiles exported from Babylon JS_co_ but of course it is only workaround_co_ because there is no shading at all._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-20T17:26:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235494_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542706043_qt_ data-ipsquote-userid_eq__qt_24145_qt_ data-ipsquote-username_eq__qt_arek3D_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ arek3D said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe object exported using GLBAsync() is shiny despite of roughness_eq_1_co_ metallic_eq_0 on mobiles on FB\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is a FB issue. I_t_m not sure what we can do about that.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235494_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542706043_qt_ data-ipsquote-userid_eq__qt_24145_qt_ data-ipsquote-username_eq__qt_arek3D_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ arek3D said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_﻿_lt_/span_gt_And it is distinct_lt_span_gt_﻿_lt_/span_gt_ly brighter than e.g. from Modo also on deskto_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt_p_lt_span_gt_﻿_lt_/span_gt_._lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe link you posted originally has both metallicFactor and roughnessFactor of 1.0 which probably explains the difference. I don_t_t have much experience with Modo or how it exports glTF. Both GLTF2Export and 3dsMax exporter should be able to export with metallicFactor of 1 and roughnessFactor of 1 if it is configured to do so. I can help with that if needed.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235494_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542706043_qt_ data-ipsquote-userid_eq__qt_24145_qt_ data-ipsquote-username_eq__qt_arek3D_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ arek3D said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tonly workaround_co_ because there is no shading at all.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ that is true. I suggested it because it sounded like you didn_t_t want physically-based materials. If you can share your scenario_co_ I might be able to come up with a better solution.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arek3D","Date":"2018-11-21T10:33:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_                function _solveForRoughness(specularPower) {\n                    var t _eq_ Math.pow(specularPower / P3.x_co_ 0.333333)_sm_\n                    return _cubicBezierCurve(t_co_ P0.y_co_ P1.y_co_ P2.y_co_ P3.y)_sm_\n                }\n                var diffuse _eq_ babylonStandardMaterial.diffuseColor.toLinearSpace().scale(0.5)_sm_\n                var opacity _eq_ babylonStandardMaterial.alpha_sm_\n                var specularPower _eq_ BABYLON.Scalar.Clamp(babylonStandardMaterial.specularPower_co_ 0_co_   this._maxSpecularPower)_sm_\n                var roughness _eq_ _solveForRoughness(specularPower)_sm_\n                var glTFPbrMetallicRoughness _eq_ {\n                    baseColorFactor_dd_ [\n                        diffuse.r_co_\n                        diffuse.g_co_\n                        diffuse.b_co_\n                        opacity\n                    ]_co_\n                    metallicFactor_dd_ 0_co_\n                    roughnessFactor_dd_ roughness_co_\n                }_sm_\n                return glTFPbrMetallicRoughness_sm_\n            }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThank you for your answer._lt_br /_gt_\n\tYes_co_ Modo exports Roughness_eq_1 and Metallic_eq_1 and this is the reason of difference!  I checked that on Facebook and the effect is the same. Thank you!_lt_br /_gt_\n\tI noticed that in babylonjs.serializers.js the metallicFactor is always _eq_ 0 in _solveForRoughness() function. I need to use StandardMaterials on my objects_co_ so my materials always will use this function (if I use PBR materials in Babylon I exceed the 3MB Facebook limit for the 3D post)._lt_br /_gt_\n\tI noticed also that StandardMaterial in Babylon JS has the roughness property (it helps to define how blurry the reflections should appears in the material)._lt_br /_gt_\n\tDon_t_t you think that during conversion from Standard Material to PBR it should be like this_dd__lt_br /_gt_\n\t_lt_br /_gt_\n\tf(specularPower) -&gt_sm_ metallicFactor_lt_br /_gt_\n\tf(roughness) -&gt_sm_ roughnessFactor_lt_br /_gt_\n\t_lt_br /_gt_\n\tInstead of_dd__lt_br /_gt_\n\t0 -&gt_sm_ metallicFactor_lt_br /_gt_\n\tf(specularPower) -&gt_sm_ roughnessFactor_lt_br /_gt_\n\t_lt_br /_gt_\n\tWhat do you think _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_? Thank you very much for help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-21T16:56:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235665_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542796427_qt_ data-ipsquote-userid_eq__qt_24145_qt_ data-ipsquote-username_eq__qt_arek3D_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ arek3D said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tf(specularPower) -&gt_sm_ metallicFactor\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHigher specularPower does not imply that the material is metallic. In some cases it does_co_ but in many other cases it doesn_t_t. There isn_t_t a foolproof way to determine without doing some fancy machine learning and even then it still might be wrong. The original author_t_s intent of whether it is metallic or not is not captured using StandardMaterial.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235665_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542796427_qt_ data-ipsquote-userid_eq__qt_24145_qt_ data-ipsquote-username_eq__qt_arek3D_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ arek3D said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif I use PBR materials in Babylon I exceed the 3MB Facebook limit for the 3D post\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m confused by this statement. There is nothing in PBR materials that causes the glTF to be bigger. As you already found_co_ the exporter converts the StandardMaterial to a PBR representation anyways.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arek3D","Date":"2018-11-22T09:52:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235695_qt_ data-ipsquote-contentid_eq__qt_41287_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542819396_qt_ data-ipsquote-userid_eq__qt_26831_qt_ data-ipsquote-username_eq__qt_bghgary_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ bghgary said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m confused by this statement. There is nothing in PBR materials that causes the glTF to be bigger. As you already found_co_ the exporter converts the StandardMaterial to a PBR representation anyways.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt was like this_dd__lt_br /_gt_\n\t1. I imported .babylon files which were exported from 3DS Max. So they had StandardMaterials._lt_br /_gt_\n\t2. Then I decided to put on them PBRMetallicRoughnessMaterials to try to solve FB issue with strange reflections_co_ and I used dispose() function for all StandardMaterials from the scene._lt_br /_gt_\n\t4. Then I saved to .glb the whole scene and the size of the file was bigger_co_ above 3MB (so maybe dispose() method didn_t_t delete std materials immediately or completely)._lt_br /_gt_\n\t5. So I decided to come back to Standard Materials and tried to convert it properly to GLTF._lt_br /_gt_\n\t6. Now I know that this is impossible_co_ because during the conversion metallicFactor -&gt_sm_ 0_co_ and to look decently on Facebook it should be 1.0 in my case (Which was not too obvious_co_ because I did not want to have reflections at all).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnlit extension helped in my project_co_ but it would be great to have the possibility to choose it during the exporting to a .glb file._lt_br /_gt_\n\tAs I said I reported this issue to Facebook at 14th Nov_co_ but haven_t_t received any response yet. Their engines display the same file differently on desktop and mobiles.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-22T19:09:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you can set this up in a _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt__co_ I can probably tweak it such that it is smaller.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]