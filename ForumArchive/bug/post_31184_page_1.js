[{"Owner":"Vousk-prod.","Date":"2017-06-20T19:25:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using DynamicTexture in a projet. It works like a charm in our servers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut now we delivered the project to an other server and we get the following error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn Chrome console_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.3.0.max.js_dd_9192 Uncaught DOMException_dd_ Failed to execute _t_texImage2D_t_ on _t_WebGL2RenderingContext_t__dd_ Tainted canvases may not be loaded.\n    at Engine.updateDynamicTexture (babylon.3.0.max.js_dd_9192_dd_22)\n    at DynamicTexture.update (babylon.3.0.max.js_dd_42260_dd_41)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn Firefox console_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_SecurityError_dd_ The operation is insecure.  babylon.3.0.max.js_dd_9192\n    Engine.prototype.updateDynamicTexture babylon.3.0.max.js_dd_9192_dd_13\n    DynamicTexture.prototype.update babylon.3.0.max.js_dd_42260_dd_13_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn Edge console_co_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_SCRIPT5022_dd_ SecurityError\nbabylon.3.0.max.js (9192_co_13)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twith a link pointing to _lt_a href_eq__qt_https_dd_//msdn.microsoft.com/query/dev12.query?appId_eq_Dev12IDEF1&amp_sm_l_eq_FR-FR&amp_sm_k_eq_k(VS.WebClient.Help.SCRIPT5022)_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//msdn.microsoft.com/query/dev12.query?appId_eq_Dev12IDEF1&amp_sm_l_eq_FR-FR&amp_sm_k_eq_k(VS.WebClient.Help.SCRIPT5022)_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks like the culprit line in BJS is_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this._gl.texImage2D(this._gl.TEXTURE_2D_co_ 0_co_ internalFormat_co_ internalFormat_co_ this._gl.UNSIGNED_BYTE_co_ canvas)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI can_t_t reproduce the bug in the Playground_co_ I can_t_t even reproduce it on my own servers...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea what the problem could be ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-06-20T22:18:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-06-21T07:04:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I don_t_t get something_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOur server is configured to deliver crossorigin content. The other server (from where the public html page is served) loads_co_ in that html page_co_ our scripts and images from our server. So we shouldn_t_t have CORS problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other server should also define CORS rules? Or there is something inside the source code (when loading the image used in DynamicTexture) we need to set to avoid tainted canvas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-06-21T12:10:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry setting img.crossOrigin _eq_ _qt_anonymous_qt_ before you set img.src.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/23123237/drawing-images-to-canvas-with-img-crossorigin-anonymous-doesnt-work#23123261_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/23123237/drawing-images-to-canvas-with-img-crossorigin-anonymous-doesnt-work#23123261_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis might need to happen here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/controls/image.ts#L88_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/controls/image.ts#L88_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-21T15:42:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI will add it_dd_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-06-21T17:38:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ ._lt_br /_gt__lt_br /_gt_\n\tI added  img.crossOrigin _eq_ _qt_Anonymous_qt_ to the images I load in the DynamicTexture and now it_t_s OK !_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]