[{"Owner":"satguru","Date":"2016-04-01T21:34:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ttrying to export some animations form a blender file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe blend file has 1 skeleton_co_ 1 mesh and 6 animations\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEver time i export the animations I get different results even when no changes were made.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMost of the time the animation shows up completely corrupted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEventually I noticed that the _qt_current or selected_qt_ animation in blender makes a difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the question is before exporting should the blender be in any particular state?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo the animations have to be made in any particular format? For example should the first frame be in a rest position or t-pose etc?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso I see there is a exporter called _qt_Tower Of Babel_qt_ exporter? What is this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-01T22:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI also notice that in blender  actions should start from frame 1 not frame 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had an action from frame 0 to 2_co_ it showed up as 1 to 2 in babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso actions with single frame show up as two frames - so for example I had a single frame action_co_ a _qt_pose_qt__co_ from frame 1 to 1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis showed up as frame 1 to 2.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-04-02T18:19:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoc_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have known about these issues for a while_co_ have just PR_t_ed 4.4.3 to get the animation range in sync with the frames written.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ _co_ who may have departed_co_ gave me a test file with the same problems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI saw the frame out of sync with the range problem_co_ &amp_sm_ fixed it hoping to get the other fixed as well.  Did not.  None of my animations have this problem_co_ and I kind of put it on the back burner.  I have been refactoring the Tower of Babel exporter into being a real_co_ multi-file_co_ python package that does more than export to BJS.  It has support for Blender shape keys_co_ puts out discreet poses for skeleton animations not every frame_co_ and generates in-line javascript &amp_sm_ d.ts file instead of a JSON file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTOB and the relationship with the JSON file exporter is described in the into to the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_documentation_lt_/a_gt_.  I am close to pushing out this version.  Was going to try again to fix this animation problem in TOB_co_ after temporarily turning on _qt_do every frame_qt_.  Make the same change to JSON exporter on success.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now_co_ am trying to determine if all my pipeline needs are going to be met in TOB 5.0.  I need to figure out how to join meshes along with their textures to get down the # of draw calls.  Evaluating an add-on that comes with Blender_co_ UV_dd_ Texture Atlas_co_ but not turned on.  4.4.3 at least fixes the range problem.  If you want_co_ you can go to 4.4.1 if you have no need of IK_co_ and implement your animation ranges on the BJS side yourself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMarty\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]