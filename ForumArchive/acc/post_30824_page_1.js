[{"Owner":"Wingnut","Date":"2017-06-02T19:50:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi kids!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   Admiral Deltakosh recently adjusted some code to get our CannonJS heightMap impostors working somewhat better. (still avoid non-square terrains)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT (there_t_s always a but)... check this out [_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2345_qt_ rel_eq__qt_external nofollow_qt__gt_PG test #45_lt_/a_gt_].  Wait for all the movement to stop.  Are all the boxes sitting on their edges? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tImpostor-meshShape rotational-sync issue?  Me thinks so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I think I see muddy ground (mesh slightly sinking into terrain).  We will know more... once the rotation issue is solved. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI mentioned it in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/2b6bd17eaaa5cecc04846d024156ae4d45974c9f#commitcomment-22246494_qt_ rel_eq__qt_external nofollow_qt__gt_this recent discussion (scroll to bottom)_lt_/a_gt__co_ but DK has been pretty busy_co_ so we should try to puppy-chow these issues (try to solve without expert help).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... the rotation issue started recently - possibly caused by recent activity in heightmapImpostor or boundingBox code. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ I will ask blunt.  Did your recent heightmapImpostor fix... somehow affect boxImpostor rotations?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you/anyone see boxes in #45 demo... resting/sleeping on their edges? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny thoughts/ideas?  Should I be in bugs?  Should I have continued talking in the github comments?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I fixed a bad link to pg #45 in github comments) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI never know how to report stuff.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Over 60% of my reports... end with finding a Wingnut mistake. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-03T19:19:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t Did your recent heightmapImpostor fix... somehow affect boxImpostor rotations\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNope _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTO report please use the forum..I_t_m not a big fan of Github issues and 99% of our users are here\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ told me he will be available to hep this monday..so stay tuned!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-04T05:43:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx_co_ that_t_s good news!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI THINK I understand the bad box rotations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck this out... [_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2347_qt_ rel_eq__qt_external nofollow_qt__gt_link demo #47_lt_/a_gt_]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLookin_t_ good_co_ huh?  Boxes laying flat_co_ no significant mud (no slighty-sinking mesh)_co_ YAY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2345_qt_ rel_eq__qt_external nofollow_qt__gt_the #45 demo_lt_/a_gt_?  Boxes (mostly) laying on edges_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGot good eyes?  What_t_s the difference between #45 (broken) and #47 (working)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is the ORDER of these two lines_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ground.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(ground_co_ BABYLON.PhysicsImpostor.HeightmapImpostor_co_ { mass_dd_ 0_co_ restitution_dd_ 0.1 }_co_ scene)_sm_\nground.convertToFlatShadedMesh()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tKeep them in THIS order... for maximum goodness.  Reverse the order_co_ and it will cause a Wingnut to go insane (and make boxImpostor rotations upon CannonJS heightmapImpostors... become wonky).  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Whooda thunkit?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext issue... WHY does _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2347_qt_ rel_eq__qt_external nofollow_qt__gt_#47_lt_/a_gt_ run in slow-motion often/always? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChange URL to #31_co_ and IT should run much faster.  Then change URL to #47 again_co_ and IT will run faster_co_ too.  What the heck?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt least_co_ that_t_s how it looks to me.  Anyone else?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHeads-up_dd_  The NEXT issue will be... Why can_t_t we do rectangular heightMapImpostors?  Only square terrains work_co_ currently.  This is a much larger _qt_issue_qt_ than previous ones.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_  (Wingy hears his dog whining in the other room.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-06-07T21:10:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTrust _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ to find an amazing sequence of commands that drive a physics engine crazy _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHello friend!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA lot have changed_co_ and I need to follow up on changes in the physics engine to fully answer that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems like the flat shading changes the vertex data in a way that is not compatible with cannon_t_s heightmap (or better yet - with the way we implemented the mesh-to-heightmap conversion). I will need to look deeper into it and understand why. I believe it is a problem with the way I implemented the heightmap functionality_co_ for two reasons - one - this implementation is way too complex to be bug free. and two - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2349_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1RKZXB#49_lt_/a_gt_ _co_ it works wonderfully (but yet slowly) with a mesh impostor (and spheres. no cubes allowed_co_ sadly).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason it works the other way around is that it is using the original heightmap to create the physics body. afterwards you can change the vertex data of the mesh and it won_t_t really matter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout the slowness - that_t_s an interesting thing. Again_co_ I need to follow up on changes made to the engine_co_ but it seems like the step functionality was changed a bit. in playground #31 there is an implementation of the entire physics engine_co_ which overwrites Babylon_t_s implementation. Afterwards_co_ going to a different playground will not reload the page but only the playground_co_ which means - the implementation from #31 is still active. Makes sense?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain - seems weird to me_co_ but I can_t_t tell before checking the entire process.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo your last question (or better yet - saving you the trouble of writing another post after giving us a heads up - this is cannon_t_s limitation. Heightmap are so quick and wonderful because of theway they are implemented. Since it is an impostor_co_ you can do whatever you want with it (turn it_co_ rotate it_co_ throw it in the air_co_ convert it to little cubs and smash it_co_ you know - anything). But it will stay a perfect square. I remember trying to avoid this limitation to no avail. But that was a year ago or so. I might be smarter now. While looking at the heightmap implementation_co_ I will check cannon (non-existing) documentation to see if something pops up.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-08T04:07:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t[Wingy hugs Raanan].  Good to see you!  Excellent thinking on all issues_co_ too_co_ thx.  I don_t_t think anyone will complain about lack of rectangle terrain_co_ but perhaps we could output a warning if someone tries a rectangle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t---------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fast/slow issue... let_t_s call that the 4731 issue.  (PG #47 speeds up after visiting #31)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I was hoping to have more info about that_co_ by now_co_ but I got slow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLikely not related but.. remember when we discovered that Oimo physics ran MUCH faster when we removed the _t_new_t_ in...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.enablePhysics(new BABYLON.Vector3(0_co_ -9.8_co_ 0)_co_ _lt_u_gt__lt_strong_gt_new_lt_/strong_gt__lt_/u_gt_ BABYLON.OimoJSPlugin())_sm_  ?  That was back in 2.5 and perhaps even earlier_co_ and we never discovered why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr perhaps I forgot WHY.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Anyway_co_ I am wondering if this issue_co_ and 4731... are related.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll do some step watching/testing in the morning... and try to help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t---------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDeltakosh made one minor change to a line of code (code that is likely yours)_dd_  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L375_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L375_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(this concerns heightmapImpostors ONLY_co_ as you already know) _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ We/He changed boundingBox.center to boundingBox.centerWorld  (a naming thing only_co_ we thought).  That change... fixed the _qt_physics in only one quadrant of heightMap_qt_ issue.  That is the issue that I cancelled the PR-for.  I was trying a kludge-fix_co_ and that was not the problem. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem was that ANOTHER PR... had accidentally made a change to bb.center.  Your code just needed update to bb.centerWorld.  (I hope I explained that sanely).  I_t_m just glad things are working better and better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAccording to recent polls_co_ the CannonJS heightmapImpostor is the #1 most-loved impostor of all.  It is important for many many games.  A great feature!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPersonal_dd_  I hear (from insider sources) that you have embarked on a large undertaking_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ .  I hope that is going as well as hoped-for.  Feel free to tell us a few words about it.  Use Wingnut Chronicles_co_ if you wish.  thx.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-10T05:28:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tooookay... regarding 4731 issue - Why are _lt_em_gt_some_lt_/em_gt_ heightMaps slow_co_ and why are _lt_em_gt_some_lt_/em_gt_ fast?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnut tests in Firefox ONLY.  Verify/report_co_ as wanted.  Do _lt_strong_gt__lt_u_gt_complete_lt_/u_gt__lt_/strong_gt_ PG reload between tests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter a miserable process-of-elimination_co_ may I present _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2361_qt_ rel_eq__qt_external nofollow_qt__gt_playground #61 (fast)_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2362_qt_ rel_eq__qt_external nofollow_qt__gt_playground #62 (slow)_lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe difference?  Lines 3-5. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- The slow version (#62) uses default BJS .executeStep().\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- The fast version (#61) uses SAME .executeStep() code_co_ brought into playground scope.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWeird!  Fascinating.  We are hot-on-the-trail of THIS little anomaly!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRemember_co_ complete reload when moving from 61 to 62.  If 62 is fast_co_ then you didn_t_t do a complete reload since previous-viewing of 61.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tComments welcome_co_ always.  We_t_ll now call this _t__lt_strong_gt_the 6162 issue_lt_/strong_gt__t_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-10T20:58:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWeird. I_t_ve done quite a bit of testing heightmaps with Cannon. And one thing that happened every time_co_ was the physics body falling through the heightmap_co_ either at the very beginning or at least shortly after the first contact. Keep in mind that this problem was with the raycastVehicle_co_ and only while running the sim on Node. I just stole your matrix from 61_co_ and applied it to one of my older test projects_co_ and oddly enough_co_ I haven_t_t had a fall-through yet_co_ neither on Node or Babylon. although_co_ according to some posts on SO and issues on GH_co_ it might happen eventually. It would be damn awesome not having to create manual static bodies to form the ground_co_ if I could instead be using a heightmap. Hmm. Maybe it_t_s the denser geometry and significantly more faces? I_t_ll have to test this. This is of course my own issue_co_ not entirely related to this. But still _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI still have issues aligning the Cannon heightmap to the meshes created with Babylon. I feel like I_t_m blindly trying to solve a puzzle. Weirdness is going on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PX171%2326_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PX171#26_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-11T09:26:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou_t_re a friggin_t_ physics GOD_co_ Rags!  Geez!  Some of that is probably Raanan_t_s code_co_ too_co_ but still.  Phew.  Marry me_co_ will ya?  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ you_t_re just a few units of Y... out of kilter.  No problems... 5 minute tweak.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFall-thru. That_t_s haunted us forever_co_ now.  I know one thing for sure_co_ though.  You aren_t_t NEAR as physics-blind as I am.  A person like you COULD actually know WHY something suddenly started working_co_ if it ever does.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMe_co_ I just wipe the sweat off my forehead and say _qt_Whew_co_ I_t_m sure glad THAT is behind us._qt_ and I don_t_t ask questions about why/how.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut yeah_co_ definitely_co_ tell EVERYTHING that you learn.  Use Wingnut Chronicles anytime_co_ for anything... please.  Talk away_co_ we can use the knowledge.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-11T10:15:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did shamelessly steal the code from the heightmapImpostor _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI think I_t_ll create a very simple and basic grid of 20x20 polygons in 3Ds Max_co_ align it_co_ and then see if I can make some small bumps to figure out the effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI prefer an actual model for more precision in map making.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-11T11:01:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHaven_t_t tested on Node yet_co_ but so far my 3Ds Max model is working. 20/20 segments. 400/400 size. No scaling done in Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd positioning just got a whole of a lot easier.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe I read that you found the impostor to be positioned in the corner of the mesh used to create the shape. I can confirm this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbody.position.x _eq_ -275.46000480651855_sm__lt_br /_gt_\n\tbody.position.z _eq_ 275.46000480651855_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t275.46000480651855 being the extentSize of the boundingBox. Maybe the impostor system takes care of this itself?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-11T11:50:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA bit more weirdness.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen creating a heightfield based on an actual heightmap_co_ like the example above_co_ the height is a bit off based on the boundingBox. This doesn_t_t happen when using a model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PX171%2328_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PX171#28_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis example runs pretty well_co_ and the elevations seem spot on and don_t_t interfere with the vehicle like a model does.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I change faces or vertices of a model_co_ even the Slightest change in height brings the vehicle to a full stop.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-12T11:16:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found out that my main issue was due to my own restitution and contact settings.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a heightmap out of a model_co_ and it seems to run pretty well_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PX171%2330_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PX171#30_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if I make the ground either &gt_sm_ 500/500 or &lt_sm_ 500/500 it behaves strange. _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll do a Node test shortly_co_ to see if this also works server-side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ So far_co_ so good.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-12T12:32:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ nice.  I switched activeCamera to camera.  That followCamera was being pretty annoying... lots of unnecessary movements.  Thrust point is a little Y-axis-low on the car... lifts the front wheels during accel (difficult to turn during accel).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen things are just right_co_ we can get some pretty nice jumps off-of that center terrain ridge.  The crowds in the stands love it... got good applause.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_a href_eq__qt_https_dd_//www.google.com/search?q_eq_Joey+Chitwood&amp_sm_source_eq_lnms&amp_sm_tbm_eq_isch_qt_ rel_eq__qt_external nofollow_qt__gt_Joie Chitwood_lt_/a_gt_ would have been proud.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s see... 10 cars_co_ all driven by JS drivers... hmm.  A little ice_co_ a little mud_co_ lots of jumps and drop-outs... long BAHA-like track that the drivers TRY to follow.  Cool.  Seems like a nice system to do betting-over...  for shots of whiskey.  Yay! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSaturday Night Racing... 7PM - under the lights... Raggar_t_s Raceway - 2 miles east of Babylville... on Hwy 69.  Sponsored by Meshwhacker Motorsports Inc.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am SO SO off-topic.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOk Wingnut_co_ get out of whimsy mode and back into issues management - try to get some work done.  Thanks for the demo_co_ research_co_ and reports_co_ R.  Well done!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-23T16:17:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ back to the 6162 issue.  PG #61 vs. PG #62.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_177671_qt_ data-ipsquote-contentid_eq__qt_30824_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497072484_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 6/10/2017 at 0_dd_28 AM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAfter a miserable process-of-elimination_co_ may I present _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2361_qt_ rel_eq__qt_external nofollow_qt__gt_playground #61 (fast)_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2362_qt_ rel_eq__qt_external nofollow_qt__gt_playground #62 (slow)_lt_/a_gt_. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI can_t_t let this thread die.  This issue needs _qt_wrangling_qt__co_ so I will bump it.  Why is #61 fast and the #62 slow?  (Wingy watches his _lt_em_gt_step_lt_/em_gt_)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ (lines 2-6)  hmm.  Thx for any help_co_ gang.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-05T18:16:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ I took a look at both #61 and #62 and do not see a difference in performance on my end?  when you say slow and fast I_t_m thinking fps drops or a visual difference in the way the impostors react_co_ but for all intensive purposes on my client there is no difference._lt_br /_gt__lt_br /_gt_\n\t**EDIT whoa... I lied_co_ this is weird I read the above comment about how you needed to reload fully and I was able to reproduce the error._lt_br /_gt__lt_br /_gt__lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt_ I_t_m gonna mull this over when I get a chance.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-07-05T19:25:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep.  Visual difference... impostor speeds.  Put BABYLON.CannonJSPlugin.prototype.executeStep() into playground code... scene goes fast.  If not... it goes slow.  Weird.  Thank you for help... very kind of you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPeople working on comparisons... might need to paste THIS line into renderLoop of _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2362_qt_ rel_eq__qt_external nofollow_qt__gt_#62_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tconsole.log(scene.getPhysicsEngine().getPhysicsPlugin()._fixedTimeStep_co_ scene.getPhysicsEngine().getPhysicsPlugin()._useDeltaForWorldStep)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt returns _lt_em_gt_0.016666666666666666 true_lt_/em_gt_ no matter if lines 3-5 are active in playground_co_ or disabled.  hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-05T21:21:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tweird_co_ the plot thickens!_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RKZXB%2371_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1RKZXB#71_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#222222_sm__qt__gt__lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_15_lt_/span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#FF0000_sm__qt__gt_Uncaught _lt_span_gt__lt_span_gt_TypeError_dd_ Cannot read property _t_getCaps_t_ of null at new t (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_15_lt_/span_gt_) at r.setVerticesData (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_12_lt_/span_gt_) at t._applyTo (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_14_lt_/span_gt_) at t.applyToMesh (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_14_lt_/span_gt_) at Function.t.CreateBox (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_24_lt_/span_gt_) at Function.r.CreateBox (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_12_lt_/span_gt_) at spawnBox (eval at compileAndRun (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_index.js_dd_350_lt_/span_gt_)_co_ &lt_sm_anonymous&gt_sm__dd_29_dd_32) at eval (eval at compileAndRun (_lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_index.js_dd_350_lt_/span_gt_)_co_ &lt_sm_anonymous&gt_sm__dd_37_dd_28)_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\tI redid the structure to make it a little easier to read and debug_co_ every once and a while I get this error above which is odd because it seems to work even with it._lt_br /_gt__lt_br /_gt_\n\tBUT anyways back to the original problem..._lt_br /_gt__lt_br /_gt_\n\tWhy don_t_t we add a bool to the constructor of the so like _dd_ new BABYLON.CannonJSPlugin(true_co_ 100_co_ true)_sm_ that triggers the \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.CannonJSPlugin.prototype.executeStep _eq_ function (delta_co_ impostors) {_lt_br /_gt_\n\t this.world.step(this._fixedTimeStep_co_ this._useDeltaForWorldStep ? delta * 1000 _dd_ 0_co_ 3)_sm__lt_br /_gt_\n\t}_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstatement automatically if the user wants it._lt_br /_gt__lt_br /_gt_\n\tso the new constructor would have one more argument which we could default to true for now until this is fixed_co_ could be a band-aid for now._lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tThis is really kinda crazy.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]