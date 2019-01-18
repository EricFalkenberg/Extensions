[{"Owner":"jerome","Date":"2015-10-22T19:20:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For my own knowledge (remember the Vousk-Prod_t_s survey  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_co_ I just made a minimal asm.js test on my old laptop here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NKL3P%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NKL3P#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You need to run it with FF or Edge 12 or 13 _dd_ _lt_a href_eq__qt_http_dd_//caniuse.com/#feat_eq_asmjs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//caniuse.com/#feat_eq_asmjs_lt_/a_gt__lt_/p_gt__lt_p_gt_You need to set the value passed according to your own computer at the line 45._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can enable/disable asm.js by un/commenting the line 2._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can imagine_co_ I didn_t_t code this in C then compiled it to JS. It_t_s directly (painfully) hand-written._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s just a big loop affecting the render loop. I was wondering about the gain with asm.js._lt_/p_gt__lt_p_gt_Well... I passed the value 50 millions here_co_ and there_t_s no difference with or without asm.js compilation _eq_&gt_sm_ 16 FPS._lt_/p_gt__lt_p_gt_The initial goal was to get a real gain with asm.js._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So ..?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As asm.js compiles ahead on time_co_ I guess the gain would be better if I had many type checks to do instead of a simple loop and a comparison between two signed integers only._lt_/p_gt__lt_p_gt_I can just deduct for now that the javascript engine is really good as it is as fast with JIT compilation as with AOT one for simple type checks and integer operations._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would like to implement in asm.js something like _lt_em_gt_ComputeNormals()_lt_/em_gt_ which needs to iterate over very big arrays and to make many float operation to check if there is a real difference. _lt_/p_gt__lt_p_gt_I still have to learn how to pass (and to get back) by references from js to asm.js  the _lt_em_gt_indices_lt_/em_gt_ (int)_co_ _lt_em_gt_positions_lt_/em_gt_ (float) and _lt_em_gt_normals_lt_/em_gt_ (float) arrays. I don_t_t want to copy the memory_co_ these arrays can be huge _dd_ millions of indices in the SPS._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tips4design","Date":"2015-10-22T20:07:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I get 31FPS with asm and 21FPS without _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-22T20:23:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Chrome_dd__lt_/p_gt__lt_p_gt_47fps without asm_lt_/p_gt__lt_p_gt_60fps with asm_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Firefox_lt_/p_gt__lt_p_gt_49fps without asm_lt_/p_gt__lt_p_gt_49fps with asm_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edge_lt_/p_gt__lt_p_gt_46fps without asm_lt_/p_gt__lt_p_gt_46fps with asm_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jsdream","Date":"2015-10-22T20:57:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve also got 20 fps without use of asm_co_ and 30 fps with _qt_use asm_qt_ uncommented._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"G&#039;kar","Date":"2015-10-22T21:48:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Linux/Firefox 41_co_ GT520 _dd_ 14 fps without asm_co_ 14 fps with asm_lt_/p_gt__lt_p_gt_Linux/Chrome 46_co_ GT520 _dd_ 21 fps without asm_co_ 21 fps with asm_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"WombatTurkey","Date":"2015-10-22T22:24:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not only do I get a significantly amount of FPS increase using ASM (as others stated_co_ 25 to 35-36)_co_ moving the camera around has no lag.  Without ASM the camera lag is very apparent._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-23T07:04:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well... this example is probably not that pertinent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I might recode something more consistent with accesses to big arrays and many float computations._lt_/p_gt__lt_p_gt_But it_t_s just a pain to code directly in asm.js and I_t_m not sure it_t_s worth it to do it in C (then all the flow  C compilation + emscript compilation ) for so little amount of code._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-23T16:11:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_AFAI from my readings on the Web_co_ Emscripten can only access the memory allocated within the Emscripten code._lt_/p_gt__lt_p_gt_This means we can_t_t pass an array by reference from javascript without reallocating the memory in the C code.... this wouldn_t_t be the best thing to do about _lt_em_gt_positions_lt_/em_gt_ and _lt_em_gt_indices_lt_/em_gt_ arrays which can be really big (allocating twice the memory needed)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I need to have a look directly to asm.js code to know if this is the same case_co_ unfortunately poorly documented to code directly in asm.js. But I_t_m afraid this is the same mechanism _dd_ memory reallocation _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"monkeyface","Date":"2015-10-23T20:52:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_On my i7 cpu it makes no noticable difference. On my 10x slower laptop though it is a big improvement... I go from 14fps to 20fps when asm is enabled and the input lag is waaay less obvious._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-12T15:16:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think I understood at last how a JS float32 array can be modified from a asm.js routine._lt_/p_gt__lt_p_gt_I still need to make some tests (very painful to code by hand in asm.js with no real debugger) but I guess it_t_s promizing to speed up some big array float computations without any memory reallocation (SPS case or ComputeNormals for instance)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-12T15:37:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Please look at this test (it needs to open your console) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#210S10%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#210S10#5_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Line 35 _dd_ we define a float32 array size_co_ here 10 millions. You can lower this value for your computer if needed._lt_/p_gt__lt_p_gt_Line 37 _dd_ we create a memory buffer of a size valued to the nearest upper power of two... it_t_s mandatory_co_ all we do now is really at low level._lt_/p_gt__lt_p_gt_Line 38 _dd_ we define a view on this buffer as a float32_lt_/p_gt__lt_p_gt_Line 40 _dd_ with this view_co_ as we handle as a usual JS array_co_ we set all element to zero._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then we call at the line 47 asm.loop() which is a pre-compiled (ahead of time) routine. It_t_s defined at the line 6_co_ it just sets the value 1.0 to every element of the array (actually it does it at byte level)._lt_/p_gt__lt_p_gt_After this call_co_ if you display in the console the content of the javascript array_co_ you_t_ll see everything has the value 1. So the asm.loop really modified the JS array._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is important is the speed. This test should be pertinent with FF or Edge 11._lt_/p_gt__lt_p_gt_The time in milliseconds of the asm.loop() call is displayed in the console._lt_/p_gt__lt_p_gt_If you comment the line 2 (_qt_use asm_qt_)_co_ you should see the difference with/without pre-compilation._lt_/p_gt__lt_p_gt_On my machine_co_ with FF 42 for 10 millions elements _dd__lt_/p_gt__lt_p_gt_asm _eq_ 5 milliseconds_lt_/p_gt__lt_p_gt_no asm _eq_ 12 milliseconds ... remember the browser refresh rate is 16 ms at 60 FPS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There_t_s a real gain here._lt_/p_gt__lt_p_gt_And no math computation (only buffer access and settings) were done._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-12T15:43:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_obviously_co_ we need to make the comparison also to a usual js iteration _dd__lt_/p_gt__lt_p_gt__lt_em_gt_for_lt_/em_gt_ loop and array element settings _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#210S10%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#210S10#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_57 ms on the same machine ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_so_co_ for this very test _dd__lt_/p_gt__lt_p_gt_JS syntax _dd_ 57 ms_lt_/p_gt__lt_p_gt_Asm syntax_co_ no pre-compilation_co_ but strong typing and low-level buffer access _dd_ 12 ms_lt_/p_gt__lt_p_gt_Asm with AOT compilation _dd_ 5 ms_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_From 57 to 5 ms ..._lt_/p_gt__lt_p_gt_I think we really should give a try to package some prebuilt asm basic helpers to be then used from any other BJS core functions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] ooopss_lt_/p_gt__lt_p_gt_there was a big error on my code (Floatarray var instead array32 var_co_ line 49) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#210S10%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#210S10#2_lt_/a_gt__lt_/p_gt__lt_p_gt_so it_t_s 12 ms also for js syntax !!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-12T16:26:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_lol so a great improvement but less impressive than expected _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-12T16:55:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yep... more than 100% of speed gain however _dd_ the asm.js is more than twice faster than the js._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll give a try_co_ if I can_co_ with a version of ComputeNormals() which is only about array iterations and simple float operations_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_not sure_co_ I can pass 3 different arrays (positions_co_ indices_co_ normals) to an asm routine ..._lt_/p_gt__lt_p_gt_almost sure_co_ I can_t_t  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-13T09:28:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_lt_/p_gt__lt_p_gt_I did some more test. An asm module is not designed to accept more than a singleton buffer (as they call it in their spec)._lt_/p_gt__lt_p_gt_So no simple way to pass many JS arrays as input parameters._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s definetly not designed to easily discuss with JS code (share some logic or data)_co_ but rather to be all coded in C then to be all compiled into asm._lt_/p_gt__lt_p_gt_From what I understand until now_co_ what is easily doable is _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The asm routine can share with the JS code a single memory buffer with a pre-fixed size (for now_co_ this size _lt_u_gt_can_t_t_lt_/u_gt_ be changed dynamically after)._lt_/p_gt__lt_p_gt_It is simpler that the data in this buffer have always the same structure_co_ it_t_s not mandatory but quickly un-manageable when dealing with UInt_co_ float32 or pointers on JS object properties within the same buffer !_lt_/p_gt__lt_p_gt_It can read and write in this buffer_co_ so access and modify a JS array._lt_/p_gt__lt_p_gt_It can accept typed numerical input parameter or a JS function that it will be able to call then._lt_/p_gt__lt_p_gt_It can return only one typed numerical value._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So not usable for _lt_em_gt_ComputeNormals()_lt_/em_gt_ as it requires 2 arrays as input parameters (positions and indices) and 1 array to be written_co_ what could have been the buffer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With these programming constraints_co_ I can_t_t see for now any real use case for the BJS core. Maybe only Matrix computations ? but they are already candidates for simd processes..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-13T16:24:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For me asm.js is a tool for C++ developer porting their code to a weird version of JS where no one can contribute or even read the code_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-13T17:03:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_exactly_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was wondering if some parts of the code could be done by hand_co_ but it doesn_t_t really communicate well with legacy JS_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-13T18:53:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_SIMD.js is a better catch I guess_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-13T19:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_well_co_ they treat different things _dd_ _lt_/p_gt__lt_ul_gt__lt_li_gt_simd.js will enable paralellization on float computations what is excellent in our case because of the intensive usage of matrices_lt_/li_gt__lt_li_gt_asm.js will enable AOT compilation_co_ so near native (compared to C) execution speed_co_ because of the pre-fixed types and low level programming (per byte access_co_ memory pointer_co_ etc)_lt_/li_gt__lt_/ul_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think good asm.js programs are coded directly in C and then compiled ...so not readable as they are in asm.js and no maintenable/contribuable as is in pure asm. The source is the C code. Everything must be done in C and we must forget javascript except for DOM handling._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was hoping I could write by hand some generic asm routines_co_ then reusable in the BJS core from the javascript code._lt_/p_gt__lt_p_gt_But the contrainst about the way to share the memory (only one singleton buffer) makes it hard to find real use cases that are worth it_co_ regarding the gain (no need for computing a cross product) and the human un-readibility after._lt_/p_gt__lt_p_gt_If they had implemented a way to pass many arrays as input parameters_co_ this would have been really worth it_co_ because of the speed of iterations and computations. No way_co_ too bad._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My attempts and long profiling tests_co_ especially on a slow computer_co_ while coding the SPS (dozens of thousands of iterations +computations to do CPU side each frame)  gave me_co_ from the _lt_u_gt_real experience_lt_/u_gt__co_  many hints and better practices on how or where we can get serious performance gains with the ol_t_good javascript  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_A real happiness to see the FPS grows up every day with the same program !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-13T21:17:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I agree as I spend my time chasing every bit of js optimization that I can  find_dd_) but asm.js is not for us_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]