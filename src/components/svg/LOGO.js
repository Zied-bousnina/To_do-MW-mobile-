import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Logo = (props) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    viewBox="0 0 1024 1024"
    enableBackground="new 0 0 1024 1024"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fill="#1b394a"
      opacity={1}
      stroke="none"
      d=" M790.460938,599.523315  C762.933167,616.934875 732.687317,626.702332 701.983826,635.222961  C669.051331,644.362061 635.388245,649.730957 601.583801,654.496155  C560.344849,660.309265 518.838623,663.029785 477.382477,666.440857  C464.968689,667.462219 452.521210,668.373108 439.557709,670.605835  C459.696045,673.446472 479.306580,673.077393 498.905487,672.905518  C532.593872,672.610107 566.016113,669.064026 599.412109,664.936035  C641.763611,659.701111 683.615479,652.111145 724.454834,639.548950  C745.175659,633.175293 765.547302,625.831726 784.506226,615.117920  C800.092468,606.310120 815.145142,596.810669 824.473328,580.912292  C825.923096,581.009888 825.975281,581.886230 825.921631,582.704590  C824.722046,601.016785 825.324219,619.352661 825.481873,637.669739  C825.577209,648.740723 820.718628,656.943420 812.566833,663.402466  C797.062256,675.687500 778.952759,682.987915 760.427368,689.204407  C729.536804,699.570312 697.711670,705.650940 665.394653,709.482361  C632.915405,713.333008 600.335022,714.885803 567.666382,713.935913  C525.303711,712.704224 483.247833,708.761108 442.506561,696.203369  C422.764618,690.118225 403.259644,683.222534 386.370331,670.736572  C382.469818,667.853027 379.101074,664.365051 375.947510,660.695984  C373.525177,657.877747 371.688538,654.698853 371.303528,650.907288  C370.796112,645.910217 373.343597,642.870972 378.315094,642.661865  C385.137238,642.374878 391.963989,642.142883 398.791077,642.036255  C432.273407,641.513428 465.664734,639.330994 499.026947,636.610779  C501.000031,636.449890 503.436798,636.427063 504.264343,634.384277  C505.218445,632.029175 502.642883,631.088806 501.373779,629.675354  C496.445648,624.186707 490.000427,625.025513 483.687500,625.504578  C462.435669,627.117310 441.158173,628.268250 419.879089,629.452942  C405.108643,630.275391 390.243378,630.311646 375.630463,633.168945  C368.373932,634.587830 361.955536,637.375122 357.616516,643.753052  C356.856445,644.870178 355.857574,646.044312 354.492126,646.066467  C347.752563,646.175842 341.010284,646.116272 333.598755,646.116272  C335.063629,639.776428 337.320496,634.591675 338.018005,628.973633  C340.611694,608.082336 336.999146,588.527771 326.102692,570.436768  C324.909485,568.455688 323.496643,566.532288 321.865509,564.902588  C315.240509,558.283447 309.056427,559.472229 305.068359,567.946472  C302.107971,574.236938 301.357178,581.029785 300.391602,587.780518  C300.231537,588.899475 300.568420,590.141907 299.298584,591.308594  C292.020203,587.691345 284.618835,584.011597 277.215851,580.335205  C276.212952,579.837097 275.910614,578.945984 275.685699,577.923279  C272.356689,562.784790 265.587189,549.441345 254.900604,538.139343  C254.613953,537.836243 254.614380,537.261597 254.375259,536.458679  C258.702728,535.101562 263.017334,535.704590 267.197906,535.971741  C278.853302,536.716492 290.272034,538.989197 301.606720,541.798889  C322.515106,546.981689 333.806854,561.794128 341.231659,580.688721  C346.646698,594.468933 347.625946,608.791016 346.962952,623.869324  C356.791260,623.173340 366.629456,621.688843 376.557831,621.541809  C383.049408,621.445618 389.536774,620.815857 396.025604,620.822937  C431.375427,620.861267 466.543365,617.880859 501.688507,614.565125  C516.472412,613.170349 530.186157,608.069946 543.482910,601.718994  C544.826843,601.077087 546.181702,600.454895 547.557556,599.886658  C547.811279,599.781860 548.190796,599.981750 549.135010,600.155884  C550.091858,611.639160 546.693237,622.159363 540.646301,632.822266  C550.553345,632.718994 559.424927,631.504028 568.236450,630.238281  C591.272400,626.929321 614.340759,623.729370 636.883972,617.681946  C657.838989,612.060547 678.650513,606.188843 696.456421,592.917847  C710.331848,582.576233 710.038879,571.781250 695.096375,562.973877  C683.615234,556.206726 670.787354,552.977478 657.880005,550.369263  C634.199646,545.583984 610.220337,542.936829 586.144104,541.116943  C578.641113,540.549805 578.040344,539.269531 581.827026,532.656921  C586.543823,524.419861 591.234436,516.167236 595.851440,507.874023  C597.259094,505.345459 598.823547,503.827515 602.108826,504.079834  C619.029602,505.379425 635.987976,506.220764 652.892578,507.689972  C669.288147,509.114990 685.651489,510.962036 701.998047,512.886780  C722.982788,515.357605 743.929199,518.213135 764.373047,523.739441  C780.175110,528.011108 795.649475,533.197144 808.817200,543.464111  C822.115906,553.833252 823.754822,566.079651 813.625305,579.434326  C807.395081,587.648193 799.518127,593.996765 790.460938,599.523315  M731.341187,547.968445  C738.514954,551.464905 745.964600,554.535583 751.435425,560.707092  C756.701172,566.647339 757.210876,572.847961 752.613708,579.324280  C748.441162,585.202454 743.193970,590.049561 737.239258,594.148560  C735.703918,595.205444 733.526489,595.719788 732.971985,598.259399  C736.982544,600.367126 740.903748,600.431030 744.791260,598.239258  C750.062378,595.267456 754.572632,591.319397 758.634460,586.877808  C769.508057,574.987610 768.507996,562.357300 755.797363,552.454102  C745.667969,544.562073 734.034607,539.656982 721.775574,536.211853  C695.260010,528.760437 668.198914,524.627075 640.697693,523.460632  C634.545837,523.199646 628.332520,523.031189 622.231201,524.204041  C635.364746,526.562866 648.490173,528.567810 661.592285,530.715149  C685.048523,534.559509 708.466492,538.588074 731.341187,547.968445  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M436.152679,487.904846  C426.483154,483.618286 416.869049,480.438507 406.706726,479.179413  C403.899780,478.831665 402.933716,476.666595 401.770081,474.696747  C388.044830,451.461609 374.417633,428.168304 360.629486,404.970612  C342.329926,374.182770 323.911255,343.465729 305.542511,312.718994  C304.517212,311.002808 303.442261,309.315063 302.456512,307.576599  C299.243591,301.910187 301.528961,297.753235 308.198608,297.694702  C327.359924,297.526459 346.526215,297.743744 365.683899,297.419037  C374.467194,297.270203 380.042908,301.384155 384.199097,308.592285  C392.686462,323.311829 401.317596,337.948547 409.901398,352.612427  C433.213776,392.437317 456.539185,432.254608 479.839233,472.086700  C482.530182,476.686981 484.974976,481.434143 487.746460,485.983704  C491.367157,491.927399 494.674438,492.010651 497.796814,485.928680  C509.523987,463.085754 522.918640,441.195831 535.723999,418.969666  C557.595215,381.007843 579.562561,343.101379 601.409363,305.125519  C615.531250,280.577515 629.600769,255.998215 643.494202,231.320618  C647.298706,224.563049 652.904480,221.765594 660.295288,221.762833  C677.293701,221.756485 694.292114,221.779861 711.290527,221.807404  C712.788208,221.809830 714.304810,221.802170 715.780151,222.019485  C722.678955,223.035629 725.206299,227.795181 721.802795,233.890671  C716.768738,242.906387 711.493164,251.788223 706.259521,260.691284  C653.580933,350.304657 601.214722,440.100006 549.201050,530.101074  C547.242493,533.490112 545.788086,537.309021 542.365417,540.144104  C536.052551,535.633789 529.573303,531.642151 522.551208,528.522095  C510.957977,523.370850 498.699738,521.324036 486.218262,520.320862  C482.709991,520.038940 480.003754,518.911133 477.317780,516.585266  C464.711670,505.669220 451.848846,495.068237 436.152679,487.904846  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M297.842590,661.168213  C311.371124,679.420898 329.434235,691.631348 348.471130,702.492249  C387.909760,724.992981 430.416748,740.054077 473.526825,753.674316  C505.936432,763.913818 538.870911,771.996094 572.102661,778.996887  C605.307800,785.992065 638.643921,792.199524 672.283508,796.751099  C688.118835,798.893738 703.918457,801.268250 719.909607,801.967773  C721.355103,802.030945 722.947876,802.019531 723.969177,803.540588  C722.656250,805.653320 720.471436,805.083435 718.600281,805.242981  C685.250793,808.087036 651.868042,810.328857 618.386719,810.849976  C593.722961,811.233826 569.085144,810.493469 544.440613,809.619507  C526.795166,808.993774 509.205505,807.722717 491.605103,806.419922  C470.334686,804.845459 449.279877,801.765442 428.260010,798.302429  C388.774658,791.797241 349.989319,782.470398 312.180420,769.307556  C283.898834,759.461548 256.749054,747.272522 232.717484,729.024658  C222.965164,721.619446 214.479553,712.904907 207.524902,702.816101  C190.192947,677.673401 193.741577,649.213989 216.610687,628.105652  C227.795044,617.782410 240.852432,610.573792 254.736771,604.675049  C257.937561,603.315186 261.117218,601.905518 265.049377,600.195740  C262.020142,599.112305 260.780609,597.699646 261.436096,594.766724  C264.721863,580.065063 263.259796,565.702026 257.854187,551.689087  C257.636047,551.123596 257.694550,550.451477 257.610779,549.710632  C260.042206,549.544373 260.427399,551.473877 261.236786,552.717102  C266.527618,560.843994 269.092102,569.954651 270.220764,579.450195  C270.566772,582.361328 271.747681,583.932617 274.221924,585.122375  C281.125763,588.442200 287.983673,591.859009 294.828308,595.300049  C300.645966,598.224731 301.229187,603.026001 296.587677,607.366577  C287.518127,615.847961 286.235199,626.705444 287.742340,638.215271  C288.849945,646.673828 292.717804,654.029541 297.842590,661.168213  M250.331039,669.162720  C244.825882,670.288086 243.795273,672.286316 246.881119,676.973877  C254.240082,688.152222 262.926392,698.234009 273.245148,706.782593  C295.141846,724.922729 320.151367,737.598999 346.428192,747.986267  C349.353485,749.142639 352.193115,750.642395 355.421600,750.840332  C357.403076,750.961853 359.125000,750.466431 359.707245,748.283142  C360.218414,746.366211 359.878296,744.580383 358.143677,743.409546  C357.052124,742.672729 355.818939,742.117554 354.596649,741.606934  C343.083527,736.796936 331.591339,731.934265 320.565063,726.068420  C295.224396,712.587708 271.575806,697.026611 255.241013,672.540100  C254.229080,671.023193 253.126770,669.502014 250.331039,669.162720  M256.273743,629.895447  C258.256073,627.021545 260.238434,624.147644 262.577820,620.756104  C261.241333,620.939514 260.738800,620.920532 260.302460,621.081299  C251.609543,624.284607 240.945526,640.491455 241.403137,649.689148  C241.524719,652.132507 242.967758,652.735352 245.053680,652.678040  C248.294098,652.589050 249.062836,650.227783 249.613281,647.699097  C250.922241,641.685486 252.796188,635.881531 256.273743,629.895447  z"
    />
    <Path
      fill="#1b394a"
      opacity={1}
      stroke="none"
      d=" M591.894714,222.141479  C600.082397,222.161133 607.821716,222.161133 615.782532,222.161133  C615.745361,226.441238 613.815735,228.620010 612.447083,230.998627  C582.628052,282.819946 552.851685,334.665924 522.919067,386.421539  C514.662354,400.697968 506.475769,415.003387 498.663574,429.529816  C494.421051,437.418701 490.873138,437.501587 486.358429,429.789032  C467.173920,397.015656 448.177521,364.132263 429.033325,331.335205  C418.285736,312.922913 407.292267,294.653870 396.588898,276.216187  C391.020538,266.624084 382.888306,262.244629 371.890839,262.283722  C343.565094,262.384460 315.237946,262.174133 286.912903,262.345490  C279.440460,262.390686 274.212921,259.578674 270.539642,253.122620  C267.164856,247.191101 263.230621,241.578506 259.839172,235.655716  C255.267075,227.671021 257.986115,222.821808 267.175262,222.579102  C309.486450,221.461594 351.808075,222.329010 394.124298,222.037491  C403.461304,221.973175 410.162292,226.399261 414.767334,234.551178  C431.806274,264.713562 448.977783,294.801086 466.119141,324.905548  C472.877289,336.774506 479.684021,348.615784 486.478790,360.463837  C487.057983,361.473846 487.656769,362.481903 488.344574,363.418793  C491.775848,368.092438 494.435974,368.020203 497.306091,362.938324  C505.496918,348.435364 513.484558,333.817261 521.722168,319.341125  C537.949097,290.825043 554.361023,262.413971 570.541138,233.871429  C575.233093,225.594696 582.045593,221.711197 591.894714,222.141479  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M396.979980,612.138123  C382.706024,611.967041 369.018036,613.146179 354.197449,615.809692  C358.152985,607.432617 361.382385,600.213928 367.049194,594.424133  C369.569885,591.848694 372.944641,591.036377 376.300110,591.666199  C388.115479,593.884216 396.469299,589.779846 402.788666,579.452332  C406.090118,574.056885 411.363617,569.868164 415.542389,565.354797  C418.451141,566.038574 419.066071,568.153198 420.196564,569.701843  C423.631195,574.406738 426.713379,579.393127 430.409637,583.876831  C435.070709,589.530945 441.289612,593.033020 448.722473,592.510010  C465.310181,591.342773 481.951416,590.757751 498.460632,588.608887  C505.004364,587.757141 509.311096,583.956177 511.784180,577.923279  C514.131897,572.196228 515.978638,566.267517 516.610352,560.152649  C517.482361,551.711487 522.984253,548.300293 530.117676,546.154602  C533.351746,545.181763 535.638611,546.833679 537.653381,548.872070  C539.912598,551.157715 537.927551,553.151855 536.816772,555.123596  C535.488281,557.481873 533.811646,559.785583 531.506836,560.999268  C526.281555,563.750854 524.808533,568.440002 523.735474,574.629700  C531.730164,570.655762 538.098572,565.770935 543.043335,558.855469  C546.141113,560.774780 545.083130,563.631531 545.617004,565.841980  C547.296753,572.796387 548.526245,579.804993 548.517273,587.037292  C548.513794,589.839355 547.691711,591.120850 545.271606,592.341003  C528.842468,600.624512 511.422943,604.734924 493.143036,606.590881  C461.317169,609.822266 429.416992,611.199341 396.979980,612.138123  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M445.924561,503.997986  C454.296356,509.671936 462.262299,515.279114 469.547394,521.847351  C468.012329,524.047241 466.222321,523.240234 464.721130,523.123962  C438.763763,521.112305 412.888397,522.572083 387.011322,524.695679  C369.112274,526.164490 351.347809,528.602112 333.628662,531.439514  C331.596985,531.764954 330.078522,531.741516 329.694244,529.104248  C327.837219,516.359009 324.139923,504.156555 318.636780,492.503510  C318.443176,492.093475 318.528320,491.551849 318.436127,490.563141  C324.293701,488.773407 330.417206,488.495575 336.411713,488.043274  C358.164001,486.402069 379.939758,485.799255 401.650421,488.717163  C417.295624,490.819855 432.236511,495.067383 445.924561,503.997986  z"
    />
    <Path
      fill="#1b394a"
      opacity={1}
      stroke="none"
      d=" M374.749451,529.583374  C409.234192,526.760315 443.310547,525.464844 477.405975,527.897278  C491.324982,528.890320 505.220367,530.730164 518.401306,535.841125  C520.566040,536.680481 522.649170,537.740356 524.731323,538.776062  C525.275940,539.046936 525.675293,539.609741 526.582092,540.443848  C519.723206,544.151367 512.768555,545.895508 505.462311,546.146545  C482.185364,546.946533 458.874847,547.152222 435.639832,548.594482  C426.789307,549.143860 419.124969,547.818909 411.214691,544.038757  C398.227539,537.832581 384.348206,534.356628 369.941650,533.205933  C368.503021,533.091003 366.871826,533.269531 365.963165,531.352600  C368.330872,528.823730 371.529541,530.118042 374.749451,529.583374  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M492.176941,581.380737  C478.305878,582.372803 464.879486,583.249756 451.474762,584.383179  C445.664948,584.874512 441.061432,582.908752 437.254974,578.720581  C431.080414,571.926880 426.686951,563.959534 421.401611,555.305359  C428.266602,554.755554 434.256287,554.097473 440.263489,553.826538  C462.170410,552.838806 484.083923,551.997314 505.993042,551.056702  C509.682831,550.898315 510.792297,552.268555 509.644592,555.874023  C507.932129,561.253662 506.556000,566.739380 504.940308,572.151123  C502.488281,580.364197 501.356079,581.174072 492.176941,581.380737  M496.566559,568.514709  C498.130341,568.134460 499.664124,567.422241 499.239899,565.579834  C498.782654,563.594055 496.846161,564.160339 495.448853,564.219299  C478.845001,564.919556 462.241669,565.638245 445.643494,566.458984  C443.971313,566.541626 441.949005,566.458069 440.885895,568.473938  C442.685089,572.692688 446.280487,571.664124 449.484161,571.471558  C464.904938,570.544312 480.322021,569.555054 496.566559,568.514709  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M292.326538,530.894409  C285.557526,530.538025 279.253174,530.262146 272.953552,529.902405  C267.346405,529.582336 265.644592,526.877869 267.594910,521.626831  C268.483978,519.233154 269.932922,517.189087 271.700256,515.441101  C281.146637,506.098328 291.962616,498.848877 304.440002,494.118958  C307.304443,493.033081 308.921204,493.397644 310.130066,496.516296  C314.049408,506.627594 316.473602,517.098267 318.287354,527.745422  C318.929169,531.513123 318.111176,533.236694 313.633148,532.628540  C306.737183,531.692017 299.744720,531.465942 292.326538,530.894409  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M322.917480,577.247559  C332.028961,596.571655 334.660065,616.253479 329.168121,636.690918  C328.311188,639.879883 327.896667,644.522034 323.797821,644.868958  C319.868408,645.201660 318.445190,640.900879 316.755249,637.960815  C310.818695,627.632629 308.872009,616.126953 307.850647,604.527100  C307.064331,595.596558 307.386414,586.572693 308.860199,577.688477  C309.444061,574.168945 309.880432,569.784424 314.203430,568.950500  C318.140045,568.191101 319.560577,572.182312 321.542633,574.736938  C322.045013,575.384399 322.346466,576.187805 322.917480,577.247559  z"
    />
    <Path
      fill="#000000"
      opacity={1}
      stroke="none"
      d=" M339.470032,546.699707  C362.421997,549.526306 384.931976,552.507263 407.894775,559.469604  C397.377991,570.822876 385.178223,576.775024 370.694855,576.937988  C356.134613,577.101868 340.782959,563.951843 335.028900,547.647095  C336.037109,545.983521 337.692047,546.904480 339.470032,546.699707  z"
    />
  </Svg>
);
export default Logo;