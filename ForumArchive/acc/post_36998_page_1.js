[{"Owner":"bestog","Date":"2018-04-12T23:44:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wanted to extend the class _lt_strong_gt_BABYLON.Mesh_lt_/strong_gt_ with some functions_co_ but I have problems. I created a file that does the following (extend.js)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import BABYLON from _t_babylonjs_t_\nimport Helper from _t_./helper.js_t_\n\nconst {roundFloat} _eq_ Helper\n\nclass Mesh extends BABYLON.Mesh {\n  constructor () {\n    super()\n    console.log(_t_check_t_)\n  }\n\n  getMeshBounding (axis_co_ val) {\n    const boundingInfo _eq_ this.getBoundingInfo() // Native Bounding Info\n    const max _eq_ boundingInfo.boundingBox.maximumWorld\n    const min _eq_ boundingInfo.boundingBox.minimumWorld\n\n    if (axis) {\n      const value _eq_ val _eq__eq__eq_ _t_max_t_ ? max _dd_ min\n      return roundFloat(value[axis])\n    } else {\n      return {\n        max_dd_ {x_dd_ roundFloat(max.x)_co_ y_dd_ roundFloat(max.y)_co_ z_dd_ roundFloat(max.z)}_co_\n        min_dd_ {x_dd_ roundFloat(min.x)_co_ y_dd_ roundFloat(min.y)_co_ z_dd_ roundFloat(min.z)}\n      }\n    }\n  }\n}\n\nexport default Mesh\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd in the file_co_ I want to use it (loader.js / same directory)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import Mesh from _t_./extend.js_t_\n\nconst Loader _eq_ {\n  loadObject_dd_ (scene_co_ pos) _eq_&gt_sm_ {\n    // Create a built-in _qt_sphere_qt_ shape_sm_ its constructor takes 6 params_dd_ name_co_ segment_co_ diameter_co_ scene_co_ updatable_co_ sideOrientation\n    var sphere _eq_ Mesh.CreateSphere(_t_sphere1_t__co_ 16_co_ 2_co_ scene_co_ false_co_ Mesh.FRONTSIDE)\n    ....\n  }\n}\n\nexport default Loader_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut apparently he doesn_t_t do it_co_ otherwise a console.log would come.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m relatively new to the ES2015 and Vue. Don_t_t be too hard. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-04-13T05:53:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have extended mesh class but method CreateSphere still uses Babylon.Mesh to create sphere\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]