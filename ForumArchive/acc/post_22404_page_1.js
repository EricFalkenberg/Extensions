[{"Owner":"EvilMax","Date":"2016-05-06T15:51:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi evevryone_co_ to describe want i want to archive i have found this example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10VR41%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10VR41#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to create something very similar_co_ but_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) _lt_strong_gt_I would like to know if there is a way to do it without animation_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) _lt_strong_gt_Cast Ray at picked (with length from source to picked destination) point to check collision_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce i hove found a good example_co_ but cant it find anymore_co_ there was an android robot that were launching rays at mouse picked position\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) How could i perform this actions even if for example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_left mouse button is pressed (i would like to perform this action even on continuous press)_lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"EvilMax","Date":"2016-05-06T19:01:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBy the way_co_ while i use heightmap + physics_co_ the function reported in playground_co_ make my cube go through terrain on hills. I tried to chancge function with add ing sin and cos but sobething is keep going wong_co_ any suggestion?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-05-08T14:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there Max_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) does this playground help _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1NQTNE_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1NQTNE_lt_/a_gt_ ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) You can create a ray (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Ray_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Ray_lt_/a_gt_) and then do a pickWithRay (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Scene#pickwithray-ray-predicate-fastcheck-rarr-pickinginfo-classes-2-3-pickinginfo-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Scene#pickwithray-ray-predicate-fastcheck-rarr-pickinginfo-classes-2-3-pickinginfo-_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) You can use an event on mouse down to set a flag. In your game loop you do the action while the flag is set. On mouse up you set the flag to false.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCombined playground for 2 and 3_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#22PWBR%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#22PWBR#0_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"EvilMax","Date":"2016-06-05T16:43:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInteresting example in point 1)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]