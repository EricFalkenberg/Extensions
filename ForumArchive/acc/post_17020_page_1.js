[{"Owner":"croustibat","Date":"2015-09-08T15:16:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everybody_co__lt_/p_gt__lt_p_gt_I need to know what is the parameter for creating a trigger on special key such as Escape_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger_dd_ BABYLON.ActionManager.OnKeyUpTrigger_co_ parameter_dd_ _qt_Escape_qt_ }_co_    function () {      console.log(_qt_heya_qt_)_sm_}))_sm__lt_/pre_gt__lt_p_gt_And if there is a documentation on that I could not find it_co_ sorry  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_EDIT_dd_ of course the code above does not work!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-08T17:10:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello this is the code used to check the key_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var unicode _eq_ evt.sourceEvent.charCode ? evt.sourceEvent.charCode _dd_ evt.sourceEvent.keyCode_sm_var actualkey _eq_ String.fromCharCode(unicode).toLowerCase()_sm_if (actualkey !_eq__eq_ parameter.toLowerCase()) {    continue_sm_}_lt_/pre_gt__lt_p_gt_I_t_m afraid that this will not work with escape_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_can you provide a playground repro? I_t_ll try to make it work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"croustibat","Date":"2015-09-08T17:49:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks deltaKosh_co_ but it_t_s impossible to reproduce my app with the playground _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Anyway I just managed to do what I wanted_co_ but I_t_m not sure if the keyCode value is implemented in all browsers_co_ plus_co_ it_t_s very difficult to read_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger_co_  function (evt) {    if(evt.sourceEvent.keyCode _eq__eq__eq_ 27) {      console.log(_qt_do something!_qt_)_sm_    }}))_sm__lt_/pre_gt__lt_p_gt_Thanks again!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]