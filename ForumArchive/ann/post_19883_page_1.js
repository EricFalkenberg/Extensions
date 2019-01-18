[{"Owner":"JCPalmer","Date":"2016-01-15T16:37:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUpdated Blender exporters have been released introducing Blender Actions support via AnimationRanges.  The documentation has been updated_co_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  Below are excerpts_co_ as screen prints since markdown does not display here very well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as any known future plans_co_ Tower Of Babel is probably going to drop Typescript file generation.  I put that in a while back_co_ and now think it would be simpler to always generate a _t_.js_t_ and a _t_.d.ts_t__co_ then giving the user a choice of a _t_.js_t_ and / or a _t_.ts_t_ file.  Up until now_co_ most of my use of the exporter has been testing upgrades to it.  I have not been using the typescript output during testing_co_ cause it is an extra step.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think as soon as the QueuedInterpolation extension is done_co_ my game production will begin_co_ and do not see much further changes needed.  Anyone else can add whatever they want_co_ and possibly PR it_co_ of course\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6042_qt_ data-unique_eq__qt_qq8ccfq08_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/Selection_148.png.a76125b0aa596ff1f69b7d170b79ca1a.png_qt_ alt_eq__qt_Selection_148.png.a76125b0aa596ff1f69b7d_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/Selection_149.png.d688d60f23317e12ef882b56f56fe24d.png_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6043_qt_ data-unique_eq__qt_osisa8nhx_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/Selection_149.thumb.png.f457a6659e5a67876f8564651286d9d0.png_qt_ alt_eq__qt_Selection_149.thumb.png.f457a6659e5a6787_qt__gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-01-15T17:22:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFrom the docs\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Inverse Kinematics Friendly_lt_/strong_gt_- There is a custom exporter property (on Scene tab)_co_ _lt_code_gt_Ignore IK Bones_lt_/code_gt_. The effect is any bone with _lt_code_gt_.ik_lt_/code_gt_ in the name will not be exported. Any extra bones that are needed to make inverse kinematics work will never make it to BJS. _lt_u_gt_So now you can do all your posing for your key frames more easily in Blender_co_ without the baggage following you to BJS._lt_/u_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tJeff_co_ I have stayed away from using IK in my BJS experiments as they often add quite a few bones to control the IK - the _qt__lt_em_gt_baggage_lt_/em_gt__qt_ as you call it - so it will be interesting to try this and some of the additional animation functionality.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd let me say Jeff_co_ you have done a great job on building the exporter for Blender - I_t_ve had very_co_ very few problems with it over the last two years. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-15T17:30:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is excellent! Thank you very much JCP!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-26T17:59:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTalking most to Gryff_co_ but I am in development of a IK game rig for MakeHuman MX2_co_ _lt_a href_eq__qt_http_dd_//www.makehumancommunity.org/forum/viewtopic.php?f_eq_13&amp_sm_t_eq_13100_qt_ rel_eq__qt_external nofollow_qt__gt_see_lt_/a_gt_.  Actually modified script to create rig_co_ but still investigating issues &amp_sm_ seeing if there is any appetite  to put it in the main branch_co_ or only in a fork I make.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-01-26T18:14:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJeff_co_ I looked at the picture of the rig you posted at the MH forum (your link above) - no IK for the legs in your plans?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tseeing if there is any appetite  to put it in the main branch\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tPersonally Jeff_co_ I would go for the main branch.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-26T18:31:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs far as main branch_co_ there is a reason it is call a _qt_Pull _lt_strong_gt_Request_lt_/strong_gt__qt_.  Not much I can do if the author is not interested.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI played the massive 276 bone MHX2 IK rig_co_ and it pretty much posed with ease.  Here_co_ I just made sure any bone with IK in the name did not get removed.  Have so many things to work on_co_ have not played to see if this is sufficient after enabling the IK.  Here is _lt_a href_eq__qt_https_dd_//drive.google.com/file/d/0B6-s6ZjHyEwUb1hHYXFUTGRmNUk/view?usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_Blend_lt_/a_gt__co_ if you wish to play.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTheir forum is far sleepier_co_ so thought would put out that thread then go work on something else.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-01-30T19:58:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJeff_co_ I took a look at the .blend file you linked too. Wonder what I am supposed to be seeing. It loads with the armature in edit mode and ten bones selected. Each of these selected bones has _qt_ik_qt_ in its name - hipik.L_co_ hipik.R etc. But they are not IK bones- they are linked normally to the armature with a parent bone and are not applying a constraint to a bone or chain of bones.  (They are however set to not deform any mesh.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo what am I supposed to be seeing? The view in the 3D window looks just like the picture you posted on the MH forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-02-01T21:55:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt was just the .blend for making the picture in the other forum post.  It was script built in MHX2 with meta-data changes by me. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had also started working on a script which would take skeleton_t_s pose library and convert it to shape keys on the mesh.  This was to create shape keys for fingers.  Like everything_co_ it is just another thing that also most works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave decided that I really need to just finish some stuff.  Skeletons are on hold.  Working on speech till it is far closer to DONE.  Just got the pacing right.  My mistake was assigning the entire duration for a given phoneme in the phoneme itself.  So a word like P-U-T_co_ would have a very short P_co_ a long U_co_ and very short T.  This would make mouth open &amp_sm_ then chop shut suddenly.  Inner word phonemes durations are now spread between the phoneme and the next phoneme_co_ so that the maximum opening is actually in the middle.  Made a huge difference.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dudicious","Date":"2016-02-07T16:13:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI_co_ first post here!  Just wanted to say that I tested the Blender Actions export feature with 2.3 and it works AMAZING!  Thanks so much for this feature.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ thanks to all of the veterans here who have made my life so much easier.  This may be my first post but I_t_ve spent hours here troubleshooting_co_ and the community has never failed me yet.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]