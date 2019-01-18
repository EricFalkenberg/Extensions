[{"Owner":"Dad72","Date":"2018-03-07T23:40:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI noticed two bug with the waterMaterial.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlace a field at 0_co_ 0_co_ 0 and an object above this field. Then add water some time later. You will see that the terrain is climbing 1.0 on the y axis. It is no longer 0_co_ 0_co_ 0\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA second problem is that if you now observe the object_co_ the water drops gently on this PG. On my project_co_ it is the opposite the object is gradually found under water_co_ so the ground goes up very very slowly. You have to wait a minute to fully see the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe water moves up or down and it_t_s very subtle but after a while_co_ a boat can be completely underwater or completely overhead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1SLLOJ%23434_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1SLLOJ#434_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-08T00:05:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17355_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/image.png.0aea5b23c5ac255a3e957c00789ffe72.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_image.thumb.png.e75dde9d24fccbef59fab73fc918ed5f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17355_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/image.thumb.png.e75dde9d24fccbef59fab73fc918ed5f.png_qt_ /_gt__lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen after messing around for a while_dd__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17356_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/image.png.cc7987846727f00c2b54922f038c5a17.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_image.thumb.png.37a936416dd5b5ca941886f70c225c6a.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17356_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/image.thumb.png.37a936416dd5b5ca941886f70c225c6a.png_qt_ /_gt__lt_/a_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/image.png.51cf5b862771444afff99d8444d05baf.png_qt_ data-fileid_eq__qt_17357_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17357_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/image.thumb.png.5fcd7cb96ef7fdf51ecedd8c306d8e18.png_qt_ alt_eq__qt_image.thumb.png.5fcd7cb96ef7fdf51ecedd8c306d8e18.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood catch._lt_br /_gt_\n\t_lt_br /_gt_\n\tSimple fix I bet._lt_br /_gt_\n\t_lt_br /_gt_\n\tAnother problem I have noticed is reflection problems tword the bottom of the viewpoint when you are close to the water looking out nearly perpendicular._lt_br /_gt_\n\t It seems to stretch the reflection.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-08T00:19:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can almost guarantee its_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/src/water/water.vertex.fx#L129_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/src/water/water.vertex.fx#L129_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tvec3 p _eq_ position_sm_\n\tfloat newY _eq_ (sin(((p.x / 0.05) + time * waveSpeed)) * waveHeight * windDirection.x * 5.0)\n\t\t\t   + (cos(((p.z / 0.05) +  time * waveSpeed)) * waveHeight * windDirection.y * 5.0)_sm_\n\tp.y +_eq_ abs(newY)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI would just see if we can nerf out the p.y+_eq_abs(newY) for now if that it will fix it._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1SLLOJ%23435_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1SLLOJ#435_lt_/a_gt__lt_br /_gt_\n\t...Nope that did not seem to fix it..._lt_br /_gt_\n\t_lt_br /_gt_\n\tHmmm I gotta do some thinking now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-08T01:02:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tactually it looks like what I am doing is not replacing the shader_co_ so I bet it would fix it if the changes I made propagated._lt_br /_gt_\n\t_lt_br /_gt_\n\tThat is the only place anywhere on the shader that it manipulates the height so has to be responsible for that glitch._lt_br /_gt_\n\t_lt_br /_gt_\n\tPerhaps a Parallax Displacement would work better?_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//graphics.cs.brown.edu/games/SteepParallax/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//graphics.cs.brown.edu/games/SteepParallax/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-03-08T01:13:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour change in the shader here works for me. Can be your cache that makes you think it was not working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe water is at 0_co_ 0_co_ 0 and does not up and does not down.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1SLLOJ%23435_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1SLLOJ#435_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-08T16:18:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk cool_co_ are the waves still working?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-03-08T17:20:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ Are you going to make a PR for this correction?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-03-08T17:53:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did the PR for this fix\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-08T21:33:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPR_t_s scare me_co_ hence why I have so little...  Its like you make it you are responsible for it and that is way to much accountability. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-09T16:35:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe are a team so you won_t_t never be left alone\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]