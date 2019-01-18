[{"Owner":"kzerot","Date":"2015-12-03T09:07:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have one problem with export models with animation to babylon format. _lt_/p_gt__lt_p_gt_First_co_ I have some models from mixamo in .dae format. I import one of that models into blender (2.76)_co_ and all working good. But skeleton has some transform_dd_ rotation on X 90 degree and scale. _lt_br_gt_Then_co_ I export this model to *.babylon format and load into my scene. Scale from skeleton and rotation didn_t_t save_co_ but animation worked good. _lt_/p_gt__lt_p_gt_After I wrote some code to fix scale and rotation_dd__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_unit.scaling _eq_ new BABYLON.Vector3(0.01_co_ 0.01_co_ 0.01)unit.rotation.x _eq_ 3 * Math.PI / 2_sm__lt_/pre_gt__lt_p_gt_Without animation model loaded fine_co_ with correct size and rotation. But after animation started_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_scene.beginAnimation(skeletons[0]_co_ 0_co_ 16_co_ true_co_ 0.3)_sm__lt_/pre_gt__lt_p_gt_I have something wrong..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I do wrong? _eq_) _lt_br_gt_Thanks in advance and sorry for my English. _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17678-0-01712200-1449133622.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17678-0-01712200-1449133622.jpg_qt_ data-fileid_eq__qt_5723_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17678-0-01712200-1449133622.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-12-03T15:46:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi kzerot - welcome to the forum _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can you provide a .blend file with just the imported .dae file - no alterations._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It certainly looks like you still have a scale and rotation issue._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kzerot","Date":"2015-12-03T19:34:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for response ) _lt_br_gt__lt_br_gt_Sure_co_ files attached!_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.dropbox.com/s/j2lwbux248w84uq/models.zip?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/j2lwbux248w84uq/models.zip?dl_eq_0_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-12-04T00:57:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well kzerot I have got the animation behaving - see _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/kzerot/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But as you can see there are other issues - the normals are all over the place _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I suspect that it comes from the .dae import into Blender_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried some simple fixes in Blender - but they did not work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will post again with a detailed workflow for getting the animation working and more details on the normal issue as I look at it again over the next couple of days.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kzerot","Date":"2015-12-04T09:12:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks again )_lt_/p_gt__lt_p_gt_ _lt_br_gt_I have no problems with normals (interesting why?)_co_ but I will be happy to know how to fix animation issue )  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-12-05T19:25:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well kzerot_co_ I took another more detailed look at your problem this morning_co_ and while the normals are not an issue anymore_co_ I have run into an interesting issue._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I created a file  _qt__lt_em_gt_export_error2.blend_lt_/em_gt__qt_. This is a simplification of your original file - I added a camera and a light_co_ cleaned out the normal/specular texture stuff_co_ just have the diffuse texture which I packed into the blend file and set to use the first UV map in the long list_co_ and made the last frame of the animation 208. That was my starting point for the first two experiments below. You can get a zipped version of that the file here _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/kzerot2/startfile.zip_qt_ rel_eq__qt_external nofollow_qt__gt_startfile_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All demos below use the same_co_ very simple_co_  javascript and BJS v 2.3._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Experiment 1 _dd_ Using Blender 2.71 and Babylon Exporter v 1.8.0 from an XP computer and the following steps_dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Select the armature and put it into the _qt__lt_em_gt_Rest Position_lt_/em_gt__qt_._lt_br_gt_2. Now select the mesh(Kachujin) and then _lt_u_gt_Alt+ P_lt_/u_gt_ and chose _qt__lt_em_gt_Clear and Keep Transformations_lt_/em_gt__qt_ option._lt_br_gt_3. With the mesh still selected _lt_u_gt_hit the N key_lt_/u_gt_ and note the rotation and scale of the mesh - same as the armature. (If you just used _qt__lt_em_gt_Clear Parent_lt_/em_gt__qt_ in 2_co_ you get a huge mesh lying on its back.)_lt_br_gt_5. Apply rotation and scale to the mesh._lt_br_gt_6. Now Select the mesh and then Shift Select the armature._lt_br_gt_7. Then _lt_u_gt_CTRL + P_lt_/u_gt_ to parent the mesh to the armature again - use the _qt__lt_em_gt_With Empty Groups option_lt_/em_gt__qt_._lt_br_gt_8. Put the armature back into _qt__lt_em_gt_Pose Position_lt_/em_gt__qt__lt_br_gt_8. Export to BJS as usual._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And here is the result _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/kzerot2/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Kachujin in Action XP_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The result seems to be fine - only issue seems to be the inside of the sleeve being transparent  - which can be fixed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Experiment 2 _dd_ Using Blender 2.76 and Babylon Exporter v 3.0.6 from a Windows 7 computer using same steps as above_dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And here is the result _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/kzerot2/indexW7.html_qt_ rel_eq__qt_external nofollow_qt__gt_Kachujin in Action Win7_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not a pretty sight _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_. As far as I can tell the mesh is deforming properly with the animation but the scale and the position of the figure are strange. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I saved the file I had _lt_u_gt_modified _lt_/u_gt_in Blender 2.76 for the next experiment._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Experiment 3 _dd_ Using Blender 2.71 and Babylon Exporter v 1.8.0 on my XP computer to create a .babylon file from the blend file saved in 2_dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I  opened the blend file saved in Experiment 2 in Blender 2.71 and just exported the figure again. _lt_u_gt_No further mods of any kind_lt_/u_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the result _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/kzerot2/indexW7_xp.html_qt_ rel_eq__qt_external nofollow_qt__gt_Kachujin in Action Win7 to XP_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The same as Experiment 1 - as far as I can tell._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So is the issue I am finding somehow a difference in the two exporters? Why am I getting the strange result in Experiment 2?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I ran into the problem with Experiment 2_co_ I started using the web console to check for issues. Firstly I checked the camera position and rotation - all give same result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I noticed this additional info in all of the above examples _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BJS - [14_dd_12_dd_54]_dd_ Unable to compile effect with current defines. Trying next fallback. babylon.2.3.js_dd_3_dd_12357BJS - [14_dd_12_dd_54]_dd_ Vertex shader_dd_default babylon.2.3.js_dd_3_dd_12357BJS - [14_dd_12_dd_54]_dd_ Fragment shader_dd_default babylon.2.3.js_dd_3_dd_12357BJS - [14_dd_12_dd_54]_dd_ Falling back to CPU skinning for Kachujin babylon.2.3.js_dd_3_dd_11987_lt_/pre_gt__lt_p_gt_Your armature has 65 bones - I normally work with around 40. Is this causing the issue and generating the above code?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe people above my pay grade  can provide further information about what might be happening._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-05T20:25:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I confirm your point Gryff_co_ depending on the gfx card used 65 bones can generate too much instructions for the GPU_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you can try the software way with mesh._lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_computeBonesUsingShaders_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ _eq_ false (no more bones limitation as this will be handled by the CPU but in this case expect performance issues)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-05T20:36:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_FOr difference between exporter I will wait for JCP answer _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-05T20:39:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I did not do much / anything between 1.8 &amp_sm_ 3.0 in the armature department.  Unfortunately_co_ there ARE multiple 1.8 versions.  A couple of people made changes without changing the version. KILL _t_EM ALL!!  uh_co_ sorry._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i remember this one guy made changes so mesh need not be child of armature in that time period.  Could look at repo diff history.  Another angle is to diff the .babylons._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just completed my testing of specifying a lower max influencer for Make Human than required_co_ and results were very good.  Hair looked good dropped to 1 from 5.  Proxy body still looked ok down to 4 from 7.  I am going to shelve trying pick which influencer get used when you restrict.  This will mean I can start to wrap up 4.0_co_ after I add cross .blend.  I do not think trying to work with 3.x is worth it at this point.  Maybe revisit this Blend when in QA for 4.0._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-05T20:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Agree. Let_t_s use this for quality check of 4.0_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kzerot","Date":"2015-12-05T20:50:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks all for answers. So I_t_ll try to use old exporter for now! _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-14T20:43:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried working with this start Blend.  Doing nothing to it in Exporter 4.0 gets the camera looking at the feet looking up_co_ never bothered animating it_co_ just used the sandbox._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Tried to reproduce the finish blend using the weekly update to Blender 2.76.  Used _lt_a href_eq__qt_http_dd_//blender.stackexchange.com/questions/30881/pose-mode-how-to-reset-transformed-armature-to-its-rest-position_qt_ rel_eq__qt_external nofollow_qt__gt_stack exchange_lt_/a_gt_ to reset pose to rest. _t_A_t_ - _t_ALT R_t_ - _t_ALT G_t_ - _t_ALT S_t_.  The camera is now in the position of at the feet.  The mesh is now laying on the ground.  I could not follow the rest of the steps._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried the _t_ALT R_t_ - _t_ALT G_t_ - _t_ALT S_t__co_ but just with the armature.  The same thing happens ( turns into a giant laying on its side)_co_ but the camera does not follow.  I turned the armature x 90 degrees &amp_sm_ applied it_co_  animation played.  Did not get the camera in a great position to do an export_co_ but the sandbox does not change all.  Think this is caching.  I made a TOB export_co_ &amp_sm_ the camera is a the right place_co_ the animation is totally screwed up though.  I really need a finished .blend not starting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will delay 4.0 release.  If you can post that will be good._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-14T21:54:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I looked closer at that stack exchange post. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I used the Select armature pose from Outliner _co_ then space and typed _qt_Clear Pose Transforms_qt_ way to set pose to rest position. for 1 this time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then I did 2-5.  I skipped 6-8.  You no longer need to to this.  Exported to Javascript using version 4.0 of exporter.  Ran fine._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will try with the .babylon exporter 4.0. If it works_co_ will proceed._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-14T22:12:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Works with 4.0 .js / .ts or .babylon exporter.  Gryff_co_ Armature need not be parent of Mesh as of 3.0.  4.0 also optimizes verts.  Before positions_co_ normals_co_ uvs_co_ uvs2 would all be 37827.  Here is what log says_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_\tprocessing begun of mesh_dd_  Kachujin\t\tprocessing begun of Standard material_dd_  kachujin_MAT\t\tDiffuse texture found_qt_Texture_qt_\t\t\tImage texture found_co_ type_dd_  diffuseTexture_co_ mapped using_dd_ _qt_Kachujin-lib-UV0_qt_\t\tnum positions      _dd_  9236\t\tnum normals        _dd_  9236\t\tnum uvs            _dd_  18472\t\tnum uvs2           _dd_  18472\t\tnum colors         _dd_  0\t\tnum indices        _dd_  37827\t\tSkeleton stats_dd_  \t\t\tTotal Influencers_dd_  14625\t\t\tAvg # of influencers per vertex_dd_  1.5835\t\t\tHighest # of influencers observed_dd_  5_co_ num vertices with this_dd_  6\t\t\texported as 5 influencers\t\t\tnum skeletonWeights and skeletonIndices_dd_  73888_lt_/pre_gt__lt_p_gt_I see that there are also 6 stray vertices with 5 influencers.  Forcing down to 4 would be a good idea_co_ if there is no damage.  4 to 5 doubles the skeleton weights &amp_sm_ indices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am now set to release._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]