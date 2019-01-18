[{"Owner":"Stalker","Date":"2015-12-28T14:38:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_d like to create material with gradient and transparency effect as show on the image bellow (green_co_ yellow and aqua color circles_co_ everything else is irrelevant). After some searching I found _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Gradient_qt_ rel_eq__qt_external nofollow_qt__gt_gradient material_lt_/a_gt__co_ but it uses BABYLON.Color3 which doesn_t_t support transparency._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How can I achieve desired effect?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17157-0-67809900-1451312636.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17157-0-67809900-1451312636.jpg_qt_ data-fileid_eq__qt_5911_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17157-0-67809900-1451312636.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-12-28T15:22:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_How about a material with a diffusecolor (or emissivecolor to get the glow effect) in combination with a black-white gradient texture in the opacity texture channel?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-28T17:35:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI had to give that a try_co_ just because it is such a cool idea.  But I have run into SO many problems... because I_t_m not very smart.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ here is a good black and white gradient image...  _lt_a href_eq__qt_https_dd_//c1.staticflickr.com/1/169/409539495_70d220b646.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//c1.staticflickr.com/1/169/409539495_70d220b646.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI temporarily mapped it onto the cylinder_t_s diffuseTexture...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#27HFSC%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#27HFSC#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ it doesn_t_t turn white at the top.  Not sure why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ here we go with the attempt to use it as an opacityTexture_co_ and use a green texture as the diffuseTexture...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#27HFSC%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#27HFSC#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPretty much a complete failure... but in the right hands_co_ I bet this could work.  Anyone feel like getting it working for Stalker and I?  Thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate_dd_  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#27HFSC%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#27HFSC#3_lt_/a_gt_  (getting closer)  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate2_dd_  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#27HFSC%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#27HFSC#4_lt_/a_gt_  - Got rid of the end caps by using a Jerome tube.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  It still has a little _qt_rim_qt_ showing at the top... not sure how to remove that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-12-28T18:59:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Convergence - I did not find opacity texture channel_co_ it will certainly make thing easier (was searching for transparency and alpha_co_ opacity synonym slipped my mind)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Wingnut - Awesome_co_ like it already _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_. I_t_m gonna use your code as a starting point. I also enabled backface culling on the material_co_ but I don_t_t know yet about about that top rim. Perhaps unwrapping a model and creating an UV image_co_ but I_t_m positive there is an easier way. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-12-28T21:01:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Transparency is incoming. Documentation incoming tomorrow_co_ but you can play with these parameters_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_topColorAlpha (float between 0 and 1)bottomColorAlpha (float between 0 and 1)smoothness (float between 0 and whatever)_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stvsynrj","Date":"2015-12-29T01:39:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    Another way to get something similar is to first create the gradient with alpha like this _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17349-0-38888700-1451353101.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17349-0-38888700-1451353101.png_qt_ data-fileid_eq__qt_5913_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17349-0-38888700-1451353101.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    Then_co_ set it as a diffuse_co_ emissive and opacity texture._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LCGQ8%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LCGQ8#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    Hope this help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-12-29T23:57:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Temechon_co_ thanks a lot for the update. But I_t_m experiencing two problems._lt_/p_gt__lt_p_gt_1. Alpha isn_t_t working (but probably I_t_m doing something wrong)_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Code that I used_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_            var material_dd_ BABYLON.GradientMaterial_sm_            material _eq_ new BABYLON.GradientMaterial(_qt_selection-material_qt__co_ this.scene)_sm_            material.topColor _eq_ BABYLON.Color3.Red()_sm_            material.topColorAlpha _eq_ 0_sm_            material.bottomColor _eq_ BABYLON.Color3.Green()_sm_            material.bottomColorAlpha _eq_ 1_sm_            material.offset _eq_ 0_sm_            material.backFaceCulling _eq_ false_sm_            material.smoothness _eq_ 50.0_sm_                        // var tube_dd_ BABYLON.Mesh_sm_            // tube _eq_ BABYLON.Mesh.CreateTube(_qt_selection_qt__co_ path_co_ 1_co_ 12_co_ radiusFunc_co_ 0_co_ this.scene_co_ false)_sm_            var tube _eq_ BABYLON.Mesh.CreateCylinder(_qt_cy_qt__co_ 100_co_ 1_co_ 1_co_ 12_co_ 1_co_ this.scene)_sm_            tube.material _eq_ material_sm_            tube.isPickable _eq_ false_sm__lt_/pre_gt__lt_p_gt_2. Don_t_t really know how to explain_co_ so I_t_ll add an image. Colors transition isn_t_t correct_co_ it is only when mesh height is equal or greater than 100. Code is the same as the one above (alphas and smoothness properties were not set). Left is height 100_co_ the right one is 20._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17157-0-09552100-1451433256.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17157-0-09552100-1451433256.png_qt_ data-fileid_eq__qt_5927_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17157-0-09552100-1451433256.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Stvsynrj_co_ thanks! Your solution is quite similiar to the Wingnut_t_s. I_t_d like to avoid additional images (and top edge) so I_t_ll go with this option as a last resort _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-30T06:49:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@stalker... I_t_m no expert in materials and textures_co_ but I _lt_em_gt_think_lt_/em_gt_ that when Convergence said _qt_opacity texture channel_qt_... he was talking about the BabylonJS material._lt_em_gt_opacityTexture_lt_/em_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In short_co_ I just built a demo... using Convergence_t_s idea.  At least that_t_s what I _lt_em_gt_think_lt_/em_gt_ I did.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_His comment caused me to put the gradient image in material.opacityTexture._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ sorry to interrupt the discussion of the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/materials/gradient_qt_ rel_eq__qt_external nofollow_qt__gt_new Gradient Material_lt_/a_gt_.  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]