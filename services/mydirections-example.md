# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Then modify the URL and provide your URL here:

```
https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
PASTE_YOUR_URL_HERE
```

Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJa147K9HX3IAR-lwiGIQv9i4",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJzzgyJU--woARcZqceSdQ3dM",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 34.1358593,
               "lng" : -117.922066
            },
            "southwest" : {
               "lat" : 33.81558589999999,
               "lng" : -118.3516983
            }
         },
         "copyrights" : "Map data ©2022",
         "legs" : [
            {
               "distance" : {
                  "text" : "35.1 mi",
                  "value" : 56528
               },
               "duration" : {
                  "text" : "50 mins",
                  "value" : 2993
               },
               "end_address" : "100 Universal City Plaza, Universal City, CA 91608, USA",
               "end_location" : {
                  "lat" : 34.1358593,
                  "lng" : -118.3511633
               },
               "start_address" : "1313 Disneyland Dr, Anaheim, CA 92802, USA",
               "start_location" : {
                  "lat" : 33.8160897,
                  "lng" : -117.9225226
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "10 ft",
                        "value" : 3
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 0
                     },
                     "end_location" : {
                        "lat" : 33.8160679,
                        "lng" : -117.9225314
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qukmEvvvnUB@"
                     },
                     "start_location" : {
                        "lat" : 33.8160897,
                        "lng" : -117.9225226
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "397 ft",
                        "value" : 121
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 33.8155824,
                        "lng" : -117.9235917
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "mukmExvvnUZPLJLLBBFJFLHPBPBL@N?L?J@l@"
                     },
                     "start_location" : {
                        "lat" : 33.8160679,
                        "lng" : -117.9225314
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "417 ft",
                        "value" : 127
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 33.816278,
                        "lng" : -117.9242395
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eSouthwest Pl\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWest Pl\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "krkmEl}vnUKTAFAF?D?x@?F?DABABCBC?C@A?C?eB?"
                     },
                     "start_location" : {
                        "lat" : 33.8155824,
                        "lng" : -117.9235917
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 207
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 87
                     },
                     "end_location" : {
                        "lat" : 33.8179984,
                        "lng" : -117.9240946
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSouthwest Pl\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWest Pl\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePartial restricted usage road\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wvkmEnawnUEe@O?[BI?C?MEY?c@@E?G?EBKDk@?Q?_@?mAA"
                     },
                     "start_location" : {
                        "lat" : 33.816278,
                        "lng" : -117.9242395
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 163
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 33.8179846,
                        "lng" : -117.9223305
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eW Ball Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Staybridge Suites Anaheim at the Park, an IHG Hotel (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oalmEp`wnU?iB?k@@iA@_C"
                     },
                     "start_location" : {
                        "lat" : 33.8179984,
                        "lng" : -117.9240946
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 352
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 33.8207878,
                        "lng" : -117.9230963
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDisneyland Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kalmEpuvnUAs@_@Bk@HA?UFKBa@JuCp@{@T_@LYLKJUJc@LEBeAX"
                     },
                     "start_location" : {
                        "lat" : 33.8179846,
                        "lng" : -117.9223305
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.3 mi",
                        "value" : 35888
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1581
                     },
                     "end_location" : {
                        "lat" : 34.0256221,
                        "lng" : -118.2059515
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eI-5 N\u003c/b\u003e toward \u003cb\u003eLos Angeles\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}rlmEjzvnUi@MICEASIcA]{@[C?SGSGMEMEC?KCSAEAMAO?E?]@C?E@E?MBE@I@IBKBA@UJE@EBIDGDKF{AtAs@l@y@r@y@r@_At@WTs@l@qAjA_@\\]p@_BnAe@b@iAfA}BbCUTWXw@z@[ZyB`Cq@x@SR_@^CDcBjB_A`Ak@l@sAvA}@~@_A`Ay@~@o@t@Y\\QTIFuAtBa@x@Wh@Wj@Ud@e@jAQf@M^IV[bAMd@_@xAWpAQdAEXo@jEIj@a@pCw@hFMx@EXUlAMj@e@|AM`@M^KX{@vBqAvCSb@q@zAEJIPaAtBaChFwDvISd@aEjJgB|DsBtEaF~KMVm@rAWn@i@jAO\\Wh@[p@[l@aAdBe@x@m@fA}@|AQZYd@[h@U`@QZABYh@c@|@_@v@{@rBUn@m@~AEHs@lBk@|AsB~EwAlDi@pA_A`C_@~@Uf@[t@aChGQf@{CjH{AhDgAhCqAxCkDfIA@iArCkAdCEFoA|BaA|AaBbCg@p@W^a@j@GHgAtAu@dAiCpDY\\aB|Be@|@ABINKRA@?@GJ?@Sd@_@~@Sh@Oh@WfAADAFGZ[rAYzAKb@EVETS~@U|@k@vB[lACF_AzE?@YlAMl@ADWbAOn@}@hCQh@k@~Am@xAu@dBYp@Wh@INgAzBc@x@QZU`@qAxBk@bAU`@]j@[f@c@r@a@r@s@tA_AhBSb@ABQ^c@dAO\\CFUf@e@`AoApCA@e@fAmAnCSd@g@fA{@lBoAbD}@nBOZKV_@v@mArCSb@Qb@Sd@aBpDg@jAy@lBKTsApCABGHGNINEJCJGJGRc@`A[t@c@`AoAlCmBjEMZ]t@_@z@w@bBe@|@c@r@OTOTA@SZCBc@r@a@h@g@n@e@j@Y^]b@QTq@t@s@z@MNILe@n@]d@}@nAi@r@GJ[b@e@j@KLKNMPUZW^]b@MNW`@AB[b@_@n@mAtBcCnFeAnCYz@Wz@ENKXoAzDeB|E]`ACHEJ?@ITELA@Yx@ENKTkApCe@fAOZIRs@~A{@lBQb@Yp@}@rBaAzBIN?BSb@IPSb@u@fBiBdEsAdDiAtB_BxCaAfBuAjCGJUd@w@bBQ^GLGNy@tB_@dAA@IVq@zAgA~BCFCBgBjD[f@GLELIREJsA`Dc@bASj@y@rBa@~@aA|B[x@Qd@Qb@Sd@ITc@bAqAhDABsCbHSb@?@O`@g@jAABm@vAsA`DoB~EWj@u@dBuBxEqCjGSf@q@rAEH}A~CmAbCe@~@CFQZaGdLQ\\yC`Gm@nAYf@S`@m@rAeAfCYl@O\\Sb@OZ}B~EmCvGs@xAKR_@x@Q`@Ud@EJKTKToApCu@zAaAdBc@r@a@r@kAnBmAnBaB~BW\\qAdBi@p@m@r@EDgBnBA@mBvBQNmChCEBeAfAuCrCgAdAKJmBlBeBdBqApAwA~As@z@EDIJa@h@u@bAaBrCk@~@i@bA_AzBOZw@bBu@bBs@xAq@zAg@bAs@rAs@jASXSVmBfC_BzBcApA{A~A{A~Ak@h@o@j@cAr@]\\]ZcDvBw@d@w@d@}CnBi@^y@f@w@d@KFIFOJOJEDQJEB[PsDzBi@\\}@j@{ClB{@j@YP_Al@{ChBaBbA_@TyA~@A?{BtAA@[RA?]TMFwA|@WN]RA@}@h@}BrAwA~@{BvAg@Ze@\\kC`BYTy@f@aEjCiBnAoAp@_@TcC`BcAp@s@d@e@\\kBtAcAn@SL[RQJA?]Tw@b@uAr@]RyC`B{@h@]TA?sBnAGDmBlA}BrAMHEBA@u@b@WP{@b@WNaAj@A@_@Ta@TqAx@m@\\o@^wCbBcAn@y@d@CBsBhAe@VSLQH[RMF_@Ru@b@GDm@\\yAz@SJc@VeAn@q@`@}A|@sBjA}@h@KFQJa@T}A~@c@Vw@b@SLcAl@ID}@h@wCdB_@T_@T_Ap@y@n@g@b@i@f@_@^a@`@UXm@r@_@b@a@j@QVwAvBk@|@A@W^cA~AeA`B{BhDgAbBg@t@uAxBg@t@m@|@gBpCw@nAu@dAg@x@k@|@eA`Bk@x@e@r@W^y@pASZu@hAiIhMW^uBbDW^_@l@OTILKNe@r@CDe@n@MNORYZe@h@k@h@m@j@c@^SLgAt@YRk@\\o@\\e@Ve@REBKDA@[Js@Vu@T_B`@qCj@c@JSDWFsB`@}@PmAXE@s@NWDUFa@Hk@LODc@Hk@Lw@NC@]HaAPi@Ls@Nc@Jg@JgAZi@Nu@XiAd@gAh@eAl@MHKFe@TOHc@Xc@^e@^OLa@Zg@Z_@T_C|A[PeAr@SNyB|AYVEDWRk@f@oAnAA?oApA_A|@{A|AYXc@b@YXy@x@cA`Aq@p@mBnBiBjBkAhAuAtAk@j@YX[ZeAfAcAbA_@\\QTOP{@fACDg@p@U\\{@rAKN}@tAo@fA[j@GLm@bAg@v@_AjACDA?YXYXGFo@l@WVCBKJA@MN_@\\k@j@GD}@|@YXoAnA}@x@A@[Z[XA@{@v@a@`@i@f@MJq@p@g@d@{DtDkBhBiAdA{CtCgBbBONwArAOLm@h@YVONEBWV[Z[Zw@t@u@p@URq@h@o@d@q@`@c@Ve@TOHEBq@\\i@XKDs@\\SLGDWLGDUNC@e@X[Va@\\_@\\EDs@n@aA|@}AxAy@v@kBdBWRk@j@YVWViB`BiA`ASPu@r@aA`Am@j@c@h@cE~EeBrBUVCB_CnCw@bAgAbBEFWb@a@p@GJS`@Ud@Ud@Q\\Yl@Wb@Ub@KPMP[f@c@h@YZ]^_@^i@h@UTs@l@s@n@_Az@y@p@OLED]\\m@n@m@n@a@h@IL_@h@AB[h@OXOT_@t@iAxCYz@KTCHIPWt@Od@MZCFy@dCw@xBOb@e@tAaAnCY|@eAtCg@xAKZM`@WbACLAHCFc@pBa@xBWrAk@vBOj@CFa@lA]x@IVe@~@m@hAOVIN?@A@S`@MXA@EJELCF[t@ADABe@vAIVGTCHCDIVWp@k@zAY`Ag@vAW~@kCrHa@hA?@A?ENs@lBe@vAYbAK`@ABU~@CLABKp@c@nCQxAK|@I`AA\\AXCd@Cp@E\\?x@?p@@bCAzG@`JA`@?|ABR?\\@\\?v@AfA?|A@lEA`D?@Ap@?@Cd@IjAGjAEh@K~@EVCPEZALGZo@fDQr@Mf@Y`ASl@Sj@aBbFiAfD{@jCOb@ABK\\CFi@~AMb@{AnEAFwAfEyAnEM^K\\y@dCs@pBc@jAMb@]nA?BMf@K^CLIZK`@"
                     },
                     "start_location" : {
                        "lat" : 33.8207878,
                        "lng" : -117.9230963
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.7 mi",
                        "value" : 18765
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1069
                     },
                     "end_location" : {
                        "lat" : 34.1291624,
                        "lng" : -118.3472425
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eUS-101 N\u003c/b\u003e, follow signs for \u003cb\u003eLos Angeles N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCivic Ctr\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "cstnEdbnpU?b@CPCNg@xBW`AMf@Od@Ut@cArCmAnDKXIXSj@o@lBQd@_CzGwAfEIPM\\CP[z@[|@g@tAWv@KZYz@c@hACF]|@a@fAK\\KRu@fBO\\S`@]p@IPCDGLMTOZ]j@]h@QX]b@MPORIJKNUVCBEFQPa@b@sArAWXa@V[Zs@h@m@`@]TKDQLQF[NEBSJE@KDMDiAXC@]JWDg@FOB]Dy@DU?_@@u@As@EoBWy@Gs@Em@?GAW?_@@[BmAFy@Fa@@U@a@?W?a@Aa@CC?]C]Cu@KeC_@}BY}CU]Ak@Ae@?wA@iB@oC@k@?}AF]@K?aAHS@k@Di@Hm@Fm@JyAXi@L_Bd@C@_AZc@PsAh@UHeAh@GBE@C@_A^OFc@Pe@R}@\\{An@WNUNA?MLOJOLMLKLMRQVA@GHABIJQ^[z@A??BEJOd@CLAHCJAHCP?HCNAPARAb@Er@?HAF?DAJ?DADG^AJC^AFATCJ?DAJOnAU~BKhAEZC`@CNMrAKpAQzBMtAOzBCRGbAAJK|ACRAT?TARAb@ARCVEZIdAGbA?BCZEbACj@Ah@AZAz@Bv@@J@PDbA?j@At@Ab@C\\Gp@CNGZG\\I^GPCJUl@Wn@CHCDIPOZOVa@v@_@n@MVS\\QZGLYh@S^QZCDCDGLILINwAlCk@fA_@p@k@dAS`@o@jA]n@QZ]n@_@p@KNs@lAMRKP]h@w@pAMLy@hAqBhCIJST]^A@]^]\\]XOL_@\\qAdAyAjAyAlAo@f@UPw@l@CDi@b@GD]XEDUPURGD_@ZYXSRONY\\QTY`@UZW^g@x@]h@GHq@dASXW`@[`@S\\e@p@o@`AGJINe@p@U`@g@r@EHA@W`@g@v@CDa@p@CFKPg@`AKTABYl@Q`@KVCDWr@O^GPGR[~@ELMd@?@IVADYhAEJ?B[nAUz@WfAe@dBaAxD[pAYhAABs@pCAD_@|AMf@AFm@~BCNELIXABI\\Oj@EPQj@Oh@EPIRGTIVKVcAxCQh@c@nAc@nAADa@lA_@fAABQd@a@hACL[|@IT]jAY~@_@fAAHGNADENADyAvEUl@M\\CFCHIRCFq@bBg@lAc@hAM\\K\\IVELm@nBa@|AYdAERGVCH_AzEk@zCWjAu@~DMn@G\\K`@m@`DOz@?@CHAJ[rAKp@CTYjBQ`A[`C?@Kr@?DKf@WxBe@~CG^QpAAJQdACTIf@_@tCMjAShBKlACPGh@Ij@Ij@Mx@[hBId@Ot@c@hBCJMj@Qj@c@lAKZUj@CDO^GLSb@Yr@CDSb@m@xASb@KRYn@eAhCWt@u@nB}@`Cm@dBQd@y@|BaAlCQd@Sh@g@rAEHSb@_@x@?Ba@t@KRg@|@k@dACBWf@INU^QZS^OXMP]h@Yd@ILILABMTKPMPU^eAdBU`@{AbCu@hAOVmAjBQTILg@l@g@n@i@f@k@j@k@d@e@^w@l@]VSLg@X]TC@wAt@u@\\yBfAYN_@R_@R_@RMHKDEBMF_@RC@i@XWNYP_@To@d@URa@`@i@h@UXe@l@OVQTMR_@n@i@`AGL]n@o@lAaAfBc@v@aAjBg@|@o@hAq@`AILORg@r@e@l@QREFa@^_@^KHYV[Tq@h@YPe@`@{@l@GByAr@k@VoAn@_Ad@iAj@_Bx@s@\\m@Xi@Vc@Tg@Ve@Tu@^s@b@]T]X]VQPA@URYZg@l@UVOTU\\g@~@i@fA]|@K^ABKZg@zBG\\Mv@E`@E\\?@Gv@A@?RCXC|@A^?h@?^?T?rAAJ@vAAXARCh@C`@G~@CLCPE^E\\ERABEVEPAHK`@K^Ql@g@xAQ^Wj@Wh@]l@c@z@QZu@vAOZEFU`@]r@?@sAjC[j@OXS`@qB~Ds@xAgAvBm@jAELGJkA|B[p@KNCFQ\\EH[j@KL[f@U\\GHY\\[^c@b@GFCD]XMJm@f@w@h@SJa@VIBIDEBGBGBSHe@NODgAZODg@L_@HSDs@PODc@JE@[Fa@JeAV{@RE@c@JWFk@N]F[HaARe@HG@A?eATMBMB_@Fa@H{@NsB\\sAZwAf@iA`@kAd@gAh@cAl@aAj@gAv@{@n@]VQNSPm@j@{@x@u@v@MPKNMPm@t@]`@kB~BSR{@fAcAnAY\\ABWXA@[b@SVA@WZc@f@_@b@SNu@n@]Tc@Z_Aj@gB`ASL[RYRWPONQL_@ZONMNk@h@gBhBCDIDOPGFOPONKLGDw@x@_A~@"
                     },
                     "start_location" : {
                        "lat" : 34.0256221,
                        "lng" : -118.2059515
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 221
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 34.1307998,
                        "lng" : -118.3485738
                     },
                     "html_instructions" : "Take exit \u003cb\u003e11B\u003c/b\u003e toward \u003cb\u003eUniversal Studios Bl\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gzhoEfuiqUWDEBw@r@A?MJSR[VA@IHc@`@]XUTKJA?A@EDKJQJCBUD"
                     },
                     "start_location" : {
                        "lat" : 34.1291624,
                        "lng" : -118.3472425
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 447
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 34.1338819,
                        "lng" : -118.3515888
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eW.C. Fields Dr\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "odioEp}iqUMLSLYNEBYNe@Xk@^]T]TQLMH_@TQP[Z[b@U\\S\\CDQZGLKNGLGFCFEDCBCBCBC@EDEBEBC@EDCBEBEBCB?@CBC@CBEFCBCDEDEFINUd@"
                     },
                     "start_location" : {
                        "lat" : 34.1307998,
                        "lng" : -118.3485738
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 234
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 34.1358593,
                        "lng" : -118.3511633
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUniversal Studios Blvd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wwioElpjqUQNA@A@A?A@C?C?A?A?A?C?CAA?CAAAA??AA?CAEAC?A?A?A?A?A?A?OQCAAAECUMGCGCECGCGCICICICGAECKACAGAIAGAGAG?IAQAMAI?IAI?K?I@O@IA"
                     },
                     "start_location" : {
                        "lat" : 34.1338819,
                        "lng" : -118.3515888
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "qukmEvvvnUz@l@\\n@H|@KvAI`BM@eB?Ee@k@Bu@Ew@DiBDmAA?iB@uB?sDkALeAVkGbBkAh@eAXi@MOEwCcAmBc@_BDiA^aJtH}DlD]p@_BnAoBjBcFnF{EjFeMzMuChDyC`FeBdEaA`DoAjGsCrRw@lEmAxDgLlWg[hs@iBbE_D~F}ErIyCrG}BfGsL|YkKfWgIlRuCxGuAdCcFrHgDpEkHjKa@x@wAxDc@pBcDvNaDxNkCbIuCzGqHbNiGbLwEhKiKbViNb[gC`GiFjLaDpGgDzEmFtGoKzN{@rAqEdJ}BvGsFbPeN|[q@|A}HhQgJpQkFhMoCdFiBnEcG`O{HtR_IpR_O|[eR|^oFpLyKrV}CxGsE|HyGrJeEzEyPxPqHpH{ClDeF`IqD~HcE|IoCpEmEbG_DpDgChCsB~AwGvEyH|EkCbB}b@`X{ZpR{KbHaHvEiIlF}MxHwIlFqYrPmVnNoI~EuGzDkElDeCnCkD~E{LdRsa@~n@qGxJgAxAyCzC_CbB{CfBy@^eFzAgNtCoGrAeIbBqFjBgDhB}F~DoLdIm\\d\\sJvJsGhJaCdEmBhCsCpCcNvM}]r\\gCdCmDtCyFzCoDpBqJxIiLjKiEjEcInJeG~HuAbC_DbGwBlCsClCoG~FyAfBmApBsC`Hq@fBkGrQsChIk@|BaBfIaBxFwCfGoAtCcA~CuI|ViC`I[pAmAxI[hHBrq@o@rJSvAiBdImHvTyIzW}C`Jy@~Ce@jBCt@k@hCkAdEgDvJiIdVeEpLoEpKaCfEqBhC_DbD_D~BiCrAuEdAmCLsGg@aCGcETwEEwIiAmGY}JDiERwCXqDr@gEtAwD`BaFnBkCnA{@t@sAtB}@tCe@nGgCzXqAjSOtD@zCDvDQbCa@jBu@rBqChFqKbSgEpH}CrEmDjEwHvGkH~FgCzBiEdGaKpOsCdFsBfFiHrXeFjS{Rdm@aDfIsCbKoInc@yFda@{ApMyAnHgApDoBxEoGtOgI|T{DxHuFlJsJnOcCrCuD~CwBtAkG|CgDfBeB~@_C`BgCrCoApBoIvOaFjHuFtEcOxHgJvEkBxAyA~AcBjCuAhDiAlFSxBKlFApEQ~Cg@~Ck@xBiBnEsEvIaKfSeEjIiAjBsAdBmAjAgChBeCfA{OxDwSbEuHxCiG`EqBdBkCrCsJrLiC`DgCxB_FvCmDrCyEzEkClC]Hy@r@_Ax@aBzAmAt@{HdFaBzB]n@q@~@iA~@eA|AU@c@Ka@YoAi@yC]o@@"
         },
         "summary" : "I-5 N and US-101 N",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
PASTE_YOUR_JSON_RESULTS_HERE
```
