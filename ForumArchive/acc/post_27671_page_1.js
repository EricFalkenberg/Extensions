[{"Owner":"christian","Date":"2017-01-13T16:05:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   I_t_m fairly new to Babylon.js_co_ having previously worked mostly on OGL and Apple_t_s SceneKit (similar to Babylon) outside the browser. As such_co_ I_t_m probably overlooking something absolutely basic_co_ so please bear with me if I ask a stupid question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m tasked with bringing a 3D visualisation app to the web that until now only runs natively on a workstation. One task that I assumed should be simple involves materials. I can_co_ and did_co_ assign file-based images to materials (diffuse and specular maps)_co_ and this works really nice. But after looking through the extensive (thank you!) documentation_co_ I_t_m slightly at a loss at how to achieve the following_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe original (non-web) application usually takes a client-provided image (file_co_ usually TIFF or PDF)_co_ and then applies a filter onto that image to generate the specular map. This generation process can be quite involved_co_ and may include importing other client-provided imagery. I have written some javascript code that imports the file to a HTML 5 canvas_co_ runs the filter_co_ and then creates the JavaScript image object from the result as follows_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function convertCanvasToImage(canvas) {\n\tvar image _eq_ new Image()_sm_\n\timage.src _eq_ canvas.toDataURL(_qt_image/png_qt_)_sm_\n\treturn image_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo far_co_ so good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ for the life if me_co_ I don_t_t know how to get this image into a material property_sm_ at least not short of writing this as a file somewhere_co_ and then loading it  - this can create a ton of issues and I_t_d like to avoid that. There is brilliant support for a file-based image that take a string as the name_co_ e.g._sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_materialMain.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/owl90.png_qt__co_ scene)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut there is no way that I have found to do the same with a JavaScript object of type Image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have looked at procedural textures that can be based on image files_co_ but their setup appears a bit too inflexible (relying on cofig files) and complex/big calibre (animations_co_ shader) for something that I assume to be basic. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ how can I load an image / html 5 context (basically an RGBA raster image) into a babylon texture? I can_t_t be the first poor sod to try this - what am I overlooking?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any help_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-ch \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2017-01-13T18:50:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you need a dynamicTexture_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar texture _eq_ new BABYLON.DynamicTexture(_qt_dynamic texture_qt__co_ 512_co_ scene_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar textureContext _eq_ texture.getContext()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow paint/blit your image onto the canvas of this texture.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"christian","Date":"2017-01-14T17:00:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh! Thank yo *so* much for that hint! Yes_co_ that should work. I originally dismissed the dynamic textures because I was so fixed on processing the image first_co_ and then assigning them to the texture. This way I first generate the texture object_co_ access the context and process directly into the texture. Brilliant_co_ saves a couple of copy operations as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheer_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-ch\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]